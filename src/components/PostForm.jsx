import React from 'react';

export class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <button className="btn btn-success" type="submit" style={{ marginTop: '10px' }}>
          Create
        </button>
      </form>
    );
  }
}
