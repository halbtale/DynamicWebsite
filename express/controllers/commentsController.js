const Comment = require('../models/commentModel');

exports.getAllComments = async (req, res) => {
    const comments = await Comment.find();

    res.json({
        status: 'success',
        data: comments
    });
};

exports.createComment = async (req, res) => {
    if (req.body.author && req.body.message) {
        const newComment = await Comment.create(req.body);

        res.status(201).json({
            status: 'success',
            data: newComment
        });
    } else {
        res.status(400).json({
            status: 'bad request',
            message: 'please insert author and message as body fields'
        });
    }
};
