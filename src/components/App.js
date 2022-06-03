import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'
import Home from '../pages/home/Home'
import { CssBaseline } from '@mui/material'
import Auth from '../pages/auth/Auth'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import Chats from './Chats/Chats'

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <CssBaseline>
                    <Routes>
                        <Route element={<PrivateRouter />}>
                            <Route element={<Home />} path={'/'} >
                                <Route element={<Chats />} path={':username'} />
                            </Route>
                        </Route>
                        <Route element={<Auth />} path="/auth">
                            <Route element={<Login />} path={'login'} />
                            <Route element={<Register />} path={'register'} />
                        </Route>
                    </Routes>
                </CssBaseline>
            </Provider>
        </BrowserRouter >
    )
}

export default App