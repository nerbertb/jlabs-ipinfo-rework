import mongoose from 'mongoose'

const ipLogSchema = new mongoose.Schema(
    {
        
        ip: {
            type: String,
            required: true,
        },
        details: {
            type: Object,
            required: true,
        },
        requestedAt: {
            type: Date,
            default: Date.now,
        },
},
{timestamps: true}
);

const Iplog = mongoose.model('Iplog', ipLogSchema);

export default Iplog;