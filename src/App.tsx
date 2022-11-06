import React from 'react';
import './App.scss';
import Todo from "./pages/todo/todo";
import {Container} from "@mui/material";

function App() {
    return (
        <Container fixed>
            <Todo/>
        </Container>
    );
}

export default App;
