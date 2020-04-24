export const hostTransform = (currentState) => {
    return {
        // Login
        login:{
            userName: currentState.userName,
            password: currentState.password,
        },

        firstName: currentState.firstName,
        lastName: currentState.lastName,
        gender: currentState.gender,
        email: currentState.email,
        dob:currentState.dob,
        type: currentState.type,
        // Phone
        phone: {
            phoneNumber: currentState.phoneNumber,
            primaryPhone: currentState.primaryPhone
        },
        // Address
        address: {
            address: currentState.address,
            city: currentState.city,
            zip: currentState.zip,
            State: currentState.State,
            country: currentState.country,
            primaryAddress: currentState.primaryAddress
        },
        // For Host
        superHost: currentState.superHost
    }

}

export const guestTransform = (currentState) => {
    return {
        // Login
        login:{
            userName: currentState.userName,
            password: currentState.password,
        },
        firstName: currentState.firstName,
        lastName: currentState.lastName,
        gender: currentState.gender,
        email: currentState.email,
        dob:currentState.dob,
        type: currentState.type,
        // Phone
        phone: {
            phoneNumber: currentState.phoneNumber,
            primaryPhone: currentState.primaryPhone
        },
        // Address
        address: {
            address: currentState.address,
            city: currentState.city,
            zip: currentState.zip,
            State: currentState.State,
            country: currentState.country,
            primaryAddress: currentState.primaryAddress
        },
        // For Guest
        verified: currentState.verified
    }
}

export const adminTransform = (currentState) => {
    return {
        // Login
        login:{
            userName: currentState.userName,
            password: currentState.password,
        },
        firstName: currentState.firstName,
        lastName: currentState.lastName,
        gender: currentState.gender,
        email: currentState.email,
        dob:currentState.dob,
        type: currentState.type,
        // Phone
        phone: {
            phoneNumber: currentState.phoneNumber,
            primaryPhone: currentState.primaryPhone
        },
        // Address
        address: {
            address: currentState.address,
            city: currentState.city,
            zip: currentState.zip,
            State: currentState.State,
            country: currentState.country,
            primaryAddress: currentState.primaryAddress
        },
            // For Guest
           // verified: currentState.verified,
            // For Host
          //  superHost: currentState.superHost


    }

}
