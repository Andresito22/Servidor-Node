const http = require('http');
const chalk = require('chalk');
const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const responseData = {
      nombre: 'Andres Sarmiento',
      mensaje: 'Que dificil es esto ://'
    };
    res.end(JSON.stringify(responseData));
  });
  
  server.listen(port, host, () => {
    console.log(chalk.green(`Servidor en ejecución en http://${host}:${port}`));
  });