import {APP_URL} from "../common/constants";

export const deletePersonById = async(personId) =>{
    const response = await fetch(APP_URL + `/person/${personId}`,{
        method:'DELETE',
        headers: {
            'content-type':'application/json'
        }
    })

    return await response.json();
}
