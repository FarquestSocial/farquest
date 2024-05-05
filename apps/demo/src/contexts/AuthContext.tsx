// import { type ReactNode } from "react";
// import { useAccount } from "wagmi";
// import { useModal, useSIWE } from "connectkit";
// // import { useMe } from "../hooks/useMe";

// export const AuthContext = ({ children }: { children: ReactNode }) => {
//   const { isSignedIn } = useSIWE();
//   const { setOpen } = useModal();
//   useAccount({
//     onConnect() {
//       try {
//         if (!isSignedIn) {
//           setTimeout(() => {
//             setOpen(true);
//           }, 5000);
//         }
//       } catch (error) {
//         console.log("SIWE error", error);
//       }
//     },
//   });

//   return <>{children}</>;
// };
