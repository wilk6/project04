import React from 'react'

export const Video = ({movie}) => {
	const picture =  movie.video_url.replace("https://youtu.be/", "/")
	return (
		<div className="video">
			<figure>
				<img src={"http://i3.ytimg.com/vi" + picture +"/maxresdefault.jpg"} alt=""/>
			</figure>
			<p>{movie.title}</p>
		</div>
	)
}
