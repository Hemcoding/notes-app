import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slice/notesSlice";

export default configureStore({
    reducer: {
        notesSlice
    }
})