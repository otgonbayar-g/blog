// const sanityClient = require("@sanity/client");

// const client = sanityClient({
//     projectId: process.env.SANITY_PROJECT_ID,
//     dataset: process.env.SANITY_DATASET,
//     useCdn: process.NODE_ENV === 'production',
// });

// export default client;

// sanity.js
import { createClient } from '@sanity/client';
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.NODE_ENV === 'production', // set to `true` to fetch from edge cache
    apiVersion: '2023-03-08', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});