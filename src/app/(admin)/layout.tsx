'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function Dashboard({children}:PropsWithChildren) {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div>
      <div>Layout</div>
      <main>{children}</main>
    </div>
  );
}
