const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const crypto = require('crypto');
const morgan = require('morgan');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFSStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const app = express();

//middleware

app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use(morgan('tiny'));



//mongoURI


const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/gridFS"

// create mongo connection
const conn = mongoose.createConnection(mongoURI);

// init gfs 
let gfs;

conn.once('open', () => {
    //init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
})

//create storage object/engine (action='/upload' on html form inits this)

const storage = new GridFSStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                // const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: file.originalname,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            })
        });
    }
});
const upload = multer({ storage });

// @route GET /
// desxcription lasds form

app.get('/api/', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0) {
            res.json([])
        } else {
            files.map(file => {
                if (file.contentType === 'video/x-matroska') {
                    file.isVideo = true;
                } else {
                    file.isVideo = false;
                } if (file.contentType === 'audio/wav' || file.contentType === 'audio/mpeg'
                    || file.contentType === 'audio/mp3' || file.contentType === 'audio/mpeg-4'
                    || file.contentType === 'audio/m4a' || file.contentType === 'audio/mp4'
                    || file.contentType === 'audio/x-m4a') {
                    file.isAudio = true;
                } else {
                    file.isAudio = false;
                }
            });
            res.send(files)
        }
    });
});

// @routse /upload
// description uploads file (name=file on html form connects to 'file' here)

app.post('/upload', upload.single('file'), (req, res) => {
    // res.json({file: req.file})
    res.redirect('/');
})

// @route GET /files
// description displays all files in JSON
app.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'no files exist'
            });
        }

        //files exist
        return res.json(files);
    });
})

// @route GET /files/:filename
// description displays single files in JSON
app.get('/files/:id', (req, res) => {
    gfs.files.find({_id: req.params.id}, (err, file) => {
        //check if files
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'no files exist'
            });
        }

        //file exists
        return res.json(file);
    });
});


// @route PUT /files/:filename
// description updates file tto add to favorites
app.put('/files/:filename', (req, res) => {

    // crypto.randomBytes(16, (err, buf) => {
    //     if (err) throw err;
    // const filename = buf.toString('hex')

    gfs.files.findOneAndUpdate({filename: req.params.filename}, { $set: {'isFavorite': 'true'}}, 
         {upsert: true})
    res.redirect('/')
    
    });
// })
// @route PUT /videofiles/:filename
// description updates file tto add to videofavorites
app.put('/videofiles/:filename', (req, res) => {

    // crypto.randomBytes(16, (err, buf) => {
    //     if (err) throw err;
    //     const filename = buf.toString('hex')

    gfs.files.findOneAndUpdate({filename: req.params.filename}, { $set: {'isFavoriteVideo': 'true'}}, 
         {upsert: true})
    res.redirect('/')
});
    

    
// @route update false /files/:filename
//description delets file by filename. used for upserts
app.put('/tagfiles/:filename', (req, res) => {
    
    crypto.randomBytes(16, (err, buf) => {
        if (err) throw err;
    const filename = buf.toString('hex')

    gfs.files.findOneAndUpdate({filename: req.params.filename}, { $set: {'isFavorite': 'false','isFavoriteVideo': 'false'}}, 
         {upsert: true})
    res.redirect('/')
    
    });
})


// @route GET /files/:filename
// description displays a video in JSON
app.get('/video/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        //check if files
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'no files exist'
            });
        }
        //check if video
        if (file.contentType === 'video/x-matroska') {
            //REad output to brower
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not a Video'
            });
        }
    });
});

// @route GET /files/:filename
// description displays all audio files in JSON
app.get('/audio/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        //check if files
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'no files exist'
            });
        }
        //check if video
        if (file.contentType === 'audio/wav' || file.contentType === 'audio/mpeg'
            || file.contentType === 'audio/mp3' || file.contentType === 'audio/mpeg-4'
            || file.contentType === 'audio/m4a' || file.contentType === 'audio/mp4'
            || file.contentType === 'audio/x-m4a') {
            //REad output to brower
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not audio'
            });
        }
    });
});

// @route DELETE /files/:id
//description delets file
app.delete('/files/:id', (req, res) => {
    gfs.remove({ _id: req.params.id, root: 'uploads' }, {files_id: req.params.id}, (err, gridStore) => {
        if (err) {
            return res.status(404).json({ err: err });
        }

        res.redirect('/')
    })
})



// if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
//   }

const port = process.env.PORT || 3001;

app.listen(port, console.log(`Server started on port ${port}`));