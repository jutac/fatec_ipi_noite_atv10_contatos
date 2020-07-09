import React from 'react';
import ViewsNavigator from './navigation/ViewsNavigator';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import contatosReducer from './store/contacts-reducer';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  contatos: contatosReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <ViewsNavigator />
    </Provider>
  );
}
