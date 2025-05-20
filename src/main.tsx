import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

// Configure Amplify with the backend details from amplify_outputs.json
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator socialProviders={['google']}>
      {({ signOut, user }) => (
        <main>
          <h1>
            Thank you{' '}
            {user?.signInDetails?.loginId?.split('@')[0].replace(/\d+/g, '') || 'guest'} for signing up
          </h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  </React.StrictMode>
);
