import { useReducer, createContext } from "react";

const TasksContext = createContext({
    //tasks: [],
    tasksData: {
        tasks: [],
        count: 0,
    },
    addTask: () => { },
    removeTask: () => { },
});
export { TasksContext };

//initialisation des tâches
const INITIAL_TASKS = {
    tasks: [],//un tableau des tâches
    count: 0, // compteur des tâches , ici la taille du tableau des tâches
};

//Mise en place de tasksReducer qui prend 2 arguments = le state et une action
const tasksReducer = (state, action) => {
    //si action.type est égale l'ajout d'une tâche et qu'on a une valeur
    if (action.type === 'ADD_TASK' && action.value) {
        const tasks = [...state.tasks, action.value];
        return {
            tasks,
            count: tasks.length,
        };
    }
    //si action.type est égale supprimer une tâche et que action.value est bien un nombre (isnan=is not a number), le + permet de le passé en nombre au lieu d'un string
    if (action.type === 'REMOVE_TASK' && !isNaN(+action.value)) {
        //on recupère la liste des tâches pour en faire une copie
        const tasks = [...state.tasks];
        //on supprime un élément du tableau tâche à partir de cet index
        tasks.splice(+action.value, 1);
        //onretourne le nouvel état
        return {
            tasks,
            count: tasks.length,
        };
    }
    return state ? state : INITIAL_TASKS;

};

const TasksContextProvider = ({ children }) => {
    /*const [tasks, setTasks] = useState([]);*/

    //utilisation de useReducer
    const [tasksData, dispatchTasks] = useReducer(tasksReducer, INITIAL_TASKS);// usereducer attend 2 arguments

    //ajouter une tache
    const addTask = (task) => {
        /*setTasks([...tasks, task]);*/
        dispatchTasks({
            type: 'ADD_TASK',
            value: task,
        });
    }

    //supprimer une tache, en argument taskIndex(l'index de la tache à xxx)
    const removeTask = (taskIndex) => {
        dispatchTasks({
            type: 'REMOVE_TASK',
            value: taskIndex,
        })
        //on fait une copie du tableau des tâches et issus du state
        //const tasksArr = [...tasks];
        //on veut supprimer un élément de taskIndex
        //tasksArr.splice(taskIndex, 1);
        //on met à jour le state avec le nouveau tableau
        //setTasks(tasksArr);
    }

    const value = {
        tasksData,
        addTask,
        removeTask, // on le passe ds les valeurs
    }
    return (
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContextProvider;