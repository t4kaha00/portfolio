import React, { Component } from 'react';
import '../styles/fibonacci.css';
import one from '../images/1.jpg';
import twogif from '../images/2.gif';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';
import seven from '../images/7.jpg';
import eight from '../images/8.jpg';
import nine from '../images/9.jpg';

class Fibonacci extends Component {
    constructor() {
        super();
        this.state = {
            images: [one, twogif, three, four, five, six, seven, eight, nine]
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

        console.table(reverse)        
        reverse.push(item1)
        this.setState({
            images: reverse.reverse()
        })
    }

    render() {
        return (
            <div className="fibonacci_page">
                <button onClick={this.next} className="change">Next</button>
                <br />
                <br />

                <div className="fibonacci">
                    <div className="fibonacci-item one"    style={{backgroundImage: `url(${this.state.images[0]})`}}></div>
                    <div className="fibonacci-item two"    style={{backgroundImage: `url(${this.state.images[1]})`}} ></div>
                    <div className="fibonacci-item three"  style={{backgroundImage: `url(${this.state.images[2]})`}}></div>
                    <div className="fibonacci-item four"   style={{backgroundImage: `url(${this.state.images[3]})`}}></div>
                    <div className="fibonacci-item five"   style={{backgroundImage: `url(${this.state.images[4]})`}}></div>
                    <div className="fibonacci-item six"    style={{backgroundImage: `url(${this.state.images[5]})`}}></div>
                    <div className="fibonacci-item seven"  style={{backgroundImage: `url(${this.state.images[6]})`}}></div>
                    <div className="fibonacci-item eight"  style={{backgroundImage: `url(${this.state.images[7]})`}}></div>
                    <div className="fibonacci-item nine"   style={{backgroundImage: `url(${this.state.images[8]})`}}></div>    
                </div>
                <br />
                <button onClick={this.previous} className="change">Previous</button>

                {/* checkbox with modified CSS */}
                {/* <label>
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                </label> */}

            </div>
        )
    }
}

export default Fibonacci