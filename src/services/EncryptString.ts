import { SECRET_ENCRYPTION_KEY } from "$env/static/private";
import crypto from "crypto";

export default function EncryptString(str: string): string {
    const IV_LENGTH = 16;
    const algorithm = 'aes-256-cbc';
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(algorithm, SECRET_ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(str);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}