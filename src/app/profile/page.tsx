import Link from "next/link";
import Header from "../components/Header";
import Social from "../components/Social";
import { IoClose } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-full">
        <div
            className="w-full h-screen fixed bg-black/50 flex justify-center items-center"
        >

            <div
                className="bg-[#101828] w-4/12 rounded-xl p-4"
            >

                <div
                    className="border-b border-[#344054] flex flex-row justify-center items-center h-[80px] mb-4"
                >
                    <p
                        className="text-2xl font-bold text-white"
                    >
                        Create your profile
                    </p>

                    <Link
                        href={"/"}
                    >
                        <IoClose className="text-white font-medium ml-8 text-xl" />
                    </Link>
                </div>

                <form>
                    <div
                        className="flex flex-col mb-4 w-full"
                    >
                        <label 
                            className="text-[#EAECF0] text-lg font-medium mb-2"
                        >
                            Username
                        </label>
                        <input 
                            type="text"
                            placeholder="enter username"
                            id="userName"
                            className="outline-none bg-[#1D2939] h-[52px] rounded-lg border-2 border-[#344054] p-2"
                        />
                    </div>

                    <div
                        className="flex flex-col mb-4 w-full"
                    >
                        <label 
                            className="text-[#EAECF0] text-lg font-medium mb-2"
                        >
                            Bio
                        </label>
                        <textarea 
                            rows={5}
                            className="outline-none bg-[#1D2939] rounded-lg border-2 border-[#344054] p-2"
                        />
                    </div>

                    <button
                        className='w-full h-[52px] bg-slate-500/50 py-2 px-4 rounded-xl text-white font-medium text-lg'
                    >
                        Continue
                    </button>

                    <div
                        className="border-t border-[#344054] flex flex-row justify-center items-center h-[80px] mt-4"
                    >
                        <p className="font-normal text-xs text-[#98A2B3] text-center">
                            By connecting your wallet, you agree to our Terms of Service and Privacy Policy
                        </p>
                    </div>
                </form>

            </div>


        </div>

      <Header />

      <div
        className="p-4 w-full flex flex-row justify-center"
      >
        <Social />
      </div>
    </div>
  );
}
