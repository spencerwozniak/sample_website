// vite.config.ts
import { defineConfig } from 'vite';  // Import the 'defineConfig' function from Vite to define the configuration.
import react from '@vitejs/plugin-react';  // Import the official React plugin for Vite to enable React features.

export default defineConfig({
  // Export the configuration object using 'defineConfig' for better type support.
  
  plugins: [react()],  // The 'react' plugin is included to provide support for React features like JSX and HMR (Hot Module Replacement).
  
  build: {
    chunkSizeWarningLimit: 1000,  /* 
      Sets the chunk size warning limit to 1000 KB (1 MB).
      Vite will show a warning if a chunk (a piece of the code split) exceeds this size.
      This helps to monitor and optimize large bundles in your project.
    */
  },
});
