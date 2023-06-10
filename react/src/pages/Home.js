import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Best Freelancing Marketplace.
            </h1>
            <p className="py-6 lg:text-lg">
              Work with the best to get the best. We help you get where you
              want. Forget rules, sign up today.
            </p>
            <a href="/register" className="btn">
              Get started
            </a>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content text-start">
          <h1 className="text-3xl font-bold">
            An excellent opportunity for your freelancing career.
          </h1>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content text-start">
          <h1 className="text-2xl font-bold">Create a free account</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
