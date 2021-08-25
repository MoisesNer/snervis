import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProjectProvider } from './Context'

ReactDOM.render(
  <ProjectProvider>
    <App/>
  </ProjectProvider>,
  document.getElementById('root')
);

