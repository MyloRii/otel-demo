FROM node:22-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the port (optional, not mapped in compose but useful)
EXPOSE 3001

# Start the app
CMD [ "npm", "start" ]