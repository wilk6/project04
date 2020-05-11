import React, { Component } from 'react';
import './App.css';
import { VideoList } from "./video/videoList";
import { Router } from "@reach/router";
import { VideoPage } from "./video/videoPage";
import { Navbar } from "./home/navbar";
class App extends Component {
  state={
    movies:[
      {
        id:0,
        title:"",
        description:"",
        video_url:""
      }
    ],
      currentMovie:{
        id:0,
        title:"",
        description:"",
        video_url:""
      }
  }
  componentDidMount(){
    fetch("./database.json")
    .then(response => response.json())
    .then(data =>{
      this.setState({
        movies: data.movies
      })
    })
  }
  handleCurrentMovie = (event) =>{
    this.setState({
      currentMovie: event
    })
  }
  render(){
    const { movies , currentMovie } = this.state;
    return(
      <div>
        <Navbar />
        <Router>
          <VideoList path="/" setCurrentMovie = {this.handleCurrentMovie} movies={movies} />
          <VideoPage currentMovie={currentMovie} path="/videoPage" />
        </Router>
      </div>
    )
  }
}

export default App;
