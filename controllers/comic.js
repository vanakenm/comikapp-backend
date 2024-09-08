import query from '../config/db.js';

const comicControllers = {
    getMyComics: async (req, res) => {
        return query('SELECT * FROM comics');
    }
};

export default comicControllers;
