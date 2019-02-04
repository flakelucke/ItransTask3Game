const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist/Task3Hmak')));
app.use('/posts', posts);
app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname,'dist/Task3Hmak/index.html'))
});

const port = process.env.port || 4600;

app.listen(port, function(req,res) {

    console.log(`Running ${port}`);
}); 