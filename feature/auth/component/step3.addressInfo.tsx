'use client';

import { useForm } from 'react-hook-form';
import { useRegister } from '../context/register.context';
import { AuthButton, AuthInput } from './auth-field';

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

  const addressReg = register('address', {
    required: 'Adres alanı zorunludur',
    minLength: { value: 10, message: 'Adres en az 10 karakter olmalıdır' },
  });
  const cityReg = register('city', {
    required: 'Şehir alanı zorunludur',
    minLength: { value: 2, message: 'Şehir en az 2 karakter olmalıdır' },
  });
  const countryReg = register('country', {
    required: 'Ülke alanı zorunludur',
    minLength: { value: 2, message: 'Ülke en az 2 karakter olmalıdır' },
  });
  const postalCodeReg = register('postalCode', {
    pattern: {
      value: /^[0-9]{5}$/,
      message: 'Geçerli bir posta kodu girin (5 haneli)',
    },
  });

  return (
    <div className="space-y-5">
      <div>
        <h2 className="card-title text-gray-900">Adres Bilgileri</h2>
        <p className="mt-1 text-sm text-gray-500">
          Teslimat ve fatura için adres bilgilerinizi girin
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthInput
          label="Adres"
          placeholder="Sokak, mahalle, bina no"
          {...addressReg}
          error={errors.address?.message}
          onChange={(e) => {
            addressReg.onChange(e);
            handleInputChange('address', e.target.value);
          }}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <AuthInput
            label="Şehir"
            placeholder="İstanbul"
            {...cityReg}
            error={errors.city?.message}
            onChange={(e) => {
              cityReg.onChange(e);
              handleInputChange('city', e.target.value);
            }}
          />

          <AuthInput
            label="Ülke"
            placeholder="Türkiye"
            {...countryReg}
            error={errors.country?.message}
            onChange={(e) => {
              countryReg.onChange(e);
              handleInputChange('country', e.target.value);
            }}
          />
        </div>

        <AuthInput
          label="Posta Kodu"
          placeholder="34000"
          {...postalCodeReg}
          error={errors.postalCode?.message}
          onChange={(e) => {
            postalCodeReg.onChange(e);
            handleInputChange('postalCode', e.target.value);
          }}
        />

        <div className="flex gap-3 pt-1">
          <AuthButton type="button" variant="secondary" className="flex-1" onClick={prevStep}>
            Geri
          </AuthButton>
          <AuthButton type="submit" className="flex-1" disabled={!isStepValid(3)}>
            Devam Et
          </AuthButton>
        </div>
      </form>
    </div>
  );
}
