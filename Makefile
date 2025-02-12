# Makefile for Docker container management

# Variables
IMAGE_NAME=websitev2
CONTAINER_NAME=kingbuchanan/websitev2

# Build the Docker image
build:
    docker build -t $(IMAGE_NAME) .

# Run the Docker container
run:
    docker run --name $(CONTAINER_NAME) -p 3000:3000 -d $(IMAGE_NAME)

# Stop and remove the Docker container
clean-container:
    docker stop $(CONTAINER_NAME)
    docker rm $(CONTAINER_NAME)

# Remove the Docker image
clean-image:
    docker rmi $(IMAGE_NAME)

# Clean up both container and image
clean: clean-container clean-image

.PHONY: build run clean-container clean-image clean