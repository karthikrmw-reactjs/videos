import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import Youtube from '../apis/Youtube';
import YoutubeResponse from '../constants/youtubeResponse.json';

class App extends React.Component {
    state = { videoList : [] , selectedVideo : null }

    componentDidMount(){
        this.onSearchSubmit('react');
    }

    onSearchSubmit = async (term) => {
        // search youtube api
        // const response = await Youtube.get('/search' , {
        //     params : {
        //         q : term
        //     }
        // });
        // console.log(response);

        // set state on list of videos
        this.setState({ videoList : YoutubeResponse.items , selectedVideo : YoutubeResponse.items[0] })
    }

    onVideoSelection = (video) =>{
        // set state on seleted video
        this.setState({ selectedVideo : video });
    }

    render(){
        return(
            <div className="ui container">
                <div className="ui hidden divider"></div>
                <SearchBar onSubmit={this.onSearchSubmit} />

                <div className="ui hidden divider"></div>

                <div className="ui grid">
                  <div className="ui row">
                      <div className="ten wide column">
                        <VideoPlayer video={this.state.selectedVideo} />
                      </div>
                      <div className="six wide column">
                        <VideoList
                            videoList={this.state.videoList}
                            onVideoSelect={this.onVideoSelection} />
                      </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default App;
