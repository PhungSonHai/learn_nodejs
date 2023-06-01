const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, max: 255 },
    description: { type: String, max: 600 },
    image: { type: String, max: 255, default: 'nodejs.png' },
    videoId: { type: String, max: 255 },
    slug: { type: String, slug: 'name', unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Course', Course);