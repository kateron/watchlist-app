import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.watchlist = [
      {
        id:1,
        content:'The Godfather 1',
        genre: 'Action'
      },{
        id:2,
        content:'The Godfather 2',
        genre: 'Action'
      },{
        id:3,
        content:'The Godfather 3',
        genre: 'Action'
      }];

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
                      this.watchlist.map(function(movie){
                        return (
                          <li className="list-group-item movie-list-item" key={movie.id}>
                            <div className="movie-title">{movie.content}</div>
                          <i className="far fa-circle"></i>
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
                  <div className="form-row">
                          <label className="col-12"for="movie-input">New Movie</label>
                  </div>
        <div className="form-row align-items-center">
                      <div className="form-group col-auto">
                          <input type="text" className="form-control form-control-sm" id="movie-input"/>
                      </div>
                      <div className="form-group col-auto">
                          <button type="submit" className="btn btn-primary"><i className="fas fa-plus-circle"></i></button>
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
