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

export default function SupportPage() {
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
              <BreadcrumbPage>Support</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-bold mb-4">Support</h2>
            <p className="text-muted-foreground">
              Get help and support for your account and services.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">Open Tickets</h3>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-muted-foreground mt-2">3 pending response</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">Resolved Tickets</h3>
              <p className="text-3xl font-bold">156</p>
              <p className="text-sm text-muted-foreground mt-2">This month</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">Avg. Response Time</h3>
              <p className="text-3xl font-bold">2.4h</p>
              <p className="text-sm text-muted-foreground mt-2">Last 30 days</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card">
            <div className="p-6">
              <h3 className="font-semibold mb-4">Recent Support Tickets</h3>
              <div className="space-y-4">
                {[
                  {
                    id: "#12345",
                    subject: "Cannot access billing page",
                    user: "John Doe",
                    status: "Open",
                    priority: "High"
                  },
                  {
                    id: "#12344",
                    subject: "Feature request: Dark mode",
                    user: "Jane Smith",
                    status: "In Progress",
                    priority: "Medium"
                  },
                  {
                    id: "#12343",
                    subject: "Payment not processing",
                    user: "Bob Johnson",
                    status: "Open",
                    priority: "High"
                  },
                  {
                    id: "#12342",
                    subject: "How to export data?",
                    user: "Alice Williams",
                    status: "Resolved",
                    priority: "Low"
                  },
                ].map((ticket, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{ticket.subject}</p>
                        <span className="text-xs text-muted-foreground">{ticket.id}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{ticket.user}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        ticket.priority === "High" ? "bg-red-100 text-red-700" :
                        ticket.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {ticket.priority}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        ticket.status === "Resolved" ? "bg-green-100 text-green-700" :
                        ticket.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
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
