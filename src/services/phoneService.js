import {APP_URL} from "../common/constants";

export const findAllPhones = async () => {
    const response = await fetch(APP_URL + `/api/phone`);
    return await response.json();
}

export const findPhoneByPersonId = async (personId) => {
    const response = await fetch(APP_URL + `/api/person/${personId}/phone`);
    return await response.json();
}