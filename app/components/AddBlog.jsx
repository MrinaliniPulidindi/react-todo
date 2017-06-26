var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var AddBlog = React.createClass({

  handleSubmit: function (e) {
    var that = this;
    e.preventDefault();
    //
    var todoText = that.refs.todoText.value;
    //
    if (todoText.length > 0) {
      that.refs.todoText.value = '';
    that.props.fetchData(todoText);
    } else {
      that.refs.todoText.focus();
    }
  },

  render: function () {
    var {dispatch} = this.props;
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
    return {
        blog: state.blog
    };
};

const mapDispatchToProps = (dispatch) => {
      return {
        fetchData: (text) => dispatch(actions.addBlog(text))
  };
    };


module.exports = connect(
mapStateToProps,mapDispatchToProps
)(AddBlog);
