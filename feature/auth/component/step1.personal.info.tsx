'use client';

import { useForm } from 'react-hook-form';
import { useRegister } from '../context/register.context';
import { AuthButton, AuthInput } from './auth-field';

interface PersonalInfoForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function Step1PersonalInfo() {
  const { formData, updateFormData, nextStep, isStepValid } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoForm>({
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    },
  });

  const onSubmit = (data: PersonalInfoForm) => {
    updateFormData(data);
    nextStep();
  };

  const handleInputChange = (field: keyof PersonalInfoForm, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="card-title text-gray-900">Kişisel Bilgiler</h2>
        <p className="mt-1 text-sm text-gray-500">
          Hesabınızı oluşturmak için temel bilgilerinizi girin
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {(() => {
            const firstNameReg = register('firstName', {
              required: 'Ad alanı zorunludur',
              minLength: { value: 2, message: 'Ad en az 2 karakter olmalıdır' },
            });
            const lastNameReg = register('lastName', {
              required: 'Soyad alanı zorunludur',
              minLength: { value: 2, message: 'Soyad en az 2 karakter olmalıdır' },
            });
            return (
              <>
                <AuthInput
                  label="Ad"
                  placeholder="Adınız"
                  {...firstNameReg}
                  error={errors.firstName?.message}
                  onChange={(e) => {
                    firstNameReg.onChange(e);
                    handleInputChange('firstName', e.target.value);
                  }}
                />
                <AuthInput
                  label="Soyad"
                  placeholder="Soyadınız"
                  {...lastNameReg}
                  error={errors.lastName?.message}
                  onChange={(e) => {
                    lastNameReg.onChange(e);
                    handleInputChange('lastName', e.target.value);
                  }}
                />
              </>
            );
          })()}
        </div>

        {(() => {
          const emailReg = register('email', {
            required: 'E-posta alanı zorunludur',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Geçerli bir e-posta adresi girin',
            },
          });
          const phoneReg = register('phone', {
            pattern: {
              value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
              message: 'Geçerli bir telefon numarası girin',
            },
          });
          return (
            <>
              <AuthInput
                label="E-posta"
                type="email"
                placeholder="ornek@sirket.com"
                {...emailReg}
                error={errors.email?.message}
                onChange={(e) => {
                  emailReg.onChange(e);
                  handleInputChange('email', e.target.value);
                }}
              />
              <AuthInput
                label="Telefon"
                type="tel"
                placeholder="+90 5XX XXX XX XX"
                {...phoneReg}
                error={errors.phone?.message}
                onChange={(e) => {
                  phoneReg.onChange(e);
                  handleInputChange('phone', e.target.value);
                }}
              />
            </>
          );
        })()}

        <AuthButton type="submit" className="w-full" disabled={!isStepValid(1)}>
          Devam Et
        </AuthButton>
      </form>
    </div>
  );
}
