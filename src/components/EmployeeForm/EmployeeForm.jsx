import DropdownArrowIcon from "../../assets/Icons/dropdownArrowIcon.jsx";
import InputField from "./InputField.jsx";
import {useEmployees} from "../../hooks/UseEmployees.jsx";
import {useEffect} from "react";

const EmployeeForm = ({onClose, action=null, employeeToEdit={}}) => {

    const {addEmployee, updateEmployee, employeeForm, setEmployeeForm, employeeFormErrors} = useEmployees();

    const handleFieldChange = (e) => {
        setEmployeeForm({
            ...employeeForm,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        if (action === "edit" && employeeToEdit) {
            const { name, email, group,} = employeeToEdit;
            setEmployeeForm({
                name,
                email,
                group,
            });
        }
    }, [action, employeeToEdit, setEmployeeForm]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (action === "edit") {
            await updateEmployee(employeeToEdit.id, employeeForm).then(onClose);
        } else {
            await addEmployee(employeeForm).then(onClose);
        }
    };
    return (
        <>
            <p className="mb-9 font-bold text-black dark:text-white text-title-md">
                {action === "edit" ? "Edit Employee" : "Add New Employee"}
            </p>


            <form onSubmit={handleSubmit} className="w-full">
                <InputField
                    label="Name"
                    type="text"
                    placeholder="Enter the employee's name"
                    name="name"
                    value={employeeForm.name}
                    onChange={handleFieldChange}
                    error={employeeFormErrors?.name}
                />
                <InputField
                    label="Email"
                    type="text"
                    placeholder="Enter the employee's email"
                    name="email"
                    value={employeeForm.email}
                    onChange={handleFieldChange}
                    error={employeeFormErrors?.email}
                />
                {action !== "edit" && <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter the employee's password"
                    name="password"
                    value={employeeForm.password}
                    onChange={handleFieldChange}
                    error={employeeFormErrors?.password}
                />}
                <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                        Group
                    </label>
                    <div className="relative">
                        <select
                            name="group"
                            value={employeeForm.group}
                            onChange={handleFieldChange}
                            className="w-full  rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary appearance-none"
                        >

                            <option value="HR">HR</option>
                            <option value="Normal Employee">Normal Employee</option>
                        </select>

                        <div
                            className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 ">
                            <DropdownArrowIcon/>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full mt-2 font-bold cursor-pointer rounded-lg border border-primary bg-primary p-4 text-boxdark transition hover:bg-opacity-90"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default EmployeeForm;
