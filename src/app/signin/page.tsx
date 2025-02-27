import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="bg-white grid grid-cols-2 gap-4">
        <img
          src="/login-image.png"
          alt="/login-image.png"
          className="w-full h-full object-contain"
        />
        <LoginForm />
      </div>
    </div>
  );
}
