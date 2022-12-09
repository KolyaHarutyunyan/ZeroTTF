import { useDropzone } from "react-dropzone";
import { useFileUpload } from "../hooks";
import AllPagesPDFViewer from "./AllPagesPDF";

const DocumentUploadingArea = () => {
  const { file, handleFileChange } = useFileUpload();

  const onDrop = (acceptedFiles) => {
    handleFileChange(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpeg"],
    },
    onDrop,
  });

  return (
    <div className="document-container" {...getRootProps()}>
      <input {...getInputProps()} />
    {file ? (
      <div className="document-container__file-box">
        {file.type === "application/pdf" ? (
          <AllPagesPDFViewer pdf={file.url} />
        ) : (
          <img src={file.url} alt="..." />
        )}
      </div>
    ) : (
      <p>Document uploading area</p>
    )}
    </div>
  );
};

export default DocumentUploadingArea;
