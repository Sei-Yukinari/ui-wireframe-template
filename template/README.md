Template files generated from doc/ui-design-definition.md and doc/ui-RDD.md.

Files:
- design-tokens.json: Color tokens used by templates
- styles.css: CSS variables and basic utility classes
- button.html: Example button markup

To regenerate tokens from the canonical doc and update this template:

1. npm run extract:tokens
2. cp prompts/design-tokens.json template/design-tokens.json

Adjust template files as needed to integrate with your build (Tailwind, CSS-in-JS, etc.).
