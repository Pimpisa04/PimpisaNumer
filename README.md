# Numerical

## Docker

#### !!! System Requirements !!!

#### Docker setting Ram > 3Gb.

#### Note: Build & Run might take a while to install node_modules and compile typescript


```
docker build -t numerical .
```  
```
docker run -dit -v ${pwd}:/app -p 3000:3000 numerical
```
