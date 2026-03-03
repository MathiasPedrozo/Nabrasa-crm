import Link from "next/link";
import { loginAction } from "@/app/actions";

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const errorParam = params.error;
  const error = Array.isArray(errorParam) ? errorParam[0] : errorParam;

  return (
    <main>
      <section className="card">
        <h1>Ingresar al CRM</h1>
        <p>Usá tu usuario admin de Supabase para entrar.</p>

        {error ? <p className="error">{error}</p> : null}

        <form action={loginAction}>
          <label>
            Email
            <input type="email" name="email" required placeholder="admin@tudominio.com" />
          </label>

          <label>
            Contraseña
            <input type="password" name="password" required placeholder="••••••••" />
          </label>

          <button type="submit">Iniciar sesión</button>
        </form>

        <p style={{ marginTop: "1rem" }}>
          ¿No recordás tu contraseña? Gestioná usuarios en{" "}
          <Link href="https://supabase.com/dashboard" target="_blank">
            Supabase Dashboard
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
