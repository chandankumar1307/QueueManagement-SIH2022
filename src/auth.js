const authenticate = (number, userType) => {
    if (number === "123" && userType === "1")
        return true;
    else
        return false;
};

export default authenticate;