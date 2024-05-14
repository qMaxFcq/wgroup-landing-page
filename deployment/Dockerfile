## Builder ##
FROM node:18.17.1-bullseye-slim
LABEL mantainer="Thammarong Glomjai <thammarong.g@siamintech.co.th>"

WORKDIR /usr/src/app

# Building app
COPY package.json package-lock.json* /usr/src/app/

RUN npm ci

# Copy files. Use dockerignore to avoid copying node_modules
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 8080

# Run app command
CMD ["npm", "run", "preview"]