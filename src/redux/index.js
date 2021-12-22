import { combineReducers } from "redux";
import bookingMovieReducer from "./reducer/tickets";

const rootReducer = combineReducers({
    bookingMovieReducer,
})

export default rootReducer;