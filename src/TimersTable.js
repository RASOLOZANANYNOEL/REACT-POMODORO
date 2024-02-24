//import { Component } from "react";
import { useState, useContext } from 'react';
import { TasksContext } from './contexts/Tasks';
import TaskRow from './TaskRow';
import style from './TimersTable.module.css';
//import ClockDisplay from './ClockDisplay';


function TimersTable(props) {

    /*const timersRef = useRef([]); //useRef avec un valeur initial un tableau vide*/

    const [check, setCheck] = useState(false);

    const { tasksData, removeTask } = useContext(TasksContext)
    // addTimerRef permet de rajouter à chaque élément une référence
    /*const addTimerRef = (element) => {
        console.log(element);
        //si timersRef.current existe et que timersRef.current n'inclus pas l'élément et que element existe
        if (timersRef.current && !timersRef.current.includes(element) && element) {
            //alors on va push l'élément
            timersRef.current.push(element)
        }
    }*/

    /*useEffect(() => {
        //console.log(timersRef.current);
    }, []);*/


    return (
        <>
            <h3>{tasksData.count} Task{tasksData.count > 1 ? 's' : ''} registered</h3>
            <div>
                <input type="checkbox" id="check" onChange={e => setCheck(e.target.checked)} />
                <label htmlFor="check">Check</label>
            </div>
            <table className={style['timers-table']}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasksData.tasks.map((task, index) => (
                            <TaskRow task={task} index={index} removeTask={removeTask} key={Date.parse(task.date) - index} />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
export default TimersTable;


/*class TimersTable extends Component {

    render() {
        return (
            <table className={style['timers-table']}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.timers.map((timer) => (
                            <tr key={timer.date.getMilliseconds()}>
                                <td>{timer.date.toLocaleDateString()}  at {timer.date.toLocaleTimeString()} </td>
                                <td>{secondsToHms(timer.time)}</td>
                            </tr>

                        ))

                    }
                </tbody>
            </table>

        );
    }
}

export default TimersTable;*/