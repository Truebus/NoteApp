import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const NotePad = mongoose.model('noteapp', NoteSchema);
export default NotePad;
