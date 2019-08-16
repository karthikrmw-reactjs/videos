import React from 'react';


const VideoCard = (props) => {
    const video = props.video;

    return (
        <div className="item" onClick={ () => { props.onVideoSelect(video) }} >
          <div className="ui tiny image"><img alt={video.description} src={video.snippet.thumbnails.default.url} /></div>
          <div className="content">
            <a className="header">{video.snippet.title}</a>
            <div className="meta">{video.snippet.description}</div>
          </div>
        </div>
    );
}


const VideoList = (props) => {
    const createList = () => {
        return props.videoList.map((video) => {
            return(
                <VideoCard video={video} key={video.id.videoId} onVideoSelect={props.onVideoSelect} />
            );
        })
    }

    const videoList = createList();
    return(
        <div className="ui card" style={{width:'100%'}}>
            <div className="content"><div className="header">Searched Videos</div></div>
            <div className="content">
                <div className="ui items">
                  {videoList}
                </div>
            </div>
        </div>
    );
}

export default VideoList;
