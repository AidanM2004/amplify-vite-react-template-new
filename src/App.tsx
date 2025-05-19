import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>
      <h1>
        Thank you {user?.signInDetails?.loginId?.split('@')[0].replace(/\d+/g, '')} for signing up
      </h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
