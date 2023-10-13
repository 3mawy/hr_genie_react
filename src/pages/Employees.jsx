import EmployeesTable from "../components/EmployeesTable/EmployeesTable.jsx";
import {useEffect, useState} from "react";
import Modal from "../components/Modal.jsx";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm.jsx";
import PlusIcon from "../assets/Icons/PlusIcon.jsx";
import {useEmployees} from "../hooks/UseEmployees.jsx";

const Employees = () => {
    const {employees} = useEmployees();
    const [modalToggle, setModalToggle] = useState(false);


    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">

            <div className={'col-span-12 relative bg-boxdark rounded-sm'}>
                <Modal isOpen={modalToggle} onClose={() => setModalToggle(false)} >
                    <EmployeeForm onClose={() => setModalToggle(false)}/>
                </Modal>
                <div className={`flex place-items-center gap-4 font-bold py-3 px-8`}>
                    <button className={`bg-meta-6 p-3.5 rounded-sm relative text-black `} onClick={() =>setModalToggle(true)}>
                        <PlusIcon className={`inline fill-black mr-2`}/> Add Employee
                    </button>
                </div>
            </div>

            <div className="col-span-12">
                <EmployeesTable employees={employees}/>
            </div>
        </div>
    );
};

export default Employees;
