import {APP_URL} from "../common/constants";

// export const createHost = (host, phone, address) => {
//     fetch(APP_URL + `/api/host`,{
//         method: 'POST',
//         body: JSON.stringify(host),
//         headers :{
//             'content-type':'application/json'
//         }
//     }) .then((hostResponse) => {
//         createAddress(hostResponse.id, address);
//         return hostResponse;
//     }) .then((hostResponse) => {
//         createPhone(hostResponse.id, phone);
//         console.log("Host created successfully");
//     })
// }

export const findHostByUsername = async (hostUsername) => {
    const response = await fetch(APP_URL + `/api/host/${hostUsername}`);
    return await response.json();
}

export const findAllHosts = async () => {
    const response = await fetch(APP_URL + `/api/host`);
    return await response.json();
}

export const findHostById = async (hostId) => {
    const response = await fetch(APP_URL + `/api/host/id/${hostId}`);
    return await response.json();
}

export const findHostByPropertyId = async (propertyId) => {
    const response = await fetch(APP_URL + `/api/property/${propertyId}/host`);
    return await response.json();
}

export const updateHost = async(updatedHostData, hostId) =>{
    const response = await fetch(APP_URL + `/api/host/${hostId}`,{
        method:'PUT',
        body: JSON.stringify(updatedHostData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}



export const deleteHostById = async(hostId) =>{
    const response = await fetch(APP_URL + `/api/host/${hostId}`,{
        method:'DELETE',
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const createHost = async(hostData) =>{
    const response = await fetch(APP_URL + `/api/host`,{
        method:'POST',
        body: JSON.stringify(hostData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}