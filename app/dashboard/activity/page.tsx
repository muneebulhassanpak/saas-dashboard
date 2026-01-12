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

export default function ActivityPage() {
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
              <BreadcrumbPage>Activity</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-bold mb-4">Activity</h2>
            <p className="text-muted-foreground">
              Monitor recent activity and system events.
            </p>
          </div>
          <div className="rounded-lg border bg-card">
            <div className="p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  {
                    action: "User Login",
                    user: "John Doe",
                    time: "2 minutes ago",
                    type: "info"
                  },
                  {
                    action: "Subscription Created",
                    user: "Jane Smith",
                    time: "15 minutes ago",
                    type: "success"
                  },
                  {
                    action: "Payment Failed",
                    user: "Bob Johnson",
                    time: "1 hour ago",
                    type: "error"
                  },
                  {
                    action: "Profile Updated",
                    user: "Alice Williams",
                    time: "2 hours ago",
                    type: "info"
                  },
                  {
                    action: "Password Changed",
                    user: "Charlie Brown",
                    time: "3 hours ago",
                    type: "warning"
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.user} • {activity.time}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      activity.type === "success" ? "bg-green-100 text-green-700" :
                      activity.type === "error" ? "bg-red-100 text-red-700" :
                      activity.type === "warning" ? "bg-yellow-100 text-yellow-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {activity.type}
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
