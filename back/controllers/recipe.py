from flask_restx import Resource
from app import recipes as api
from services.recipe import *
from flask import request
#import api.model.request.users as request
#import api.model.response.users as response
#import api.model.response.default as default

@api.route('')
class Recipe(Resource):
    def post(self):
        data = request.get_json()
        return postRecipe(data)
    def get(self):
        return getAll()

@api.route('/<int:id>')
class RecipeId(Resource):
    def get(self, id):
        return getRecipe(id)

    def put(self, id):
        data = request.get_json()
        print (data, id)
        return putRecipe(data,id)

    def delete(self, id):
        return deleteRecipe(id)