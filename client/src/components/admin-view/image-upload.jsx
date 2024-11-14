import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useEffect, useRef } from "react";
import axios from "axios";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) => {
  const inputRef = useRef(null);

  const handleImageFileChange = (event) => {
    console.log(event.target.files)
    const selectedFile = event.target.files?.[0];
    if(selectedFile) setImageFile(selectedFile)
  };

  const uploadedImageToCloudinary = async() => {
    const data = new FormData();
    data.append("my_file", imageFile)
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/products/upload-image`, data)
    if(response.data?.success) setUploadedImageUrl(response.data.result.url)
  }

  useEffect(()=>{
    if(imageFile !== null) uploadedImageToCloudinary()
  },[imageFile])

  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div>
        <Input
          id="image-upload"
          type="file"
          ref={inputRef}
          onChange={handleImageFileChange}
        ></Input>
      </div>
    </div>
  );
};

export default ProductImageUpload;
