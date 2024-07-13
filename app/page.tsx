import Welcome from "./components/welcome";
import Sidebar from "./components/sidebar";

const homePageCode = `
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to TransCoder</h1>
      <p className="mt-4 text-lg text-gray-700">
        Transform your code effortlessly with our advanced conversion tools.
      </p>
      <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
`;

const vueCode = `
<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-4xl font-bold text-blue-500">Welcome to TransCoder</h1>
    <p class="mt-4 text-lg text-gray-700">
      Transform your code effortlessly with our advanced conversion tools.
    </p>
    <button class="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
      Get Started
    </button>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
/* You can add scoped styles here */
</style>
`;

export default function Home() {
  return (
    <main className="bg-[#1E1E1E] flex lg:flex-row flex-col  w-full">
      <Sidebar />

      <section className="w-full lg:ml-[230px] ml-0">
        <Welcome />
        {/* <About/> */}
      </section>
    </main>
  );
}
