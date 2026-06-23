'use client';

import { useForm } from 'react-hook-form';
import { Input, Button } from 'rizzui';
import { useRegister } from '../context/register.context';

interface AddressInfoForm {
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export default function Step3AddressInfo() {
  const { formData, updateFormData, nextStep, prevStep, isStepValid } = useRegister();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressInfoForm>({
    defaultValues: {
      address: formData.address,
      city: formData.city,
      country: formData.country,
      postalCode: formData.postalCode,
    },
  });

  const onSubmit = (data: AddressInfoForm) => {
    updateFormData(data);
    nextStep();
  };

  const handleInputChange = (field: keyof AddressInfoForm, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Adres Bilgileri</h2>
        <p className="text-gray-600 mt-2">Teslimat bilgileriniz için adres bilgilerinizi girin</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Adres"
          placeholder="Sokak, Mahalle, Bina No"
          {...register('address', { 
            required: 'Adres alanı zorunludur',
            minLength: { value: 10, message: 'Adres en az 10 karakter olmalıdır' }
          })}
          error={errors.address?.message}
          onChange={(e) => handleInputChange('address', e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Şehir"
            placeholder="İstanbul"
            {...register('city', { 
              required: 'Şehir alanı zorunludur',
              minLength: { value: 2, message: 'Şehir en az 2 karakter olmalıdır' }
            })}
            error={errors.city?.message}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
          
          <Input
            label="Ülke"
            placeholder="Türkiye"
            {...register('country', { 
              required: 'Ülke alanı zorunludur',
              minLength: { value: 2, message: 'Ülke en az 2 karakter olmalıdır' }
            })}
            error={errors.country?.message}
            onChange={(e) => handleInputChange('country', e.target.value)}
          />
        </div>

        <Input
          label="Posta Kodu"
          placeholder="34000"
          {...register('postalCode', { 
            pattern: { 
              value: /^[0-9]{5}$/,
              message: 'Geçerli bir posta kodu girin (5 haneli)'
            }
          })}
          error={errors.postalCode?.message}
          onChange={(e) => handleInputChange('postalCode', e.target.value)}
        />

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={prevStep}
          >
            Geri
          </Button>
          
          <Button
            type="submit"
            className="flex-1"
            disabled={!isStepValid(3)}
          >
            Devam Et
          </Button>
        </div>
      </form>
    </div>
  );
} 