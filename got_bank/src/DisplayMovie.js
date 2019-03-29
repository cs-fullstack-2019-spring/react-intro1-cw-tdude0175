import React, {Component} from "react";



class DisplayMovie extends Component {
    render() {
        return (
            <div>
                <h1>Movie List</h1>
                {(this.props.movieList).map((value,index)=>
                {
                    return  <p> {value.movieName} </p>
                })}
            </div>
        )
    }
}

export default DisplayMovie