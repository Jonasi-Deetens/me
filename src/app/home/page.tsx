"use client";

import NavigationSidebar from "../components/Navbar/NavigationSidebar";

const HomePage = () => {
  return (
    <div
      className="relative w-full min-h-screen
        bg-gray-50 dark:bg-gray-950
        text-gray-900 dark:text-white 
        overflow-hidden transition-colors duration-500"
    >
      <NavigationSidebar />

      <main className="ml-24 lg:ml-72 p-8">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Welcome, I'm Jonasi Deetens
          </h1>

          <div className="prose dark:prose-invert prose-lg">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer passionate about creating elegant solutions
              to complex problems
            </p>

            <div className="bg-white/10 dark:bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/20 dark:border-white/10">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="mb-4">
                With over 5 years of experience in web development, I specialize
                in building modern web applications using React, Node.js, and
                TypeScript. I'm deeply passionate about clean code, user
                experience, and staying current with emerging technologies.
              </p>
              <p className="mb-4">
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical blog posts, or exploring new
                development tools and frameworks.
              </p>
              <div className="flex gap-4 mt-6">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-500/10 text-green-500 dark:text-green-400 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
