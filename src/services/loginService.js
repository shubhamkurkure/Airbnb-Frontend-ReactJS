import {APP_URL} from "../common/constants";

export const loginService = async (userCreds) => {
    const response = await fetch(APP_URL + `/api/login/check`,{
        method: 'POST',
        body: JSON.stringify(userCreds),
        headers: {
            'content-type': 'application/json'
        }
    })

    return await response.json();
}

export const findLoginByPersonId = async (personId) => {
    const response = await fetch(APP_URL + `/api/person/${personId}/property`);
    return await response.json();
}