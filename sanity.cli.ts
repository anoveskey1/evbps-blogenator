import dotenv from 'dotenv';
import * as path from 'path';
import { defineCliConfig } from 'sanity/cli'

const config = dotenv.config({ path: path.resolve(__dirname, '.env') });

if (config.error) {
  console.warn("Warning: Could not load .env file", config.error);
} else {
  console.log("Loaded .env file:", config.parsed); 
}


export default defineCliConfig({
  api: {
    projectId: config.parsed?.SANITY_STUDIO_PROJECT_ID || "",
    dataset: config.parsed?.SANITY_STUDIO_DATASET || "",
  },
  autoUpdates: true,
})
