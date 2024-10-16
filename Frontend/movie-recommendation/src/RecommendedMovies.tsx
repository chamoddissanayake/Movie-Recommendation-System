import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecommendedMovies.css'
import loading from './assets/loading.gif';
import axios from "axios";
import { SnackbarProvider, useSnackbar } from 'notistack';

const RecommendedMovies = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [searchTerm, setSearchTerm] = useState('');
    const [films, setFilms] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetched, setIsFetched] = useState(false);


    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        setFilms([]);
        getRecommendation();
    };

    const getRecommendation = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:5002/recommend", {
                movie_name: searchTerm,
            });

            console.log("$$");
            console.log(response.data.recommended_movies);

            setFilms(response.data.recommended_movies);
            setIsLoading(false);
            setIsFetched(true)
        } catch (error:any) {
            setIsLoading(false);

            if (error.response && error.response.status === 404) {
                console.error("Error 404: Resource not found");
                setIsFetched(true)
            } else {
                // console.error("Error:", error);
                enqueueSnackbar('Error: '+error, { variant: 'error' });
            }
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <div className='rectitle'><h3><b>Movie Recommendation System</b></h3></div>
                <div className="input-group mb-3" style={{width: '80%'}}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search recommended films"
                        aria-label="Search recommended films"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>

                {isLoading &&
                    <div className='loading-container'>
                        <img src={loading} alt="loading..." width='80px' height='80px'/>
                    </div>
                }

                {(films && films.length > 0) &&
                    <ul className="list-unstyled custom-film-list">
                        {films.map((film, index) => (
                            <li key={index} className="mb-2">
                                • {film}
                            </li>
                        ))}
                    </ul>
                }
                {(films.length===0 && isFetched===true) &&
                    <div>No Recommended films found for your given query.</div>
                }

            </div>

        </div>
    );
};

export default RecommendedMovies;
