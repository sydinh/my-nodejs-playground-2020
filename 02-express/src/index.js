import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello NodeJS');
});

app.listen(process.env.PORT, () =>
    console.log(`App listening on port ${process.env.PORT}`),
);
