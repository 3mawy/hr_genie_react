import React, {useState} from 'react';
import Modal from "../Modal.jsx";
import EmployeeForm from "../EmployeeForm/EmployeeForm.jsx";
import {tr} from "date-fns/locale";

const EditEmployee = ({employee}) => {
    const [modalToggle, setModalToggle] = useState(false)
    function handleEdit(employee) {
        setModalToggle(!modalToggle)
    }
    return (

        <div>
            <Modal isOpen={modalToggle} onClose={() => setModalToggle(false)} >
                <EmployeeForm onClose={() => setModalToggle(false)} action={'edit'} employeeToEdit={employee}/>
            </Modal>
            <button onClick={() => handleEdit(employee)} className={`bg-meta-6 text-black font-bold rounded-sm px-5 py-1.5 my-0.5`}>
                Edit
            </button>
        </div>
    );
};

export default EditEmployee;