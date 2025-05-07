import nextra from 'nextra';
import dotenv from 'dotenv';

dotenv.config();

const withNextra = nextra({
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_CLARITY_APP_ID: process.env.NEXT_PUBLIC_CLARITY_APP_ID
  },
});