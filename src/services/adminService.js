import {APP_URL} from "../common/constants";

export const createAdmin = async(adminData) =>{
    const response = await fetch(APP_URL + `/api/admin/`,{
        method:'POST',
        body: JSON.stringify(adminData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const findAdminById = async (adminId) => {
    const response = await fetch(APP_URL + `/api/admin/${adminId}`);
    return await response.json();
}

export const findAdminByUsername = async (userName) => {
    const response = await fetch(APP_URL + `/api/admin/uname/${userName}`);
    return await response.json();
}

export const updateAdmin = async(updatedAdminData, adminId) =>{
    const response = await fetch(APP_URL + `/api/admin/uname/${adminId}`,{
        method:'PUT',
        body: JSON.stringify(updatedAdminData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}
