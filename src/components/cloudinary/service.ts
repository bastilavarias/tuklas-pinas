import cloudinary from "cloudinary";
import { CloudinaryImageMeta } from "./typeDefs";

const cloudinaryV2 = cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryService = {
  upload: async (file: File, folder: string): Promise<CloudinaryImageMeta> => {
    let meta: CloudinaryImageMeta;
    try {
      const folderPath = `${process.env.CLOUDINARY_ROOT_FOLDER_NAME}/${folder}`;
      const uploadOptions = {
        folder: folderPath,
        use_filename: true,
      };
      // @ts-ignore
      const result = await cloudinaryV2.uploader.upload(file, uploadOptions);
      meta = {
        url: result.secure_url,
        publicID: result.public_id,
      };
    } catch (err) {
      meta = {
        url: "",
        publicID: "",
      };
    }
    return meta;
  },

  delete: async (publicID: string) => {
    try {
      // @ts-ignore
      await cloudinaryV2.uploader.destroy(publicID);
    } catch (error) {
      console.log(error);
    }
  },
};

export default cloudinaryService;
