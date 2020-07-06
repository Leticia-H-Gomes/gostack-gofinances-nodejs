import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

export default {
  directory: path.resolve(__dirname, '..', '..', 'tmp'),
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
