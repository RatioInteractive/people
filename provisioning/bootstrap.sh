# MongoDB depens
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

# Ensure latest
apt-get update

# Install general tools
apt-get install -y build-essential gpp make

# Install and configure NTP daemon
apt-get install -y ntp
cp /var/src/provisioning/ntp.conf /etc/ntp.conf
service ntp restart

# Install and configure logrotate
# apt-get install -y logrotate
# cp /var/src/provisioning/logrotate.conf /etc/logrotate.d/people.conf

# Install and configure MongoDB
apt-get install -y mongodb-org
cp /var/src/provisioning/mongod.conf /etc/mongod.conf
service mongod restart

# Install and configure nginx
#apt-get install -y nginx
#cp /var/src/provisioning/localhost /etc/nginx/sites-available/default
#service nginx restart

# Install and configure node
curl -sL https://deb.nodesource.com/setup_5.x | bash -
apt-get install -y nodejs
npm install -g nodemon

# Install webpack
npm install -g webpack webpack-dev-server

# Setup the people web application
cp /var/src/provisioning/people.conf /etc/init/people.conf
pushd /var/src
npm install
npm rebuild node-sass
#npm run build
#npm run dev &
service people restart
popd
