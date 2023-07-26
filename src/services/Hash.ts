// Function for hashing string (just passwords at this point)

import { randomBytes, scrypt } from "crypto";
import { promisify } from "util";

export default async function Hash(str: string) {
    const scryptAsync = promisify(scrypt);
    const salt = randomBytes(16).toString("hex");
    const buf = (await scryptAsync(str, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
}