import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const { user} = useAuthenticator();

  return (
    <Authenticator socialProviders={['google']}>
      {({ signOut }) => (
        <main>
          <h1>
            Thank you{' '}
            {user?.signInDetails?.loginId?.split('@')[0].replace(/\d+/g, '') || 'guest'} for signing up
          </h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;

