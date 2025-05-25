import { defineConfig } from "vitest/config";

export default defineConfig({
    base: "./study1/",
    build: {
      target: "esnext",
      sourcemap: true
    },
    test: {
      environment: 'jsdom',
      include: ['tests/*.{test,spec}.{js,ts}']
    }
  });
  