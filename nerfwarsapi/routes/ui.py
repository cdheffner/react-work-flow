from flask import Blueprint, send_from_directory

from nerfwarsapi.routes import DOCROOT

BLUEPRINT = Blueprint('dist', __name__, static_folder=DOCROOT)

@BLUEPRINT.route('/<path:path>')
def assets(path):
    return send_from_directory(DOCROOT, path)

@BLUEPRINT.route('/ui/')
@BLUEPRINT.route('/')
def index():
    return send_from_directory(DOCROOT, 'index.html')
