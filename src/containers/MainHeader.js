import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { Header, Segment, Icon, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';


class MainHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputClass: 'ui icon fluid input'
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isAlbumFetching === false){
            this.setState({ inputClass: this.state.inputClass.replace('loading', null) });
        }
    }

    handleFormSubmit({ searchTerm }) {

        const replacedTerm = searchTerm.replace(/ /g, "+");
        this.setState({ inputClass: this.state.inputClass + ' loading' });
        this.props.fetchAlbum(replacedTerm);
    }

    render (){
        const { handleSubmit } = this.props;

        return (
            <Segment secondary>
                <Grid container>
                <Grid.Column width={3}>
                    <Link to="/">
                        <Header as='h3'><Icon name='apple'></Icon>reTune</Header>
                    </Link>
                </Grid.Column>
                <Grid.Column width={13}>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className={this.state.inputClass} >
                        <Field 
                            name="searchTerm"
                            component="input"
                            type="text"
                            placeholder="Artist..."
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
                </Grid.Column>
            </Grid>
            </Segment>
        );
    }
}

function validate (values) {
    const errors = {};
    if(!values.searchTerm){
        errors.searchTerm = true
    }
    return errors;
}

function mapStateToProps(state) {
    return {
        isAlbumFetching: state.album.isAlbumFetching
    }
}

Header.propsTypes = {
    fetchAlbum: PropsTypes.func,
    handleSubmit: PropsTypes.func,
    isAlbumFetching: PropsTypes.bool
}

export default reduxForm({
    form: 'searchInput',
    field: 'searchTerm',
    validate
})(connect(mapStateToProps, actions)(MainHeader));
