import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import artists from './artists.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artistIndex: 0
    };
    this.setActiveArtistBackground = this.setActiveArtistBackground.bind(this);
  };

  componentDidMount(){
    this.setActiveArtistBackground();
  };

  setActiveArtistBackground(){
    let i = this.state.artistIndex;
    if (i >= artists.length - 1){
      i = 0;
    } else {
      i++;
    }

    this.setState({artistIndex: i});

    const slideTime = 5000;
    setTimeout(function() {
      this.setActiveArtistBackground();
    }.bind(this), slideTime);
  };

  render() {
    for(let artist of artists){
      artist.active = "";
    }
    artists[this.state.artistIndex].active = "active";
    return (
      <div className="App">
        {artists.map(function(artist, i) {
          let backgroundImage = require(artist.backgroundImage);
          return (
            <div key={i} className="slide">
              <div className={artist.active}><img src={backgroundImage} alt="" /></div>
            </div>
          );
        })}
        <div className="hover-panel">
          <div className="artist-list">
            <div className="artist-heading">Artists for Hillary</div>
            {artists.map(function(artist, i) {
              return (
                <div key={i} className="artist-item">
                  <a href={artist.href}>{artist.name}</a>
                </div>
              );
            })}
            <div className="join-us">
              <a href="https://hillaryclinton.com/artist" className="btn btn-join btn-danger">Join us</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
