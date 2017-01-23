try:
    from setuptools import setup, find_packages
except ImportError:
    from distutils.core import setup, find_packages

try:
    from pip.req import parse_requirements
    from pip.download import PipSession

    def requirements(filename='requirements/base'):
        required = parse_requirements(filename, session=PipSession())
        return [str(ir.req) for ir in required]
except ImportError:
    def requirements(filename='requirements/base'):
        with open(filename, 'r') as filehandler:
            required = filehandler.read().splitlines()

        return required

from os import path

def read(*paths):
    with open(path.join(*paths), 'r') as filename:
        return filename.read()

exec(read("nerfwarsapi/version.py"))

setup(
    name=__pkgname__,
    version=__version__,
    author="VCP_LOA",
    description="Restful api for soldiers in the Great Nerf Wars",
    install_requires=requirements(),
    packages=find_packages(),
    scripts=[
        'bin/nerfwarsapi'
    ]
)
