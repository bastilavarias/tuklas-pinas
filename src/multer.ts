import Multer, { memoryStorage } from "multer";

const multer = Multer({
  storage: memoryStorage(),
});

export default multer;
