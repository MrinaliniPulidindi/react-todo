
export var loadBlogDataReducer =(state=[],action)=>
{
switch(action.type)
{
case 'COMPLETE_BLOG_FETCH':
return action.blogs;
case 'COMPLETE_ADD_BLOG':
return [...state,
action.blog];
case 'DELETE_BLOG_DATA':
console.log('DELETE_BLOG');
return [...state,
action.blog];
default:
return state;
};
};

export var loadCommentDataReducer =(state=[],action)=>
{
switch(action.type)
{
case 'COMPLETE_COMMENT_FETCH':
return action.comments;
case 'COMPLETE_ADD_COMMENT':
return [...state,
action.comment];
default:
return state;
};
};

// export var deleteBlogReducer =(state=[],action)=>
// {
// switch(action.type)
// {
// case 'DELETE_BLOG_DATA':
// return [...state,
// action.blog];
// default:
// return state;
// };
// };
