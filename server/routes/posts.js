const express = require('express');
const router = express.Router();

const axios = require('axios');

const PostApi = 'https://jsonplaceholder.typicode.com';

router.get('/', (req,res)=>{
    axios.get(`${PostApi}/posts`).then(posts=>{
        console.log(posts.data);
    })
});

module.exports = router;