import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Inputs from "./links";
import RouteInputs from "./route";


export default function RouterStructure(){
return(
    <Router>
        <Inputs/>
        <Switch>
            <RouteInputs/>
        </Switch>
    </Router>
)
}