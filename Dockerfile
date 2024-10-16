FROM arm64v8/node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
# EXPOSE 5000

# Start the app
CMD [ "npm", "start" ]