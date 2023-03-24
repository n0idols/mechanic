import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import LoginBtn from "../LoginBtn";
import Paper from "../Paper";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <Paper>
      <LoginBtn />
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      <h1>Welcome, {session?.user?.name}! 👋</h1>

      <h1>My Appointments</h1>
    </Paper>
  );
}
