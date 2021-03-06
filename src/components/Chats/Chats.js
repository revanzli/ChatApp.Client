import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useOutletContext, useParams } from 'react-router-dom'
import { getUser } from '../../store/actions/userActions'
import Header from '../Header/Header'
import ChatConversation from './ChatConversation'
import SendMessage from './SendMessage'

const Chats = (props) => {
    const { username } = useParams();
    const { getUserRequest } = props;
    useEffect(() => {
        getUserRequest(username);
    }, [getUserRequest, username]);
    return (
        <>
            <Header />
            <ChatConversation />
            <SendMessage />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.getUserReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUserRequest: (username) => {
            dispatch(getUser(username));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);