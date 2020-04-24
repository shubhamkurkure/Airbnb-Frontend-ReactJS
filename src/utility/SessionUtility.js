export const IsLoggedIn = () => { return localStorage.getItem("username") }

export const getLoggedInUserType = () => { return localStorage.getItem("userType")}
