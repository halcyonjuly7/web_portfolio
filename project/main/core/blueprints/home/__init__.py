from flask import Blueprint

home_bp = Blueprint("home_bp", __name__, static_folder="static", template_folder="templates", static_url_path="/static/home")


from . import routes