export const postListReducer = (state, action) => {
  const { type, payload } = action;
  let newPostList = state;
  switch (type) {
    case "ADD_POST":
      newPostList = [
        ...state,
        {
          title: payload.title,
          body: payload.body,
          reactions: payload.reactions,
          userId: payload.userId,
          tags: payload.tags,
        },
      ];
      break;

    case "SEE_ALL_POST":
      newPostList = payload.posts;
      break;

    case "DELETE_POST":
      newPostList = state.filter((postList) => postList.id !== payload.id);
      break;

    default:
      newPostList = state;
      break;
  }

  return newPostList;
};
