import Dropzone from "@/components/start-fundraiser/components/dropzone";
import { ExtendedFile } from "@/types";
import { UseFormReturn } from "react-hook-form";
import { FundraiserFormData } from "@/validator";
import Guide from "../components/guide";
import FieldForm from "../components/fieldForm";

interface ImageFormFieldProps {
  form: UseFormReturn<FundraiserFormData>;
  files: ExtendedFile[];
  setFiles: React.Dispatch<React.SetStateAction<ExtendedFile[]>>;
}

const ImageFormField: React.FC<ImageFormFieldProps> = ({
  form,
  files,
  setFiles,
}) => {
  return (
    <div className="flex h-screen">
      <Guide />
      <FieldForm>
        <div className="flex flex-col px-2">
          <h1 className="text-lg">Upload Files</h1>
          <p className="text-sm text-gray-500">
            The images or videos you add will appear on the fundraiser page
            you're creating.
          </p>
        </div>
        <div className="px-2">
          <Dropzone form={form} files={files} setFiles={setFiles} />
        </div>
      </FieldForm>
    </div>
  );
};

export default ImageFormField;
