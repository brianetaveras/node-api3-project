// code away!
const express = require('express');
const postRoutes = require('./posts/postRouter');
const userRoutes = require('./users/userRouter')
const server = express();
const logger = require('./middleware/logger')


server.use(express.json())
server.use(logger())

server.get('/', (req, res)=>{
    res.json({
        message: "Welcome to my API :)"
    })
})

server.use('/api/posts/', postRoutes);
server.use('/api/users/', userRoutes)

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
