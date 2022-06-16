import { combineReducers } from "redux";
import { commentsReducers, postsReducers, usersReducers,selectUsersReducers } from "./userReducer";




const reducers=combineReducers({
    allUsers:usersReducers,
    allPosts:postsReducers,
    allCommnets:commentsReducers,
    selectedUsers:selectUsersReducers
})



export default reducers;