import { initFirebase } from "@/firebase/firebaseConfig";


export default function verifyEmail() {
  initFirebase();

  return (
    <>
      <div className="flex flex-col items-center mt-32">
        <div className="mb-10 text-white">
          <h2 className="font-lato">VERIFY YOUR EMAIL</h2>
        </div>
        <div className="text-white">
          <p className="font-lato">
            Please check your email for a verification link.
          </p>
        </div>
      </div>
    </>
  );
}
