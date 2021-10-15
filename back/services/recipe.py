from database.recipe import Recipe
from app import db

def getRecipe(id):
    recipe = Recipe.query.filter_by(id=id).first()
    if recipe != None:
        return recipe.__dict__
    return { "message": "recipe not found!" }

def postRecipe(data):
    recipe = Recipe(data["title"], data["ingredients"], data["preparation"])
    db.session.add(recipe)
    db.session.commit()
    return { "message": "recipe" + data['title'] + "created!" }

def deleteRecipe(id):
    recipe = Recipe.query.filter_by(id=id).first()
    if recipe != None:
        return { "id": recipe.id }
    return { "message": "recipe not found!" }

def putRecipe(id, data):
    recipe = Recipe.query.filter_by(id=id).first()
    if recipe != None:
        recipe.title = data["title"]
        recipe.ingredients = data["ingredients"]
        recipe.preparation = data["preparation"]
        return { "id": recipe.id }
    return { "message": "recipe not found!" }