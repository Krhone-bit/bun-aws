FROM oven/bun:latest

COPY package.json ./
COPY tsconfig.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install --prod

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para correr la aplicación
CMD ["bun", "run", "index.ts"]
