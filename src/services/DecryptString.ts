import { SECRET_ENCRYPTION_KEY } from "$env/static/private";
import crypto from "crypto";

export default function DecryptString(str: string): string {
    const algorithm = 'aes-256-cbc';
    let textParts = str.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(algorithm, SECRET_ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}