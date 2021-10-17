from app import db
from sqlalchemy import BigInteger, Integer

class Recipe(db.Model):
    __tablename__ = 'Recipes'
    id = db.Column(db.Integer, BigInteger().with_variant(Integer, "sqlite"), primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    ingredients = db.Column(db.String(1024), nullable=False)
    preparation = db.Column(db.String(1024), nullable=False)
    def __init__(self, title, ingredients, preparation):
        self.title       = title
        self.ingredients = ingredients
        self.preparation = preparation