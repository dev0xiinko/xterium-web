import React from "react";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <section className="text-center">
        <h1 className="text-[4em] leading-none font-bold mb-6">
          Welcome to Xterium
        </h1>
        <div className="text-center mt-8">
          <h2 className="text-xl mb-2 leading-none">
            Your trusted platform for secure and seamless digital transactions.
          </h2>
          <p className="text-sm text-slate-500 leading-none">
            Explore our features, learn about our policies, and get started
            today!
          </p>
        </div>
      </section>
    </div>
  );
}
