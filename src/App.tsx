function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Crypto Dashboard
        </h1>
        <p className="text-gray-600">
          Tailwind CSS is working! 🎉
        </p>
        <div className="mt-10 flex gap-2">
          <span className="text-crypto-green">↑ +5.2%</span>
          <span className="text-crypto-red">↓ -3.1%</span>
        </div>
      </div>
    </div>
  );
}

export default App
