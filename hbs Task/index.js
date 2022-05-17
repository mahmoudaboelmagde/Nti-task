const app = require('./front-end/app');
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log( `http/localhost/${port}` );
})