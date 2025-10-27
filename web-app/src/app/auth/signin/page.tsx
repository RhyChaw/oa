'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
    } catch {
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
    } catch {
      setErrors({
        general: `Failed to sign in with ${provider}. Please try again.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4 py-12">
      <div className="bg-[#1C1F2E] rounded-2xl border border-[#1C1F2E] shadow-2xl p-6 sm:p-8 w-full max-w-md hover:border-[#00FFFF]/30 transition-all">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#E5E7EB] mb-2">
            Welcome back
          </h1>
          <p className="text-[#9CA3AF]">
            Sign in to your account to continue coding
          </p>
        </div>

        {/* General Error */}
        {errors.general && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span className="text-sm text-red-500">
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
            <div className="w-full border-t border-[#1C1F2E]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#1C1F2E] text-[#9CA3AF]">
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
                className="w-4 h-4 text-[#00FFFF] bg-[#0A0A0A] border-[#1C1F2E] rounded focus:ring-[#00FFFF] focus:ring-2"
                disabled={isLoading}
              />
              <span className="text-sm text-[#9CA3AF]">
                Remember me
              </span>
            </label>

            <Link
              href="/auth/forgot-password"
              className="text-sm text-[#00FFFF] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-[#0A0A0A] rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-[#9CA3AF]">
            Don&apos;t have an account?{' '}
            <Link
              href="/auth/signup"
              className="text-[#00FFFF] hover:underline font-medium"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
