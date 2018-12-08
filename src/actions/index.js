
export function addEmail(email) {
    console.log('in actions = ', email)
    return {
        type: 'ADD_EMAIL',
        payload: email
    };
}