import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Code with Rico. Ready to run on Heroku.');
});

app.listen(port, () => {
    return console.log(`[server]: Server is running on ${port}`);
});
