import React  from 'react';
import '../App.css';
import Movie from './Movie';
import MoviesList from "./MovieList";

function Movies() {
	return (
		<div className='container'>
			{MoviesList.map((movie,index)=>{
				return <Movie key={index} {...movie} />
			})}
		</div>
	);
}

export default Movies;
