import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>No autorizado. Ve a /signin</p>;
  }

  return <h1>Bienvenido {session.user?.email}</h1>;
}
