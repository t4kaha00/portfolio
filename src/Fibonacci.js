import React, { Component } from 'react';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import five from './5.jpg';
import six from './6.jpg';
import seven from './7.jpg';
import eight from './8.jpg';
import nine from './9.jpg';

class Fibonacci extends Component {
    constructor() {
        super();
        this.state = {
            images: [one, two, three, four, five, six, seven, eight, nine]
        }
    }

    next = () => {
        const array = this.state.images         // The image list is recorded into array
        const item1 = array.shift()             // shift() removes and returns the first element

        array.push(item1)                       // The removed item is then pushed to the list at the end
        this.setState({
            images: array                       // The state is updated with new list after the button is clicked
        })
    }
    
    // Same method as above but this works in reverse order so that the last item is removed and pushed to first
    previous = () => {
        const array = this.state.images
        const reverse = array.reverse()
        const item1 = reverse.shift()

        console.log(reverse)        
        reverse.push(item1)

        console.log(array)        
        this.setState({
            images: reverse.reverse()
        })
    }

    render() {
        return (
            <div className="content">
                <button onClick={this.next}>Next</button>
                <br />
                <br />

                {/* <div className="portfolio">
                    <div className="portfolio-item one"    style={{backgroundImage: `url(${this.state.images[0]})`}}></div>
                    <div className="portfolio-item two"    style={{backgroundImage: `url(${this.state.images[1]})`}} ></div>
                    <div className="portfolio-item three"  style={{backgroundImage: `url(${this.state.images[2]})`}}></div>
                    <div className="portfolio-item four"   style={{backgroundImage: `url(${this.state.images[3]})`}}></div>
                    <div className="portfolio-item five"   style={{backgroundImage: `url(${this.state.images[4]})`}}></div>
                    <div className="portfolio-item six"    style={{backgroundImage: `url(${this.state.images[5]})`}}></div>
                    <div className="portfolio-item seven"  style={{backgroundImage: `url(${this.state.images[6]})`}}></div>
                    <div className="portfolio-item eight"  style={{backgroundImage: `url(${this.state.images[7]})`}}></div>
                    <div className="portfolio-item nine"   style={{backgroundImage: `url(${this.state.images[8]})`}}></div>    
                </div> */}
                <br />
                <button onClick={this.previous}>Previous</button>

            </div>
        )
    }
}

export default Fibonacci