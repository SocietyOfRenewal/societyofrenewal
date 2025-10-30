# Committing Guidelines

We use Angular-style commit messages so history stays readable and changelog-friendly.

## Format

```
<type>(optional scope): <short summary>

[optional body]
[optional footer]
```

### Common types

- `feat`: new user-facing feature or component
- `fix`: bug fix or regression patch
- `docs`: documentation-only changes
- `chore`: tooling, build, or maintenance work
- `refactor`: code changes that don’t fix a bug or add a feature
- `test`: add or modify tests
- `style`: formatting and lint-only adjustments (rare with auto-formatting)

Example:

```
feat(waitlist): log confirmation url during dev
```

## Checklist before committing

1. `npm run format`
2. `npm run lint`
3. `npm run build`
4. Update docs (`README.md`, `docs/spec/landing-build-spec.md`, etc.) if behaviour changes.
5. Ensure `.env.example` mirrors new environment variables.

## Pull Request Notes

- Reference the spec section addressed (e.g., “Spec §7.3 WaitlistForm”).
- Mention testing commands run (`lint`, `format`, `build`, additional tests).
- Include screenshots or short clips for visual changes (animations, layout tweaks).
- Squash or reorganise commits if the history gets noisy before merging.

Thanks for keeping the history clean and helpful for future contributors!
