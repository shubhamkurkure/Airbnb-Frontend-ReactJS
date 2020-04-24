import {APP_URL} from "../common/constants";

export const findAllAddresses = async () => {
    const response = await fetch(APP_URL + `/api/address`);
    return await response.json();
}

export const findAddressByPersonId = async (personId) => {
    const response = await fetch(APP_URL + `/api/person/${personId}/address`);
    return await response.json();
}

