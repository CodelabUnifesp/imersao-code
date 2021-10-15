import os
from flask import Flask
from flask_restx.resource import Resource
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_restx import Api

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', "N5Rc6dvl8giHxExSXQmJ")
app.config['RESTX_MASK_SWAGGER'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

api = Api(app, version="2.0", title="Recipe Book", description="Recipe Book", doc="/docs")

recipes = api.namespace('recipes', description="Recipes namespace")