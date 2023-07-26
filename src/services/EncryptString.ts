// Encrypt strings
// Don't use this on passwords, passwords should be hashed

import { SECRET_ENCRYPTION_KEY } from "$env/static/private";
import crypto from "crypto";

export default function EncryptString(str: string): string {
    // Set the desired iv length (recommended to not go below 16 bytes)
    const IV_LENGTH = 16;
    // Declare the algorithm that will be used, you can google other ones, ctr is also popular
    const algorithm = 'aes-256-cbc';
    // Create the iv with your desired byte length
    let iv = crypto.randomBytes(IV_LENGTH);
    // Create a cipher using the algorithm, secret key and iv
    let cipher = crypto.createCipheriv(algorithm, SECRET_ENCRYPTION_KEY, iv);
    // Encrypt the string
    let encrypted = cipher.update(str);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    // Return a to string version with the iv sepperated by ':' (this is needed to decrypt)
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}