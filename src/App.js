import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [
        {
          id:1,
          content:'The Godfather 1',
          genre: 'Action',
          status:'new'
        },{
          id:2,
          content:'The Godfather 2',
          genre: 'Action',
          status:'new'
        },{
          id:3,
          content:'The Godfather 3',
          genre: 'Action',
          status:'new'
        }
      ],
      movieTitleInputValue: '',
      genreInputValue: '',
    };

  }

  handleMovieTitleInputChange = (e) =>{
    this.setState({movieTitleInputValue: e.target.value});

  };
  handleGenreInputChange = (e) => {
    this.setState({genreInputValue: e.target.value});
    
  };

  handleAddMovieClick = (e) => {
    e.preventDefault();

    var movie = {
      id: Date.now(),
      content: this.state.movieTitleInputValue,
      genre: this.state.genreInputValue
    };

    var newMovie = [...this.state.movies,movie];
  
    this.setState({
      movies: newMovie,
      movieTitleInputValue: '',
      genreInputValue: '',
    });
  };

  removeMovie = (movieId) => {
    var movies = this.state.movies;
    var filteredMovies = movies.filter( function(movie){
      return movie.id !== movieId;
    });
    // console.log(this);
    this.setState({movies:filteredMovies});
  };

  updateStatus = (id,status) => {
    var movies = this.state.movies;
    var index = movies.findIndex(function(movie){
      return movie.id === id;
    });

    movies[index].status = status;
  
    this.setState({movies});
    
  }

  render(){

    return(
      <div className="wrap">
        <div className="container">
          <div className="card mx-auto shadow-lg " >
            <div className="card-body">
                  <h2 className="card-title ">Movies to Watch</h2>
                  <p className="class-text">Add movies to your watchlist</p>
                  <ul className="list-group list-group-flush movie-list">
                    {
                      this.state.movies.map((movie) => {
                        
                        return (
                          <li className="list-group-item movie-list-item" key={movie.id}>
                            <div className="movie-title">{movie.content}</div>

                            {
                              (movie.status==='new') ? <i onClick={(e)=>{this.updateStatus(movie.id,'watched')}} className="far fa-circle"></i> : <i onClick={(e)=> {this.updateStatus(movie.id,'new')}} className="far fa-check-circle"></i>
                            }
                          <i className="far fa-times-circle" onClick={ (e) => {this.removeMovie(movie.id)}}></i>
                          <div className="genre">
                              <p><small>{movie.genre}</small></p>
                          </div>
                          </li>
                        )
                      })
                    }
                  </ul>
              </div>
            <form className="card-body ">
                  <div className="form-row align-items-center">
                      <div className="form-group col-12">
                          <input type="text" className="form-control form-control-sm" id="movie-input" placeholder="Movie Title" onChange={this.handleMovieTitleInputChange}/>
                      </div>
                  </div>
                  <div className="form-row align-items-center">
                    <div className="form-group col-12">
                      <input type="text" className="form-control form-control-sm" id="genre-input" placeholder="Genre" onChange={this.handleGenreInputChange}/>
                    </div>
                  </div>
                  <div className="form-row align-items-center">
                    <div className="form-group col-12">
                      <button type="submit" className="btn btn-primary col-12" onClick={this.handleAddMovieClick}><i className="fas fa-plus-circle" ></i></button>
                    </div>
                  </div>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
