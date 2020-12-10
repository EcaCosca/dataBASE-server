const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exitSchema = new Schema({
    name: {type: String},
    img: {type: String},
    aproachLat: {type: Number},
    aproachLong: {type: Number},
    aproachDescription: {type: String},
    exitLat: {type: Number},
    exitLong: {type: Number},
    exitDescription: {type: String},
    landingZoneLat: {type: Number},
    landingZoneLong: {type: Number},
    landingZoneDescription: {type: String},
    creator: {type: Schema.Types.ObjectId,ref:'User'},
    altitude: {type: number},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const Exit = mongoose.model('Exit', exitSchema);

module.exports = Exit;