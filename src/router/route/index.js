import {Route} from 'react-router-dom';
import ShowInputs from "../../Components/ShowInputs";

export default function RouteInputs() {
    return (
        <Route path={'/Inputs'} render={() => <ShowInputs/>}/>
    );
}