export default {
  lintOnSave: 'warning',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
        `,
        sassOptions: {
          silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
        },
      },
    },
  },
  configureWebpack: {
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
      hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          bootstrap: {
            test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
            name: 'bootstrap',
            chunks: 'all',
            priority: 10,
          },
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'ProjectName'
      args[0].meta = { description: 'A single page application created using Vue.js 3' }

      return args
    })
  },
}
