import React,{useState} from "react";
import Child from "./Child";

const Parent = () => {
    let [state, setState] = useState(false);

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child setState={setState} state={state}/>
        </div>
    )
}

export default Parent;