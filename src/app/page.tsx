"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TrackRecordsTable } from "@/components/track-records-table"

export default function Home() {
  const router = useRouter();
  // This would typically come from your auth context/state
  const isLoggedIn = true; // Replace with actual auth state
  const userEmail = "user@example.com"; // Replace with actual user data

  const handleLogout = () => {
    // Add your logout logic here
    router.push("/login");
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="w-full h-full relative">
          <iframe 
            src="https://player.vimeo.com/video/1058335952?h=ea22bce39e&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963" 
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
            title="Velocity Sim Lounge" 
            data-ready="true"
            style={{
              width: "auto",
              height: "100vh",
              minWidth: "100vw",
              aspectRatio: "16/9"
            }}
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <header className="w-full flex justify-end">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-solid border-white/[.145] px-4 py-2 hover:bg-white/10 text-white">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                  {userEmail[0].toUpperCase()}
                </div>
                <span className="text-sm">{userEmail}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black text-white border-white/[.145]">
                <DropdownMenuItem onClick={() => router.push("/settings")} className="text-white hover:bg-white/10">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/[.145]" />
                <DropdownMenuItem onClick={handleLogout} className="text-white hover:bg-white/10">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/login"
                className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-white/10 text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black hover:bg-white/90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Sign Up
              </Link>
            </div>
          )}
        </header>
        <main className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8">Velocity Track Records</h1>
          
          {/* Track Records Table */}
          <div className="w-full max-w-6xl">
            <TrackRecordsTable />
          </div>
        </main>
        
        
      </div>
      <footer className="w-full max-w-7xl mx-auto px-4 py-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <p>2110 Edwards St, Houston TX, 77007</p>
                <p>832-627-4981</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:underline text-white">Home</Link></li>
                <li><Link href="/login" className="hover:underline text-white">Login</Link></li>
                <li><Link href="/signup" className="hover:underline text-white">Sign Up</Link></li>
              </ul>
            </div>

            {/* How it Works */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">How it Works</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/driving-experiences" className="hover:underline text-white">Driving Experiences</Link></li>
                <li><Link href="/cars" className="hover:underline text-white">Cars</Link></li>
                <li><Link href="/tracks" className="hover:underline text-white">Tracks</Link></li>
                <li><Link href="/simulators" className="hover:underline text-white">Our Simulators</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  <Image
                    src="/tiktok.svg"
                    alt="TikTok"
                    width={24}
                    height={24}
                    className="invert"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 pt-8 border-t border-white/[.145]">
            <div className="max-w-md mx-auto text-center">
              <h3 className="font-semibold text-lg mb-4">Don&apos;t Miss Out</h3>
              <p className="text-sm mb-4">Get the latest news and racing information straight to your inbox!</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 rounded-lg border border-white/[.145] bg-transparent text-white placeholder-white/70 z-100"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-white text-black px-4 py-2 hover:bg-white/90 transition-colors z-100"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-white/60">
            © Copyright {new Date().getFullYear()}, Velocity Sim Lounge
          </div>
        </footer>
    </div>
  );
}
