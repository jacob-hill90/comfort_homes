import os
from flask import Flask, send_from_directory
from flask_cors import CORS
from backend.homepage import bp, mail
from dotenv import load_dotenv


def create_app(test_config=None):
    
    load_dotenv()
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    # Flask-Mail configuration
    app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER')
    app.config['MAIL_PORT'] = os.environ.get('MAIL_PORT')
    app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
    app.config['MAIL_USE_TLS'] = True,
    app.config['MAIL_USE_SSL'] = False

    mail.init_app(app)  # Initialize Flask-Mail with the Flask app instance

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    @app.route("/", methods=['GET'])
    def index():
        return send_from_directory('static', 'index.html')
    
    @app.route("/about", methods=['GET'])
    def about():
        return send_from_directory('static', 'index.html')
    
    @app.route("/contact", methods=['POST', 'GET'])
    def contact():
        return send_from_directory('static', 'index.html')
    
    @app.route("/FAQ", methods=['GET'])
    def FAQ():
        return send_from_directory('static', 'index.html')
    
    @app.route("/gallery", methods=['GET'])
    def gallery():
        return send_from_directory('static', 'index.html')
    
    @app.route("/<path:path>")
    def static_file(path):
        return app.send_static_file(path)
    
    app.register_blueprint(bp)
    app.add_url_rule('/', endpoint='index')

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=False)
