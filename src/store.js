import { createStore, applyMiddleware, compose } from 'redux';
import { persistentStore } from 'redux-pouchdb';
import PouchDB from 'pouchdb/dist/pouchdb';

import reducer from './reducers';

const db = new PouchDB('dbname');
const applyMiddlewares = applyMiddleware();

const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistentStore(db)
)(createStore);

export default createStoreWithMiddleware(reducer, {});
