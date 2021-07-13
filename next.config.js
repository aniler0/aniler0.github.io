module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "video"
          }
        }
      ]
    }, {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    },
    )

    return config
  },

}

