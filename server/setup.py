#!/usr/bin/env python3
import setuptools


requires = [
    'bson==0.5.8',
    'eventlet==0.24.1',
    'Flask==1.0.2',
    'Flask-SocketIO==3.0.1',
    'Flask-PyMongo==2.2.0',
]
tests_require = []


setuptools.setup(
    name="Rakuten Chat",
    version="0.0.1",
    description="Chat exercise",
    author="Joseph Niel Tuazon",
    author_email="josephnieltuazon@yahoo.com",
    packages=setuptools.find_packages(),
    include_package_data=True,
    zip_safe=False,
    extras_require={
        'test': tests_require,
    },
    install_requires=requires,
)
