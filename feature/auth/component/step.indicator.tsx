'use client';

import { useRegister } from '../context/register.context';



export default function StepIndicator() {
  const { currentStep, goToStep, isStepValid, steps } = useRegister();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const isClickable = isCompleted || isStepValid(step.id);

          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => isClickable && goToStep(step.id)}
                  disabled={!isClickable}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all
                    ${isActive 
                      ? 'bg-blue-600 text-white' 
                      : isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }
                    ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed'}
                  `}
                >
                  {isCompleted ? '✓' : step.id}
                </button>
                
                <div className="mt-2 text-center">
                  <div className={`
                    text-xs font-medium
                    ${isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}
                  `}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-400 hidden sm:block">
                    {step.description}
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`
                  flex-1 h-0.5 mx-4 transition-colors
                  ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
                `} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 