//import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'
/*import * as actions from '../actions';
import { Link } from 'react-router';
*/

class BookList extends Component {
  /*componentWillMount() {
    this.props.fetchBooks();
  }

  renderListItem(book) {
    return (
      <li className="list-group-item">
        <Link to={`/users/${book.id}`}>{book.name}</Link>
      </li>
    );
  }*/

  renderList() {
    //return _.map(this.props.books, this.renderListItem.bind(this));
    return this.props.books.map((book) => {
      return (
        <li 
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.props.color}
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
