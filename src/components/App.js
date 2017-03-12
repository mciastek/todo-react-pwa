import React from 'react';

import Header from '../containers/Header';
import TodoList from '../containers/TodoList';
import Footer from '../containers/Footer';

import './App.css';

const App = () => {
  return (
    <section className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </section>
  );
};

export default App;
