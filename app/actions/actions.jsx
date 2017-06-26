var OpenBlog = require('OpenBlog');
//load blogs
export var completeBlogFetch = (blogs) => {
  return {
    type: 'COMPLETE_BLOG_FETCH',
    blogs
  };
};

export var loadBlogData = () => {
  return (dispatch, getState) => {
  OpenBlog.getBlog().then(function(blogsData)
  {
dispatch(completeBlogFetch(blogsData));
      }, function(res)
      {
      });
  }};

//load comments
export var completeCommentFetch= (comments) =>
{  return {
    type: 'COMPLETE_COMMENT_FETCH',
    comments
  };
};

export var loadCommentsData = (id) => {

  return (dispatch, getState) => {

  OpenBlog.getComments(id).then(function(commentsData)
  {
      console.log("id",id,'   ',commentsData);
dispatch(completeCommentFetch(commentsData));
      }, function(res)
      {
      });
  }};

//add blogs
export var addBlog = (text) =>
{
  var postData = {postId:'',id:'',name:'',email:'',body:''};
  postData.userId = 1;
  postData.id = 11;
  postData.title = 'abc@xyz.com';
  postData.body = text;
  return (dispatch, getState) => {
  OpenBlog.pushBlogs(postData).then(function(response)
         {
           postData.body = text +':status:'+response.status;
dispatch(completeAddBlog(postData));
             }, function(res)
             {
             });
           };
};

export var completeAddBlog = (blog) => {

  return {
    type: 'COMPLETE_ADD_BLOG',
    blog
  };
};


//add comments
export var addComment = (text,id) =>
{
  var postData = {postId:'',id:'',name:'',email:'',body:''};
  postData.postId = id;
  postData.id = 6;
  postData.name = 'MrinaliniPulidindi';
  postData.email = 'abc@xyz.com';
  postData.body = text;
    return (dispatch, getState) => {
  OpenBlog.pushComments(postData).then(function(response)
         {
             postData.body = text +':status:'+response.status
             dispatch(completeAddComment(postData));
             }, function(res)
             {
             });
           };
};
export var completeAddComment = (comment) => {
  return {
    type: 'COMPLETE_ADD_COMMENT',
    comment
  };
};

// //delete blogs
export var handleDeleteBlog = (blog) =>
{
return{
  type:'DELETE_BLOG_DATA',
blog
};
};

export var deleteBlog = (id) =>
{

  var postData = {postId:'',id:'',name:'',email:'',body:''};
  postData.userId = 1;
  postData.id = 11;
  postData.title = 'abc@xyz.com';
    return (dispatch, getState) => {
      OpenBlog.deleteBlog(id).then(function(response)
             {
               postData.body = 'Delete Status:'+response.status
                dispatch(handleDeleteBlog(postData));
                 }, function(res)
                 {
                 });
           };
};
