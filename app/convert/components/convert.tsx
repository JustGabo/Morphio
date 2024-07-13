"use client";
import React, { Suspense } from "react";
import Editor from "./editor";

const ConvertPage = () => {
  return (
    <Suspense>
      <main>
        <Editor />
      </main>
    </Suspense>
  );
};

export default ConvertPage;
