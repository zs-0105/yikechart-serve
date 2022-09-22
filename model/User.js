var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
    name: String,
    psw: String,
    email: String,
    sex: {
        type: String,
        default: 'asexual'
    },
    birth: Date,
    phone: Number,
    explain: String,
    imgUrl: {
        type: String,
        default: 'user.png'
    },
    time: Date
});

var FriendSchema = mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    friendID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    state: String,
    time: Date
})

var MessageSchema = mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    friendID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    message: String,
    types: String,
    time: Date,
    state: Number
})

var GroupSchema = mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    imgUrl: {
        type: String,
        default: 'group.png'
    },
    time: Date,
    notice: String
})

var GroupUserSchema = mongoose.Schema({
    groupID: {
        type: mongoose.Types.ObjectId,
        ref: 'Group'
    },
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    tip: { //未读消息数
        type: Number,
        default: 0
    },
    time: Date, //加入时间
    shield: Number //是否屏蔽消息
})

var GroupMsgSchema = mongoose.Schema({
    groupID: {
        type: mongoose.Types.ObjectId,
        ref: 'Group'
    },
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    message: String,
    types: String,
    time: Date
})