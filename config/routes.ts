import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  Activity,
  HelpCircle,
  Settings,
  LogOut,
  type LucideIcon
} from "lucide-react"

export interface Route {
  title: string
  url: string
  icon: LucideIcon
}

export const ROUTES = {
  DASHBOARD: "/dashboard",
  ANALYTICS: "/dashboard/analytics",
  USERS: "/dashboard/users",
  SUBSCRIPTIONS: "/dashboard/subscriptions",
  ACTIVITY: "/dashboard/activity",
  SETTINGS: "/dashboard/settings",
  SUPPORT: "/dashboard/support",
  LOGOUT: "/logout",
} as const

export const mainNavRoutes: Route[] = [
  {
    title: "Dashboard",
    url: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    url: ROUTES.ANALYTICS,
    icon: BarChart3,
  },
  {
    title: "Users",
    url: ROUTES.USERS,
    icon: Users,
  },
  {
    title: "Subscriptions",
    url: ROUTES.SUBSCRIPTIONS,
    icon: CreditCard,
  },
  {
    title: "Activity",
    url: ROUTES.ACTIVITY,
    icon: Activity,
  },
  {
    title: "Support",
    url: ROUTES.SUPPORT,
    icon: HelpCircle,
  },
]

export const footerNavRoutes: Route[] = [
  {
    title: "Settings",
    url: ROUTES.SETTINGS,
    icon: Settings,
  },
  {
    title: "Logout",
    url: ROUTES.LOGOUT,
    icon: LogOut,
  },
]
