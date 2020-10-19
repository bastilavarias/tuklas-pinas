import Multer, { diskStorage } from "multer";

const multer = Multer({
  storage: diskStorage({
    destination(_request, _file, callback) {
      callback(null, process.cwd() + "/tmp/files");
    },
  }),
});

export default multer;
