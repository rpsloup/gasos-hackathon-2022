import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const DEFAULT_PORT: number = 3001;
const port = process.env.port || DEFAULT_PORT;

app.get('/', (_, res) => res.json('BE funguje.'));

app.listen(port, () => {
  console.log(`[Start] Listening on port ${port}...`);
});
