import React from 'react';
import RecommendedMovies from "./RecommendedMovies";
import { SnackbarProvider, useSnackbar } from 'notistack';

function App() {
  return (
    <div>
        <SnackbarProvider maxSnack={3}>
            <RecommendedMovies/>
        </SnackbarProvider>
    </div>
  );
}

export default App;
