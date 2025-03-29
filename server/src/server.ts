import express from 'express';
import db from `./config/connection.js`;

await db()

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})