'use client';

import { useSearchParams } from 'next/navigation';
import { LoginForm } from '@/components/login-form';

export default function LoginClient() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return <LoginForm callbackUrl={callbackUrl} />;
}
