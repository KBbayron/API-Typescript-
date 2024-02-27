import dotenv from 'dotenv';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error("No existe el archivo .env")
}

export default {
    PORT: process.env.PORT
}