import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { logoutAction } from "@/app/actions";

export default async function HomePage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <section className="card">
        <h1>Home del CRM</h1>
        <p>Bienvenido/a, {user.email}.</p>
        <p>Ya estás autenticado con Supabase y esta página está protegida.</p>

        <form action={logoutAction}>
          <button type="submit" className="secondary">
            Cerrar sesión
          </button>
        </form>
      </section>
    </main>
  );
}
