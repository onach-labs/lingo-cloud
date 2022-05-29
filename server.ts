// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-3.0-or-later

const express = require("express");
const app = express();
const server = require('http').Server(app)

app.set('view engine', 'tsx');
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.engine('tsx', require('express-react-views').createEngine());

app.get("/", (req: any, res: any) => {
    res.render("index")
});

server.listen(3000)

// @license-end