import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load movie data
movies_data = pd.read_csv('movies.csv')

# Select relevant features for recommendations
selected_features = ['genres', 'keywords', 'tagline', 'cast', 'director']

# Replace NaN with empty strings
for feature in selected_features:
    movies_data[feature] = movies_data[feature].fillna('')

# Combine the selected features into a single string
combined_features = movies_data['genres'] + ' ' + movies_data['keywords'] + ' ' + movies_data['tagline'] + ' ' + movies_data['cast'] + ' ' + movies_data['director']

# Convert the text data into feature vectors
vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(combined_features)

# Compute the cosine similarity
similarity = cosine_similarity(feature_vectors)

# Function to recommend movies based on input movie name
def recommend_movies(movie_name):
    # List of all movie titles
    list_of_all_titles = movies_data['title'].tolist()

    # Find close match to user input
    find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)

    if not find_close_match:
        return []  # If no close match found, return empty list

    close_match = find_close_match[0]

    # Get the index of the matched movie
    index_of_the_movie = movies_data[movies_data.title == close_match].index[0]

    # Get similarity scores for the movie
    similarity_score = list(enumerate(similarity[index_of_the_movie]))

    # Sort movies based on similarity scores
    sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)

    # Extract top 30 movie recommendations
    recommended_movies = []
    for i, movie in enumerate(sorted_similar_movies):
        if i >= 30:
            break
        index = movie[0]
        recommended_movies.append(movies_data.iloc[index]['title'])

    return recommended_movies
