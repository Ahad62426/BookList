import React from 'react';
import ReactDOM from 'react-dom';
/*import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
*/
//import reducers from './reducers';
import App from './components/app';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import BookList from './container/book_list';
//import Main from './components/main';
//import PostList from './components/post_list';
//import BookDetail from './components/book_detail';
//import PostNew from './components/post_new';

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);
const Store = createStore(reducers);

ReactDOM.render(
  <Provider store={ Store }>
    <App />
  </Provider>
  , document.querySelector('.container')
);

  /*

  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="users" component={BookList} />
        <Route path="users/:id" component={BookDetail} />
        <Route path="posts" component={PostList} />
        <Route path="posts/new" component={PostNew} />
      </Route>
    </Router>
  </Provider>

  */