import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

const Auth: React.FC = () => {
    return (
        <div className="auth-container">
            <Authenticator>
                {({ signOut, user }) => (
                    <main>
                        <h1>Welcome {user?.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        </div>
    );
};

export default Auth; 