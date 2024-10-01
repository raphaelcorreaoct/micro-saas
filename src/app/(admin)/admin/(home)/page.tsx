'use client';

import { Button } from '@/components/ui/button';
import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();
  
  return (
    <div>
      <h1>Welcome, {session?.user?.email}</h1>
      <pre>
        <code>
          {JSON.stringify(session, null,3)}
        </code>
      </pre>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
