import CrossMarkIcon from "../../assets/Icons/CrossMarkicon.jsx";
import ExclamationIcon from "../../assets/Icons/ExclamationIcon.jsx";
import CheckMarkIcon from "../../assets/Icons/CheckMarkIcon.jsx";
import {useAttendance} from "../../hooks/useAttendance.jsx";

const AttendanceStatus = ({employee, date, attendance_status}) => {
    const {addAttendance, isLoadingAdd} = useAttendance()
    const handleAttendanceAdd = async (attendanceStatus) => {
        await addAttendance({employee, date, attendanceStatus});
    };
    if (attendance_status === 'present') {
        return (
            <div className="bg-success flex items-center gap-2 text-white font-bold rounded-sm px-2 py-1.5 min-w-j">
                <CheckMarkIcon className={"bg-meta-3 rounded-full"}/>
                Present
            </div>
        );
    } else if (attendance_status === 'absent') {
        return (
            <div className="bg-meta-1 flex items-center gap-2 text-white font-bold rounded-sm px-2 py-1.5 min-w-43">
                <CrossMarkIcon className="bg-meta-7 rounded-full"/>
                Absent
            </div>
        );
    } else {
        return (
            <div
                className="bg-meta-8  flex justify-between text-white font-bold rounded-sm px-2 py-1.5 min-w-43">
                <div className={`flex gap-2 items-center`}>
                    {isLoadingAdd ?
                        <>
                            <div
                                className="p-2 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                            <span>Loading</span>
                        </>:
                        <>
                            <ExclamationIcon className={"bg-meta-6 rounded-full p-0.5"}/>
                            <span>Not Set</span>
                        </>
                    }
                </div>
                <div className={`flex gap-2 items-center`}>

                    <button className={`bg-success`}>
                        <CheckMarkIcon className={"p-0.5"}
                                       disabled={isLoadingAdd}
                                       onClick={() => handleAttendanceAdd('present')}/>
                    </button>
                    <button className={`bg-danger ml-1`}>
                        <CrossMarkIcon className={"p-0.5"}
                                       disabled={isLoadingAdd}
                                       onClick={() => handleAttendanceAdd('absent')}/>
                    </button>
                </div>
            </div>
        );
    }
};

export default AttendanceStatus;
