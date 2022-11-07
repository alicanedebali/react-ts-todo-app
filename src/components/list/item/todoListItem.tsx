import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import React, {useState} from 'react';
import {DeleteButton} from "../../buttons";
import {CheckBox} from "../../checkbox";
import {TodoInterface} from "../../../store";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as todoAction from "../../../store/actions/todo/todo.actions";

export const TodoListItem = ({item}: { item: TodoInterface }) => {
    const labelId = `checkbox-list-label-${item.id}`;
    const [todoActions] = useState(bindActionCreators(todoAction, useDispatch()))

    const handleToggle = (status?: string) => () => {
        if (status === 'delete') {
            todoActions.removeTodo({...item})
        } else {
            todoActions.updateTodo({...item, isDone: !item.isDone})
        }
    };
    return (
        <ListItem
            className="border"
            key={item.id}
            secondaryAction={
                <DeleteButton click={handleToggle('delete')}/>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={handleToggle()} dense>
                <ListItemIcon>
                    <CheckBox id={item?.id} checked={item?.isDone}/>
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${item.description}`}/>
            </ListItemButton>
        </ListItem>
    );
}