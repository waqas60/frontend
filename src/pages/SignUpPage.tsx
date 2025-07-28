import { useForm } from "react-hook-form";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpZodSchema, type SignSchemaType } from "../schemas/signUpSchema";
import { toast, Toaster } from "sonner";
import axios, { type AxiosResponse } from "axios";
import { useNavigate } from "react-router";

interface SignUpResponse {
  message: string;
  username: string;
}

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignSchemaType>({
    resolver: zodResolver(SignUpZodSchema),
  });

  async function SignUpHandler({ username, email, password }: SignSchemaType) {
    try {
      const response: AxiosResponse<SignUpResponse> = await axios.post(
        "http://localhost:3000/api/v1/signup",
        {
          username,
          email,
          password,
        }
      );
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(
          error.response.data.message + "Redirecting to Sign In Page"
        );
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
      } else toast.error("Network error");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-zinc-100 rounded-md py-8 px-4 w-110">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#10b981",
              color: "white",
              borderRadius: "10px",
              padding: "10px 20px",
              fontSize: "12px",
            },
            className: "shadow-md",
            duration: 3000,
          }}
        />

        <p className="text-2xl font-semibold text-center mb-4 ">Sign Up</p>

        <form onSubmit={handleSubmit(SignUpHandler)}>
          <InputBox
            type="text"
            register={register("username")}
            label="Username"
            error={errors.username?.message}
            placeholder="type username here ..."
          />
          <InputBox
            type="email"
            register={register("email")}
            label="Email"
            error={errors.email?.message}
            placeholder="type email here ..."
          />
          <InputBox
            type="password"
            register={register("password")}
            label="Password"
            error={errors.password?.message}
            placeholder="type password here ..."
          />
          <div className="w-full flex justify-center items-center ">
            <Button type="submit" variant="tertiary" title="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
