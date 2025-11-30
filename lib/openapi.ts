import { createOpenAPI } from 'fumadocs-openapi/server';

// export const openapi = createOpenAPI({
//   // input files
//   input: ['./openapi.json'],
// });

export const openapi = createOpenAPI({
  async input() {
    return {
      // [id]: downloaded OpenAPI Schema
      my_schema: await fetch(
        'https://registry.scalar.com/@scalar/apis/galaxy/latest?format=json',
      ).then((res) => res.json()),
    };
  },
});