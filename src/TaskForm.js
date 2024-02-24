import TextField from "./Forms/TextField";
import TextareaField from "./Forms/TextareaField";
import Button from "./Button";
import { useState } from "react";

const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 0',
        alignItems: 'center',
        justifyContent: 'center'

    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
        width: '100%'
    },
    input: {
        padding: '.5rem .8rem',
        borderRadius: 10,
        border: 'none',
        width: '100%'
    }
}

function TaskForm({ isTimerStarted, onSubmit }) {

    const initialFormValue = {
        title: '',
        description: '',
    }
    const [formValue, setFormValue] = useState(initialFormValue);
    const [error, setError] = useState(null);
    //const [titleValue, setTitleValue] = useState('');
    //const [descriptionValue, setDescriptionValue] = useState('');

    const handleSubmitForm = (event) => {
        event.preventDefault();
        if (error) {
            alert(`${error.field}: ${error.message}`);
            return;
        }
        onSubmit(formValue);
        if (isTimerStarted) {
            setFormValue(initialFormValue);
        }
    }

    const handleInputChange = (field, value) => {
        setFormValue({ ...formValue, [field]: value });//object field (champs)= la clé et value=valeur comme dans l'objet initialFormValue

        if (field === 'description' && value && value.length > 10) { //validation du champs description.S'il y a une valeur et que la valeur dépasse 10 caractères
            setError({
                field,
                message: 'Description must have less than 10 characters',
            });
            return;
        }
        if (field === 'title' && (!value || value.length < 4)) { // validation du champs titre. s'il n'y a pas de valeur et que la longueur du champs est <4
            setError({
                field,
                message: 'Title must have at least 4 characters',
            });
            return;
        }

        setError(null);
    }

    return (
        <form onSubmit={handleSubmitForm} style={style.form}>
            <TextField labelTitle='Titre' placeholder='Titre de votre tâche' value={formValue.title} onChange={(v) => handleInputChange('title', v)} name='title' error={error} />
            <TextareaField labelTitle='Description' placeholder='Ecrivez votre description ici...' value={formValue.description} onChange={(v) => handleInputChange('description', v)} name='description' error={error} />
            <Button type='submit' isTimerStarted={isTimerStarted} />
        </form>
    )
}

export default TaskForm;