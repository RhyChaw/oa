'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '../../../components/auth/auth-layout';
import { FormInput } from '../../../components/auth/form-input';
import { SocialAuthButtons } from '../../../components/auth/social-auth-buttons';
import { Button } from '../../../components/ui/button';
import { useAppStore } from '../../../lib/store';
import { Mail, Lock, AlertCircle } from 'lucide-react';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export default function SignInPage() {
  const router = useRouter();
  const { setUser } = useAppStore();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful login
      const mockUser = {
        id: '1',
        displayName: 'John Doe',
        email: formData.email,
        preferences: {
          defaultAssistanceLevel: 'hint' as const,
          theme: 'dark' as const,
          allowCodeSharing: true,
          notifications: {
            email: true,
            push: true,
            aiInteractions: true,
            submissions: true,
          },
        },
        credits: 100,
        role: 'user' as const,
        createdAt: new Date().toISOString(),
      };

      setUser(mockUser);
      router.push('/dashboard');
    } catch (error) {
      setErrors({
        general: 'Invalid email or password. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider: string) => {
    setIsLoading(true);
    try {
      // Simulate social auth
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: '1',
        displayName: 'John Doe',
        email: 'john@example.com',
        preferences: {
          defaultAssistanceLevel: 'hint' as const,
          theme: 'dark' as const,
          allowCodeSharing: true,
          notifications: {
            email: true,
            push: true,
            aiInteractions: true,
            submissions: true,
          },
        },
        credits: 100,
        role: 'user' as const,
        createdAt: new Date().toISOString(),
      };

      setUser(mockUser);
      router.push('/dashboard');
    } catch (error) {
      setErrors({
        general: `Failed to sign in with ${provider}. Please try again.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Welcome back
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Sign in to your account to continue coding
          </p>
        </div>

        {/* General Error */}
        {errors.general && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
            <span className="text-sm text-red-600 dark:text-red-400">
              {errors.general}
            </span>
          </div>
        )}

        {/* Social Auth */}
        <div className="mb-8">
          <SocialAuthButtons
            onGoogleClick={() => handleSocialAuth('Google')}
            onGithubClick={() => handleSocialAuth('GitHub')}
            onAppleClick={() => handleSocialAuth('Apple')}
            loading={isLoading}
            disabled={isLoading}
          />
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              Or continue with email
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            type="email"
            label="Email address"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
            icon={<Mail className="w-4 h-4" />}
            disabled={isLoading}
            required
          />

          <FormInput
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange('password')}
            error={errors.password}
            icon={<Lock className="w-4 h-4" />}
            showPasswordToggle
            disabled={isLoading}
            required
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                disabled={isLoading}
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Remember me
              </span>
            </label>

            <Link
              href="/auth/forgot-password"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Don't have an account?{' '}
            <Link
              href="/auth/signup"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
