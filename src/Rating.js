import React, { Component } from 'react';
//import { BrowserRouter as Router, Router, Link} from 'react-router-dom';
//import './App.css';
import StarRatingComponent from 'react-star-rating-component';
import starBlue from './Star-Blue.png';

class Rating extends Component {
    constructor(){
        super();

        this.state = {
          rating: 0,
          rating_custom_icon: 6
        };
    }

    onStarClick(nextValue, prevValue, name){
        this.setState({rating: nextValue});
    }

    onStarClickCustonIcon(nextValue, prevValue, name) {
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        this.setState({rating_custom_icon: nextValue});
    }
    render(){
        const { rating } = this.state;

        return(
          <div>
            <div>
                <h2>Rating with custom icons: (with custom icons)</h2>
                <StarRatingComponent
                    name='rate1'
                    starCount={5}
                    renderStarIcon={()=><span><img src={starBlue} alt='star' /></span>}
                    value={this.state.rating_custom_icon}
                    onStarClick={this.onStarClickCustonIcon.bind(this)}

                    />
                <hr />
            </div>

            <div>
              <h2> Rating from state:{rating}</h2>
              <StarRatingComponent
                name='rate2'
                starCount={6}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
        );
    }
}

export default Rating;