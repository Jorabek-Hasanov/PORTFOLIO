# Assets Folder

This folder is for storing images, icons, and other static assets.

## Recommended Structure

```text
src/assets/
├── images/
│   ├── logo.svg
│   └── hero/
├── icons/
│   └── (icon sprites or individual icons)
└── fonts/
    └── (custom fonts if needed)
```

## Usage

When adding images:

- Place images in the appropriate subfolder
- Use relative paths in your components: `../../assets/images/logo.svg`

## Notes

- This project uses Lucide Icons via CDN for iconography
- Company logos in the SocialProof section use Lucide icon components
- For production, consider downloading and localizing assets
