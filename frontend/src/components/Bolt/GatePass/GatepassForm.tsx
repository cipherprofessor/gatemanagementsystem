import React, { useState } from 'react'; // Import useState
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../../../store/authStore';
import { supabase } from '../../../../lib/supabase';

interface GatepassFormData {
  purpose: string;
  validFrom: string;
  validUntil: string;
}

export default function GatepassForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GatepassFormData>();
  const user = useAuthStore((state) => state.user);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: GatepassFormData) => {
    if (!user) {
      setErrorMessage('You must be logged in to submit a request.');
      setSubmissionStatus('error');
      return;
    }
    setSubmissionStatus('submitting');
    try {
      const { error } = await supabase.from('gatepasses').insert([
        {
          userId: user.id,
          purpose: data.purpose,
          validFrom: data.validFrom,
          validUntil: data.validUntil,
          status: 'pending',
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmissionStatus('success');
      setErrorMessage(null);
      // Optionally, reset the form here using form.reset() if you want it to clear after submission
      // Reset the form here is an option if you want to clear the form after successful submission, you can uncomment the line below
      // reset();
    } catch (error: any) {
      console.error('Error creating gatepass:', error);
      setErrorMessage(
        error.message || 'An error occurred while submitting the request.'
      );
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Request Gatepass</h2>
      {submissionStatus === 'success' && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            {' '}
            Your request has been submitted successfully.
          </span>
        </div>
      )}

      {submissionStatus === 'error' && errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {errorMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Purpose
          </label>
          <textarea
            {...register('purpose', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Valid From
            </label>
            <input
              type="datetime-local"
              {...register('validFrom', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Valid Until
            </label>
            <input
              type="datetime-local"
              {...register('validUntil', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}
