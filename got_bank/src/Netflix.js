import React, {Component} from "react";
import DisplayMovie from './DisplayMovie';

var movieList = [
    {movieName: "Avengers INfinity war", yearRealease: 2019, genre: "Gore"},
    {movieName: "That one bad movie", yearRealease: 2019, genre: "Preety"},
    {movieName: "Howls Moving Castle", yearRealease: 2019, genre: "Ugly"},
];

class Netflix extends Component {
    render() {
        return (
            <div>
                <DisplayMovie movieList={movieList}/>
            </div>
        )
    }
}

export default Netflix