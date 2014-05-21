var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

mongoose.connect(require('../config.js').dbUrl);

mongoose.set('debug', true);

var DoveSchema = new Schema({
    footnumber: String,
    sex: String,
    note : String,
    date : {type:Date ,default:Date.now()}
});
exports.Dove = mongoose.model('Dove', DoveSchema);

var FamilySchema = new Schema({
    insertDate: {type:Date, default:Date.now()}
});
exports.Family = mongoose.model('Family', FamilySchema);

var UserSchema = new Schema({
    username: String,
    password: String,
    insertDate: {type:Date, default:Date.now()},
    parentSignInDate: Date
});
exports.User = mongoose.model('User', UserSchema);
