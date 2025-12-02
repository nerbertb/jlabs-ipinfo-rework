import axios from 'axios';

export const getIPInfo = async (req, res) => {
    const {ip} = req.params;

    try {
        const response = await axios.get(`https://ipinfo.io/${ip}/geo`);
        res.json(response.data);

    } catch (err) {
        console.error(err);
        res.status(500).json({message: `Server Error: ${err.message}`})
    }
}