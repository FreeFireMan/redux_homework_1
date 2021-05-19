import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ShowInputs() {

    const todoList = useSelector((list) => list.todo);
    const dispatchList = useDispatch();


    let [formState, setFormState] = useState({firstname: '', checked: true})
    let {firstname, checked} = formState

    const submit = (e) => {
        e.preventDefault();
    }

    const onValueChang = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormState({...formState, [name]: value});
    }

console.log(todoList);

    return (

        <div>
            <div>
                <form onSubmit={submit}>
                    <input onChange={onValueChang} type="text" name={'firstname'} value={firstname}
                           placeholder={'Enter Name'}/>
                    <div> true
                        <input onChange={onValueChang} type="radio" name='checked' value={checked}/>
                    </div>
                    <div>
                        false
                        <input onChange={onValueChang} type="radio" name="checked" value={checked}/>
                    </div>
                    <button onClick={()=> dispatchList({type:'ADD',payload:formState})}>add to list</button>
                </form>
            </div>
            <div>
            </div>
        </div>
    );
}