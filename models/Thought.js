const { Schema, Types, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
       thoughtText : {
        type : String,
        required : true,
        maxlength : 280,
       },
       createdAt : {
        type : Date,
        default: Date.now,
       },
       username : {
            type : String,
            required : true,
        },
        reactions: [reactionSchema],
       },
       {
        toJSON: {
            virtuals: true,
        },
        id: false,
       }    
);

thoughtSchema
     .virtual('reactionCount')
     .get(function () {
        return this.reactions.length;
     });

 const Thought = model('thought' , thoughtSchema);
 
 module.exports = Thought;