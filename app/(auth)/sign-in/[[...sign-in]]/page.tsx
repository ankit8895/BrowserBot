import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
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
