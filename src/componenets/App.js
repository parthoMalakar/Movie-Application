import React from 'react';
import {data} from '../data';
import Navbar from '../componenets/Navbar';
import MovieCard from '../componenets/MovieCard';
import {addMovies} from '../actions/index';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(()=> {
      console.log("Updated");
      this.forceUpdate();
    });
    //make api call 
    //dispatch the action
    store.dispatch(addMovies(data));

    console.log('State', this.props.store.getState());
  }
  
  render () {
    const { list } = this.props.store.getState(); // { list: [], favourites: []}
    console.log('RENDER', this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie ={movie} key={`movies-${index}`}/> 
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
