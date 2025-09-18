// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="text-center p-10 rounded-2xl shadow-lg bg-white/90 max-w-md border border-orange-200">
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-orange-500">404</h1>

        {/* Cute emoji/illustration */}
        <div className="text-5xl my-4">{"🧭"}</div>

        {/* Message */}
        <p className="text-gray-700 text-lg">
          Looks like you&apos;ve lost your way.  
          Don&apos;t worry, let&apos;s get you back home!
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition-transform hover:scale-105"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
