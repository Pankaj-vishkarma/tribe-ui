import Image from "next/image";
import StepProgress from "@/components/auth/StepProgress";

export default function SignupLayout({ children, step }) {
    return (
        <div className="min-h-screen text-white flex flex-col relative overflow-hidden bg-[#0f0f0f]">

            {/* Background radial */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,#2a2a2a_0%,#1a1a1a_40%,#0f0f0f_80%)]" />

            {/* vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.9)_100%)]" />

            {/* Header */}
            <div className="relative h-[72px] flex items-center justify-between px-10 border-b border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#111]">

                <Image
                    src="/images/Logo Copy.png"
                    alt="Tribe Logo"
                    width={36}
                    height={30}
                />

                <StepProgress step={step} />

                <div className="w-[36px]" />

            </div>


            {/* Content */}
            <div className="relative flex flex-1 justify-center items-start pt-[120px]">

                {/* Wrapper for glow + card */}
                <div className="relative flex justify-center items-center">

                    {/* Glow */}
                    <div className="absolute w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_25%,rgba(0,0,0,0)_60%)] blur-[120px] opacity-80" />

                    {/* Parent Box */}
                    <div className="relative w-[664px] rounded-[12px] border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.04)] p-[56px]">

                        {children}

                    </div>

                </div>

            </div>

        </div>
    );
}