// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { useExperimentalFarcasterSigner, usePrivy } from "@privy-io/react-auth";
import { treaty } from "@elysiajs/eden";
import type { App } from "../../server/src";

function App() {
  const api = treaty<App>("https://api.farquest.social");

  const [reqSent, setReqSent] = useState(false);
  const { ready, authenticated, login, user } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);
  const { requestFarcasterSigner } = useExperimentalFarcasterSigner();
  const farcasterAccount = user?.farcaster;
  const enableFarcasterSign = ready && authenticated && farcasterAccount;
  // if (farcasterAccount?.signerPublicKey) {
  //   window.location.replace("http://localhost:3000");
  // }
  const { getAccessToken } = usePrivy();

  const params = new URLSearchParams(window.location.search);
  const state = params.get("state");

  // async function fetchData

  useEffect(() => {
    (async function () {
      if (reqSent) return;
      console.log("inside fetchData	");
      const accessToken = await getAccessToken();
      console.log("accessToken", accessToken);

      // const url = "http://localhost:3000/auth/callback";

      try {
        // const response = await fetch(url, {
        //   method: "POST",
        //   headers: {
        //     authorization: accessToken as string,
        //     farquestapikey: "1fe5ce.afbccea670f467da160c672be081d3fc0",
        //   },
        //   body: JSON.stringify({ state }),
        // });

        console.log("before api req");
        console.log("state", state);
        const response = await api.auth.callback.post(
          {
            state: state as string,
          },
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
              farquestapikey: "1fe5ce.afbccea670f467da160c672be081d3fc0",
            },
          }
        );
        setReqSent(true);
        console.log("response", response.data);
        const redirectUrl = response.data;
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // } else {
        //   const data = await response.json();
        //   console.log("res", data);
        //   setReqSent(true);
        //   return data;
        // }
      } catch (error) {
        console.error("error", error);
      }
    })();
  }, [farcasterAccount?.signerPublicKey]);

  // useEffect(() => {
  //   fetchData();
  // }, [farcasterAccount?.signerPublicKey]);

  return (
    <>
      <h1>Farquest Auth</h1>
      <div className='card'>
        {ready && !authenticated && (
          <button
            type='button'
            disabled={disableLogin}
            onClick={login}
          >
            Log in with Privy
          </button>
        )}

        {farcasterAccount?.signerPublicKey && (
          <p>
            You should be automatically redirected. Your signer pubkey is
            <code> {farcasterAccount.signerPublicKey}</code>
          </p>
        )}

        {ready && authenticated && (
          <button
            type='button'
            onClick={() => requestFarcasterSigner()}
            // Prevent requesting a Farcaster signer if a user has not already linked a Farcaster account
            // or if they have already requested a signer
            disabled={
              !enableFarcasterSign || !!farcasterAccount.signerPublicKey
            }
          >
            Authorize my Farcaster signer
          </button>
        )}
      </div>
    </>
  );
}

export default App;
