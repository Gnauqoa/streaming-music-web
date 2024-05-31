import { Button, Dialog, MenuItem } from "@mui/material";
import { useSelector } from "../../redux/store";
import { Music } from "../../@types/music";
import { FormProvider, RHFSelect } from "../hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addMusicToPlaylistAPI } from "../../apis/playlist";
import { toast } from "react-toastify";

export type AddMusicToPlaylistProps = {
  id: number;
  music_id: number;
};
export const defaultValues: AddMusicToPlaylistProps = {
  id: 0,
  music_id: 0,
};
export const AddMusicToPlaylistSchema = yup.object().shape({
  id: yup.number().required("Please select a playlist"),
  music_id: yup.number().required("Please select a music"),
});

const AddMusicModal = ({
  open,
  onClose,
  music,
}: {
  music: Music;
  open: boolean;
  onClose: () => void;
}) => {
  const methods = useForm<AddMusicToPlaylistProps>({
    resolver: yupResolver(AddMusicToPlaylistSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    // formState: { isSubmitting },
  } = methods;
  const { data } = useSelector((state) => state.playlist);
  const onSubmit = async (data: AddMusicToPlaylistProps) => {
    try {
      await addMusicToPlaylistAPI({ ...data, music_id: music.id });
      toast.success("Music added to playlist successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to add music to playlist");
    }
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
            <RHFSelect name="id">
              {data.items.map((playlist) => (
                <MenuItem key={playlist.id} value={playlist.id}>
                  {playlist.name}
                </MenuItem>
              ))}
            </RHFSelect>
            <div className="flex ml-auto">
              <Button type="submit">Add</Button>
            </div>
          </div>
        </FormProvider>
      </div>
    </Dialog>
  );
};
export default AddMusicModal;
