import axios from 'axios';
import Iplog from '../models/ipLogModel.js';

export const getIPInfo = async (req, res) => {
    const {ip} = req.params;

    try {
        const response = await axios.get(`https://ipinfo.io/${ip}/geo`);
        const data = response.data;

        // Log the IP info to the database
        const logEntry = await Iplog.create({
            ip,
            details: data,
        });

        res.json({
            success: true,
            data,
            logId: logEntry._id,
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch IP info.',
        })
    }
}