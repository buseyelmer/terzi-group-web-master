'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RegisterFormData {
  // Adım 1: Kişisel Bilgiler
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Adım 2: Hesap Bilgileri
  username: string;
  password: string;
  confirmPassword: string;
  
  // Adım 3: Adres Bilgileri
  address: string;
  city: string;
  country: string;
  postalCode: string;
  
  // Adım 4: Onay
  termsAccepted: boolean;
  newsletterSubscription: boolean;
}

interface RegisterContextType {
  currentStep: number;
  formData: RegisterFormData;
  updateFormData: (data: Partial<RegisterFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  isStepValid: (step: number) => boolean;
  totalSteps: number;
  steps: { id: number; title: string; description: string }[];
}

const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

const initialFormData: RegisterFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  username: '',
  password: '',
  confirmPassword: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
  termsAccepted: false,
  newsletterSubscription: false,
};

export const RegisterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData);
  const totalSteps = 4;

  const steps = [
    { id: 1, title: 'Kişisel Bilgiler', description: 'Temel bilgileriniz' },
    { id: 2, title: 'Hesap Bilgileri', description: 'Güvenlik ayarları' },
    { id: 3, title: 'Adres Bilgileri', description: 'Teslimat adresi' },
    { id: 4, title: 'Onay', description: 'Son kontrol' },
  ];

  const updateFormData = (data: Partial<RegisterFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email);
      case 2:
        return !!(formData.username && formData.password && formData.confirmPassword && 
                 formData.password === formData.confirmPassword);
      case 3:
        return !!(formData.address && formData.city && formData.country);
      case 4:
        return formData.termsAccepted;
      default:
        return false;
    }
  };

  const value: RegisterContextType = {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    goToStep,
    isStepValid,
    totalSteps,
    steps,
  };

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error('useRegister must be used within a RegisterProvider');
  }
  return context;
}; 