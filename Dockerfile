# Use a base image with Node.js 20
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install dependencies
RUN npm install

# Copy the rest of the project files to the working directory
#COPY . .
COPY package*.json ./

# Expose a port (if needed)
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "run","dev"]