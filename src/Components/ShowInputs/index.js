import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ShowInputs() {
    const todoList = useSelector((list) => list.todo);
    const dispatchList = useDispatch();

    const [formState, setFormState] = useState({firstname: '', checked: ''})

    const {firstname, checked} = formState;
    const onValueChang = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormState({...formState, [name]: value});
    }

    console.log(todoList)

    return (
        <div>
            <div>
                <div>
                    <input onChange={onValueChang} type="text" name={'firstname'} value={firstname}
                           placeholder={'Enter Name'}/>
                    <div> true
                        <input onChange={onValueChang} type="radio" name='checked' value={true}/>
                    </div>
                    <div>
                        false
                        <input onChange={onValueChang} type="radio" name="checked" value={false}/>
                    </div>
                    <button onClick={() => dispatchList({type: 'ADD', payload: {firstname, checked}})}>add to list
                    </button>
                </div>
            </div>
        </div>
    );
}
