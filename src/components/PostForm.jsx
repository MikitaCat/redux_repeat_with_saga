import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.title !== '') {
      const newPost = {
        id: Date.now().toString(),
        title: this.state.title,
      };
      this.props.createPost(newPost);
    }
    this.setState({ title: '' });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            onChange={this.changeInputHandler}
            name="title"
            value={this.state.title}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <button className="btn btn-success" type="submit" style={{ marginTop: '10px' }}>
          Create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
