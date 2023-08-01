const validateFuncs = {
    "min": ValidateMinLength,
    "max": ValidateMaxLength,
    "email": ValidateEmail,
    "required": ValidateRequired,
    "match": ValidateMatch
}

export default function ValidateString(str, type, param) {
    return validateFuncs[type](str, param);
}

function ValidateMinLength(str, len) {
    if (str.length >= len) {
        return true;
    }
    return false;
}

function ValidateMaxLength(str, len) {
    if (str.length <= len) {
        return true;
    }
    return false;
}

function ValidateEmail(str) {
    if (str.includes("@") && str.includes(".") && str.split('@')[0].length > 0) {
        return true;
    }
    return false
}

function ValidateRequired(str) {
    if (str != '') {
        return true
    }
    return false
}

function ValidateMatch(str, str2) {
    if (str == str2) {
        return true;
    }
    return false;
}