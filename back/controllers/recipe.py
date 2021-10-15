from flask_restx import Resource
from app import recipes as api
from services.recipe import *
#import api.model.request.users as request
#import api.model.response.users as response
#import api.model.response.default as default

@api.route('')
class Recipe(Resource):
    def post(self, data):
        return postRecipe(data)
    def get(self):
        return "OK"

@api.route('/<int:id>')
class RecipeId(Resource):
    def get(self, id):
        return getRecipe(id)

    def put(self, data, id):
        return putRecipe(data, id)

    def delete(self, id):
        return deleteRecipe(id)