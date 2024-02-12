import EmployeesTable from "../components/EmployeesTable/EmployeesTable.jsx";
import DatePicker from "../components/DatePicker/DatePicker.jsx";
import {useAttendance} from "../hooks/useAttendance.jsx";

const Attendance = () => {
    const {selectedDate, setSelectedDate, employeesWithAttendance, isLoadingList} = useAttendance()
    const handleDateChange = (date) =>{
        setSelectedDate(date)
    }
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5 ">
            <div className="col-span-12">
                <DatePicker onDateSelect={handleDateChange}/>
            </div>
            <div className="col-span-12">
                <EmployeesTable employees={employeesWithAttendance} currentDate={selectedDate} isLoading={isLoadingList}/>
            </div>
        </div>
    );
};

export default Attendance;