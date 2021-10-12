const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export { passwordRegexp, emailRegexp };
