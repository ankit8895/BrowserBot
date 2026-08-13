import { PricingTable } from "@clerk/nextjs";
import React from "react";

const BillingPage = () => {
  return (
    <div className="h-svh overflow-y-auto">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 p-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
          <p className="text-muted-foreground text-sm">
            Choose a plan for your organization. Upgrades and checkout happen
            right here.
          </p>
        </div>

        <PricingTable
          for="organization"
          newSubscriptionRedirectUrl="/billing"
          appearance={{
            variables: { colorPrimary: "#ffdc58", colorBackground: "#fff7e8" },
          }}
        />
      </div>
    </div>
  );
};

export default BillingPage;
