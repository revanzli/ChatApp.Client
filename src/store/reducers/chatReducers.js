import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

const server = 'https://localhost:5001/chathub'
const newConnection = new HubConnectionBuilder()
    .withUrl(server, {
        logging: LogLevel.Trace,
        accessTokenFactory: () => localStorage.getItem("token")
    })
    .withAutomaticReconnect([1000, 2000, 3000])
    .configureLogging(LogLevel.Information)
    .build();

//#region Get Message Reducer
export function getMessagesReducer(state = initialState.messages, action) {
    switch (action.type) {
        case actionTypes.GET_MESSAGES_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case actionTypes.GET_MESSAGES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
//#endregion

//#region Send Message Reducer
export function sendMessageReducer(state = initialState.sendMessage, action) {
    switch (action.type) {
        case actionTypes.SEND_MESSAGE_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case actionTypes.SEND_MESSAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
//#endregion

export function socketMessageReducer(state = initialState.socketMessage, action) {
    switch (action.type) {
        case actionTypes.SOCKET_MESSAGES_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}