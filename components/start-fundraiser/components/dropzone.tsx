import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { IoClose } from "react-icons/io5";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { FundraiserFormData } from "@/validator";
import { ExtendedFile } from "@/types";

interface DropZoneProps {
  form: UseFormReturn<FundraiserFormData>;
  files: ExtendedFile[];
  setFiles: React.Dispatch<React.SetStateAction<ExtendedFile[]>>;
}

const Dropzone = ({ files, setFiles, form }: DropZoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        const newFiles = acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ) as ExtendedFile[];
        setFiles((prevFiles) => {
          const updatedFiles = [...prevFiles, ...newFiles];
          form.setValue("images", updatedFiles); // Update form state
          return updatedFiles;
        });
      }
    },
    [form, setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
  });

  const removeFile = (name: string) => {
    setFiles((files: ExtendedFile[]) =>
      files.filter((file) => file.name !== name)
    );

    console.log(files);
  };

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <>
      <FormField
        control={form.control}
        name="images"
        render={({ field, fieldState }) => (
          <FormItem className="w-full">
            <FormControl>
              <div
                {...getRootProps()}
                className={`p-16 mt-10 border ${
                  fieldState.error ? "border-red-500" : "border-neutral-200"
                }`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
            </FormControl>
            {fieldState.error && (
              <FormMessage>{fieldState.error.message}</FormMessage>
            )}
          </FormItem>
        )}
      />

      {/* Accepted files */}
      <h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3">
        Accepted Files
      </h3>
      <ul className="mt-6 flex flex-wrap gap-6 w-full">
        {files.map((file) => (
          <li
            key={file.name}
            className="relative h-32 w-40 rounded-md shadow-lg"
          >
            <Image
              src={file.preview}
              alt={file.name}
              fill
              onLoad={() => {
                URL.revokeObjectURL(file.preview);
              }}
              className="h-full w-full object-cover rounded-md"
            />
            <button
              type="button"
              className="w-7 h-7 border rounded-full flex justify-center items-center absolute -top-3 -right-3 bg-gray-50 hover:bg-gray-100 transition-colors shadow-md"
              onClick={() => removeFile(file.name)}
            >
              <IoClose className="w-5 h-5 hover:fill-secondary-400 transition-colors" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropzone;
