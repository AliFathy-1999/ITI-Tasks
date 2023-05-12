const SET_POSTS = "SET_POSTS";

export const setPostsRedux = (postState)=> {
    return {
        type:SET_POSTS,
        posts: postState,
    };
}
