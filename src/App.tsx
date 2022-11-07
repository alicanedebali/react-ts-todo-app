import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Todo from "./pages/todo/todo";
import {Provider} from "react-redux";
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Todo/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
