import app from './utils/express';

const PORT = 8000;

app.get('/', (req, res) => {
  res
    .status(200)
    .send({ message: "Hackerbay.io backend challenge" });
});

app.server = app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`)
});

const server = app.server;

export default server;
