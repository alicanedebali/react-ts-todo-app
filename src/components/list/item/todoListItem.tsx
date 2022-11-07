import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import React from 'react';
import {DeleteButton} from "../../buttons";
import {CheckBox} from "../../checkbox";
import {TodoInterface} from "../../../store";

export const TodoListItem = ({item}: {item: TodoInterface }) => {
    const labelId = `checkbox-list-label-${item.id}`;

    const handleToggle = (id?: number, status?: string) => () => {
        console.log("id: %s, status: %s", id,status)
    };
    return (
        <ListItem
            className="border"
            key={item.id}
            secondaryAction={
                <DeleteButton click={handleToggle(item?.id, 'delete')}/>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={handleToggle(item?.id, 'checked')} dense>
                <ListItemIcon>
                   <CheckBox  id={item?.id} checked={item?.isDone}/>
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${item.description}`} />
            </ListItemButton>
        </ListItem>
    );
}