from eve import Eve

temp_settings = {
    'DOMAIN':{'people': {}}
}

NERFWARSAPI = Eve(
    settings = temp_settings,
    debug = true
)

def server(host="0.0.0.0", port=3000):
    return NERFWARSAPI.run(
        host=host,
        port=port
    )
