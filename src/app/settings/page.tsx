"use client"

import { useState } from "react"
import Link from "next/link"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    twoFactorAuth: false,
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <Link
            href="/"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Back to Home
          </Link>
        </div>

        <div className="space-y-6">
          {/* Profile Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Profile</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">user@example.com</p>
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Change
                </button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
                <div>
                  <h3 className="font-medium">Password</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Last changed 30 days ago</p>
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Change
                </button>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive email updates about your account</p>
                </div>
                <button
                  onClick={() => handleToggle('emailNotifications')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark mode theme</p>
                </div>
                <button
                  onClick={() => handleToggle('darkMode')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.darkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Security</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
                </div>
                <button
                  onClick={() => handleToggle('twoFactorAuth')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Danger Zone */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-red-600 dark:text-red-400">Danger Zone</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-red-200 dark:border-red-800">
                <div>
                  <h3 className="font-medium text-red-600 dark:text-red-400">Delete Account</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Permanently delete your account and all data</p>
                </div>
                <button className="text-sm text-red-600 dark:text-red-400 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 