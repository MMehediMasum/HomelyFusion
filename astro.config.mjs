// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://homelyfusion.com',
	integrations: [mdx(), sitemap()],
	// Fonts are downloaded once at build time and self-hosted by Astro (no runtime request to Google).
	fonts: [
		{
			// Headings, hero titles, logo, pull-quotes
			provider: fontProviders.google(),
			name: 'Young Serif',
			cssVariable: '--font-young-serif',
			weights: [400],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'Times New Roman', 'serif'],
		},
		{
			// Body text, navigation, buttons, UI
			provider: fontProviders.google(),
			name: 'DM Sans',
			cssVariable: '--font-dm-sans',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
		},
	],
});
