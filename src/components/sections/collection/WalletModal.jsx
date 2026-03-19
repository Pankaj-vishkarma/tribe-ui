"use client";

import { useEffect, useRef } from "react";

export default function WalletModal({ onClose, onConnect }) {

    const modalRef = useRef(null);

    // ESC CLOSE
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // OUTSIDE CLICK
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        >

            {/* Modal Box */}
            <div
                ref={modalRef}
                className="bg-[#111111] border border-white/10 rounded-[14px] w-full max-w-[420px] px-5 sm:px-6 lg:px-8 py-6 sm:py-7 lg:py-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >

                {/* Title */}
                <h3 className="text-white text-[16px] sm:text-[17px] lg:text-[18px] font-medium mb-4 sm:mb-5 lg:mb-6 leading-snug">
                    Get started with the decentralized web.
                </h3>

                {/* Description */}
                <p className="text-[#9CA3AF] text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] mb-6 sm:mb-7 lg:mb-8">
                    Connect your wallet to start collecting and managing your assets securely.
                </p>

                {/* Button */}
                <button
                    onClick={() => {
                        onConnect();
                        onClose();
                    }}
                    className="w-full border border-white/20 text-white text-[13px] sm:text-[14px] py-2.5 sm:py-[10px] rounded-full hover:bg-white hover:text-black active:scale-95 transition"
                >
                    Connect Wallet
                </button>

                {/* Close */}
                <button
                    onClick={onClose}
                    className="mt-3 sm:mt-4 text-[11px] sm:text-[12px] text-gray-400 hover:text-white transition"
                >
                    Cancel
                </button>

            </div>

        </div>
    );
}