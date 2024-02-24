import { useContext, useState } from "react";
//import Button from "./Button";
import ClockDisplay from "./ClockDisplay";
import { TasksContext } from "./contexts/Tasks";
import useTimer from "./hooks/useTimer";
import TaskForm from "./TaskForm";
import style from './Timer.module.css';
import TimerText from "./TimerText";


//let timerId;

function Timer() {

    //const textRef = useRef(null);

    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const { time, startTimer, stopTimer } = useTimer(); // interval d'1 sec . (2000)= 2sec
    /*const [time, setTime] = useState(0);*/
    const { addTask } = useContext(TasksContext);

    //permet d'afficher ref dans l'élément parent
    /*useEffect(() => {
        console.log('REF DEPUIS TIMER >>>', textRef);
    }, []);*/

    const handleStartTimer = ({ title, description }) => {
        //console.log('CLICK!!!!');
        if (isTimerStarted) { // isTimerStarted est vrai =>  on veut arreter le timer
            //clearInterval(timerId);
            const savedTime = stopTimer();
            //props.saveTime(savedTime, title, description);
            addTask({
                time: savedTime,
                date: new Date(),
                title,
                description
            })
            setIsTimerStarted(false);
            //setTime(0)

        } else {  //isTimerStarted est false => on veut démarrer le timer

            setIsTimerStarted(true);
            startTimer();
            /* timerId = setInterval(() => {
                 setTime((prevTime) => {
                     return prevTime + 1
                 });
             }, 1000);*/
        }
    }
    return (
        <>
            <ClockDisplay time={time} className={style['clock-timer']} />
            <TaskForm isTimerStarted={isTimerStarted} onSubmit={handleStartTimer} />
            <TimerText isTimerStarted={isTimerStarted} /*ref={textRef}*/ />
        </>
    );
}

export default Timer;

/*const displayParagraph = useMemo(() => {
    return (
        <p>
            {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté'}
        </p>
    )
}, [isTimerStarted]);*/

/*const handleClick = useCallback(() => {
    alert(str);
}, [str]);*/

/*class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTimerStarted: false,
            time: 0,
        };
    }

    handleStartTimer = () => {
        //console.log('CLICK!!!!');
        if (this.state.isTimerStarted) { // isTimerStarted est vrai =>  on veut arreter le timer

            clearInterval(this.timerId);

            this.props.saveTime(this.state.time);

            this.setState({
                isTimerStarted: false,
                time: 0,
            });

        } else {  //isTimerStarted est false => on veut démarrer le timer

            this.setState({
                isTimerStarted: true,
            });

            this.timerId = setInterval(() => {
                this.setState(({ time }) => {
                    return {
                        time: time + 1
                    }
                });

            }, 1000);
        }

    }

    render() {

        return (
            <>
                <ClockDisplay time={this.state.time} className={style['clock-timer']} />
                <button className={`${style['clock-btn']} ${style[`clock-btn-${this.state.isTimerStarted ? 'stop' : 'start'}`]}`} onClick={this.handleStartTimer}> {this.state.isTimerStarted ? 'Stop' : 'Start'}</button>
            </>
        );
    }
};*/

//export default Timer;
//render() {

//return (
//<>
//<p className={style['clock-timer']}>{secondsToHms(this.state.time)}</p>
//<button className={`${style['clock-btn']} ${style[`clock-btn-${this.state.isTimerStarted ? 'stop' : 'start'}`]}`} onClick={this.handleStartTimer}> {this.state.isTimerStarted ? 'Stop' : 'Start'}</button>
//</>
//);
//}


