# Usamos una imagen base de Node.js con Alpine Linux, una opción ligera
FROM node:16-alpine

# Establecemos el directorio de trabajo en la aplicación
WORKDIR /usr/src/

# Copiamos los archivos de configuración del proyecto (package.json y package-lock.json)
COPY package*.json ./

# Instalamos las dependencias de la aplicación
RUN npm install

# Copiamos todos los archivos de la aplicación
COPY . .

# Exponemos el puerto en el que la aplicación escucha (ajústalo según tu aplicación)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
