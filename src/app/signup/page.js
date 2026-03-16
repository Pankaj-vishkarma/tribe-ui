"use client";

import { useState } from "react";
import SignupLayout from "@/components/auth/SignupLayout";
import BasicInfoStep from "@/components/auth/BasicInfoStep";
import AdditionalInfoStep from "@/components/auth/AdditionalInfoStep";
import TermsStep from "@/components/auth/TermsStep";
import WalletStep from "@/components/auth/WalletStep";

export default function SignupPage() {

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    return (

        <SignupLayout step={step}>

            <div>

                {step === 1 && <BasicInfoStep nextStep={nextStep} />}
                {step === 2 && <AdditionalInfoStep nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <TermsStep nextStep={nextStep} prevStep={prevStep} />}
                {step === 4 && <WalletStep prevStep={prevStep} />}

            </div>

        </SignupLayout>

    );
}