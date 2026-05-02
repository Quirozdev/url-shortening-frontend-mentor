import { LandingButton } from "@/features/landing/components/LandingButton";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import * as z from "zod";

const defaultValues = {
  url: "",
};

const userSchema = z.object({
  url: z.string().min(1, "Please add a link").url("Link must be valid"),
});

type FormValues = z.infer<typeof userSchema>;

export function URLShortenerForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(userSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-7xl flex-col gap-x-6 gap-y-4 rounded-[10px] bg-purple-950 bg-[url(/images/bg-shorten-mobile.svg)] bg-top-right bg-no-repeat px-16 py-14 @3xl:flex-row @3xl:bg-[url(/images/bg-shorten-desktop.svg)] @3xl:bg-cover"
    >
      <div className="flex flex-1 flex-col gap-2">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={clsx(
            "3xl:text-preset-5-medium text-preset-7-medium rounded-[10px] bg-white px-8 py-4 text-gray-900 outline-none",
            errors.url && "border-4 border-red-400 text-red-400",
          )}
          {...register("url")}
        />
        {errors?.url && (
          <span className="text-preset-7-medium text-red-400 italic">
            {errors.url?.message}
          </span>
        )}
      </div>
      <LandingButton
        text="Shorten It!"
        size="large"
        disabled={!isValid && isDirty}
        className="@3xl:text-preset-5-bold text-preset-6-bold h-fit rounded-[10px]"
        type="submit"
      />
    </form>
  );
}
