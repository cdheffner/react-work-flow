from eve import Eve

from .routes.api import BLUEPRINT as apiblueprint
from .routes.ui import BLUEPRINT as uiblueprint

temp_settings = {
    'DOMAIN':{'people': {}}
}

NERFWARSAPI = Eve(
    settings = temp_settings,
    debug = true
)

NERFWARSAPI.register_blueprint(apiblueprint, url_prefix='/api')
NERFWARSAPI.register_blueprint(uiblueprint, url_prefix='/ui')
NERFWARSAPI.register_blueprint(uiblueprint, url_prefix='/')

def server(host="0.0.0.0", port=3000):
    return NERFWARSAPI.run(
        host=host,
        port=port
    )
