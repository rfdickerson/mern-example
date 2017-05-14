import React, { Component } from 'react';
import marked from 'marked';

import 'bulma/css/bulma.css';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onCommentDelete(id);
  }

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img alt="Avatar" src={this.props.imageURL} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <strong>{this.props.author}</strong> <small>@{this.props.twitter}</small> <small>31m</small>
              <br />
              <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-reply"></i></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
          <div>
            <button
              onClick={this.deleteComment}
              className="delete"
            />
          </div>
        </article>
      </div>
    )
  }
}

export default Comment;
