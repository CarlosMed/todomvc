import React from 'react';
import '../node_modules/todomvc-app-css/index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            type="input"
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </header>

        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            <li className="completed">
              <div className="view">
                <input type="checkbox" className="toggle" />
                <label>test task</label>
                <button className="destroy" />
              </div>
            </li>
            <li>
              <div className="view">
                <input type="checkbox" className="toggle" checked/>
                <label>test task</label>
                <button className="destroy" />
              </div>
            </li>
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>8</strong> items left
          </span>
          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a>
        </p>
        <p>
          Refactored by
          <a href="https://github.com/cburgmer">Christoph Burgmer</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
