import React from "react";


const Child = ({setShowModal, showModal}) => {

    function handelState(){
        setShowModal(true);
        
    }

    return(
        <div className="child">
            <h2>Childe Component</h2>
            <button onClick={handelState}>Show Modal</button>
            {
                showModal && 
                <div>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
                </div>
            }
        </div>
    )
}

export default Child;