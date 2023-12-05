import { initFirebase } from "@/firebase/firebaseConfig";
import EmailVerification from "../components/emailVerification/EmailVerification";


export default function verifyEmail() {
  initFirebase();

  return (
    <>
      <EmailVerification />
    </>
  );
}
