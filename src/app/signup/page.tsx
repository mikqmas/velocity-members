"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Here you would typically make an API call to register the user
    // For now, we'll just simulate a successful signup
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // If signup is successful, navigate to home page
      router.push("/");
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle error appropriately
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center max-w-md mx-auto">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-3 bg-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-3 bg-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-3 bg-transparent"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-3 bg-transparent"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 mt-4"
          >
            Sign Up
          </button>
        </form>
        <div className="flex gap-4 items-center">
          <Link
            href="/login"
            className="text-sm hover:underline"
          >
            Already have an account? Login
          </Link>
          <Link
            href="/"
            className="text-sm hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
} 