import React from "react";
import { SVG3D } from "3dsvg";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const icon = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
<rect height="7.5" width="12.5" y="5.75" x="1.75"/>
<path d="m10.75 8.75v1.5m-5.5-1.5v1.5m-.5-7.5 3.25 3 3.25-3"/>
</svg>`;
  return (
    <div className="h-svh">
      <header className="max-w-full">
        <SVG3D svg={icon} smoothness={0.6} color="#000000" animate="spin" />
      </header>
      <main>{children}</main>

      <footer className="mt-10 flex items-center justify-center font-medium">
        <p className="text-sm">© 2026 BrowserBot · All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
