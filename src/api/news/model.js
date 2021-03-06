import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

export default mongoose.model('news', NewsSchema);

