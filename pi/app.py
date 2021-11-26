import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase import firebase
from flask import *


cred = credentials.Certificate('ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()
firebase = firebase.FirebaseApplication('https://pi-pet-default-rtdb.firebaseio.com/', None)


app = Flask(__name__)

@app.route("/lessons")
def home():
    result = firebase.get('/lessons', None)
    return jsonify(result)

@app.route("/users")
def home2():
    result = firebase.get('/users', None)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
