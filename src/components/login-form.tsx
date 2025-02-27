"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon, Lock, User } from "lucide-react";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            LOGIN
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">NIP</Label>
                <div className="flex justify-center items-center rounded-lg overflow-hidden bg-[#D7E3FE]">
                  <div className="p-2 bg-primary">
                    <User color="#ffffff" />
                  </div>
                  <Input
                    id="email"
                    placeholder="Masukkan NIP"
                    className="w-full h-full rounded-none borded-none shadow-none bg-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative flex justify-center items-center rounded-lg overflow-hidden bg-[#D7E3FE]">
                  <div className="p-2 bg-primary">
                    <Lock color="#ffffff" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan Password"
                    className="w-full h-full rounded-none borded-none shadow-none bg-transparent focus-visible:ring-0"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent focus-visible:ring-0"
                    onClick={() => setShowPassword((prev) => !prev)}
                    // disabled={disabled}
                  >
                    {" "}
                    {showPassword ? (
                      <EyeIcon className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                    )}
                  </Button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full"
                onClick={() => router.push("/")}
              >
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <a
                href="#"
                className="ml-auto text-primary font-semibold inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
