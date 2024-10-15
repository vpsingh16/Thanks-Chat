import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    providerId: {type:String, unique:true, required:true},
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    profilePic: { type: String },
    coverPic: { type: String, default: "https://img.freepik.com/free-vector/people-protecting-their-cash_74855-5553.jpg"},
    provider: { type: String },
    razrpayId:{type:String},
    razrpaySecret:{type:String},
    project:{type:String},
    projectLink:{type:String},
    projectDescription:{type:String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


export default models.User || model('User', UserSchema);
