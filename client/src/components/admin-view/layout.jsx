import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";
import { useState } from "react";

const AdminLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setSidebarOpen}/>
        <main className="h-full bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
