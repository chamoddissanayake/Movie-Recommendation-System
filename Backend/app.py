from flask import Flask, request, jsonify
from recommendation import recommend_movies
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define the movie recommendation endpoint
@app.route('/recommend', methods=['POST'])
def recommend():
    # Get the movie name from the JSON request body
    data = request.json
    movie_name = data.get('movie_name')

    if not movie_name:
        return jsonify({"error": "Please provide a movie name"}), 400

    # Get recommended movies
    recommendations = recommend_movies(movie_name)

    if not recommendations:
        return jsonify({"message": "No close match found for the provided movie name"}), 404

    # Return the list of recommended movies as a JSON response
    return jsonify({
        "movie_name": movie_name,
        "recommended_movies": recommendations
    })

# Run the Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)
