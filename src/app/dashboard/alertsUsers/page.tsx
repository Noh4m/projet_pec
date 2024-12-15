import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import AlertUser from "@/components/Alerts/AlertUsers";

export const metadata: Metadata = {
  title: "Next.js Alerts Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Alerts page for NextAdmin Dashboard Kit",
  // other metadata
};

const Alerts = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Alerts Utilisateurs" />

      <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <AlertUser />
          
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Alerts;
