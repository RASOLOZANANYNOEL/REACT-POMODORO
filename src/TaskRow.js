import { memo } from "react";
import ClockDisplay from "./ClockDisplay";

function TaskRow({ task, index, removeTask }) {
    //console.log('RENDER ROW')
    return (
        /*<tr key={Date.parse(task.date) - index}>*/
        <tr>
            <td>{task.date.toLocaleDateString()}  at {task.date.toLocaleTimeString()} </td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td> <ClockDisplay time={task.time} /> </td>
            <td><button onClick={() => removeTask(index)}>Delete</button></td>
        </tr>
    )
}

//comparaison avec react memo si on a besoin d'explicité 
//prevProps c'est les props qu'on a actuellement et nextProps c'est les props qui arrive ds le composent pour une éventuelle mise à jour
export default memo(TaskRow, (prevProps, nextProps) => {
    if (prevProps.task === nextProps.task || prevProps.index === nextProps.index) {
        return true;
    }
    return false;
});