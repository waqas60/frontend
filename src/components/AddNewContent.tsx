import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ContentSchemaZod,
  type ContentSchemaType,
} from "../schemas/contentSchema";
import InputBox from "./InputBox";
import Button from "./Button";
import axios, { type AxiosResponse } from "axios";
import { toast } from "sonner";

interface ModalType {
  fn: (open: boolean) => boolean;
  modalOpen: boolean;
}

interface AddNewContentResponse {
  message: string;
}

const AddNewContent = ({ fn, modalOpen }: ModalType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContentSchemaType>({
    resolver: zodResolver(ContentSchemaZod),
  });

  async function addContent({ title, link, type }: ContentSchemaType) {
    try {
      const response: AxiosResponse<AddNewContentResponse> = await axios.post(
        "http://localhost:3000/api/v1/content",
        {
          title,
          link,
          type,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      fn(!modalOpen);
      toast.success(response.data.message);
    } catch (error) {
      fn(!modalOpen);
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.data.message.errorResponse.code === 11000) {
          toast.success("This content already exits");
        }
      } else toast.error("Network error");
    }
  }
  return (
    <div className="w-90 ">
      <p className="text-2xl font-semibold text-center mb-4">Add Content</p>
      <form onSubmit={handleSubmit(addContent)}>
        <InputBox
          type="title"
          register={register("title")}
          label="Title"
          error={errors.title?.message}
          placeholder="type title here ..."
        />
        <InputBox
          type="type"
          register={register("type")}
          label="Type"
          error={errors.type?.message}
          placeholder="type type here ..."
        />
        <InputBox
          type="link"
          register={register("link")}
          label="Link"
          error={errors.link?.message}
          placeholder="type link here ..."
        />
        <div className="flex m-auto w-fit mt-7">
          <Button
            type="submit"
            variant="tertiary"
            title="Add Content to Your Brain"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewContent;
