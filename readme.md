# Deploy Python Flask API to ECS 
**Hai  Tran  03 MAR 2022**

## Python Application 
```
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
   return "Hello, World!"

if __name__ == "__main__":
   app.run(host='0.0.0.0', port=5000)
```
requirements.txt 
```
flask===1.1.2
```
Dockerfile
```
# Set base image (host OS)
FROM python:3.8-alpine

# By default, listen on port 5000
EXPOSE 5000/tcp

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY requirements.txt .

# Install any dependencies
RUN pip install -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY app.py .

# Specify the command to run on container start
CMD [ "python", "./app.py" ]
```

## 
