var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

mongoose.connect(require('../config.js').dbUrl);

mongoose.set('debug', true);

var CaseSchema = new Schema({
    footnumber: String,
    sex: String,
    note : String,
    date : {type:Date ,default:Date.now()}
});

exports.Case = mongoose.model('Case', CaseSchema);

var ArticleSchema = new Schema({
    content : String,
    insertDate: {type:Date, default:Date.now()}
});
exports.Article = mongoose.model('Article', ArticleSchema);

var UserSchema = new Schema({
    username: String,
    password: String,
    insertDate: {type:Date, default:Date.now()},
    parentSignInDate: Date
});
exports.User = mongoose.model('User', UserSchema);
