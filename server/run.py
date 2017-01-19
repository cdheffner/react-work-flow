from flask import send_from_directory
from eve import Eve
import os

# getting dist folder
PWD = os.environ.get('PWD')
public = os.path.join(PWD, 'dist')

app = Eve()

@app.route("/")
def index():
    return send_from_directory(public, "index.html")

@app.route("/files/<string:directory>/<string:filename>")
def files(directory, filename):
    print directory, '/', filename
    folder = os.path.join(public, directory)
    return send_from_directory(folder, filename)

if __name__ == '__main__':
    app.run()
