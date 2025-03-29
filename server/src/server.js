import express from 'express';
import { log } from 'console';
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    log(`Server listening at http://localhost:${PORT}`);
});
