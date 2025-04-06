import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center max-w-md mx-auto">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-3 bg-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 mt-4"
          >
            Login
          </button>
        </form>
        <div className="flex gap-4 items-center">
          <Link
            href="/signup"
            className="text-sm hover:underline"
          >
            Don't have an account? Sign up
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