import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyATNugEzGqWlKqJcHFAek1cc6dI-XrJR1s"

// Create a new component producing html
class App extends Component {

    constructor(props) {
        super(props);

        // contains a list of videos
        this.state = { 
            videos: [],
            selectedVideo: null,
         };

        YTSearch({key:API_KEY, term:'sushiba'}, (videos) => {
            this.setState({ videos: videos, selectedVideo: videos[0] });
            // meaning: this.setState({ videos: videos});
        });
    }

    render() {
        return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
            />
        </div>
    ); 
    }
}

// make sure it is put into the DOM
ReactDOM.render(<App /> , document.querySelector(".container"));