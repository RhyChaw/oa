'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthLayout } from '../../../components/auth/auth-layout';
import { FormInput } from '../../../components/auth/form-input';
import { Button } from '../../../components/ui/button';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <AuthLayout showBackButton={false}>
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto text-center animate-scale-in">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Check your email
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            We&apos;ve sent a password reset link to{' '}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              {email}
            </span>
          </p>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
            Didn&apos;t receive the email? Check your spam folder or{' '}
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail('');
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              try again
            </button>
          </p>
          
          <Link href="/auth/signin">
            <Button className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Back to Sign In
            </Button>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Forgot password?
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            No worries, we&apos;ll send you reset instructions
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            type="email"
            label="Email address"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            icon={<Mail className="w-4 h-4" />}
            disabled={isLoading}
            required
          />

          <Button
            type="submit"
            className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send reset link'}
          </Button>
        </form>

        {/* Back to Sign In */}
        <div className="mt-8 text-center">
          <Link
            href="/auth/signin"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Sign In</span>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
