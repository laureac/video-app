import React from 'react';
import { Paper, Typography } from "@material-ui/core";

function VideoDetail({ video }) {
    if (!video) return <div>Loading...</div>;
    console.log(video)
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
        <div>
            <Paper elevation={6} style={{ height: "450px" }}>
                <iframe
                frameBorder="0"
                height="100%"
                width="100%"
                title="Video Player"
                src={videoSrc}
                />
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography variant="h4"> {video.snippet.title}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle} </Typography>
                <Typography variant="subtitle2">{video.snippet.description} - {new Date(video.snippet.publishTime).toDateString()}</Typography>
            </Paper>
        </div>
    );
}

export default VideoDetail;