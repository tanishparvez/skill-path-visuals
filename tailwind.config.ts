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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			perspective: {
				'500': '500px',
				'1000': '1000px',
				'1500': '1500px',
			},
			transformStyle: {
				'preserve-3d': 'preserve-3d',
			},
			backfaceVisibility: {
				'hidden': 'hidden',
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
				},
				'blob': {
					'0%': {
						transform: 'translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1) rotateX(15deg) rotateY(15deg)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9) rotateX(-15deg) rotateY(-15deg)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg)',
					},
				},
				'float': {
					'0%, 100%': {
						transform: 'translatey(0px) rotateX(0deg) rotateY(0deg)',
					},
					'50%': {
						transform: 'translatey(-20px) rotateX(10deg) rotateY(10deg)',
					},
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%) skewX(-15deg)',
					},
					'100%': {
						transform: 'translateX(100%) skewX(-15deg)',
					},
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					},
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05)',
					},
				},
				'rotate-y': {
					'0%': {
						transform: 'rotateY(0deg)',
					},
					'100%': {
						transform: 'rotateY(360deg)',
					},
				},
				'rotate-x': {
					'0%': {
						transform: 'rotateX(0deg)',
					},
					'100%': {
						transform: 'rotateX(360deg)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'blob': 'blob 7s infinite',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
				'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'rotate-y': 'rotate-y 10s linear infinite',
				'rotate-x': 'rotate-x 15s linear infinite',
			},
			animationDelay: {
				'1000': '1s',
				'2000': '2s',
				'4000': '4s',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: { addUtilities: any }) {
			const newUtilities = {
				'.animation-delay-1000': {
					'animation-delay': '1s',
				},
				'.animation-delay-2000': {
					'animation-delay': '2s',
				},
				'.animation-delay-4000': {
					'animation-delay': '4s',
				},
				'.perspective-500': {
					'perspective': '500px',
				},
				'.perspective-1000': {
					'perspective': '1000px',
				},
				'.perspective-1500': {
					'perspective': '1500px',
				},
				'.preserve-3d': {
					'transform-style': 'preserve-3d',
				},
				'.backface-hidden': {
					'backface-visibility': 'hidden',
				},
				'.transform-gpu': {
					'transform': 'translateZ(0)',
				},
				'.rotateY-6': {
					'transform': 'rotateY(6deg)',
				},
				'.rotateY-12': {
					'transform': 'rotateY(12deg)',
				},
				'.rotateX-6': {
					'transform': 'rotateX(6deg)',
				},
				'.rotateX-12': {
					'transform': 'rotateX(12deg)',
				},
				'.translateZ-4': {
					'transform': 'translateZ(4px)',
				},
				'.translateZ-6': {
					'transform': 'translateZ(6px)',
				},
				'.translateZ-8': {
					'transform': 'translateZ(8px)',
				},
				'.drop-shadow-glow': {
					'filter': 'drop-shadow(0 0 10px currentColor)',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
