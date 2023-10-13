import {createContext, useContext, useState} from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({children}) => {
    const [employees, setEmployees] = useState([]);
    const [employeesWithAttendance, setEmployeesWithAttendance] = useState([]);




    const resetGlobalState = () => {
        setEmployees([])
        setEmployeesWithAttendance([])
    };
    const contextValue = {
        employees,
        setEmployees,
        employeesWithAttendance,
        setEmployeesWithAttendance,
        resetGlobalState
}
    return (
        <GlobalStateContext.Provider
            value={contextValue}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);
