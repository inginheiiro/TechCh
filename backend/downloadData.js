const wget = require('wget-improved');
const fs = require('fs');
const concat = require('concat-files');

const data = [{
    name: 'Green Dataset',
    src: 'https://s3.amazonaws.com/infrastructure.sketch.cloud/fullstack-code-test/green_tripdata_2018-01_01-15.csv',
    output: './docker_db/data/green.csv',
    header: './docker_db/data/Header_green.csv'
}, {
    name: 'Yellow Dataset',
    src: 'https://s3.amazonaws.com/infrastructure.sketch.cloud/fullstack-code-test/yellow_tripdata_2018-01_01-15.csv',
    output: './docker_db/data/yellow.csv',
    header: './docker_db/data/Header_yellow.csv'
}, {
    name: 'Zones Dataset',
    src: 'https://s3.amazonaws.com/infrastructure.sketch.cloud/fullstack-code-test/zones.csv',
    output: './docker_db/data/zones.csv'
}
];


function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


data.forEach(element => {
    const options = {};

    let download = wget.download(element.src, `${element.output}_tmp`, options);
    download.on('error', function (err) {
        console.log(err);
    });
    download.on('start', function (fileSize) {
        console.log(`Downloading ${element.name} with ${formatBytes(fileSize)}`);
    });
    download.on('end', function (output) {

        // Has header ? them concat
        if (element.header) {
            concat([
                element.header,
                `${element.output}_tmp`,
            ], element.output, function (err) {
                if (err) throw err
                console.log(`Ended ${element.name} `);
                try {
                    // remove temporary
                    fs.unlinkSync(`${element.output}_tmp`);
                    //file removed
                } catch (err) {
                    console.error(err)
                }
            });
        } else {
            // No header, just rename
            fs.renameSync(`${element.output}_tmp`, element.output);
            console.log(`Ended ${element.name} Download`);
        }

    });


});

