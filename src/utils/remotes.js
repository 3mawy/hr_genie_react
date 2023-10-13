import Storage from "./Storage.js";

const apiUrl = import.meta.env.VITE_API_URL
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Storage.getAccessToken()}`,
}

export const getAllEmployees = async () => {
    const response = await fetch(`${apiUrl}/employees`, {
        method: 'GET',
        headers: headers,
    });
    const data = await response.json();
    return {status: response.status, data};

};
export const addEmployeeRequest = async (employee) => {
    const {email, password, name, group} = employee
    const response = await fetch(`${apiUrl}/employees/add`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            name,
            group
        }),
        headers: headers,
    });

    return {status: response.status, data: await response.json()}


}
export const editEmployeeRequest = async ({id, employee}) => {
    const {email, password, name, group} = employee;

    const response = await fetch(`${apiUrl}/employees/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            email,
            password,
            name,
            group
        }),
        headers: headers,
    });

    return {status: response.status, data: await response.json()};

}


// TODO

export const addAttendanceRequest = async ({employee, date, attendanceStatus} ) => {
    const response = await fetch(`${apiUrl}/attendance/add`, {
        method: 'POST',
        body: JSON.stringify({
            employee,
            date,
            attendance_status: attendanceStatus
        }),
        headers: headers,
    });

    return {status: response.status, data: await response.json()}

}
export const listAttendanceByDate = async (date) => {
    const response = await fetch(`${apiUrl}/attendance/${date}`, {
        method: 'GET',
        headers: headers,
    });
    const data = await response.json();
    return {status: response.status, data};

}