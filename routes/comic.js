import express from 'express';
import comicControllers from '../controllers/comic.js';

const router = express.Router();

router.get('/mycomics', async function (req, res, next) {
    res.json(await comicControllers.getMyComics());
});

export default router;
