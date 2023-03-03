import { configureStore } from "@reduxjs/toolkit"

import {taskSlice} from './src/features/todoSlice'

export default configureStore({
    reducer: {
        task : taskSlice.reducer
    }
})