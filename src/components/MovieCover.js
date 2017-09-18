import React, { Component } from 'react'

class MovieCover extends Component {
   
    render() {
        return (
            <div className="Movie_Cover">
                <div>
                    <h3 className="cover_main">Movie Cover</h3>
                </div>

                <div className="cover_image">
                    <img src={this.props.movieImage} alt="movie cover"></img>
                </div>
            </div>
        );
    }
}

export default MovieCover;