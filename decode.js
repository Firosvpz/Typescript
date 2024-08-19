"use strict";
function decodeJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        throw new Error("failed to parse");
    }
}
const jsonString = '{"name":"Alice","age":22}';
const user = decodeJson(jsonString);
console.log(user);
