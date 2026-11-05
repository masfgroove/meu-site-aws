# Etapa 1: Compilar o Angular (usando Node 22 para satisfazer a versão exigida)
FROM node:22 AS build
WORKDIR /app

# Copia os ficheiros de dependências
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Compila a aplicação para produção
RUN npx ng build --configuration production

# Etapa 2: Servir com Nginx
FROM nginx:alpine
COPY --from=build /app/dist/meu-site-aws/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]