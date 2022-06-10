import { env, app } from './config';

app.listen(env.port, () => {
    console.log('Server running: ', env.port)
})