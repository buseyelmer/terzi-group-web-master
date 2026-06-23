'use client';

import { Check } from 'lucide-react';
import { useRegister } from '../context/register.context';

export default function StepIndicator() {
  const { currentStep, goToStep, isStepValid, steps } = useRegister();

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between gap-1 sm:gap-2">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const isClickable = isCompleted || isStepValid(step.id);

          return (
            <div key={step.id} className="flex min-w-0 flex-1 items-start">
              <div className="flex min-w-0 flex-1 flex-col items-center">
                <button
                  type="button"
                  onClick={() => isClickable && goToStep(step.id)}
                  disabled={!isClickable}
                  className={`
                    flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all sm:h-10 sm:w-10
                    ${isActive ? 'bg-brand text-white shadow-md shadow-brand/25' : ''}
                    ${isCompleted ? 'bg-brand/15 text-brand' : ''}
                    ${!isActive && !isCompleted ? 'bg-gray-100 text-gray-400' : ''}
                    ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed'}
                  `}
                >
                  {isCompleted ? <Check className="h-4 w-4" strokeWidth={2.5} /> : step.id}
                </button>

                <div className="mt-2 hidden text-center sm:block">
                  <div
                    className={`text-xs font-semibold leading-tight ${
                      isActive ? 'text-brand' : isCompleted ? 'text-gray-700' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
              </div>

              {index < steps.length - 1 ? (
                <div
                  className={`mx-1 mt-4 h-0.5 min-w-[12px] flex-1 transition-colors sm:mx-2 ${
                    isCompleted ? 'bg-brand/40' : 'bg-gray-200'
                  }`}
                />
              ) : null}
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-sm font-medium text-gray-700 sm:hidden">
        {steps.find((s) => s.id === currentStep)?.title}
      </p>
    </div>
  );
}
