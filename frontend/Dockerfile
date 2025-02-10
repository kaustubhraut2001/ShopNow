FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies with legacy peer deps to avoid conflicts
RUN npm install --legacy-peer-deps && npm cache clean --force

# Copy the rest of the application files
COPY . .

# Build the application (if applicable)
RUN npm run build

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]