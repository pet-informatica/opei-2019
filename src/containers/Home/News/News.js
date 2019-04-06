import React, { Component } from 'react';
import {Responsive, Segment, Image} from 'semantic-ui-react';
import { Tweet } from 'react-twitter-widgets'
import './News.css'

export default class About extends Component {
  render() {
    return (
        <Responsive as={Segment} basic minWidth={992} > 
            <div className="News-tweet">
                <Tweet 
                    tweetId="344796434438180864"
                
                />
            </div>
        </Responsive>
    )
  }
}
