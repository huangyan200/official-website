const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center bg-[#0a0e1a] text-white">
      <h1 className="text-6xl font-bold text-blue-400">404</h1>
      <p className="mt-4 text-blue-100/80">Page not found.</p>
      <a href="/" className="mt-6 inline-block px-4 py-2 rounded-sm bg-blue-600 hover:bg-blue-700">
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
