import React from 'react'
import { IndividualYoutubeVideo } from '../components/IndividualYoutubeVideo'

export const YoutubeVideos = ({ videos }) => {
    // console.log(youtubeVideos);
    return videos.map(video => (
        <IndividualYoutubeVideo key={video.ID_OF_VIDEO} video={video} />
    ))
}
