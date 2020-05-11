import React from 'react'
import {PlyrComponent} from 'plyr-react'

export const VideoPage = ({currentMovie}) => {
	const sources = {
		type:'video',
		sources:[
			{
				src: currentMovie.video_url.replace("https://youtu.be/", ""),
				provider:'youtube'
			}
		]}
	console.log(sources.sources)
	return (
		<div className="videoPage">
			<PlyrComponent sources={sources} />
		</div>

	)
}
