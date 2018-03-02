import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Jumbotron = props =>(
    <div>
        { !props.isAlbumFetching && !props.albumLists &&
                <div className="ui basic segment">
                    <h1 className="welcome-text">
                    Welcome InRhythm Team!
                    </h1>
                </div>
        }
    </div>
)

function mapStateToProps(state) {
    return {
        albumLists: state.album.albumLists,
        isAlbumFetching: state.album.isAlbumFetching
    }
}

Jumbotron.propsType = {
    albumLists: PropTypes.array,
    isAlbumFetching: PropTypes.bool
}

export default connect(mapStateToProps)(Jumbotron);