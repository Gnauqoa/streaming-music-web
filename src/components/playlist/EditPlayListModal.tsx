import { Button, Dialog } from "@mui/material";
import { FormProvider, RHFTextField } from "../hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export type EditPlaylistProps = {
  name: string;
  description?: string;
};
export const defaultValues: EditPlaylistProps = {
  name: "",
  description: "",
};
export const EditPlaylistSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  description: yup.string().optional(),
});

const EditPlaylistModal = ({
  open,
  onClose,
  updatePlaylist,
}: {
  updatePlaylist?: (payload: any) => void;
  open: boolean;
  onClose: () => void;
}) => {
  const methods = useForm<EditPlaylistProps>({
    resolver: yupResolver(EditPlaylistSchema), // Update resolver type
    defaultValues,
  });
  const {
    handleSubmit,
    // formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: EditPlaylistProps) => {
    if (updatePlaylist) updatePlaylist(data);
  };
  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <div className="flex flex-col bg-[#000] w-[500px] px-3 py-3">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-3">
            <RHFTextField name="name" label="Name" />
            <RHFTextField name="description" label="Description" />
            <div className="flex ml-auto">
              <Button type="submit">Update</Button>
            </div>
          </div>
        </FormProvider>
      </div>
    </Dialog>
  );
};
export default EditPlaylistModal;
