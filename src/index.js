import app from './utils/express';
import router from './routes/index';

const PORT = 8000;

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hackerbay.io backend challenge' });
});
app.use(router);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    console.log(err.name);
    res.status(401).send({ UnauthorizedError: err.message });
  }
  next();
});

app.server = app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});

const { server } = app;

export default server;
