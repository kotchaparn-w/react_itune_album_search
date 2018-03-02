import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

 const RenderAlbum = props => {
    const albumLists = props.albumLists;
     return(
        <div className="ui five column grid">
            {
                albumLists.map(albumList => (
                    <div className="column" key={albumList.trackId}>
                        <a href={albumList.artistViewUrl} target="_blank">
                            <div className="ui link cards" >
                                <div className="card">
                                    <div className="image">
                                        <img src={albumList.artworkUrl100} />
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
                        </a>
                    </div>
                ))
            }
        </div>
     )    
 }

 RenderAlbum.propsType = {
     albumLists: PropsTypes.array
 }

export default RenderAlbum;