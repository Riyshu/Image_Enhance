import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import {enhancedImageAPI} from "../utils/enhanceImageApi";

const Home = () => {
  const [UploadImage, setUploadImage] = useState(null);
  const [EnhancedImage, setEnhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setloading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setloading(false);
      // code which may produce an error.
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the image. Please try again Later!");
      // code to handle the error and show message.
    }
  };

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={UploadImage}
        enhanced={EnhancedImage}
      />
    </>
  );
};

export default Home;
