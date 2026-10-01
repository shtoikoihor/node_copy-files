'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function copyFile() {
  const file = process.argv[2];
  const fileCopy = process.argv[3];

  if (!file || !fileCopy) {
    console.error('Not enough arguments');

    return;
  }

  const resolvedFile = path.resolve(file);
  const resolvedFileCopy = path.resolve(fileCopy);

  if (resolvedFile === resolvedFileCopy) {
    return;
  }

  fs.copyFile(file, fileCopy, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

copyFile();
