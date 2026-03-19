export default function StepProgress({ step }) {

    const steps = [
        "Basic Info",
        "Additional Info",
        "Terms",
        "Wallet"
    ];

    return (
        <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-[13px] overflow-x-auto whitespace-nowrap scrollbar-hide">

            {steps.map((item, index) => {

                const active = step === index + 1;

                return (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

                        {/* Step */}
                        <span
                            className={`pb-[2px] ${active
                                ? "text-white border-b border-white"
                                : "text-gray-400"
                                }`}
                        >
                            {index + 1}. {item}
                        </span>

                        {/* Arrow */}
                        {index < steps.length - 1 && (
                            <span className="text-gray-500">&gt;</span>
                        )}

                    </div>
                );
            })}

        </div>
    );
}