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

export default function SettingsPage() {
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
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid gap-4">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p className="text-muted-foreground">
              Manage your application settings and preferences.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-4">General Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Application Name</label>
                  <p className="text-sm text-muted-foreground mt-1">SaaS Admin Dashboard</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Language</label>
                  <p className="text-sm text-muted-foreground mt-1">English (US)</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Timezone</label>
                  <p className="text-sm text-muted-foreground mt-1">UTC-5 (Eastern Time)</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-4">Notification Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Email Notifications</label>
                  <span className="text-sm text-green-600">Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Push Notifications</label>
                  <span className="text-sm text-green-600">Enabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">SMS Notifications</label>
                  <span className="text-sm text-muted-foreground">Disabled</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Two-Factor Authentication</label>
                  <p className="text-xs text-muted-foreground mt-1">Add an extra layer of security to your account</p>
                </div>
                <span className="text-sm text-green-600">Enabled</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Session Timeout</label>
                  <p className="text-xs text-muted-foreground mt-1">Automatically log out after period of inactivity</p>
                </div>
                <span className="text-sm text-muted-foreground">30 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
