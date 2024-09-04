import mongoose from "mongoose";

const { Schema, model } = mongoose;


const postSchema = new Schema({
    
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    versionKey:false
});


const Post = model("Post", postSchema);

export  {Post};
