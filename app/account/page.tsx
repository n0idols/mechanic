import LoginBtn from "@/components/LoginBtn";
import Paper from "@/components/Paper";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function page() {
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
