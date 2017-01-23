from os.path import join
from flask import Blueprint, redirect

from nerfwarsapi.routes import DOCROOT

BLUEPRINT = Blueprint('v1', __name__, static_folder=DOCROOT)