import { SVG3D } from "3dsvg";
import GlobalBackground from "@/components/global-background";
import { ThemeProvider } from "@/components/theme-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${spaceGrotesk.variable} h-screen antialiased`}
      suppressHydrationWarning
    >
      <body className="h-screen static">
        <GlobalBackground />
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NotFoundCard />
        </ThemeProvider>
      </body>
    </html>
  );
}

function NotFoundCard() {
  const icon = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>cross</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-469.000000, -1041.000000)" fill="#000000">
            <path d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48" id="cross" sketch:type="MSShapeGroup">

</path>
        </g>
    </g>
</svg>`;
  return (
    <>
      <header>
        <SVG3D
          svg={icon}
          smoothness={0.6}
          color="#000000"
          animate="spinFloat"
        />
      </header>
      <main className="flex flex-col items-center justify-between mx-auto">
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="./images/avatar.webp"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardTitle className="font-bold">
              404 - OPPS! PAGE NOT FOUND
            </CardTitle>
            <CardDescription>
              SORRY, THE PAGE YOU'RE LOOKING FOR DOESN'T EXIST
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">
              <a href={"/"}>◀ RETURN HOME</a>
            </Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="absolute bottom-0">
        <Separator />
        <div className="w-screen flex flex-wrap items-center justify-center gap-2 p-4">
          <Badge></Badge>
          <p className="text-sm font-medium">
            © 2026 BrowserBot · All rights reserved.
          </p>
        </div>
        <Separator />
      </footer>
    </>
  );
}
