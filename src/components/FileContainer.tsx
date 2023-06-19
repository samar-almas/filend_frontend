import { useState } from "react";
import ShareFile from "./ShareFile";
import UploadFile from "./UploadFile";

const FileUpload = () => {
  const [file, setFile] = useState<File | undefined>();
  const [showToast, setShowToast] = useState<boolean>(false);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0]);
  }

  const handleCopyToClipboard = () => {
    if (file) {
      const textField = document.createElement("textarea");
      textField.innerText = file.name;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const stopSharing = () => {
    const confirmation = window.confirm(`Changes you made may not be saved.`);

    if (confirmation) {
      setFile(undefined);
    }
  };

  return (
    <>
      {file ? (
        <ShareFile
          file={file}
          stopSharing={stopSharing}
          handleCopyToClipboard={handleCopyToClipboard}
          showToast={showToast}
        />
      ) : (
        <UploadFile handleUpload={handleUpload} />
      )}
    </>
  );
};

export default FileUpload;
