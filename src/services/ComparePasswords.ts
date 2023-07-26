import { scrypt, timingSafeEqual } from "crypto";
import { promisify } from "util";


export default async function ComparePasswords(
    storedPassword: string,
    suppliedPassword: string
): Promise<boolean> {
    const scryptAsync = promisify(scrypt);
    // split() returns array
    const [hashedPassword, salt] = storedPassword.split(".");
    // we need to pass buffer values to timingSafeEqual
    const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
    // we hash the new sign-in password
    const suppliedPasswordBuf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
    // compare the new supplied password with the stored hashed password
    return timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}