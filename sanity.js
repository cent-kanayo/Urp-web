import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'eqv1dvdz',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-06-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getPosts() {
  const posts = await client.fetch('*[_type == "news"]');
  return posts;
}
export async function getStudentOfTheMonth() {
  const posts = await client.fetch('*[_type == "studentOfTheMonth"]');
  return posts;
}
export async function createPost(post) {
  const result = client.create(post);
  return result;
}
