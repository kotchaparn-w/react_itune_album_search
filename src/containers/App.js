import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainHeader from '../containers/MainHeader';
import Welcome from '../components/Welcome';
import ErrorModal from '../components/ErrorModal';


const App = props => {
    const { isAlbumFetching, fetchAlbumSuccess, fetchAlbumError } = props;
    return(
        <Fragment>
            <MainHeader />
            <Welcome loading={isAlbumFetching}/>
            <ErrorModal 
                fetchAlbumSuccess={fetchAlbumSuccess}
                fetchAlbumError={fetchAlbumError}
                isAlbumFetching={isAlbumFetching}
            />
        </Fragment>
    )
};

function mapStateToProps(state) {
    return {
        isAlbumFetching: state.album.isAlbumFetching,
        fetchAlbumSuccess: state.album.fetchAlbumSuccess,
        fetchAlbumError: state.album.fetchAlbumError
    };
}

App.propsType = {
    isAlbumFetching: PropTypes.bool,
    fetchAlbumError: PropTypes.string,
    fetchAlbumSuccess: PropTypes.bool
};

export default connect(mapStateToProps)(App);