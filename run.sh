echo Shutting down all containers
docker-compose down

echo Uploading Application container
docker-compose up --build -d

echo Copying .env file
cp backend/.env.example backend/.env

echo Information of new containers
docker ps -a

# echo Make migrations
# sleep 3 && docker exec -it node yarn migrate