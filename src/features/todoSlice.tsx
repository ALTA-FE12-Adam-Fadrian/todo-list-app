import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoistApi } from "@doist/todoist-api-typescript"
import axios from "axios"

export interface Item {
    title: string
    desc: string,
}

export interface TaskState {
    items: Item[]
}

const initialState: TaskState = {
    items: []
}


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addToTask(state, action: PayloadAction<Item>) {
            // state.items.push(action.payload)
            const api = new TodoistApi("5752096b0def655b6dab9cde14a4928bdf60e68c")
            api.addTask({
                content: `${action.payload.title}`,
                description: `${action.payload.desc}`,
            })
                .then((task) => console.log(task))
                .catch((error) => console.log(error))
        },
    }
})

export const { addToTask } = taskSlice.actions