import Timer from "./Timer";
//import TimersTable from "./TimersTable";
import style from './App.module.css';
import { Suspense, lazy, useContext } from "react";
import useTimeParser from "./hooks/useTimeParser";
import { ThemeContext } from "./contexts/Theme"; // n'est plus exporté par défaut d'ou les accolades



//import { Component } from "react";
//const { Component } = require("react");


//lazy loading permet de mettre en attente avant affichage du résultat
const TimersTable = lazy(() => import('./TimersTable'));

//exemple on met en suspense la visualisation de la table pendant 2 secondes
/*const TimersTable = lazy(() => {
  return import('./TimersTable')
    .then(module => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(module);
        }, 2000);
      })
    })
});*/

function App() {

  /*const [timers, setTimers] = useState([]);*/

  const { theme, toggleTheme } = useContext(ThemeContext);

  /* let timers = [
     {
       date: new Date(),
       time: 265,
     }
   ];*/

  const { parseSecondsToHMS } = useTimeParser();

  /*const saveTime = (time, title, description) => {
    const date = new Date();
    setTimers([...timers, { time, date, title, description }]);
  };*/

  const displayTimerDetails = (timer) => {
    alert(`${timer.date.toLocaleDateString()}  at ${timer.date.toLocaleTimeString()} \n${parseSecondsToHMS(timer.time)}`);
  };

  return (
    <div className={`${style.container} ${style[theme]} `}>
      <h1 className={style['main-title']}>Pomodoro Timer</h1>
      <button onClick={toggleTheme}>Toggle to {theme === 'light' ? 'dark' : 'light'}</button>
      <Timer />
      <Suspense fallback={'Loading...'}>
        <TimersTable onDisplayTimerDetails={displayTimerDetails} />
      </Suspense>
    </div>

  );

}

export default App;

/*class AppClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timers: [],
    };
  }

  saveTime = (time) => {
    const date = new Date();

    //version simple
    this.setState({
      timers: [...this.state.timers, { time, date }],
    });

    //version plus explicite
    /*const newTimers = [...this.state.timers];
    newTimers.push(time);
    this.setState({
      timers: newTimers,
    });*/
/* }*/

/*render() {
  return (
    <div className={style.container}>
      <h1 className={style['main-title']}>Pomodoro Timer</h1>
      <Timer saveTime={this.saveTime} />
      <TimersTable timers={this.state.timers} />
    </div>
  );

}
}*/
