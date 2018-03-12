import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RenderAlbum from '../components/RenderAlbum';
import MainHeader from './MainHeader';
import ErrorModal from '../components/ErrorModal';
import * as actions from '../actions';


class AlbumContainer extends Component {
    componentDidMount() {
        const { params, fetchAlbum } = this.props;
        if(params){
            fetchAlbum(params.artist);
        }
    }

    componentWillUpdate(nextProps){
        const { params, fetchAlbum, history } = this.props;
        if(nextProps.params.artist !== params.artist && history.action === 'POP'){
            fetchAlbum(nextProps.params.artist);
        }
    }

    render() {
        const { albumLists, isAlbumFetching, fetchAlbumSuccess, fetchAlbumError } = this.props;
        return ( 
            <Fragment>
                <MainHeader />
                <Segment basic loading={isAlbumFetching}>
                    {fetchAlbumSuccess && <RenderAlbum albumLists={albumLists} />}
                </Segment>
                <ErrorModal 
                    fetchAlbumSuccess={fetchAlbumSuccess}
                    fetchAlbumError={fetchAlbumError}
                    isAlbumFetching={isAlbumFetching}
                />
            </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        albumLists: state.album.albumLists,
        isAlbumFetching: state.album.isAlbumFetching,
        fetchAlbumSuccess: state.album.fetchAlbumSuccess,
        fetchAlbumError: state.album.fetchAlbumError,
        params: ownProps.match.params
    };
}

AlbumContainer.propsType = {
    albumLists: PropTypes.array,
    isAlbumFetching: PropTypes.bool,
    params: PropTypes.string.isRequired,
    fetchAlbumError: PropTypes.string,
    fetchAlbumSuccess: PropTypes.bool
};

export default connect(mapStateToProps, actions)(AlbumContainer);
