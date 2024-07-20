from flask import Flask, request, jsonify
import requests
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/process-images', methods=['POST'])
def process_images():
    try:
        # Print the request to debug
        print("Headers:", request.headers)
        print("Content-Type:", request.content_type)

        data = request.get_json()  # This should retrieve the JSON data
        print("Data received:", data)

        front_image = data.get('frontImage')
        #back_image = data.get('backImage')

        # if not front_image or not back_image:
        #     return jsonify({"error": "Both front and back images are required"}), 400

        # Extract the base64 encoded part of the images
        front_image_base64 = front_image.split(",")[1]
        #back_image_base64 = back_image.split(",")[1]

        # Send the images to the external API
        headers = {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": "fec30b6170msh5caa58a180bf8b4p1025b2jsnb05b15a4f933",
            'X-RapidAPI-Host': 'id-document-recognition2.p.rapidapi.com'
        }

        payload = {
            "image": front_image_base64,
            #"image2": back_image_base64
        }

        response = requests.post(
            'https://id-document-recognition2.p.rapidapi.com/api/iddoc_base64',
            headers=headers,
            json=payload
        )
        x=jsonify(response.json())
        print("\n\n\n\n",x,"\n\n\n\n")
        return x
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "An error occurred"}), 500

@app.route('/face-detection', methods=['POST'])
def face_images():
    try:
        # Print the request to debug
        print("Headers:", request.headers)
        print("Content-Type:", request.content_type)    

        data = request.get_json()  # This should retrieve the JSON data
        print("Data received:", data)

        face_image = data.get('faceImage')
        if not face_image:
            return jsonify({"error": "Face image is required"}), 400

        # Extract the base64 encoded part of the images
        face_image_base64 = face_image.split(",")[1]

        # Send the image to the external API
        headers = {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": "fec30b6170msh5caa58a180bf8b4p1025b2jsnb05b15a4f933",
            'X-RapidAPI-Host': 'face-liveness-detection3.p.rapidapi.com'
        }

        payload = {
            "image": face_image_base64
        }

        response = requests.post(
            'https://face-liveness-detection3.p.rapidapi.com/api/liveness_base64',
            headers=headers,
            json=payload
        )
        response.raise_for_status()  # Raise an error for bad status codes
        x = jsonify(response.json())
        print("\n\n\n\n", x, "\n\n\n\n")
        return x
    except requests.exceptions.RequestException as e:
        print("Request error:", str(e))
        return jsonify({"error": "An error occurred while communicating with the external API"}), 500
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "An error occurred"}), 500
    
@app.route('/face-emotion', methods=['POST'])
def face_emotion_images():
    try:
        # Print the request to debug
        print("Headers:", request.headers)
        print("Content-Type:", request.content_type)    

        data = request.get_json()  # This should retrieve the JSON data
        print("Data received:", data)

        face_image = data.get('faceImage')
        if not face_image:
            return jsonify({"error": "Face image is required"}), 400

        # Extract the base64 encoded part of the images
        face_image_base64 = face_image.split(",")[1]

        # Send the image to the external API
        headers = {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": "9801fd7e94msh671c6b363288a27p1d1ff1jsncff3bb396bb0",
            'X-RapidAPI-Host': 'face-detection-and-analysis.p.rapidapi.com'
        }

        payload = {
            "image": face_image_base64
        }

        response = requests.post(
            'https://face-detection-and-analysis.p.rapidapi.com/face_analysis',
            headers=headers,
            json=payload
        )
        response.raise_for_status()  # Raise an error for bad status codes
        x = jsonify(response.json())
        print("\n\n\n\n", x, "\n\n\n\n")
        return x
    except requests.exceptions.RequestException as e:
        print("Request error:", str(e))
        return jsonify({"error": "An error occurred while communicating with the external API"}), 500
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "An error occurred"}), 500
    

@app.route('/face-reco', methods=['POST'])
def face_detection_images():
    try:
        data = request.get_json()

        front_image = data.get('frontImage')
        back_image = data.get('backImage')

        if not front_image or not back_image:
            return jsonify({"error": "Both front and back images are required"}), 400

        # Extract the base64 encoded part of the images
        front_image_base64 = front_image.split(",")[1]
        back_image_base64 = back_image.split(",")[1]

        # Send the images to the external API
        headers = {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'face-recognition26.p.rapidapi.com',
            'x-rapidapi-key': '9801fd7e94msh671c6b363288a27p1d1ff1jsncff3bb396bb0'
        }

        payload = {
            "image1": front_image_base64,
            "image2": back_image_base64
        }

        response = requests.post(
            'https://face-recognition26.p.rapidapi.com/api/face_compare_base64',
            headers=headers,
            json=payload
        )

        return jsonify(response.json())
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "An error occurred"}), 500

if __name__ == '__main__':
    app.run(debug=True)