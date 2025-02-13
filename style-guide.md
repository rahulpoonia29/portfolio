# Portfolio Style Guide

## Design System

### Colors

-   Light Mode

    -   Background: `#FAFAFA`
    -   Card Background: `#FFFFFF`
    -   Primary: `#FF3E41`
    -   Secondary: `#2B59C3`
    -   Accent: `#FFD23F`
    -   Text: `#0F0F0F`
    -   Border: `#1A1A1A`

-   Dark Mode
    -   Background: `#0F0F0F`
    -   Card Background: `#1A1A1A`
    -   Primary: `#FF6B6D`
    -   Secondary: `#4776E6`
    -   Accent: `#FFE071`
    -   Text: `#FAFAFA`
    -   Border: `#FAFAFA`

### Typography

-   Font Family: Inter (System default fallback)
-   Heading Sizes:
    -   h1: `text-3xl font-bold`
    -   h2: `text-xl font-semibold`
    -   h3: `text-lg font-medium`
    -   Body: `text-base`
    -   Small: `text-sm`

### Neobrutalism Style Guidelines

1. Components should use:

    ```css
    - Border: border-2
    - Shadow: shadow-neo-light/dark
    - Hover: translate + shadow removal
    - Transitions: duration-200
    ```

2. Common Component Classes:

    ```css
    .neo-card {
    	@apply border-2 rounded-lg p-4 transition-all duration-200;
    }

    .neo-button {
    	@apply border-2 rounded-md px-3 py-1.5 transition-all duration-200;
    }
    ```

### Component Structure

```tsx
export default function ComponentName() {
	return (
		<section
			id="section-id"
			className="flex flex-col gap-4"
			aria-label="Section Name"
		>
			<h2
				className="text-xl font-semibold border-b-4 pb-1 inline-block
        dark:text-dark-text dark:border-dark-border
        text-light-text border-light-border"
			>
				Section Title
			</h2>

			<div className="neo-card dark:neo-card-dark neo-card-light">
				{/* Content */}
			</div>
		</section>
	);
}
```

### Accessibility Guidelines

1. Use semantic HTML elements
2. Include proper ARIA labels
3. Ensure proper color contrast
4. Add keyboard navigation support
5. Make icons decorative with aria-hidden

### Animation Guidelines

1. Use `transform-gpu` for performance
2. Keep transitions under 300ms
3. Use `transition-all` sparingly
4. Prefer specific transitions
5. Use subtle movements (3-6px transforms)

### Best Practices

1. Use utility classes from tailwind.config.ts
2. Follow dark/light mode patterns
3. Maintain consistent spacing (gap-4, gap-6)
4. Use proper semantic markup
5. Keep components modular
6. Follow neobrutalism principles
