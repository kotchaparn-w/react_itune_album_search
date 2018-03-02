import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RenderAlbum from '../components/RenderAlbum';
import ActionModal  from '../components/ActionModal';
import Jumbotron from '../containers/Jumbotron';


class AlbumContainer extends Component {

    render() {
        
        const { albumLists, isAlbumFetching } = this.props;
        return (
            <div>
                {albumLists && albumLists.length !== 0 && 
                <Segment
                    loading={isAlbumFetching}
                >
                    <RenderAlbum albumLists={albumLists} />
                </Segment>
                }
                {!albumLists && !isAlbumFetching &&
                    <Jumbotron />
                }
                <ActionModal albumLists={albumLists} {...this.props}/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        albumLists: state.album.albumLists,
        isAlbumFetching: state.album.isAlbumFetching
    }
}

AlbumContainer.propsType = {
    albumLists: PropTypes.array,
    isAlbumFetching: PropTypes.bool
}

export default connect(mapStateToProps)(AlbumContainer);
