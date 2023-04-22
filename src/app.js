const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
      if (value1 <= 0) {
        res.statusCode = 404;
        res.end('num1 must be a positive integer');
      } else if (!Number.isInteger(value2) || value2 < 0) {
        res.statusCode = 400;
        res.end('num2 must be a non-negative integer');
      } else {
        // Calculate exponential power and send response
        const result = Math.pow(value1, value2);
        res.statusCode =  200;
        res.statusMessage = "OK";
        res.setHeader('Content-Type', 'text/plain');
        res.end(`The result is ${result}`);
      }
      
    });
    }
});

module.exports = server;
      