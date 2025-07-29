import { useForm } from "react-hook-form";
import InputBox from "../components/InputBox";
import {
  SignInZodSchema,
  type SignInSchemaType,
} from "../schemas/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/Button";
import { toast, Toaster } from "sonner";
import type { AxiosResponse } from "axios";
import axios from "axios";
import { useNavigate } from "react-router";

interface SignInResponse {
  token: string;
}

const SignInPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInZodSchema),
  });

  async function SignInHandler({ email, password }: SignInSchemaType) {
    try {
      const response: AxiosResponse<SignInResponse> = await axios.post(
        "http://localhost:3000/api/v1/signin",
        {
          email,
          password,
        }
      );
      toast.success("Sign In Successfully.");
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else toast.error("Network error");
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-zinc-100 rounded-md py-8 px-4 w-110 ">
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
          <p className="text-2xl font-semibold text-center mb-4">Sign In</p>

          <form onSubmit={handleSubmit(SignInHandler)}>
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
            <Button type="submit" variant="tertiary" title="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
