require('./otel'); // Initialize telemetry

const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from OpenTelemetry + Node.js!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
