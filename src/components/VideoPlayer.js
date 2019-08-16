import React from 'react'

const VideoPlayer = ({video}) => {
    if( ! video ){
        return <div> loading ... </div>;
    }

    return (
        <div className="ui content">
            <div className="segment">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
            <div className="ui hidden divider"></div>
            <div className="segment"> Details </div>
        </div>
    )
}

export default VideoPlayer;
