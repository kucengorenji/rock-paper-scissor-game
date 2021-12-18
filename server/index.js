const express = require('express');
const app = express();
const { PORT = 4000 } = process.env;
const router = require('./routes/index');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
