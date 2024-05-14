# Building and Deploying Docker Image with Buildx and GitLab CI

This guide will walk you through the steps to build a Docker image using Buildx and deploy it using GitLab CI.

## Prerequisites

Before you begin, make sure you have the following installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- GitLab CI: [Set up GitLab CI](https://docs.gitlab.com/ee/ci/quick_start/)

## Steps

1. Clone the repository:

    ```shell
    git clone <repository_url>
    ```

2. Navigate to the project directory:

    ```shell
    cd <project_directory>
    ```

3. Create a Dockerfile in the project directory with the necessary instructions to build your Docker image.

4. Build the Docker image using Buildx:

    ```shell
    docker buildx build --platform <platform> -t <image_name> .
    ```

    Replace `<platform>` with the target platform (e.g., linux/amd64, linux/arm64) and `<image_name>` with the desired name for your Docker image.

5. Push the Docker image to a container registry:

    ```shell
    docker push <image_name>
    ```

    Replace `<image_name>` with the name of your Docker image.

6. Configure GitLab CI to deploy the Docker image:

    - Create a `.gitlab-ci.yml` file in the root of your repository.
    - Add the following content to the file:

      ```yaml
      stages:
         - build
         - deploy

      build:
         stage: build
         script:
            - docker buildx build --platform <platform> -t <image_name> .
            - docker push <image_name>

      deploy:
         stage: deploy
         script:
            - <deployment_script>
      ```

      Replace `<platform>` and `<image_name>` with the same values used in step 4. Replace `<deployment_script>` with the script or commands required to deploy your Docker image.

7. Commit and push the changes to your repository.

8. GitLab CI will automatically trigger a build and deployment whenever changes are pushed to the repository.

That's it! You have now successfully built a Docker image using Buildx and deployed it using GitLab CI.