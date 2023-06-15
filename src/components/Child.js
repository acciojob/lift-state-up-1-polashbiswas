import React from "react";


const Child = ({setState, state}) => {

    function handelState(){
        if(!state){
        setState(true);
        }else{
            setState(false)
        }
    }

    return(
        <div className="child">
            <h2>Childe Component</h2>
            <button onClick={handelState}>Show Model</button>
            {
                state && 
                <div>
                <h3>Modal Content</h3>
                <p>This is the modal content</p>
                </div>
            }
        </div>
    )
}

export default Child;