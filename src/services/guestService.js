import {APP_URL} from "../common/constants";

export const findAllGuests = async () => {
    const response = await fetch(APP_URL + `/api/guest`);
    return await response.json();
}

export const findGuestByUsername = async (guestUsername) => {
    const response = await fetch(APP_URL + `/api/guest/${guestUsername}`);
    return await response.json();
}

export const findGuestById = async (guestId) => {
    const response = await fetch(APP_URL + `/api/guest/id/${guestId}`);
    return await response.json();
}

export const updateGuest = async(updatedGuestData, guestId) =>{
    const response = await fetch(APP_URL + `/api/guest/${guestId}`,{
        method:'PUT',
        body: JSON.stringify(updatedGuestData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const deleteGuestById = async(guestId) =>{
    const response = await fetch(APP_URL + `/api/guest/${guestId}`,{
        method:'DELETE',
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}

export const createGuest = async(guestData) =>{
    const response = await fetch(APP_URL + `/api/guest`,{
        method:'POST',
        body: JSON.stringify(guestData),
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}