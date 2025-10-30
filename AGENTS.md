# Agent Implementation Guide

## Navigation

- [Content Hub](docs/content/README.md)
- [Landing Build Spec](docs/spec/landing-build-spec.md)
- [Environment Setup](docs/environment/setup.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Committing Standards](COMMITTING.md)

Automated contributors must review the following materials before making changes to the Society of Renewal landing experience.

## Required Reading

1. `docs/content/README.md` — navigation and program roadmap
2. `docs/content/landing-page.md` — approved hero copy and link slate
3. `docs/spec/landing-build-spec.md` — detailed build requirements
4. `README.md` — project architecture overview
5. `CONTRIBUTING.md` & `COMMITTING.md` — workflow, tooling, and commit conventions
6. `docs/environment/setup.md` — environment variables and local setup

## Operating Constraints

- Honor accessibility requirements (WCAG 2.1 AA) and reduced-motion fallbacks defined in the build spec.
- Preserve approved copy verbatim unless the task explicitly requests edits.
- Run `npm run format`, `npm run lint`, and `npm run build` before submitting changes.
- Reference the relevant spec section in commit descriptions when behaviour changes.

## Change Checklist

1. `git pull --rebase origin main`
2. Review the appropriate sections of `docs/spec/landing-build-spec.md`
3. Update or add tests when altering behaviour; document coverage in the PR
4. Keep documentation in sync with code changes
5. Ensure commits follow the format in `COMMITTING.md`

Never commit secrets. Keep sensitive configuration in `.env.local` as described in `docs/environment/setup.md`.
