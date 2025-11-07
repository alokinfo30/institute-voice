const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  mode: 'development', // or 'production'
  // entry: './src/index.js',
  devServer: { port: 3000 },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        studentApp: 'studentApp@http://localhost:3001/remoteEntry.js',
        teacherApp: 'teacherApp@http://localhost:3002/remoteEntry.js',
        adminApp: 'adminApp@http://localhost:3003/remoteEntry.js',
      },
      exposes: {
        // Optional: Specifies modules to expose to other applications
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        '@mui/material': { singleton: true },
        '@eduable/shared-components': { singleton: true },
        '@eduable/shared-utils': { singleton: true },
      },
    }),
  ],
};