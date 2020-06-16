import React, { useState, useEffect} from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import youtube from './components/youtube';
import SearchBar from './components/SearchBar';
import  VideoList  from "./components/VideoList";
import VideoDetail  from "./components/VideoDetail";

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function handleSubmit(searchTerm) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyA3q1rrWjliZPTLhiYAr46ZJAUmKgD2iTg',
        q: searchTerm,
      }
    }
    );
    const videos = response.data.items
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
  useEffect(()=>{
    handleSubmit('cat being jerks')
  }, [])

  return (

        <Grid container spacing={2}>
          <Grid item xs={12}>
          <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
          </Grid>
        </Grid>

  );
}

export default App;
