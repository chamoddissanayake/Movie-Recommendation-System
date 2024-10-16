
# Movie Recommendation System


The Movie Recommendation Application is a Flask-based web service designed to suggest films based on user input. By sending a POST request with a movie name, users receive personalized recommendations based on factors like genre, popularity, and user ratings. Ideal for movie enthusiasts seeking new viewing options tailored to their tastes and preferences!
## Run Locally

Install Python 3.10.0


  https://www.python.org/downloads/release/python-3100/

Install Node 21.6.2


  https://nodejs.org/en/blog/release/v21.6.2


Clone the project

```bash
  git clone https://github.com/chamoddissanayake/Movie-Recommendation-System.git
```

Go to Frontend Folder

```bash
  Frontend > movie-recommendation
```

Install dependencies

```bash
  npm install
```

Start the Frontend

```bash
  npm start
```

Go to Frontend Web App

```bash
  http://localhost:3000/
```

Go to Backend Folder

```bash
  Backend >
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Start the Backend

```bash
  python app.py
```
## Tech Stack

**Frontend:**

  * HTML,CSS
  * React, TSX

**Backend:**

  * Python
  * Flask (web framework)

**Recommendation Engine:**

  * Machine Learning libraries (e.g., scikit-learn, pandas)
  * Custom recommendation logic (e.g., collaborative filtering, content-based filtering)

**Data Source:** 
* CSV file (movies.csv)
## Usage/Examples


POST Method

```bash
http://localhost:5002/recommend
```

Request
```javascript
{
    "movie_name": "Inception"
}
```
Response
```javascript
{
    "movie_name": "Inception",
    "recommended_movies": [
        "Inception",
        "Treasure Planet",
        "The Dark Knight Rises",
        "The Last Samurai",
        "Don Jon",
        "Hesher",
        "In Dreams",
        "Looper",
        "Highlander: Endgame",
        "The Revenant",
        "The Helix... Loaded",
        "Cold Mountain",
        "The Count of Monte Cristo",
        "G.I. Joe: The Rise of Cobra",
        "Catch Me If You Can",
        "The Man in the Iron Mask",
        "Solaris",
        "The Walk",
        "Top Gun",
        "Sin City: A Dame to Kill For",
        "Blood Diamond",
        "Eternal Sunshine of the Spotless Mind",
        "The Juror",
        "Letters from Iwo Jima",
        "RockNRolla",
        "The Silence of the Lambs",
        "Layer Cake",
        "Premium Rush",
        "Bronson",
        "Shutter Island"
    ]
}
```
