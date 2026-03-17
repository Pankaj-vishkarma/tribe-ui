"use client";

import { useEffect, useRef } from "react";

export default function WalletModal({ onClose, onConnect }) {

    const modalRef = useRef(null);

    // ✅ ESC KEY CLOSE
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // ✅ CLICK OUTSIDE CLOSE
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >

            {/* Modal Box */}
            <div
                ref={modalRef}
                className="bg-[#111111] border border-white/10 rounded-[14px] w-[420px] px-8 py-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >

                {/* Title */}
                <h3 className="text-white text-[18px] font-medium mb-6 leading-snug">
                    Get started with the decentralized web.
                </h3>

                {/* Description */}
                <p className="text-[#9CA3AF] text-[13px] leading-[20px] mb-8">
                    Connect your wallet to start collecting and managing your assets securely.
                </p>

                {/* Button */}
                <button
                    onClick={() => {
                        onConnect();
                        onClose();
                    }}
                    className="w-full border border-white/20 text-white text-[14px] py-[10px] rounded-full hover:bg-white hover:text-black transition"
                >
                    Connect Wallet
                </button>

                {/* Close */}
                <button
                    onClick={onClose}
                    className="mt-4 text-[12px] text-gray-400 hover:text-white transition"
                >
                    Cancel
                </button>

            </div>

        </div>
    );
}