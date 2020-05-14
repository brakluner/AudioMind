var mongoose = require('mongoose');
var Schema = mongoose.Schema
// est mongodb connexion
mongoose.connect('mongodb://127.0.0.1/gridFS');
var conn = mongoose.connection;
var path = require('path');
//require gridfs
var Grid = require('gridfs-stream');
// require filesystem module
var fs = require('fs');

//where to find video in the filesystem that we will store in the db
var videoPath = path.join(__dirname, "./readFrom/200Back.mp4");

// connect Gridfs abd mongo
Grid.mongo = mongoose.mongo;

conn.once('open', function () {
    console.log('- Connection open -');
    var gfs = Grid(conn.db);

    var writestream = gfs.createWriteStream({
        filename: 'swimVid.mp4'
    });

    fs.createReadStream(videoPath).pipe(writestream);

    writestream.on('close', function (file) {

        console.log(file.filename + 'Written To DB');
    });
});
