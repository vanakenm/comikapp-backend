import express from 'express';
import comicControllers from '../controllers/comic.js';

const router = express.Router();

router.get('/mycomics', async function (req, res, next) {
    res.json(await comicControllers.getMyComics());
});

router.post('/addcomic', async function (req, res, next) {
    console.log(req);
    console.log(req.body);
    res.json(await comicControllers.createComics(req.body));
});

export default router;
