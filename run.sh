# echo "========== Building app =========="
# docker-compose build --no-cache
# docker-compose build

echo "========== Starting app =========="
docker-compose up -d node redis mongo

echo "==========App ready =========="

$SHELL