import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Welcome Section */}
      <section className="py-20 text-black text-center">
        <h1 className="text-5xl font-bold mb-6 bg-white">Welcome to Xterium</h1>
        <p className="text-xl mb-6 bg-white">Your trusted platform for secure and seamless digital transactions.</p>
        <p className="text-lg bg-white">Explore our features, learn about our policies, and get started today!</p>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 bg-white">About Xterium</h2>
          <p className="text-lg mb-6">
            Xterium is designed to help users manage digital assets securely. With cutting-edge security features, we ensure your transactions are fast, safe, and efficient.
          </p>
          {/* <Link
            to="/features"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500"
          >
            Learn More About Our Features
          </Link> */}
        </div>
      </section>
    </div>
  );
}
