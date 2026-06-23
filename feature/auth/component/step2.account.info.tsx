'use client';

import { useForm } from 'react-hook-form';
import { useRegister } from '../context/register.context';
import { AuthButton, AuthInput } from './auth-field';

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

  const usernameReg = register('username', {
    required: 'Kullanıcı adı zorunludur',
    minLength: { value: 3, message: 'Kullanıcı adı en az 3 karakter olmalıdır' },
    pattern: {
      value: /^[a-zA-Z0-9_]+$/,
      message: 'Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir',
    },
  });
  const passwordReg = register('password', {
    required: 'Şifre zorunludur',
    minLength: { value: 8, message: 'Şifre en az 8 karakter olmalıdır' },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      message: 'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir',
    },
  });
  const confirmPasswordReg = register('confirmPassword', {
    required: 'Şifre tekrarı zorunludur',
    validate: (value) => value === watchedPassword || 'Şifreler eşleşmiyor',
  });

  const onSubmit = (data: AccountInfoForm) => {
    updateFormData(data);
    nextStep();
  };

  const handleInputChange = (field: keyof AccountInfoForm, value: string) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="card-title text-gray-900">Hesap Bilgileri</h2>
        <p className="mt-1 text-sm text-gray-500">
          Güvenli bir hesap oluşturmak için bilgilerinizi girin
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthInput
          label="Kullanıcı Adı"
          placeholder="kullanici_adi"
          {...usernameReg}
          error={errors.username?.message}
          onChange={(e) => {
            usernameReg.onChange(e);
            handleInputChange('username', e.target.value);
          }}
        />

        <AuthInput
          label="Şifre"
          type="password"
          placeholder="••••••••"
          {...passwordReg}
          error={errors.password?.message}
          hint="En az 8 karakter, büyük/küçük harf ve rakam içermelidir."
          onChange={(e) => {
            passwordReg.onChange(e);
            handleInputChange('password', e.target.value);
          }}
        />

        <AuthInput
          label="Şifre Tekrar"
          type="password"
          placeholder="••••••••"
          {...confirmPasswordReg}
          error={errors.confirmPassword?.message}
          onChange={(e) => {
            confirmPasswordReg.onChange(e);
            handleInputChange('confirmPassword', e.target.value);
          }}
        />

        <div className="flex gap-3 pt-1">
          <AuthButton type="button" variant="secondary" className="flex-1" onClick={prevStep}>
            Geri
          </AuthButton>
          <AuthButton type="submit" className="flex-1" disabled={!isStepValid(2)}>
            Devam Et
          </AuthButton>
        </div>
      </form>
    </div>
  );
}
