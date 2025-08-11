"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <OtherHome />
    </SessionProvider>
  );
}

function OtherHome() {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" && (
        <button onClick={() => signOut()}>sign out</button>
      )}
      {session.status === "unauthenticated" && (
        <button onClick={() => signIn()}>sign in</button>
      )}
    </div>
  );
}
