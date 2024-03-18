import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";

const rootReducer = combineReducers({
    user: userReducer
    // other reducer
});

export default rootReducer;
