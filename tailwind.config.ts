
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#4B6BFB',
					foreground: '#FFFFFF',
					50: '#EEF1FE',
					100: '#D5DEFE',
					200: '#B4C2FD',
					300: '#8A9FFB',
					400: '#6B85FA',
					500: '#4B6BFB',
					600: '#3A54D6',
					700: '#2B3FB1',
					800: '#1D2A8C',
					900: '#0E1567',
				},
				secondary: {
					DEFAULT: '#6FCF97',
					foreground: '#FFFFFF',
					50: '#F2FAF5',
					100: '#DAF0E3',
					200: '#B5E1C7',
					300: '#8FD7AA',
					400: '#6FCF97',
					500: '#4FBF7D',
					600: '#3A9C63',
					700: '#2D7A4E',
					800: '#1F5838',
					900: '#103622',
				},
				accent: {
					DEFAULT: '#F2994A',
					foreground: '#FFFFFF',
					50: '#FEF6EE',
					100: '#FCE9D4',
					200: '#F9D3A9',
					300: '#F6B97E',
					400: '#F2994A',
					500: '#EF7B1A',
					600: '#C66010',
					700: '#9D4B0D',
					800: '#733609',
					900: '#4A2105',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				"accordion-up": {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
			},
			animation: {
				"accordion-down": 'accordion-down 0.2s ease-out',
				"accordion-up": 'accordion-up 0.2s ease-out',
				"fade-in": "fade-in 0.5s ease-out",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
