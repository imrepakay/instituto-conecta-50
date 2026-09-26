import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import { resolve, extname, basename } from "path";

const origem = resolve("imagens");
const destino = resolve("imagens-webp");

mkdirSync(destino, { recursive: true });

const arquivos = readdirSync(origem)
    .filter((arquivo) => [".jpg", ".jpeg"].includes(extname(arquivo).toLowerCase()));

for (const arquivo of arquivos) {
    const entrada = resolve(origem, arquivo);
    const saida = resolve(
        destino,
        `${basename(arquivo, extname(arquivo))}.webp`
    );

    await sharp(entrada)
        .webp({ quality: 82 })
        .toFile(saida);

    console.log(`Convertido: ${arquivo} → ${basename(saida)}`);
}

console.log("\nConversão concluída.");