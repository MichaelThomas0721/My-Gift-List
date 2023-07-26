// Function that will Decrypt strings using the secret passsword set in the env file
// Don't use this for passwords, passwords should be hashed so they can't be reversed

import { SECRET_ENCRYPTION_KEY } from "$env/static/private";
import crypto from "crypto";

export default function DecryptString(str: string): string {
    // Declare the algorithm
    const algorithm = 'aes-256-cbc';
    // Split the value and iv
    let textParts = str.split(':');
    // Get the iv from the ^
    let iv = Buffer.from(textParts.shift(), 'hex');
    // Get the encrypted text
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    // Make a decipher with the above elements (not the encrypted text)
    let decipher = crypto.createDecipheriv(algorithm, SECRET_ENCRYPTION_KEY, iv);
    // Use the decipher to decrypt the text
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    // Return the string version
    return decrypted.toString();
}