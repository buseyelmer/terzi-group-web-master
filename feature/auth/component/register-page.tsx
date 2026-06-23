"use client";

import Link from "next/link";
import { useState } from "react";
import { RegisterProvider, useRegister } from "../context/register.context";
import { authContent } from "../data/content";
import { AuthShell } from "./auth-shell";
import Step1PersonalInfo from "./step1.personal.info";
import Step2AccountInfo from "./step2.account.info";
import Step3AddressInfo from "./step3.addressInfo";
import Step4Confirmation from "./step4.confirmation";
import StepIndicator from "./step.indicator";

function RegisterForm({ onComplete }: { onComplete: () => void }) {
  const { currentStep } = useRegister();

  return (
    <>
      <StepIndicator />
      {currentStep === 1 && <Step1PersonalInfo />}
      {currentStep === 2 && <Step2AccountInfo />}
      {currentStep === 3 && <Step3AddressInfo />}
      {currentStep === 4 && <Step4Confirmation onComplete={onComplete} />}
      {currentStep === 1 ? (
        <p className="mt-6 text-center text-xs leading-relaxed text-gray-400">
          Kurumsal hesap başvuruları 1–2 iş günü içinde değerlendirilir.
        </p>
      ) : null}
    </>
  );
}

function RegisterSuccess() {
  const { register: registerCopy } = authContent;

  return (
    <div className="space-y-6 text-center">
      <div className="rounded-xl border border-brand/20 bg-brand-lighter/40 px-6 py-10">
        <p className="text-base leading-relaxed text-gray-700">
          {registerCopy.successMessage}
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-dark"
      >
        {registerCopy.backHome}
      </Link>
    </div>
  );
}

export function RegisterPage() {
  const [completed, setCompleted] = useState(false);
  const { register: registerCopy } = authContent;

  return (
    <AuthShell
      wide
      title={completed ? registerCopy.successTitle : registerCopy.title}
      subtitle={completed ? "" : registerCopy.subtitle}
      footer={
        completed ? undefined : (
          <>
            {registerCopy.hasAccount}{" "}
            <Link href="/giris" className="font-semibold text-brand hover:text-brand-dark">
              {registerCopy.loginLink}
            </Link>
          </>
        )
      }
    >
      <RegisterProvider>
        {completed ? (
          <RegisterSuccess />
        ) : (
          <RegisterForm onComplete={() => setCompleted(true)} />
        )}
      </RegisterProvider>
    </AuthShell>
  );
}
