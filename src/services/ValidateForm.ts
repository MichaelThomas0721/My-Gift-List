import ValidateString from "$lib/validateString";

export default function ValidateForm(e, fields, fieldBinds, fieldErrors) {
    let el = e.target;

    let name = el?.name?.replace("Input", "");
    if (!el.getAttribute("touched") && name != "Confirm Password" && name != "Password") return fieldErrors;
    let validator = fields[name].validators;
    for (let i in validator.validators) {
        let param = validator.params[i];
        if (param == "otherPassword") {
            param =
                name == "Password"
                    ? fieldBinds["Confirm Passowrd"]
                    : fieldBinds["Password"];
            let res = ValidateString(fieldBinds[name], validator.validators[i], param);
            if (res) {
                fieldErrors["Confirm Password"] = ""
            } else {
                fieldErrors["Confirm Password"] = validator.messages[i];

            }
            return fieldErrors;
        } else if (!ValidateString(fieldBinds[name], validator.validators[i], param)) {
            fieldErrors[name] = validator.messages[i];
            return fieldErrors;
        }
        fieldErrors[name] = "";
        i += 1;
    }
    return fieldErrors;
}