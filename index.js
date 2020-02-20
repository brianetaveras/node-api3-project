// code away!
const express = require('express');
const postRoutes = require('./posts/postRouter');
const server = express();


server.use(express.json())

server.get('/', (req, res)=>{
    res.json({
        message: "Welcome to my API :)"
    })
})

server.use('/api/posts/', postRoutes);


server.listen(4001, ()=>{

    console.log(
        `%c
     --------------------------------------------------------------
     |       ___                                                   |
     |      (^o^) <Server is running on http://localhost:4001      |
     |     ((___))                                                 |
     |       ^ ^                                                   |
     --------------------------------------------------------------
            `,
        "font-family:monospace"
      );

})
