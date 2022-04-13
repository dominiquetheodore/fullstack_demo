const _ = require('lodash');
const postModel = require('../models/post')

exports.list_posts = async (req, res) => {
  const posts = await postModel.find({});
  try {
      res.send(posts);
    } catch (error) {
      res.status(500).send(error);
    }
};

exports.create_post = async (req, res) => {
  const post = new postModel(req.body);

  try {
    await post.save();
    res.send(post);
  } catch(error) {
    res.status(500).send(error);
  }
};