import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
// import InputBar from './components/InputBar'
import RatingsBox from './components/RatingsBox'
import MovieCover from './components/MovieCover'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentMovie: {},
      movies: [],
      movieTitle: '',
      coverImage: '',
      audienceRating: '',

    }
  }

  componentDidMount(){
   this.getAllBoxOfficeMovies();
   this.getCoverImage();
  }

  getCoverImage(){
  axios.get('http://localhost:3001/api/movies')
     .then((response) => {
       console.log(response);
       this.setState({
         coverImage: response.data})
     })
  }

  getAllBoxOfficeMovies() {
  axios.get('http://localhost:3001/api/movies')
      .then((response) => {
        this.setState({
          movies: response.data
        })
      })
  }

  // handleUpdateMovie(event){
  //    this.setState({
  //      currentMovie: event.target.value
  // })
  // }

  render() {
    let moviesJSX = this.state.movies.map((element, index) => {
      return (
        <option key={index}>{element.movieTitle}</option>
      )
    })

    // let movieImage = this.state.movies.map((element, index) => {
    //   return (
    //     <option key={index}>{element.coverImage}</option>
    //   )
    // })

    return (
      <div className="App">
        <Header />
        <inputBar><div>
          <form>
            <select name="movies">
              {moviesJSX}
            </select>
            <br></br>
              <button type="submit">Submit</button>
          </form>
        </div>
              </inputBar>
              <RatingsBox />
              <MovieCover />
      
      </div>
      
            );
  }
  }


export default App;
