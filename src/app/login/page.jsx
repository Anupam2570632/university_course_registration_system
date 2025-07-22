"use client";

import { LoginForm } from "@/components/login-form";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Suspense fallback={<div>Loading login...</div>}>
          <LoginForm callbackUrl={callbackUrl} />
        </Suspense>
      </div>
    </div>
  );
}
