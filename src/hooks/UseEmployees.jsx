import {useState} from "react";
import {addEmployeeRequest, editEmployeeRequest, getAllEmployees} from "../utils/remotes.js";
import {useGlobalState} from "../context/GlobalStateContext.jsx";

export const useEmployees = () => {
    const {employees, setEmployees} = useGlobalState()
    const [employeeForm, setEmployeeForm] = useState({
        email: '',
        name: '',
        password: '',
        group: 'Normal Employee',
    });
    const [employeeFormErrors, setEmployeeFormErrors] = useState({});
    const {email, name , group} = employeeForm

    async function fetchEmployees() {
        try {
            const result = await getAllEmployees();
            setEmployees(result.data);
        } catch (error) {
            console.error('Error fetching object stats:', error.data);
        }
    }

    async function addEmployee(employee) {
        try {
            const employeeRequest = await addEmployeeRequest(employee);
            if (employeeRequest.status === 201) {
                const newEmployee = {
                    id: employeeRequest.data.id,
                    email,
                    name,
                    group
                };
                const updatedEmployees = [...employees, newEmployee]
                setEmployees(updatedEmployees)
                setEmployeeForm({email: '', name: '', password: '', group: 'Normal Employee'});
                setEmployeeFormErrors({});
            } else throw employeeRequest

        } catch (error) {
            setEmployeeFormErrors(error.data);
            throw error
        }
    }

    async function updateEmployee(id, updatedEmployee) {
        try {
            const employeeRequest = await editEmployeeRequest({id, employee:updatedEmployee});
            if (employeeRequest.status === 200) {
                setEmployees((prevEmployees) =>
                    prevEmployees.map((employee) =>
                        employee.id === id ? { ...employee, ...updatedEmployee } : employee
                    )
                );
                setEmployeeForm({email: '', name: '', password: '', group: 'Normal Employee'});
                setEmployeeFormErrors({});
            } else throw employeeRequest

        } catch (error) {
            setEmployeeFormErrors(error.data);
            throw error
        }
    }

    return {
        employees,
        setEmployees,
        fetchEmployees,
        addEmployee,
        updateEmployee,
        employeeForm,
        setEmployeeForm,
        employeeFormErrors
    }
}