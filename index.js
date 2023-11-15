const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});
