# Numerical

## Docker

#### !!! System Requirements !!!

#### Docker setting Ram > 3Gb.

```
docker build -t numerical .
```  
```
docker run -itd -v ${pwd}:/app -v /app/node_modules -p 3000:3000 numerical
```
