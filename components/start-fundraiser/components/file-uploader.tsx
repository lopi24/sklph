import React, { useState } from "react";

export const FileUploader = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [fileEnter, setFileEnter] = useState(false);

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setFileEnter(false);

    let fileList: FileList | null = null;

    if (e instanceof DragEvent) {
      fileList = e.dataTransfer?.files || null;
    } else if (e.target instanceof HTMLInputElement) {
      fileList = e.target.files;
    }

    if (fileList) {
      const newFiles: File[] = Array.from(fileList);
      const fileUrls = newFiles.map((file) => URL.createObjectURL(file));
      setFiles((prevFiles) => [...prevFiles, ...fileUrls]);
    }
  };

  return (
    <div className="container px-4 w-full">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setFileEnter(true);
        }}
        onDragLeave={() => {
          setFileEnter(false);
        }}
        onDragEnd={(e) => {
          e.preventDefault();
          setFileEnter(false);
        }}
        onDrop={handleDrop}
        className={`${
          fileEnter ? "border-4" : "border-2"
        } bg-white flex flex-col w-full h-52 border-dashed items-center justify-center`}
      >
        <label
          htmlFor="file"
          className="h-full flex flex-col justify-center text-center"
        >
          Click to upload or drag and drop
        </label>
        <input
          id="file"
          type="file"
          className="hidden"
          onChange={handleDrop}
          multiple
        />
      </div>
      {/* Display all files */}
      <div className="mt-4">
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
