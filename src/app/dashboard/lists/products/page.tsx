import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Products from "@/components/lists/products";


import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Liste produits" />

      <div className="flex flex-col gap-10">
        <Products />

      </div>
    </DefaultLayout>
  );
};

export default TablesPage;