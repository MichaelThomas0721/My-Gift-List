export function passwordMatch(value, form) {
	console.log("EEEEEEEEEEEEEE")
	if (form.values['Confirm PasswordInput'] !== form.values['PasswordInput']) {
			return { passwordMatch: true };
	}
}

export function containNumbers(numbers) {
	return function(value) {
		if (value.replace(/[^0-9]/g,"").length < numbers) {
			return { containNumbers: numbers };
		}
	}
}