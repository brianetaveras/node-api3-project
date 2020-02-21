const express = require('express');
const userDb = require('./userDb');
const postDb = require('../posts/postDb')
const router = express.Router();


router.post('/', async (req, res) => {
  // do your magic!
  try{
    console.log('hits')
    res.status(201).json(await userDb.insert({name: req.body.name}))
  } catch(err) {
    console.log(err)
    res.status(500).json({message: "There was an error while adding the user"})
  }
});

router.post('/:id/posts', validateUserId(), async (req, res) => {
  // do your magic!
  try {
    if(!req.body.text){
      return res.status(400).json({message: "Request was incomplete. Please include Text"})
    }
    res.json(await postDb.insert({user_id: req.params.id ,text: req.body.text}))
  } catch(err) {
    console.log(err)
    res.status(500).json({message: "Error while adding the post"})
  }
});

router.get('/', async (req, res) => {
  res.json(await userDb.get()
  )
  // do your magic!
});

router.get('/:id', validateUserId(), (req, res) => {
  // do your magic!
  res.json(req.user)
});

router.get('/:id/posts', async (req, res) => {
  // do your magic!
  const posts = await userDb.getUserPosts(req.params.id)
  console.log('works?')
  res.json(posts)
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {

  return async (req, res, next) => {
    const user = await userDb.getById(req.params.id)
    if (user) {
      req.user = user
      next()
    } else {
      return res.status(400).json({ message: "Invalid user ID" })
    }
  }

}

function validateUser(req, res, next) {
  return (req, res, next) =>{
    if (!req.body) {
      return res.status(400).json({ message: "missing user data" });
    } else if (!req.body.name) {
      return res.status(400).json({ message: "missing required name field" })
    }
  }
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
