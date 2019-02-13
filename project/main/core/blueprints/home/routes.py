from . import home_bp
from flask import render_template

@home_bp.route("/periodic_table", methods=["GET"])
def periodic():
    return render_template("periodic.html")



@home_bp.route("/word_search", methods=["GET"])
def word_search():
    return render_template("word_search.html")
