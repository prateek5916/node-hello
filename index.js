const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'MY  IS  KHAN AND I AM NOT A TERRIOST!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
  console.log(token);
    return rand() + rand(); // to make it longer
};

token(); 
