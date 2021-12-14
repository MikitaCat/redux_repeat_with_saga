import { CREATE_POST } from './types';

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      //Old Syntax
      //   return { ...state, posts: state.posts.concat(action.paload) };

      //New Syntax
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};
