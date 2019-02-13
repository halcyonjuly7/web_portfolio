from flask import Flask

def app_factory(config=None)-> Flask:
    app = Flask(__name__)
    if config is not None:
        app.config.from_pyfile(config)
    from .blueprints import home_bp
    app.register_blueprint(home_bp, url_prefix="/")
    return app