import bcrypt from 'bcryptjs';

export function hash(data: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(data, salt);
}

export function compareHash(hash1: string, hash2: string) {
    return bcrypt.compareSync(hash1, hash2);
}