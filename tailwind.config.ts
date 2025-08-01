import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'text-primary': 'hsl(var(--text-primary))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-muted': 'hsl(var(--text-muted))',
				'border-light': 'hsl(var(--border-light))',
				'border-subtle': 'hsl(var(--border-subtle))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				button: {
					primary: 'hsl(var(--button-primary))',
					'primary-hover': 'hsl(var(--button-primary-hover))',
					secondary: 'hsl(var(--button-secondary))',
					'secondary-hover': 'hsl(var(--button-secondary-hover))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					hover: 'hsl(var(--card-hover))'
				},
			},
			spacing: {
				'xs': 'var(--spacing-xs)',
				'sm': 'var(--spacing-sm)',
				'md': 'var(--spacing-md)',
				'lg': 'var(--spacing-lg)',
				'xl': 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
			},
			fontSize: {
				'notion-sm': ['var(--font-size-sm)', { lineHeight: 'var(--line-height-relaxed)' }],
				'notion-base': ['var(--font-size-base)', { lineHeight: 'var(--line-height-loose)' }],
				'notion-lg': ['var(--font-size-lg)', { lineHeight: 'var(--line-height-loose)' }],
				'notion-xl': ['var(--font-size-xl)', { lineHeight: 'var(--line-height-relaxed)' }],
				'notion-2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-relaxed)' }],
				'notion-3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-relaxed)' }],
				'notion-4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-relaxed)' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
