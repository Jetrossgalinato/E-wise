import { SignupForm } from "../components/signup-form";

export default function SignupPage() {
  return (
    <div className="flex h-full min-h-0 box-border flex-col items-center justify-center gap-6 overflow-hidden bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}
