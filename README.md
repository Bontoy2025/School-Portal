# DepEd School Portal Dashboard

This dashboard is built with Next.js App Router and Tailwind CSS. It provides a role-aware post-login interface for:

- Admin
- Teacher
- Student
- Parent

## Dashboard structure

- `config/menuConfig.ts` contains the role-based DepEd menu items.
- `components/dashboard/sidebar.tsx` handles the mobile overlay drawer and desktop collapsed sidebar state.
- `components/dashboard/header.tsx` handles the top header, user profile, and log out control.
- `app/(dashboard)/page.tsx` renders role-specific summary cards and quick actions.

## Extend the menu

Add or remove entries in `config/menuConfig.ts` for each user role. The sidebar automatically reads from the selected role and renders only permitted items.

## Connect real auth

Replace the mock session in `lib/mock-session.ts` with your application session context or server-provided user details. A real auth provider can pass the user role, name, and avatar into the dashboard layout and menu configuration.

## Next steps

- connect to a real backend API
- replace mock data with live attendance, grades, announcements, and learner records
- add route guards for protected pages and module-level access control
