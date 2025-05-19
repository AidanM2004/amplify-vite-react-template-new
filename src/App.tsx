import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';

const client = generateClient<Schema>();


function App() {
  const { user, signOut } = useAuthenticator();
  

  return (
    <main>
      <h1>Thank you {user?.signInDetails?.loginId?.split('@')[0].replace(/\d+/g, '')} for signing up</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
