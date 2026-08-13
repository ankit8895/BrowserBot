import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        forceRedirectUrl="/"
        appearance={{
          variables: {
            colorPrimary: "#ffdc58",
            colorBackground: "#fff7e8",
            colorForeground: "#000",
          },
        }}
      />
    </div>
  );
}
