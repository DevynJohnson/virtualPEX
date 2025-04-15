import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

const Item = model('Item', itemSchema);

export default Item;