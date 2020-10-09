const { json } = require("express");
const express = require("express");
const router = express.Router();
const { checkSchema, validationResult } = require("express-validator");
// Importing Model
const Blog = require("../models/Blog");

// Defining a Checking Schema for the Blog Body
const blogCheckSchema = checkSchema({
    title: {
        isString: true,
        exists: {
            options: {
                checkFalsy: true
            }
        },
        rtrim: true,
        escape: true
    },
    body: {
        isString: true,
        exists: {
            options: {
                checkFalsy: true
            }
        },
        rtrim: true,
        escape: true
    }
});

// Retrieve contacts info
router.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.status(200).json(blogs);
    });
});

// Receive messages from the user w/ validation and sanitization
router.post("/blogs", blogCheckSchema, (req, res) => {
    try {
        if (req.body && req.body !== {}) {
            // validationResult(req).throw();
            let newBlog = new Blog(req.body);
            newBlog.save((err, blog) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                }
                res.sendStatus(200);
            });
        } else res.sendStatus(400);
    } catch (err) {
        res.status(400).send(err.mapped());
    }
});

module.exports = router;
