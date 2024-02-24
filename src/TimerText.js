//import { memo, useEffect, useRef, forwardRef } from "react";
//import { memo, forwardRef } from "react";
import { memo } from "react";

//isTimerStarted est récupéré en tant que props
function TimerText({ isTimerStarted } /*ref*/) { // on passe ref en second argument

    //const textRef = useRef(null);

    /*useEffect(() => {
        textRef.current.classList = 'hello-world';
        console.log(textRef.current.innerText);

    }, []);*/

    /*return (
        <p ref={ref}>
            {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté'}
        </p>
    );*/
    return (
        <p>
            {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté'}
        </p>
    );
}

export default memo(TimerText);
//export default memo(forwardRef(TimerText));
// on englobe timertext dans forwardRef pour pouvoir utiliser useRef dans l'élément parent Timer.js