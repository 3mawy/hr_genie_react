// TODO
import {addAttendanceRequest, listAttendanceByDate} from "../utils/remotes.js";
import {useEffect, useState} from "react";
import {useGlobalState} from "../context/GlobalStateContext.jsx";
function formatDate(date = new Date()) {
  const year = date.toLocaleString('default', {year: 'numeric'});
  const month = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day = date.toLocaleString('default', {day: '2-digit'});

  return [year, month, day].join('-');
}
export const useAttendance = () => {
    const {employees, employeesWithAttendance, setEmployeesWithAttendance} = useGlobalState()

    const [selectedDate, setSelectedDate] = useState(new Date());
    const listAttendance = async (date) => {

        try {
            const attendanceDictionary = {};
            const attendanceData = await listAttendanceByDate(formatDate(date))
            for (const attendance of attendanceData.data) {
                attendanceDictionary[attendance.employee] = attendance.attendance_status;
            }
            const employeesWithAttendanceData = employees.map((employee) => {
                const attendance = attendanceDictionary[employee.id] || null;
                return {
                    ...employee,
                    attendance,
                };
            });
            setEmployeesWithAttendance(employeesWithAttendanceData);
        } catch (error) {
            console.error("Error fetching attendance data:", error);
        }
    };
    const addAttendance = async ({date, employee, attendanceStatus}) => {
        try {
            const response = await addAttendanceRequest({date: formatDate(date), employee, attendanceStatus});

            if (response.status === 201) {

                const updatedEmployeesWithAttendance = employeesWithAttendance.map(emp => (
                    emp.id === employee ? { ...emp, attendance: attendanceStatus } : emp
                ));
                setEmployeesWithAttendance(updatedEmployeesWithAttendance);
            } else {
                console.error("Error adding attendance:", response.status);
            }
        } catch (error) {
            console.error("Error adding attendance:", error);
        }
    };
    useEffect(() => {
        listAttendance(selectedDate);
    }, [selectedDate, employees]);
    return {
        selectedDate,
        setSelectedDate,
        employeesWithAttendance,
        listAttendance,
        addAttendance
    }
}