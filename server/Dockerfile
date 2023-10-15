# Use an official Node.js runtime as a parent image
FROM node:16.17.0

# Set the working directory in the container
WORKDIR /app

# Copy your TypeScript server code into the container
COPY . .

# Install application dependencies
RUN npm install
RUN cd src
RUN npx prisma generate
RUN cd ..

# Expose the port your TypeScript server will listen on
EXPOSE 5000

# Define the command to run your TypeScript server
CMD ["node", "dist/src/main.js"]
