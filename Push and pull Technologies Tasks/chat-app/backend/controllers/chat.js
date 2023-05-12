const Chat = require('../models/chat');

const create = (data) => Chat.create(data);
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const getMessages = (lastMessage) => {
    return Chat.find(lastMessage);
}

module.exports = {
    create,
    getMessages
};