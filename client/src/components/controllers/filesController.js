const db = require("../models");
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const multer = require('multer');
const GridFSStorage = require('multer-gridfs-storage');

const mongoURI = 'mongodb://localhost/gridFS';

const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads')
})

const storage = new GridFSStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            })
        });
    }
});
const upload = multer({ storage });

// Defining methods for the UploadsController
module.exports = {
  findAll: function(req, res) {
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if(!files || files.length === 0) {
            res.render('index', {files: false});
        } else {
            files.map(file => {
                if(file.contentType === 'video/x-matroska') 
                {
                    file.isVideo = true;
                } else {
                    file.isVideo = false;
                } if(file.contentType === 'audio/wav')
                {
                    file.isAudio = true;
                } else {
                    file.isAudio = false;
                }
            });
            res.render('index', {files: files})
        }
    });
  },
  findById: function(req, res) {
    db.Upload
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Upload
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Upload
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Upload
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};