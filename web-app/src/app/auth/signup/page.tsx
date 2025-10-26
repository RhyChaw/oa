'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '../../../components/auth/auth-layout';
import { FormInput } from '../../../components/auth/form-input';
import { SocialAuthButtons } from '../../../components/auth/social-auth-buttons';
import { Button } from '../../../components/ui/button';
import { useAppStore } from '../../../lib/store';
import { Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  displayName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const { setUser } = useAppStore();
  const [formData, setFormData] = useState<FormData>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Display Name validation
    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    } else if (formData.displayName.trim().length < 2) {
      newErrors.displayName = 'Display name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms acceptance
    if (!acceptTerms) {
      newErrors.general = 'Please accept the Terms of Service and Privacy Policy';
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful registration
      const mockUser = {
        id: '1',
        displayName: formData.displayName.trim(),
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
        general: 'Failed to create account. Please try again.',
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
        general: `Failed to sign up with ${provider}. Please try again.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <AuthLayout>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Create your account
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Join thousands of developers improving their skills
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
            type="text"
            label="Display name"
            placeholder="Enter your display name"
            value={formData.displayName}
            onChange={handleInputChange('displayName')}
            error={errors.displayName}
            icon={<User className="w-4 h-4" />}
            disabled={isLoading}
            required
          />

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

          <div>
            <FormInput
              type="password"
              label="Password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleInputChange('password')}
              error={errors.password}
              icon={<Lock className="w-4 h-4" />}
              showPasswordToggle
              disabled={isLoading}
              required
            />
            
            {/* Password Strength Indicator */}
            {formData.password && (
              <div className="mt-2">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        passwordStrength <= 2
                          ? 'bg-red-500'
                          : passwordStrength <= 3
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${(passwordStrength / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {passwordStrength <= 2 ? 'Weak' : passwordStrength <= 3 ? 'Medium' : 'Strong'}
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Must contain uppercase, lowercase, and number
                </div>
              </div>
            )}
          </div>

          <FormInput
            type="password"
            label="Confirm password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            error={errors.confirmPassword}
            icon={<Lock className="w-4 h-4" />}
            showPasswordToggle
            disabled={isLoading}
            required
          />

          {/* Terms Acceptance */}
          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                disabled={isLoading}
              />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              I agree to the{' '}
              <Link
                href="/terms"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            loading={isLoading}
            disabled={isLoading || !acceptTerms}
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>
        </form>

        {/* Sign In Link */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link
              href="/auth/signin"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
