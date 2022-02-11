import app from './app';
import { createConnection } from './db';

const PORT = 3000;
createConnection();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
