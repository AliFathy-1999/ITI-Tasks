const express = require('express');
const router = express.Router();
const asycnWrapper = require('../lib/index');
const { chatController } = require('../controllers/index');
const Chat = require('../models/chat');

router.get('/chat', async (req, res,next) => {
    const { query: { lastMessage } } = req;
    const messageQuery = lastMessage ? { _id: { $gt: lastMessage } } : {};
    const chat = chatController.getMessages(messageQuery);
    const [err, data] = await asycnWrapper(chat);
    if (err) return next(err);
    res.status(200).json(data);
})

router.post('/chat', async (req, res,next) => {
    const { body:{ message } } = req;
    const chat = chatController.create({ message });
    const [err, data] = await asycnWrapper(chat);
    if (err) return next(err);
    res.status(200).json({message:"Message sent successfully"});
})

const subscribers = {};

router.get('/chat/long', async (req, res) => {
    const ID = Math.ceil(Math.random() * 1000000);
    subscribers[ID] = res;
    req.on('close', () => {
      delete subscribers[ID];
    });
});

router.post('/chat/long', async (req, res, next) => {
    const { body: { message } } = req;
    const setMessage = chatController.create({ message });
    const [err, data] = await asycnWrapper(setMessage);
    if (err) return next(err);
    Object.keys(subscribers).forEach((ID) => {
        subscribers[ID].json(data);
        delete subscribers[ID];
    });
    return res.sendStatus(204)
});
module.exports = router;