# Use this as the runtime environment
FROM ubuntu:16.04

# Update the source repo
RUN apt-get update

# Install Mongodb following instructions from mongodb official site
# Import the public key used by the package management system.
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

# Add MongoDB to the repository sources list
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list

RUN yes | apt-get install apt-transport-https

# Update apt-get sources AND install MongoDB
RUN apt-get update && apt-get install -y mongodb-org

# Create the default data directory
RUN mkdir -p /data/db

# Expose the mongodb default port
EXPOSE  27017

# Set /usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod", "--bind_ip_all"]
