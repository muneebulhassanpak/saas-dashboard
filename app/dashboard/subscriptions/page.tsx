import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function SubscriptionsPage() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/dashboard">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Subscriptions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-bold mb-4">Subscriptions</h2>
            <p className="text-muted-foreground">
              Manage user subscriptions and billing information.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">Active Subscriptions</h3>
              <p className="text-3xl font-bold">842</p>
              <p className="text-sm text-muted-foreground mt-2">+15% from last month</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">Monthly Revenue</h3>
              <p className="text-3xl font-bold">$24,500</p>
              <p className="text-sm text-muted-foreground mt-2">+22% from last month</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card">
            <div className="p-6">
              <h3 className="font-semibold mb-4">Recent Subscriptions</h3>
              <div className="space-y-4">
                {[
                  { user: "John Doe", plan: "Pro", amount: "$29.99", status: "Active" },
                  { user: "Jane Smith", plan: "Enterprise", amount: "$99.99", status: "Active" },
                  { user: "Bob Johnson", plan: "Basic", amount: "$9.99", status: "Active" },
                ].map((subscription, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{subscription.user}</p>
                      <p className="text-sm text-muted-foreground">{subscription.plan} - {subscription.amount}/mo</p>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                      {subscription.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
