from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
)
from config import Config
import os

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

from models import *


# Routes
@app.route("/")
def index():
    return jsonify({"message": "Welcome to the Blog API"})


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token": access_token}), 200
    else:
        return jsonify({"message": "Invalid username or password"}), 401


@app.route("/api/signup", methods=["POST"])
def signup():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Username already exists"}), 400

    new_user = User(username=username)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201


@app.route("/api/articles", methods=["GET"])
@jwt_required()
def get_articles():
    articles = Article.query.all()
    return jsonify([article.serialize() for article in articles]), 200


@app.route("/api/articles", methods=["POST"])
@jwt_required()
def create_article():
    data = request.get_json()
    title = data.get("title")
    content = data.get("content")
    user_id = get_jwt_identity()

    new_article = Article(title=title, content=content, author_id=user_id)
    db.session.add(new_article)
    db.session.commit()

    return jsonify(new_article.serialize()), 201


@app.route("/api/articles/<int:id>", methods=["GET"])
def get_article(id):
    article = Article.query.get_or_404(id)
    return jsonify(article.serialize()), 200


@app.route("/api/articles/<int:id>", methods=["PUT"])
@jwt_required()
def update_article(id):
    article = Article.query.get_or_404(id)
    data = request.get_json()

    if "title" in data:
        article.title = data["title"]
    if "content" in data:
        article.content = data["content"]

    db.session.commit()
    return jsonify(article.serialize()), 200


@app.route("/api/articles/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_article(id):
    article = Article.query.get_or_404(id)
    db.session.delete(article)
    db.session.commit()
    return jsonify({"message": "Article deleted"}), 200


if __name__ == "__main__":
    app.run(debug=True)
