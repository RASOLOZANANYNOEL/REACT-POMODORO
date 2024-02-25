import { useDebugValue, useState } from 'react';

let timerId = null;

function useTimer(step = 1000) {

    const [time, setTime] = useState(0);

    //permet de voir dans react dev tool
    useDebugValue(timerId, (timerId) => {
        return {
            name: 'useTimer',
            timerId: timerId ? 'IS STARTED' : 'NOT STARTED',
        };
    });

    const startTimer = () => {
        if (!timerId) {
            timerId = setInterval(() => {
                setTime((time) => {
                    return time + 1;
                });
            }, step);
        } else {
            throw new Error('Timer already launched.');
        }
    };

    const stopTimer = () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
            const savedTime = Number(time);
            setTime(0);
            return savedTime;
        } else {
            throw new Error('No timer launched.');
        }
    };

    return {
        time,
        startTimer,
        stopTimer,
    };

}

export default useTimer;