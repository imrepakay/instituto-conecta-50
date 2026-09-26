import { defineConfig } from "vite";
import { resolve } from "path";
import { readdirSync, readFileSync } from "fs";

export default defineConfig({
    root: "HTML",

    server: {
        fs: {
            allow: [".."]
        }
    },

   plugins: [
    {
        name: "emitir-imagens-webp",
        generateBundle() {
            const pastaImagens = resolve(process.cwd(), "imagens-webp");

            for (const arquivo of readdirSync(pastaImagens)) {
                if (arquivo === "logo.webp") {
                    continue;
                }

                const caminho = resolve(pastaImagens, arquivo);

                this.emitFile({
                    type: "asset",
                    fileName: `imagens-webp/${arquivo}`,
                    source: readFileSync(caminho)
                });
            }
        }
    }
],

    build: {
        outDir: "../dist",
        emptyOutDir: true,

        rollupOptions: {
            input: resolve(process.cwd(), "HTML/index.html")
        }
    }
});