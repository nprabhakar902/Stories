var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StorySchema = new Schema({

  creator:{ type:Schema.Types.ObjectId,ref:'User'},
  content:{ type:String},
  created:{ type:Date, defalut: Date.now}
});

module.exports = mongoose.model('Story',StorySchema); 