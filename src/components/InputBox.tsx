import { useState } from "react";
import EyeClose from "../icons/EyeClose";
import EyeOpen from "../icons/EyeOpen";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputBoxType {
  error?: string;
  register: UseFormRegisterReturn;
  type: string;
  placeholder: string;
  label: string;
}

const InputBox = ({
  error,
  register,
  type,
  placeholder,
  label,
}: InputBoxType) => {
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <div className="flex flex-col gap-1 mb-2">
      <label>{label}</label>
      <div className={`border-1 border-zinc-300 rounded-md mb-2 flex items-center p-2 ${type === "password" && "flex justify-between"}`}>
        <input
          type={type === "password" && passwordShow ? "text" : type}
          placeholder={placeholder}
          className="outline-none rounded-md w-full "
          {...register}
        />
        {type === "password" &&
          (passwordShow ? (
            <EyeOpen fn={() => setPasswordShow((prev) => !prev)} />
          ) : (
            <EyeClose fn={() => setPasswordShow((prev) => !prev)} />
          ))}
      </div>
      {error && <div className="text-red-700 text-sm"> {error}</div>}
    </div>
  );
};

export default InputBox;
