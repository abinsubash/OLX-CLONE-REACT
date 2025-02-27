import Google from "../../assets/google.png";
import Mobile from "../../assets/mobile.svg";
import Heart from "../../assets/love.png";
import { useModal } from "../Context/ModalContext";
import { auth, provider } from "../../Config/firebase.tsx";
import { signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";

const Modal = () => {
  const { setLoginModal } = useModal();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      Cookies.set("user", JSON.stringify(user), { expires: 7 });

      console.log("User Info Stored in Cookies:", user);
      setLoginModal(false)
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-brightness-50">
      <div className="bg-white p-5 w-100 h-screen shadow-lg relative ">
        <button
          className="absolute top-2 right-2 text-black hover:text-gray-700 cursor-pointer"
          onClick={() => {
            setLoginModal(false);
          }}
        >
          ✖
        </button>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <img src={Heart} alt="Dummy" className="mb-4 w-30 h-30" />
            <p className="text-center text-m font-semibold mb-4">
              Close deals from the comfort
              <br /> of your home.
            </p>
          </div>
          <div className="flex flex-col items-center w-full mt-10">
            <button className="w-full border-2 border-black py-2 rounded mb-2 flex px-3 hover:border-green-950 hover:border-4 hover:text-green-950">
              <img className="w-6 h-6" src={Mobile} alt="" /> Continue with
              phone
            </button>
            <button
              className="w-full border-1 border-black  py-2 px-3 rounded mb-2 flex  hover:border-green-950 hover:text-green-950 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img src={Google} alt="Google Icon" className="mr-2 w-6 h-6" />
              Continue with Google
            </button>
          </div>
          <p className="my-2 text-gray-500">OR</p>
          <a href="#" className="text-black underline">
            Login with Email
          </a>
        </div>
        <p className="text-xs mt-20 text-gray-500 text-center ">
          All your personal details are safe with us.
        </p>
        <p className=" text-xs text-gray-500 text-center">
          If you continue, you are accepting
          <a href="#" className="text-blue-500">
            {" "}
            OLX Terms and Conditions
          </a>{" "}
          and
          <a href="#" className="text-blue-500">
            {" "}
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
