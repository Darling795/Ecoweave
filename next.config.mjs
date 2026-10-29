import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so file tracing ignores lockfiles in parent folders.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
