import EditEmployee from "./EditEmployee.jsx";
import AttendanceStatus from "./AttendanceStatus.jsx";
import Loader from "../Loaders/Loader.jsx";
import LoaderSkeleton from "../Loaders/LoaderSkeleton.jsx";

const EmployeesTable = ({employees, currentDate = null, isLoading}) => {
    const tableHeaders = [
        {
            label: 'Name',
            key: 'name',
            render: (employee) => (
                <div className="text-black dark:text-white">{employee.name}</div>
            ),
        },
        {
            label: 'Email',
            key: 'email',
            render: (employee) => (
                <div className="text-black dark:text-white">{employee.email}</div>
            ),
        },
        {
            label: 'Group',
            key: 'group',
            render: (employee) => (
                <div className="text-black dark:text-white">{employee.group}</div>
            ),
        },
        {
            label: currentDate ? 'Attendance' : 'Actions',
            key: currentDate ? 'attendance' : 'actions',
            render: (employee) => (
                currentDate ? (
                    <AttendanceStatus employee={employee.id} attendance_status={employee.attendance} date={currentDate} />
                ) : (
                    <EditEmployee employee={employee}/>
                )
            )
        },
    ];

    return (
        <div
            className="rounded-sm min-h-[40rem] relative border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 overflow-x-scroll">
                <table className="w-full table-auto ">
                    <thead>
                    <tr className="bg-gray-2 rounded text-left dark:bg-meta-4">
                        {tableHeaders?.map((header, index) => (
                            <th
                                key={index}
                                className="py-4 px-4 font-bold text-black dark:text-white"
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    {isLoading ? <LoaderSkeleton tableHeaders={tableHeaders}/> : (
                    <tbody>
                    {(employees && employees.length > 0) && employees.map((employee) => (
                        <tr key={employee.id}>
                            {tableHeaders?.map((header, idx) => (
                                <td
                                    key={idx}
                                    className="border-b border-[#eee] py-5 px-4 dark:border-strokedark "
                                    style={{ width: `${100 / tableHeaders.length}%` }}
                                >
                                    {header.render(employee)}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                    )}
                </table>
        </div>
    );
};

export default EmployeesTable;
