'use client';

import { useForm } from 'react-hook-form';
import { Button, Checkbox } from 'rizzui';
import { useRegister } from '../context/register.context';

interface ConfirmationForm {
  termsAccepted: boolean;
  newsletterSubscription: boolean;
}

export default function Step4Confirmation() {
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

  const onSubmit = (data: ConfirmationForm) => {
    updateFormData(data);
    // Burada kayıt işlemi tamamlanacak
    console.log('Kayıt tamamlandı:', { ...formData, ...data });
    alert('Kayıt başarıyla tamamlandı!');
  };

  const handleCheckboxChange = (field: keyof ConfirmationForm, value: boolean) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Son Adım</h2>
        <p className="text-gray-600 mt-2">Bilgilerinizi kontrol edin ve onaylayın</p>
      </div>

      {/* Bilgi Özeti */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <h3 className="font-semibold text-gray-900">Bilgi Özeti</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-600">Ad Soyad:</span>
            <p className="font-medium">{formData.firstName} {formData.lastName}</p>
          </div>
          <div>
            <span className="text-gray-600">E-posta:</span>
            <p className="font-medium">{formData.email}</p>
          </div>
          <div>
            <span className="text-gray-600">Kullanıcı Adı:</span>
            <p className="font-medium">{formData.username}</p>
          </div>
          <div>
            <span className="text-gray-600">Telefon:</span>
            <p className="font-medium">{formData.phone || 'Belirtilmedi'}</p>
          </div>
          <div className="col-span-2">
            <span className="text-gray-600">Adres:</span>
            <p className="font-medium">{formData.address}, {formData.city}, {formData.country}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Checkbox
          label="Kullanım şartlarını ve gizlilik politikasını kabul ediyorum"
          {...register('termsAccepted', { 
            required: 'Kullanım şartlarını kabul etmelisiniz'
          })}
          error={errors.termsAccepted?.message}
          onChange={(e) => handleCheckboxChange('termsAccepted', e.target.checked)}
        />

        <Checkbox
          label="E-posta ile güncellemeler ve haberler almak istiyorum"
          {...register('newsletterSubscription')}
          onChange={(e) => handleCheckboxChange('newsletterSubscription', e.target.checked)}
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
            disabled={!isStepValid(4)}
          >
            Kayıt Ol
          </Button>
        </div>
      </form>
    </div>
  );
} 