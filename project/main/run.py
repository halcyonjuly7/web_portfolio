from core import app_factory

app = app_factory()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8888, debug=True)