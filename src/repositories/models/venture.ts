import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    id: String,
    name: String,
    owner: Object,
    status: String,
    participants: Array
});

export default mongoose.model('ventures', schema);