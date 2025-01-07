const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const errorHandler = require('./middlewares/error.handler');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Todo va bien')
})
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}/api/v1/money/incomes`);
})



routerApi(app);


