import os
import json
from flask import Flask, flash, request, redirect, url_for, jsonify, session
from dotenv import load_dotenv
import base64
import requests
import pymongo
from bson.json_util import dumps
from bson.objectid import ObjectId


ALLOWED_EXTENSIONS = {'png', 'jpg'}
load_dotenv()
API_KEY = os.getenv('PROJECT_API_KEY')
MONGO_PASS = os.getenv('MONGO_PASSWORD')
SECERET_KEY = os.getenv('SECERET_KEY')

my_client = pymongo.MongoClient('mongodb+srv://nabil:{}@cluster0-6rj9k.mongodb.net/test?retryWrites=true&w=majority'.format(MONGO_PASS))
db = my_client.get_database('animals_db') #collection called animals_db


app = Flask(__name__)

app.secret_key = SECERET_KEY

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET','POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            b64string = base64.b64encode(file.read())
            returned = {"requests": [{"image": {"content": b64string},"features": [{"type": "LABEL_DETECTION","maxResults": 1}]}]}
            res = requests.post(("https://vision.googleapis.com/v1/images:annotate?key=" + API_KEY), json=returned)
            res_1 = res.json()
            session["res_1"] = res_1
            return res_1

@app.route('/animal_info', methods=['GET']) 
def get_output():
    if request.method == 'GET':
        animal_name = session["res_1"]['responses'][0]['labelAnnotations'][0]['description']
        animals1 = db.animals.find({"name": animal_name.lower()})
    resp = dumps(animals1)
    return resp

@app.route('/add', methods=['POST'])
def add_animal():
    animal_json = request.json
    animal_name = animal_json['name']
    animal_endangered = animal_json['endangered']
    if animal_name and animal_endangered and request.method == 'POST':
        id = db.animals.insert({'name': animal_name, 'endangered': animal_endangered})
        resp = jsonify('Animal added successfully!')
        resp.status_code = 200
        return resp

@app.route('/animals', methods=['GET'])
def animals():
	animals = db.animals.find()
	resp = dumps(animals)
	return resp

@app.route('/delete_animal/<id>', methods=['DELETE'])
def delete_animal(id):
	db.animals.delete_one({'_id': ObjectId(id)})
	resp = jsonify('Animal deleted successfully!')
	resp.status_code = 200
	return resp

if __name__ == "__main__":
    app.run()