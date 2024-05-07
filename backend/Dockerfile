# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm ci 

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application listens on
EXPOSE 9998

# Set the command to run when the container starts
CMD ["npm", "start"]