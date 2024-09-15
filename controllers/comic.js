import query from '../config/db.js';

const comicControllers = {
    getMyComics: async (req, res) => {
        return query('SELECT * FROM comics');
    },
    createComics: async (data) => {
        console.log('Reading to insert:', data);
        let params = [data.title, data.series, data.publisher];
        return query(
            'INSERT INTO comics (title, series, publisher) VALUES (?,?,?)',
            params
        );
    }
};

export default comicControllers;
