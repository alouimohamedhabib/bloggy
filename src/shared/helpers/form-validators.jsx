/**
 * Validate email
 * @param {Element} text 
 * @returns Boolean
 */
const validateEmail = (email) => {
    let atposition = email.value.indexOf("@");
    let dotposition = email.value.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        email.classList.add("has-error");
        return false;
    }
    email.classList.remove("has-error");
    return true;
}
/**
 * Validate text field / textarea
 * @param {Element} text 
 * @returns Boolean
 */
const validateInput = (text) => {
    if (text.value.trim().length <= 0) {
        text.classList.add("has-error");
        return false
    }
    text.classList.remove("has-error");
    return true;
}

export {
    validateEmail,
    validateInput
}