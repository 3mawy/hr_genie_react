import {useState} from 'react';

import { format } from 'date-fns';
import { DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AttendanceIcon from "../../assets/Icons/AttendanceIcon.jsx";
const DatePicker = ({onDateSelect}) => {
    const [selected, setSelected] = useState(new Date());
    const [isDayPickerVisible, setDayPickerVisibility] = useState(false);
    const handleDateSelect = (date) => {
        setSelected(date)
        onDateSelect(date)
    }
    const toggleDayPicker = () => {
        setDayPickerVisibility(!isDayPickerVisible);
    };

    return ( <div className={'relative bg-boxdark rounded-sm'}>
            <div className={`flex place-items-center gap-4 font-bold py-3 px-8`}>
                <button className={`bg-meta-6 p-3.5 rounded-sm relative text-black `} onClick={toggleDayPicker}>
                    <AttendanceIcon className={`inline fill-black mr-2 `}/> Pick a Date</button>
                <p className={`text-bodydark1`}>{selected&&format(selected, 'EEEE, d MMMM yyyy')}.</p>
            </div>

            {isDayPickerVisible && (
                <div className={"absolute mt-4 md:mt-6 2xl:mt-7  border-t-4 border-t-form-strokedark left- z-10 rounded dark:bg-black bg-boxdark-2 text-bodydark1"}>
                <DayPicker required onDayClick={toggleDayPicker} mode="single" selected={selected} onSelect={handleDateSelect} toDate={new Date( )} />
                </div>
            )}
        </div>

    );
};

export default DatePicker;