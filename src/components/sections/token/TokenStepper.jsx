const steps = ["1. KIND", "2. BASICS", "3. DETAILS", "4. FINISH"];

export default function TokenStepper({ step }) {
    return (
        <div className="mb-8 border-b border-[#1f2937]">

            <div className="flex gap-8 text-sm font-medium">
                {steps.map((s, i) => {
                    const isActive = step === i + 1;

                    return (
                        <div
                            key={i}
                            className={`relative pb-3 cursor-pointer transition-all duration-200
                ${isActive ? "text-blue-400" : "text-gray-500 hover:text-gray-300"}
              `}
                        >
                            {s}

                            {/* Active underline */}
                            {isActive && (
                                <div className="absolute left-0 bottom-0 h-[2px] w-full bg-blue-500 rounded-full" />
                            )}
                        </div>
                    );
                })}
            </div>

        </div>
    );
}