function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Welcome to the Home Page</h1>

        <p className="text-gray-700 text-center mb-8">
          This is the main landing page of your application. Here you can explore different features, view announcements,
          or navigate to your respective dashboard.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-5 rounded-lg border border-blue-300 shadow text-blue-800">
            <h2 className="text-lg font-semibold mb-2">About the Platform</h2>
            <p className="text-sm">
              Learn how our system helps admins and users manage tasks efficiently and securely.
            </p>
          </div>

          <div className="bg-blue-100 p-5 rounded-lg border border-blue-300 shadow text-blue-800">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <p className="text-sm">
              Discover tools like user management, report viewing, and dynamic form handling.
            </p>
          </div>

          <div className="bg-blue-100 p-5 rounded-lg border border-blue-300 shadow text-blue-800">
            <h2 className="text-lg font-semibold mb-2">User Guide</h2>
            <p className="text-sm">
              Need help? Our documentation walks you through how to get started and use every feature.
            </p>
          </div>

          <div className="bg-blue-100 p-5 rounded-lg border border-blue-300 shadow text-blue-800">
            <h2 className="text-lg font-semibold mb-2">Contact Support</h2>
            <p className="text-sm">
              Have questions or issues? Reach out to our support team for quick assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
