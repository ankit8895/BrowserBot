import AppSidebar from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@clerk/nextjs/server";

const DashboardLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  await auth.protect();
  return (
    <SidebarProvider className="h-svh">
      <AppSidebar />
      <SidebarInset className="min-h-0 overflow-hidden border shadow-none">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
