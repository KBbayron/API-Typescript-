import express from 'express';
import config from './config/config';

const app = express();
app.set('port', config.PORT);

const port = app.get('port');

// Routes
import users from "./routes/user";

try {
    app.listen(port, () => {
        console.log('Servidor iniciado en el puerto: ', port);
    })
    app.use('/api/users', users)
} catch (error) {
    console.log('Error al levantar');
}