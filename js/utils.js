export function validator(obj) {
    if (obj.name === "") {
        return {
            target: "name",
            message: " Please enter your name",
        }
    }
    if (obj.password === "") {
        return {
            target: "password",
            message: " Please enter your password",
        }
    }
    return false
}