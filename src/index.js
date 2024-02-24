import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './contexts/Theme';
import TasksContextProvider from './contexts/Tasks';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//on insert une valeur par défaut au context theme
//cette valeur par défaut contient le thème et la méthode qui permet de mettre à jour le thème
/*const value = {
  theme: 'light',
  toogleTheme: () => {
    value.theme = 'dark';
  }
}*/
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
