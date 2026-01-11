"use client";
import { Logo as LogoIcon } from "@/src/components/logo";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import { postUser } from "@/src/actions/server/auth";
import { SignupFormData } from "@/src/types/auth/SignupFormData";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialLogin from "@/src/components/auth/SocialLogin";
import { postUser } from "@/src/actions/server/auth";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  // method 1 server method
  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    try {
      const result = await postUser(data);
      if (result?.success) {
        toast.success(`Successfully Created Accounnt`);
        router.push("/");
      } else {
        toast.error("User already exist");
      }
      setLoading(false);
    } catch {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  // method with api 2
  // const onSubmit = async (data: SignupFormData) => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`/api/register`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "applicatoin/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     response.status === 201 &&
  //       toast.success("User has been created") &&
  //       router.push("/");
  //   } catch (error) {
  //     toast.error("Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8 pb-6">
          <div>
            <Link href="/" aria-label="go home">
              <LogoIcon />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Create a Carenow Account
            </h1>
            <p className="text-sm">Welcome! Create an account to get started</p>
          </div>

          <SocialLogin />

          <hr className="my-4 border-dashed" />

          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullname" className="block text-sm">
                Full Name
              </Label>
              <Input
                type="text"
                placeholder="Enter your full name"
                {...register("fullname", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Full name must be at least 2 characters",
                  },
                })}
                id="fullname"
                className={errors.fullname ? "border-red-500" : ""}
              />
              {errors.fullname && (
                <p className="text-sm text-red-500">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="nid" className="block text-sm">
                NID
              </Label>
              <Input
                type="text"
                placeholder="Enter your National ID"
                {...register("nid", {
                  required: "NID is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "NID must contain only numbers",
                  },
                  minLength: {
                    value: 8,
                    message: "NID must be at least 8 digits",
                  },
                })}
                id="nid"
                className={errors.nid ? "border-red-500" : ""}
              />
              {errors.nid && (
                <p className="text-sm text-red-500">{errors.nid.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">
                Password
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  id="password"
                  className={`pr-10 ${errors.password ? "border-red-500" : ""}`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              {loading ? "Loading..." : "Sign Up"}
            </Button>
          </div>
        </div>

        <div className="bg-muted rounded-lg border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Have an account ?
            <Button asChild variant="link" className="px-2">
              <Link href="/login">Sign In</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
