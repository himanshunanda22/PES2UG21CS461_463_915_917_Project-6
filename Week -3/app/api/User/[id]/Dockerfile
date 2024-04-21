# Use an appropriate base image for Node.js applications
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Run prisma generate (if you are using Prisma in this microservice)
# If you are not using Prisma, you can remove this line
RUN npx prisma generate

# Build the application (if there is a build step, adjust the command accordingly)
RUN npm run build

# Expose the port the app runs on (assuming it's 3000, customize as needed)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
