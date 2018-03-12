import React, { Component } from 'react';
import { Grid, Image, Card, Dimmer, Header, Icon } from 'semantic-ui-react';
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

    renderAlbumList(albumList) {
        const { trackId, collectionViewUrl, artistViewUrl, previewUrl, artworkUrl100, collectionName, artistName, releaseDate } = albumList;
        const { audioTrackId } = this.state;
        const isDimming = audioTrackId === trackId ? true : false;
        return (
            <Grid.Column key={trackId}>
                <Link to={collectionViewUrl || artistViewUrl} target="_blank">
                    <Card 
                    link
                    onMouseEnter={()=> this.playAudio(previewUrl, trackId)}
                    onMouseLeave={()=> this.pauseAudio()}
                    >
                        <Dimmer.Dimmable as={Image} dimmed={isDimming} >
                            <Image src={artworkUrl100} />
                            <Dimmer active={isDimming} >
                                <Header as='h3' icon inverted>
                                <Icon name='music' />
                                    Playing...
                                </Header>
                            </Dimmer>
                        </Dimmer.Dimmable>
                        <Card.Content>
                            <Card.Header>
                                {collectionName}
                            </Card.Header>
                            <Card.Meta>
                                <span>{artistName}</span>
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            {`Release: ${moment(releaseDate).format('LL')}`}
                        </Card.Content>
                    </Card>
                </Link>
            </Grid.Column>
        )
    }

    render(){
        const albumLists = this.props.albumLists;
        return(
            <Grid columns={5}>
                {albumLists.map(albumList => this.renderAlbumList(albumList))}
            </Grid>
        )    
    }
}

 RenderAlbum.propsType = {
     albumLists: PropsTypes.array,
 }

export default RenderAlbum;