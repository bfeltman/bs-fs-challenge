import express from 'express';
import * as games from './controllers/games';
const router = express.Router();

router.get('/games/:league', games.getGames);

export default router;
