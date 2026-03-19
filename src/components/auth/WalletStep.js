"use client";

import { useRouter } from "next/navigation";

export default function WalletStep({ prevStep }) {

    const router = useRouter();

    const handleFinish = () => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("walletConnected", "true");
        router.push("/home");
    };

    const handleSkip = () => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("walletConnected", "false");
        router.push("/home");
    };

    return (

        <div className="w-full max-w-[527px] mx-auto px-4 sm:px-0 space-y-5 sm:space-y-6 text-[13px] sm:text-[14px] text-gray-300 pb-10 sm:pb-12">

            {/* Heading */}
            <h2 className="text-[14px] sm:text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                Please connect your wallet
            </h2>

            {/* Wallet instructions */}
            <div className="space-y-3 sm:space-y-4 text-gray-400 leading-relaxed">

                <p className="text-gray-300">
                    Text depending on Metamask status:
                </p>

                <p>
                    - (No Metamask installed): It looks like you don't have Metamask installed.
                    You can do this later. To create Tribes and Products, you need Metamask and ETH.
                    Click here to find out more and get started.
                </p>

                <p>
                    - (Metamask on wrong network): You are on /Network Name/, please change
                    your network to Mainnet.
                </p>

                <p>
                    - Metamask installed but not unlocked: Click here /Button/ to unlock
                    Metamask.
                </p>

                <p>
                    - ONLY POPUP Metamask authorization for the first time here.
                </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-6 sm:pt-8">

                <button
                    onClick={prevStep}
                    className="border border-white text-white w-[60px] h-[28px] rounded-full text-[12px] sm:text-[13px] hover:bg-white hover:text-black transition"
                >
                    Back
                </button>

                <button
                    onClick={handleSkip}
                    className="border border-white text-white w-[60px] h-[28px] rounded-full text-[12px] sm:text-[13px] hover:bg-white hover:text-black transition"
                >
                    Skip
                </button>

                <button
                    onClick={handleFinish}
                    className="border border-white text-white w-[60px] h-[28px] rounded-full text-[12px] sm:text-[13px] hover:bg-white hover:text-black transition"
                >
                    Finish
                </button>

            </div>

        </div>

    );
}