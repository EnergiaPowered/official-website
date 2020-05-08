const express = require("express");

const server = express.Router();
const blog = require("../models/blog");


// Get the list
server.get("/list", async (req, res) => {
  try {
    let blogList = await blog.find({});
    res.send(blogList);
  } catch {
    throwError();
  }
});

// Get single blog
server.get("/:id", async (req, res) => {
  try {
    let blogItem = await blog.findById(req.params.id);
    res.send(blogItem);
  } catch {
    throwError();
  }
});


// Create a new blog
server.post("/", ensureAuth, async (req, res) => {
  let { title, body, image, date } = req.body;

  let blogItem = new blog({
    title,
    body,
    date,
    image
  });

  blogItem.save().then(record => {
    res.send(record);
  });
});

// Edit the blog
server.put("/:id", ensureAuth, (req, res) => {
  try {
    let id = req.params.id;

    let { title, body, date, image } = req.body;

    blog.findByIdAndUpdate(id, { title, body, date, image }).then(() => {
      res.sendStatus(204);
    });
  } catch {
    throwError();
  }
});

// Delete the blog
server.delete("/:id", ensureAuth, (req, res) => {
  let id = req.params.id;

  blog.findByIdAndRemove(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      throwError();
    });
});

let throwError = () => {
  throw new Error("An error occurred in the db");
};




module.exports = server;