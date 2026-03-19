"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import TokenHeader from "@/components/sections/token/TokenHeader";
import TokenStepper from "@/components/sections/token/TokenStepper";

import KindStep from "@/components/sections/token/steps/KindStep";
import BasicsStep from "@/components/sections/token/steps/BasicsStep";
import DetailsStep from "@/components/sections/token/steps/DetailsStep";
import FinishStep from "@/components/sections/token/steps/FinishStep";

export default function TokenPage() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        category: "",
        type: "",
        name: "",
        project: "Personal Project",
        thumbnail: null,
        description: "",
        properties: [{ key: "", value: "" }],
        unlockable: false,
        unlockableType: "file",
        link: "",
        file: null,
        isSeries: false,
        seriesValue: "",
        isForSale: false,
        price: "",
        currency: "ETH",
        isGift: false,
    });

    // ✅ Validation per step
    const isStepValid = () => {
        if (step === 1) return !!formData.type;
        if (step === 2) return !!formData.name;
        return true;
    };

    // ✅ Safe Next
    const next = () => {
        if (!isStepValid()) return;
        setStep((prev) => Math.min(prev + 1, 4));
    };

    // ✅ Safe Back
    const back = () => {
        setStep((prev) => Math.max(prev - 1, 1));
    };

    const isValid = isStepValid();

    // ✅ Render Step
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <KindStep
                        formData={formData}
                        setFormData={setFormData}
                        next={next}
                        isValid={isValid}
                    />
                );

            case 2:
                return (
                    <BasicsStep
                        formData={formData}
                        setFormData={setFormData}
                        next={next}
                        back={back}
                        isValid={isValid}
                    />
                );

            case 3:
                return (
                    <DetailsStep
                        formData={formData}
                        setFormData={setFormData}
                        next={next}
                        back={back}
                    />
                );

            case 4:
                return (
                    <FinishStep
                        formData={formData}
                        back={back}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <MainLayout>
            <div className="w-full px-4 sm:px-6 py-4 sm:py-6 text-white max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-4 sm:mb-6">
                    <TokenHeader />
                </div>

                {/* Stepper */}
                <div className="mb-6 sm:mb-8">
                    <TokenStepper step={step} />
                </div>

                {/* Step Content */}
                <div>
                    {renderStep()}
                </div>

            </div>
        </MainLayout>
    );
}