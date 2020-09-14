const express = require('express');
const app = express();
const port = 3000;
const moment = require('moment');


// app.use(express.static('mvc'));


app.post('/users:id', function (req, res) {
  console.log(req.url);
  console.log(req.method);
  console.log(req.statusCode);
  console.log(req.statusMessage);
  console.log(req.headers);
  console.log(req);

  // console.log(res);
  res.send('Got a POST request');
});

// app.get('/user:id', (req, res) => {
//   res.send('User '+ req.params.id + '<br> Time:'+ moment().date() + '/' +moment().month()+ '/' +moment().year());
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
