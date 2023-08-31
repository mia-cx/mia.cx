/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem'
		},
		extend: {
			screens: {
				xs: '480px'
			},

			spacing: {
				'screen-small': ['100vh', '100svh'],
				'screen-dynamic': ['100vh', '100dvh'],
				'screen-large': ['100vh', '100lvh']
			},

			minHeight: {
				'screen-small': ['100vh', '100svh'],
				'screen-dynamic': ['100vh', '100dvh'],
				'screen-large': ['100vh', '100lvh']
			},

			transitionProperty: {
				quick: 'height,min-height,max-height,width,min-width,max-width,inset,margin,padding,gap,transform,background-position,background-color,color,fill,stroke,border-color,outline-color,box-shadow,opacity,text-decoration-color,font-size',
				colors: 'background-color,color,fill,stroke,border-color,outline-color,box-shadow,opacity,text-decoration-color',
				sizing: 'height,min-height,max-height,width,min-width,max-width,inset,margin,padding,transform,font-size'
			},

			transitionDuration: {
				default: 'var(--transition-duration)'
			},

			fontFamily: {
				heading: ['Raleway', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				body: ['Montserrat', 'sans-serif'],
				'redacted-script': ['Redacted Script', 'sans-serif']
			},

			colors: {
				primary: 'var(--primary)',

				information: 'var(--information)',
				success: 'var(--success)',
				warning: 'var(--warning)',
				error: 'var(--error)',

				'text-neutral': 'var(--text-neutral)',
				'text-primary': 'var(--text-primary)',

				'link-text-neutral': 'var(--link-text-neutral)',
				'link-text-primary': 'var(--link-text-primary)',

				'link-text-neutral-hover': 'var(--link-text-neutral-hover)',
				'link-text-primary-hover': 'var(--link-text-primary-hover)',

				'link-text-neutral-active': 'var(--link-text-neutral-active)',
				'link-text-primary-active': 'var(--link-text-primary-active)',

				'background-neutral': 'var(--background-neutral)',
				'background-neutral-alt': 'var(--background-neutral-alt)',
				'background-primary': 'var(--background-primary)',
				'background-primary-alt': 'var(--background-primary-alt)',
				'background-accent': 'var(--background-accent)',

				'button-background-neutral': 'var(--button-background-neutral)',
				'button-background-primary': 'var(--button-background-primary)',
				'button-background-accent': 'var(--button-background-accent)',

				'button-background-neutral-hover':
					'var(--button-background-neutral-hover)',
				'button-background-primary-hover':
					'var(--button-background-primary-hover)',
				'button-background-accent-hover':
					'var(--button-background-accent-hover)',

				'button-background-neutral-active':
					'var(--button-background-neutral-active)',
				'button-background-primary-active':
					'var(--button-background-primary-active)',
				'button-background-accent-active':
					'var(--button-background-accent-active)',

				'button-text-neutral': 'var(--button-text-neutral)',
				'button-text-primary': 'var(--button-text-primary)',
				'button-text-accent': 'var(--button-text-accent)',

				'button-text-neutral-hover': 'var(--button-text-neutral-hover)',
				'button-text-primary-hover': 'var(--button-text-primary-hover)',
				'button-text-accent-hover': 'var(--button-text-accent-hover)',

				'button-text-neutral-active': 'var(--button-text-neutral-active)',
				'button-text-primary-active': 'var(--button-text-primary-active)',
				'button-text-accent-active': 'var(--button-text-accent-active)',

				'border-neutral': 'var(--border-neutral)',
				'border-primary': 'var(--border-primary)',

				'border-neutral-hover': 'var(--border-neutral-hover)',
				'border-primary-hover': 'var(--border-primary-hover)',

				'border-neutral-active': 'var(--border-neutral-active)',
				'border-primary-active': 'var(--border-primary-active)',

				"linkedin": "#0a66c2",
				"twitter": "#24a4f3",

				'mx-red': {
					DEFAULT: '#ff9999',
					50: '#e5ffef',
					100: '#ccffe0',
					200: '#99ffc0',
					300: '#66ffa1',
					400: '#33ff81',
					500: '#00ff62',
					600: '#00cc4e',
					700: '#00993b',
					800: '#006627',
					900: '#003314',
					950: '#001a0a'
				}
			},

			textColor: {
				neutral: 'var(--text-neutral)',
				primary: 'var(--text-primary)',

				'link-neutral': 'var(--text-link-neutral)',
				'link-primary': 'var(--text-link-primary)',

				'link-neutral-hover': 'var(--text-link-neutral-hover)',
				'link-primary-hover': 'var(--text-link-primary-hover)',

				'link-neutral-active': 'var(--text-link-neutral-active)',
				'link-primary-active': 'var(--text-link-primary-active)'
			},

			backgroundColor: {
				neutral: 'var(--background-neutral)',
				'neutral-alt': 'var(--background-neutral-alt)',
				primary: 'var(--background-primary)',
				'primary-alt': 'var(--background-primary-alt)',
				accent: 'var(--background-accent)'
			},

			borderColor: {
				neutral: 'var(--border-neutral)',
				primary: 'var(--border-primary)',

				'neutral-hover': 'var(--border-neutral-hover)',
				'primary-hover': 'var(--border-primary-hover)',

				'neutral-active': 'var(--border-neutral-active)',
				'primary-active': 'var(--border-primary-active)'
			},

			ringColor: {
				neutral: 'var(--border-neutral)',
				primary: 'var(--border-primary)',

				'neutral-hover': 'var(--border-neutral-hover)',
				'primary-hover': 'var(--border-primary-hover)',

				'neutral-active': 'var(--border-neutral-active)',
				'primary-active': 'var(--border-primary-active)'
			},

			outlineColor: {
				neutral: 'var(--border-neutral)',
				primary: 'var(--border-primary)',

				'neutral-hover': 'var(--border-neutral-hover)',
				'primary-hover': 'var(--border-primary-hover)',

				'neutral-active': 'var(--border-neutral-active)',
				'primary-active': 'var(--border-primary-active)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')({ strategy: 'base' })
	]
};
