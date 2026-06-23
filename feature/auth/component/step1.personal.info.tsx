'use client';

import { useForm } from 'react-hook-form';
import { Input, Button } from 'rizzui';
import { useRegister } from '../context/register.context';

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
    watch,
  } = useForm<PersonalInfoForm>({
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    },
  });

  const watchedValues = watch();

  const onSubmit = (data: PersonalInfoForm) => {
    updateFormData(data);
    nextStep();
  };

  const handleInputChange = (field: keyof PersonalInfoForm, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Kişisel Bilgiler</h2>
        <p className="text-gray-600 mt-2">Hesabınızı oluşturmak için temel bilgilerinizi girin</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Ad"
            placeholder="Adınız"
            {...register('firstName', { 
              required: 'Ad alanı zorunludur',
              minLength: { value: 2, message: 'Ad en az 2 karakter olmalıdır' }
            })}
            error={errors.firstName?.message}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          
          <Input
            label="Soyad"
            placeholder="Soyadınız"
            {...register('lastName', { 
              required: 'Soyad alanı zorunludur',
              minLength: { value: 2, message: 'Soyad en az 2 karakter olmalıdır' }
            })}
            error={errors.lastName?.message}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
        </div>

        <Input
          label="E-posta"
          type="email"
          placeholder="ornek@email.com"
          {...register('email', { 
            required: 'E-posta alanı zorunludur',
            pattern: { 
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Geçerli bir e-posta adresi girin'
            }
          })}
          error={errors.email?.message}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />

        <Input
          label="Telefon"
          type="tel"
          placeholder="+90 5XX XXX XX XX"
          {...register('phone', { 
            pattern: { 
              value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
              message: 'Geçerli bir telefon numarası girin'
            }
          })}
          error={errors.phone?.message}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={!isStepValid(1)}
        >
          Devam Et
        </Button>
      </form>
    </div>
  );
} 