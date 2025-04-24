"use client";

import React from "react";
import ProcessStep from "./ProcessStep";

const HowItWorksProcess: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 items-center px-14 py-5">
      {/* Grid layout for process steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 w-full justify-center items-center">
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/907f8763e9dec19ad515bc67853d2e6e9b78071f"
          altText="Register as Student"
          title="Register as Student"
        />
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/3410264e0038f3d86c16e20136bacd02d2015d11"
          altText="Select a Subject"
          title="Select a Subject"
        />
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f77309656de223b6617202df3efcdd7a43d8d373"
          altText="Finalize Teacher"
          title="Finalize Teacher"
        />
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/291c97e655048a3b8690f585f14d6905c471d1cb"
          altText="Finalize Package"
          title="Finalize Package & Pay 75%"
        />
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/dc9c32bfdb6d15aafbbe9cf6deba929f2e11db42"
          altText="Payment Escrow"
          title="Payment goes to Escrow"
        />
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b1915352109ca27e78cb63c722af92cb5e50e744"
          altText="Teacher Teaching"
          title="Teacher starts Teaching"
        />
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c42dbf638f46775e9997980e558c3e58aeda9e5d"
          altText="Remaining Payment"
          title="Pay Remaining 25% on 50% Course Completion"
        />
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/d027c706ffcd9db13d98eca2b978f74ea36fe80b"
          altText="Refund"
          title="You Get Refund for Remaining Lectures"
        />
      </div>

      {/* Final process step */}
      <div className="w-full flex justify-center">
        <ProcessStep
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6ab5b01dd8ae71bba7270a9627a756561d9018dc"
          altText="Dispute Check"
          title="Dispute Check"
        />
      </div>
    </section>
  );
};

export default HowItWorksProcess;
