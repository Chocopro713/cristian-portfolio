import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
