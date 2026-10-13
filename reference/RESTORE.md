# Reference restore

This folder keeps the profile README from **before** the tier-1 SVG pack
(`cafbae6`: badge intro + flagship repos + skills badges).

## Restore that version

From the repo root:

```bash
cp reference/README.pre-tier1.md README.md
git add README.md
git commit -m "Restore pre-tier1 profile README reference."
git push
```

Or via git history:

```bash
git checkout cafbae6 -- README.md
```

Note: the pre-tier1 version did not use `./assets/*.svg`. Restoring only
replaces `README.md`; keep or delete `assets/` as you prefer.
