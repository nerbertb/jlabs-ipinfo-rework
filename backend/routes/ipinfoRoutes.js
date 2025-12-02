import express from 'express';
import { getIPInfo } from '../controllers/ipinfoController.js';

const router = express.Router();

router.get('/:ip', getIPInfo);

export default router;