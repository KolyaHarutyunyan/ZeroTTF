import { useState } from "react";

export const useFileUpload = (image) => {
  const [file, setFile] = useState(image);

  const handleFileChange = (e) => {
    setFile({
      url: URL.createObjectURL(
        new File([e[0]], "image", { type: "text/json;charset=utf-8" })
      ),
      id: Date.now(),
      type: e[0].type
    });
  };

  return {
    file,
    handleFileChange,
  };
};
