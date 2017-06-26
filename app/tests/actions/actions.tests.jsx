var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>
{
it('should generate blogs',()=>
{
var action={
  type:'LOAD_BLOG_DATA',
  blogs :[]
};

var res = actions.loadBlogData();
except(res).toEqual(action);
});

});
