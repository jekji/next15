import * as OpenAPI from 'fumadocs-openapi';
import { openapi } from '@/lib/openapi';

const out = './docs/api-reference/(api)';

async function generate() {
  await OpenAPI.generateFiles({
    input: openapi,
    output: out,
    // per: 'file',
  });
}

void generate();
