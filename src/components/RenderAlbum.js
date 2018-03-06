import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

class RenderAlbum extends Component {
    constructor(props){
        super(props)
        this.state ={
            audio: null,
            audioTrackId : null,
            audioPlaying: false
        }
    }

    playAudio(audioUrl, audioTrackId){
            const audio = new Audio(audioUrl)
            audio.load();
            audio.play();
            this.setState({ audio, audioTrackId, audioPlaying: true });
    }
    pauseAudio(){
        if(this.state.audioPlaying){
            this.state.audio.pause()
            this.setState({ audioTrackId : null, audioPlaying: false })
        } 
    }

    render(){
        const albumLists = this.props.albumLists;
        return(
            <div className="ui five column grid">
                {
                    albumLists.map(albumList => (
                        <div className="column" 
                        key={albumList.trackId}>
                            <Link to={albumList.artistViewUrl} target="_blank">
                                <div className="ui link cards" >
                                    <div className="card"
                                        onMouseEnter={()=> this.playAudio(albumList.previewUrl, albumList.trackId)}
                                        onMouseLeave={()=> this.pauseAudio()}
                                    >
                                        <div className="image" >
                                            <img src={albumList.artworkUrl100} />
                                            <div className={this.state.audioTrackId == albumList.trackId ? 'ui active dimmer': 'ui dimmer'}>
                                            <div className="content">
                                            <h4 className="ui inverted icon header">
                                                <i className="music icon"></i>
                                                Playing...
                                            </h4>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="content">
                                            <span className="header">{albumList.collectionName}</span>
                                            <div className="meta">
                                                <span>{albumList.artistName}</span>
                                            </div>
                                        </div>
                                        <div className="extra content">
                                        {`Release: ${moment(albumList.releaseDate).format('LL')}`}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )    
    }
}

 RenderAlbum.propsType = {
     albumLists: PropsTypes.array
 }

export default RenderAlbum;