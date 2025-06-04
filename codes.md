 docker run -d \                                                 03:38:35 PM
  -p 3000:3000 \
  -e NEXT_PUBLIC_BACKEND_URL=http://host.docker.internal:8000 \
  --name stackops_frontend \
  trahulprabhu38/stackops-frontend:v1


docker run -d \                                                  03:37:18 PM
  -p 8000:8000 \
  --name stackops_backend \
  trahulprabhu38/stackops:v1