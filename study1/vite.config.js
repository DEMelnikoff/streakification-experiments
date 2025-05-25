import { defineConfig } from "vitest/config";

export default defineConfig({
    base: "/streak-type_10v90/",
    build: {
      target: "esnext",
      sourcemap: true
    },
    test: {
      environment: 'jsdom',
      include: ['tests/*.{test,spec}.{js,ts}']
    }
  });
  