import App from 'next/App';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';

class MyApp extends App {
    render() {
        const { Component, pageProps} = this.props
        return (
            <Provider store = {store}>
                <Component {...pageProps}></Component>
            </Provider>
        )
    }
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);