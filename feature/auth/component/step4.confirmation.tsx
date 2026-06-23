'use client';

import { useForm } from 'react-hook-form';
import { useRegister } from '../context/register.context';
import { AuthButton, AuthCheckbox } from './auth-field';

interface ConfirmationForm {
  termsAccepted: boolean;
  newsletterSubscription: boolean;
}

type Step4ConfirmationProps = {
  onComplete?: () => void;
};

export default function Step4Confirmation({ onComplete }: Step4ConfirmationProps) {
  const { formData, updateFormData, prevStep, isStepValid } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmationForm>({
    defaultValues: {
      termsAccepted: formData.termsAccepted,
      newsletterSubscription: formData.newsletterSubscription,
    },
  });

  const termsReg = register('termsAccepted', {
    required: 'Kullanım şartlarını kabul etmelisiniz',
  });
  const newsletterReg = register('newsletterSubscription');

  const onSubmit = (data: ConfirmationForm) => {
    updateFormData(data);
    onComplete?.();
  };

  const handleCheckboxChange = (field: keyof ConfirmationForm, value: boolean) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="card-title text-gray-900">Son Adım</h2>
        <p className="mt-1 text-sm text-gray-500">Bilgilerinizi kontrol edin ve onaylayın</p>
      </div>

      <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-900">Bilgi Özeti</h3>
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-gray-500">Ad Soyad</dt>
            <dd className="font-medium text-gray-900">
              {formData.firstName} {formData.lastName}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">E-posta</dt>
            <dd className="font-medium text-gray-900">{formData.email}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Kullanıcı Adı</dt>
            <dd className="font-medium text-gray-900">{formData.username}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Telefon</dt>
            <dd className="font-medium text-gray-900">{formData.phone || 'Belirtilmedi'}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-gray-500">Adres</dt>
            <dd className="font-medium text-gray-900">
              {formData.address}, {formData.city}, {formData.country}
            </dd>
          </div>
        </dl>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AuthCheckbox
          label="Kullanım şartlarını ve gizlilik politikasını kabul ediyorum"
          {...termsReg}
          error={errors.termsAccepted?.message}
          onChange={(e) => {
            termsReg.onChange(e);
            handleCheckboxChange('termsAccepted', e.target.checked);
          }}
        />

        <AuthCheckbox
          label="E-posta ile güncellemeler ve kampanyalardan haberdar olmak istiyorum"
          {...newsletterReg}
          onChange={(e) => {
            newsletterReg.onChange(e);
            handleCheckboxChange('newsletterSubscription', e.target.checked);
          }}
        />

        <div className="flex gap-3 pt-1">
          <AuthButton type="button" variant="secondary" className="flex-1" onClick={prevStep}>
            Geri
          </AuthButton>
          <AuthButton type="submit" className="flex-1" disabled={!isStepValid(4)}>
            Kayıt Ol
          </AuthButton>
        </div>
      </form>
    </div>
  );
}
