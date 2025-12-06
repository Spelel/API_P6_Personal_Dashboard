# Use an official lightweight Nginx image
FROM nginx:alpine

# Copy your static files into the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 3000

# The default Nginx CMD runs automatically
