import app from './app';
import { createConnection } from './db';

const PORT = app.get('PORT');
createConnection();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
