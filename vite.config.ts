import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		}),
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: 'gzip',
			ext: '.gz'
		}),
		visualizer({
			open: false,
			gzipSize: true,
			brotliSize: true
		})
	],
	optimizeDeps: {
		include: ['schart.js', 'element-plus', 'echarts'],
		exclude: ['@antv/x6']
	},
	resolve: {
		alias: {
			'@': '/src',
			'~': '/src/assets'
		}
	},
	define: {
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true",
	},
	server: {
		host: true,
		port: 9999,
		open: false,
		https: false,
		cors: true,
	},
	build: {
		target: 'es2015',
		outDir: 'dist',
		assetsDir: 'assets',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log']
			}
		},
		cssCodeSplit: true,
		sourcemap: false,
		chunkSizeWarningLimit: 2000,
		rollupOptions: {
			output: {
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: '[ext]/[name]-[hash].[ext]',
				manualChunks: {
					'vue-vendor': ['vue', 'vue-router', 'pinia'],
					'element-plus': ['element-plus', '@element-plus/icons-vue'],
					'echarts': ['echarts', 'echarts-wordcloud', 'vue-echarts'],
					'editor': ['@wangeditor/editor', '@wangeditor/editor-for-vue', 'md-editor-v3'],
					'utils': ['axios', 'nprogress', 'countup.js', 'xlsx'],
					'antv': ['@antv/x6'],
					'other': ['vue-cropper', 'vue-schart']
				}
			}
		}
	}
});
