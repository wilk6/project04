import React from 'react'
import { Video } from "./video";
import { Link } from "@reach/router";

export const VideoList = ({movies, setCurrentMovie}) => {
	return (
		<div className="videoList">
			{movies.map(movie =>(
				<Link to="/videoPage" onClick={()=> setCurrentMovie(movie)}>
					<Video key={movie.id} movie={movie} />
				</Link>
			))}
		</div>
	)
}
