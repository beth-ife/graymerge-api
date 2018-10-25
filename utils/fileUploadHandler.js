'use strict';
const cloudinary = require('cloudinary');
const path = require('path');

//I should probably use environment variables for this though;
cloudinary.config({
    cloud_name: 'hofv6okv5',
    api_key: '789494583111471',
    api_secret: 'P01Vb1ffnLOpVzeDa9C0Xh0Ww6g'
});


module.exports = (uploads) => {
    return new Promise((resolve, reject) => {
        let uploaded_files = [];


        let length = typeof(uploads)==='object'? (Object.keys(uploads)).length:0; //using this to determine when all the files have been uploaded

        //looping through files and uploading 1 at a time because Cloudinary doesn't do bulk upload
        for (let i in uploads) {

            let upload;
            if (Array.isArray(uploads)) {
                upload = uploads[i];
            } else {
                upload = uploads;
            }

            /****
             *  what say we make new_file_name a random number
             *  for that extra dramatic effect? ;)
             */

            let mime_type = (upload.mimetype);

            let ext = (mime_type.split('/'))[1];

            const file_name = (Math.floor((Math.random() * 98093857) + 87654) + upload.name) + '.' + ext;
            const file = path.join(__dirname, `../public/uploads/${file_name}`);

            //move the file
            upload.mv(file, (err) => {
                if (err) {
                    reject(err);
                } else {
                    cloudinary.uploader.upload(file, (result) => {
                        uploaded_files.push(result.url);
                        length--;
                        if (length === 0) {
                            resolve(uploaded_files);
                        }

                    });

                }

            })


        }


    })


}