import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Todo from "./pages/todo/todo";
import {Provider} from "react-redux";
import {store} from './store';
import {responseInterceptor} from "./utils/functions/responseInterceptor";

function App() {
    responseInterceptor(store);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Todo/>}/>
                    <Route path="*" element={<Todo/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
