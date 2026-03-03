# Nabrasa CRM (base)

Base de CRM con:
- Next.js (App Router)
- Supabase Auth (SSR con cookies)
- Prisma + PostgreSQL (Supabase)

## 1) Configuración rápida

1. Copiá `.env.example` a `.env.local`.
2. Pegá tus variables reales de Supabase y `DATABASE_URL`.
3. Instalá dependencias y levantá el proyecto.

```bash
npm install
npm run prisma:generate
npm run dev
```

## 2) Flujo de autenticación

- `/login`: formulario de email + contraseña (`signInWithPassword`).
- `/home`: ruta protegida (solo con sesión activa).
- `middleware.ts`: protege `/home` y evita entrar a `/login` cuando ya hay sesión.

## 3) Prisma

Incluye un modelo inicial `Contact` para empezar a construir el CRM.

```bash
npm run prisma:migrate -- --name init
```

## 4) Usuario admin

Usá el usuario admin creado en Supabase Authentication para entrar al CRM.
