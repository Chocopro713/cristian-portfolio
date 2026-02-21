export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/30 border-b-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
      </div>
    </div>
  );
}
