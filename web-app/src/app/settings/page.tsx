'use client';

import { useState } from 'react';
import { Save, User, Mail, Lock, Bell, Palette, Shield, Camera, AlertCircle, CheckCircle, Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'preferences'>('profile');
  const [settings, setSettings] = useState({
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate developer building the future with AI.',
    defaultAssistanceLevel: 'hint' as 'hint' | 'guided' | 'walkthrough',
    allowCodeSharing: true,
    theme: 'dark' as 'light' | 'dark' | 'system',
    emailNotifications: true,
    pushNotifications: false,
    aiInteractions: true,
    submissions: true,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const validatePassword = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!passwordData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordData.newPassword)) {
      newErrors.newPassword = 'Password must contain uppercase, lowercase, and number';
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSaveSuccess(true);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to save settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePassword()) return;

    setIsSaving(true);
    setSaveSuccess(false);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSaveSuccess(true);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      setErrors({ general: 'Failed to update password. Please try again.' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSettingChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const passwordStrength = getPasswordStrength(passwordData.newPassword);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#E5E7EB] mb-2">Settings</h1>
          <p className="text-[#9CA3AF] text-lg">Manage your account preferences and security</p>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-green-500">Settings saved successfully!</span>
          </div>
        )}

        {/* Error Message */}
        {errors.general && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="text-red-500">{errors.general}</span>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[#1C1F2E]">
          {[
            { id: 'profile' as const, label: 'Profile', icon: User },
            { id: 'security' as const, label: 'Security', icon: Shield },
            { id: 'preferences' as const, label: 'Preferences', icon: Palette },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-[#00FFFF] text-[#00FFFF]'
                  : 'border-transparent text-[#9CA3AF] hover:text-[#E5E7EB]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6">
              <h2 className="text-lg font-bold text-[#E5E7EB] mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-[#00FFFF]" />
                Profile Information
              </h2>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00FFFF] to-[#6C63FF] flex items-center justify-center text-3xl font-bold text-[#0A0A0A]">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-[#00FFFF] text-[#0A0A0A] rounded-full hover:bg-[#00FFFF]/90 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={settings.displayName}
                      onChange={(e) => handleSettingChange('displayName', e.target.value)}
                      className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleSettingChange('email', e.target.value)}
                      className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                      Bio
                    </label>
                    <textarea
                      value={settings.bio}
                      onChange={(e) => handleSettingChange('bio', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            {/* Password Change */}
            <form onSubmit={handlePasswordChange} className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6">
              <h2 className="text-lg font-bold text-[#E5E7EB] mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#00FFFF]" />
                Change Password
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                    className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all"
                  />
                  {errors.currentPassword && (
                    <p className="text-sm text-red-500 mt-1">{errors.currentPassword}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                    className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all"
                  />
                  {passwordData.newPassword && (
                    <div className="mt-2">
                      <div className="flex gap-2 mb-2">
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
                    </div>
                  )}
                  {errors.newPassword && (
                    <p className="text-sm text-red-500 mt-1">{errors.newPassword}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all"
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                <div className="bg-[#00FFFF]/10 border border-[#00FFFF]/30 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-[#00FFFF] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-[#E5E7EB] mb-1">Security Best Practices</h3>
                      <p className="text-sm text-[#9CA3AF]">
                        Use a strong password with at least 8 characters, including uppercase, lowercase, numbers, and special characters.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-[#0A0A0A] font-semibold"
                  loading={isSaving}
                >
                  Update Password
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className="space-y-6">
            {/* Theme Settings */}
            <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6">
              <h2 className="text-lg font-bold text-[#E5E7EB] mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-[#00FFFF]" />
                Appearance
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'light' as const, label: 'Light', icon: Sun, description: 'Always light' },
                  { value: 'dark' as const, label: 'Dark', icon: Moon, description: 'Always dark' },
                  { value: 'system' as const, label: 'System', icon: Monitor, description: 'Auto' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSettingChange('theme', option.value)}
                    className={`p-4 text-center border rounded-lg transition-all ${
                      settings.theme === option.value
                        ? 'border-[#00FFFF] bg-[#00FFFF]/10'
                        : 'border-[#1C1F2E] hover:border-[#00FFFF]/30'
                    }`}
                  >
                    <option.icon className={`w-8 h-8 mx-auto mb-2 ${settings.theme === option.value ? 'text-[#00FFFF]' : 'text-[#9CA3AF]'}`} />
                    <div className="font-medium text-[#E5E7EB]">{option.label}</div>
                    <div className="text-xs text-[#9CA3AF]">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6">
              <h2 className="text-lg font-bold text-[#E5E7EB] mb-6 flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#00FFFF]" />
                Notifications
              </h2>
              <div className="space-y-4">
                {[
                  { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive updates via email' },
                  { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser notifications' },
                  { key: 'aiInteractions', label: 'AI Interactions', desc: 'Get notified about AI helper' },
                  { key: 'submissions', label: 'Submissions', desc: 'Submission results' },
                ].map((notif) => (
                  <div key={notif.key} className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg border border-[#1C1F2E]">
                    <div>
                      <div className="font-medium text-[#E5E7EB]">{notif.label}</div>
                      <div className="text-sm text-[#9CA3AF]">{notif.desc}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings[notif.key as keyof typeof settings] as boolean}
                        onChange={(e) => handleSettingChange(notif.key, e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-[#1C1F2E] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00FFFF]" />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Settings */}
            <div className="bg-[#1C1F2E] rounded-lg border border-[#1C1F2E] p-6">
              <h2 className="text-lg font-bold text-[#E5E7EB] mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00FFFF]" />
                AI Helper Preferences
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#E5E7EB] mb-2">
                    Default Assistance Level
                  </label>
                  <select
                    value={settings.defaultAssistanceLevel}
                    onChange={(e) => handleSettingChange('defaultAssistanceLevel', e.target.value)}
                    className="w-full px-4 py-2 bg-[#0A0A0A] border border-[#1C1F2E] rounded-lg text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all"
                  >
                    <option value="hint">Hint - Conceptual hints</option>
                    <option value="guided">Guided - Detailed walkthrough</option>
                    <option value="walkthrough">Walkthrough - Full solution</option>
                  </select>
                  <p className="mt-2 text-sm text-[#9CA3AF]">
                    This is the default level when you open the AI Helper
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#0A0A0A] rounded-lg border border-[#1C1F2E]">
                  <div>
                    <div className="font-medium text-[#E5E7EB]">Allow Code Sharing</div>
                    <div className="text-sm text-[#9CA3AF]">Enable AI debugging assistance</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.allowCodeSharing}
                      onChange={(e) => handleSettingChange('allowCodeSharing', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[#1C1F2E] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00FFFF]" />
                  </label>
                </div>

                <div className="bg-[#00FFFF]/10 border border-[#00FFFF]/30 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-[#00FFFF] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-medium text-[#E5E7EB] mb-1">Privacy Notice</h3>
                      <p className="text-sm text-[#9CA3AF]">
                        When enabled, sanitized code snippets may be sent to our AI service for debugging assistance. Your full code is never stored or shared.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Save Button (for profile and preferences) */}
        {(activeTab === 'profile' || activeTab === 'preferences') && (
          <div className="flex justify-end mt-8">
            <Button
              onClick={handleSave}
              className="bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-[#0A0A0A] font-semibold"
              loading={isSaving}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
