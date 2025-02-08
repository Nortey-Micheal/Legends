import { combineReducers } from "@reduxjs/toolkit";
import profilesReducer from './profiles/profileSlice'

const rootReducer = combineReducers({
    profiles: profilesReducer
})

export default rootReducer