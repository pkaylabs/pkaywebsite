import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const workerSource = `
const securityHeaders = {
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

function secure(response) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(securityHeaders)) headers.set(key, value);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (
      response.status === 404 &&
      request.method === "GET" &&
      request.headers.get("accept")?.includes("text/html")
    ) {
      response = await env.ASSETS.fetch(
        new Request(new URL("/index.html", url), {
          method: "GET",
          headers: request.headers,
        }),
      );
    }

    return secure(response);
  },
};
`;

function sitesWorker() {
  return {
    name: "pkay-sites-worker",
    apply: "build" as const,
    closeBundle() {
      const serverDirectory = resolve("dist/server");
      mkdirSync(serverDirectory, { recursive: true });
      writeFileSync(resolve(serverDirectory, "index.js"), workerSource.trimStart(), "utf8");
    },
  };
}

export default defineConfig({
  plugins: [react(), sitesWorker()],
});
