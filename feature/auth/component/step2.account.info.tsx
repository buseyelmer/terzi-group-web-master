'use client';

import { useForm } from 'react-hook-form';
import { Input, Button } from 'rizzui';
import { useRegister } from '../context/register.context';

interface AccountInfoForm {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function Step2AccountInfo() {
  const { formData, updateFormData, nextStep, prevStep, isStepValid } = useRegister();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AccountInfoForm>({
    defaultValues: {
      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },
  });

  const watchedPassword = watch('password');

  const onSubmit = (data: AccountInfoForm) => {
    updateFormData(data);
    nextStep();
  };

  const handleInputChange = (field: keyof AccountInfoForm, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Hesap Bilgileri</h2>
        <p className="text-gray-600 mt-2">Güvenli bir hesap oluşturmak için bilgilerinizi girin</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Kullanıcı Adı"
          placeholder="kullanici_adi"
          {...register('username', { 
            required: 'Kullanıcı adı zorunludur',
            minLength: { value: 3, message: 'Kullanıcı adı en az 3 karakter olmalıdır' },
            pattern: { 
              value: /^[a-zA-Z0-9_]+$/,
              message: 'Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir'
            }
          })}
          error={errors.username?.message}
          onChange={(e) => handleInputChange('username', e.target.value)}
        />

        <Input
          label="Şifre"
          type="text"
          placeholder="••••••••"
          {...register('password', { 
            required: 'Şifre zorunludur',
            minLength: { value: 8, message: 'Şifre en az 8 karakter olmalıdır' },
            pattern: { 
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message: 'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir'
            }
          })}
          error={errors.password?.message}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />

        <Input
          label="Şifre Tekrar"
          type="text"
          placeholder="••••••••"
          {...register('confirmPassword', { 
            required: 'Şifre tekrarı zorunludur',
            validate: (value) => value === watchedPassword || 'Şifreler eşleşmiyor'
          })}
          error={errors.confirmPassword?.message}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
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
            disabled={!isStepValid(2)}
          >
            Devam Et
          </Button>
        </div>
      </form>
    </div>
  );
} 