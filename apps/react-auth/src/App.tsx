// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useExperimentalFarcasterSigner, usePrivy } from "@privy-io/react-auth";

function App() {
  const { ready, authenticated, login, user } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);
  const { requestFarcasterSigner } = useExperimentalFarcasterSigner();
  const farcasterAccount = user?.linkedAccounts.find(
    (account) => account.type === "farcaster"
  );
  const enableFarcasterSign = ready && authenticated && farcasterAccount;
  // if (farcasterAccount?.signerPublicKey) {
  //   window.location.replace("http://localhost:3000");
  // }

  return (
    <>
      <h1>Farquest Auth</h1>
      <div className="card">
        {ready && !authenticated && (
          <button type="button" disabled={disableLogin} onClick={login}>
            Log in with Privy
          </button>
        )}

        {farcasterAccount.signerPublicKey && (
          <p>
            You should be automatically redirected. Your signer pubkey is
            <code> {farcasterAccount.signerPublicKey}</code>
          </p>
        )}

        {ready && authenticated && (
          <button
            type="button"
            onClick={() => requestFarcasterSigner()}
            // Prevent requesting a Farcaster signer if a user has not already linked a Farcaster account
            // or if they have already requested a signer
            disabled={!enableFarcasterSign || farcasterAccount.signerPublicKey}
          >
            Authorize my Farcaster signer
          </button>
        )}
      </div>
    </>
  );
}

export default App;
