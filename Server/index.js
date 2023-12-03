const express = require('express');
require('dotenv').config();
const cors = require('cors');
var Airtable = require('airtable');
const app = express();

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'key2qljExhqdhQcFd',
});
var base = Airtable.base(process.env.BASE);
const table = base(process.env.TABLE);

app.use(express.json());
app.use(cors());
app.use(express.json({ limit: '25mb' }));
// app.use(express.urlencoded({ limit: '25mb' }));

app.get('/', (req, res) => {
  const data = table
    .select()
    .all()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/', (req, res) => {
  const { Title, Category, News, images } = req.body;
  if (!Title || !Category || !News) {
    return res.status(400).json({ message: 'Enter all fields' });
  }
  const buff = Buffer.from(req.body);
  console.log(buff);
  table
    .create([{ fields: req.body }])
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen('3500', () => console.log('Server is running'));
