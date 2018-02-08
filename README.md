// Product Front-end (React/Redux/Sagas/Reducer)

# Creating and installing front-end on EC2 instance

Create EC2 instance with your desired option (I prefer ubuntu)

Configure security group for instance for your desire

Download pem Key which can be used to connect EC2 instance

Install npm & node on your instance

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get install -y nodejs

Clone your repo and install packages to your instance

git clone https://github.com/fascinating2000/productFrontend.git

cd productFrontend

npm install

npm run build

Configure with Ngnix

sudo apt install Nginix

sudo nano /etc/nginx/sites-available/default

change your root to indicate your productFrontend build directory

restart your Ngnix
  
Now you have running your front-end
