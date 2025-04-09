import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Your Blogs</h2>
        <Link href="/dashboard/create" className={buttonVariants()}>
          Create New Blog
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
