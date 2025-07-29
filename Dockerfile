# Use the official MySQL 8 image from Docker Hub
FROM mysql:8.0

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=mudar123
ENV MYSQL_DATABASE=demo
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=mudar123

# Expose MySQL port
EXPOSE 3306

# No custom entrypoint needed, default CMD runs mysqld
