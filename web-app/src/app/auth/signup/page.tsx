'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormInput } from '../../../components/auth/form-input';
import { SocialAuthButtons } from '../../../components/auth/social-auth-buttons';
import { Button } from '../../../components/ui/button';
import { useAppStore } from '../../../lib/store';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';

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
    } catch {
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
    } catch {
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
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-4 py-12">
      <div className="bg-[#1C1F2E] rounded-2xl border border-[#1C1F2E] shadow-2xl p-6 sm:p-8 w-full max-w-md hover:border-[#00FFFF]/30 transition-all">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#E5E7EB] mb-2">
            Create your account
          </h1>
          <p className="text-[#9CA3AF]">
            Join thousands of developers improving their skills
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
                  <div className="flex-1 bg-[#0A0A0A] rounded-full h-2">
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
                  <span className="text-xs text-[#9CA3AF]">
                    {passwordStrength <= 2 ? 'Weak' : passwordStrength <= 3 ? 'Medium' : 'Strong'}
                  </span>
                </div>
                <div className="text-xs text-[#9CA3AF]">
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
                className="w-4 h-4 text-[#00FFFF] bg-[#0A0A0A] border-[#1C1F2E] rounded focus:ring-[#00FFFF] focus:ring-2"
                disabled={isLoading}
              />
            </div>
            <div className="text-sm text-[#9CA3AF]">
              I agree to the{' '}
              <Link
                href="/terms"
                className="text-[#00FFFF] hover:underline"
                target="_blank"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="text-[#00FFFF] hover:underline"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-[#0A0A0A] rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            loading={isLoading}
            disabled={isLoading || !acceptTerms}
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>
        </form>

        {/* Sign In Link */}
        <div className="mt-8 text-center">
          <p className="text-[#9CA3AF]">
            Already have an account?{' '}
            <Link
              href="/auth/signin"
              className="text-[#00FFFF] hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
