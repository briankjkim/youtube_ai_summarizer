import DashboardTempMessage from "@/components/custom/DashboardTempMessage";
import { LogoutButton } from "@/components/custom/LogoutButton";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";

export default async function DashboardRoute() {
  const user = await getUserMeLoader();
  //TODO: Refine the Dashboard in production
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashboardTempMessage userName={user.data.username} />
      <span className=" p-10">
        <LogoutButton />
      </span>
    </div>
  );
}
