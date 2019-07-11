const http = require('http');

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
 // convert Buffer to string
    });
    req.on('end', () => {
        console.log(body);
        res.end('ok');
    });

    }else{  
      res.end(`
    <html>

    <body>
        <form action="" method="POST" >
            <div >
                <label >Nom Projet :</label>
                <div >
                    <input type="text" >
                </div>
            </div>
            <div >
                <label >Texte Projet :</label>
                <div >
                    <input type="text">
                </div>
            </div>
            <div >
                <label >Email :</label>
                <div >
                    <input type="email">
                </div>
            </div>
            <div >
                <label >Nom :</label>
                <div >
                    <input type="text">
                </div>
            </div>
            <div >
                <label >Prenom :</label>
                <div >
                    <input type="text">
                </div>
            </div>
            <div>
                <input type="submit">
            </div>
        </form>
    </body>
    </html>
    `);
}
});
server.listen(3000);