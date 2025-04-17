"use client";

import NavigationSidebar from "../components/Navbar/NavigationSidebar";
import Profile from "../components/Page/Profile";
import Header from "../components/Page/Header";
const HomePage = () => {
  return (
    <div className="flex">
      <NavigationSidebar />

      <main className="p-8 w-full">
        <Header title="Jonasi Deetens" subtitle="CV" gradient={false} />
        <section className="mx-auto max-w-6xl">
          <Profile />

          <div className="prose dark:prose-invert prose-lg mt-8">
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
              <div className="flex gap-4 mt-6 flex-wrap">
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
