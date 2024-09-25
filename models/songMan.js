const db = require('../config/db');
const { getAllSongs, addSong, deletSong } = require('../controller/controllman');

const songMan = {
    getAllSongs: (callback) => {
        db.query('SELECT * FROM tblSong', callback);
    },
    addSong: (newSong, callback) => {
        db.query('INSERT INTO tblSong SET ?', newSong, callback);
    },
    deleteSong: (id, callback) => {
        db.query('DELETE FROM  tblSong WHERE id = ?', [id], callback);
    },
    getSongById: (id, callback) => {
        db.query('SELECT * FROM  tblSong WHERE id = ?', [id], (err, results) => {
            if (err) {
                return callback (err, null);
            }
            return callback(null, results[0]);
        });
    },
    updatedSong: (id, updatedSong, callback) => {
        db.query('UPDATE tblSong SET ? WHERE id = ?', [updatedSong, id], callback);
    }
};

module.exports = songMan;