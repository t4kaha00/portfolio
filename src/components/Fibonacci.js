import React, { Component } from 'react';
import '../styles/fibonacci.css';

class Fibonacci extends Component {
    render() {
        const images = this.props.images
        const  next = () => {
            const array = images         // The image list is recorded into array
            const item1 = array.shift()             // shift() removes and returns the first element
    
            array.push(item1)                       // The removed item is then pushed to the list at the end
            this.setState({
                images: array                       // The state is updated with new list after the button is clicked
            })
        }
        
        // Same method as above but this works in reverse order so that the last item is removed and pushed to first
        const previous = () => {
            const array = images
            const reverse = array.reverse()
            const item1 = reverse.shift()
    
            reverse.push(item1)
            this.setState({
                images: reverse.reverse()
            })
        }

        return (
            <div className="fibonacci_page">
                <button onClick={next} className="change">Next</button>
                <br />
                <br />

                <div className="fibonacci">
                    <div className="fibonacci-item one"    style={{backgroundImage: `url(${images[0]})`}}></div>
                    <div className="fibonacci-item two"    style={{backgroundImage: `url(${images[1]})`}} ></div>
                    <div className="fibonacci-item three"  style={{backgroundImage: `url(${images[2]})`}}></div>
                    <div className="fibonacci-item four"   style={{backgroundImage: `url(${images[3]})`}}></div>
                    <div className="fibonacci-item five"   style={{backgroundImage: `url(${images[4]})`}}></div>
                    <div className="fibonacci-item six"    style={{backgroundImage: `url(${images[5]})`}}></div>
                    <div className="fibonacci-item seven"  style={{backgroundImage: `url(${images[6]})`}}></div>
                    <div className="fibonacci-item eight"  style={{backgroundImage: `url(${images[7]})`}}></div>
                    <div className="fibonacci-item nine"   style={{backgroundImage: `url(${images[8]})`}}></div>    
                </div>
                <br />
                <button onClick={previous} className="change">Previous</button>

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