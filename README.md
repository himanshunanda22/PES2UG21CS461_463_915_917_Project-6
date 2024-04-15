# E-commerce Microservices Application

This project aims to develop an e-commerce microservices application that can be deployed on the cloud using Docker, Kubernetes, Jenkins, and Git.

## Project Overview

The application consists of several microservices deployed as Docker containers on a Kubernetes cluster. Jenkins is used for continuous integration and deployment, while Git is used for version control.

## Microservices

The application includes the following microservices:

1. **User Management**: Handles user registration, authentication, and authorization.
2. **Product Management**: Handles product management, including adding, editing, and deleting products.
3. **Order Management**: Handles order management, including viewing order history, tracking orders, and managing orders.
4. **Review Management (optional)**: Handles product review management, allowing users to view and add reviews.

## Technologies Used

- **Docker**: For containerization of microservices.
- **Kubernetes**: For orchestration and deployment of containers.
- **Jenkins**: For continuous integration and deployment.
- **Git**: For version control and code management.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
git clone https://github.com/himanshunanda22/PES2UG21CS461_463_915_917_Project-6.git

2. Build and run the Docker images for each microservice:
cd e-commerce-microservices/user-service
docker build -t user-service .
docker run -p 8080:8080 user-service

Repeat this process for each microservice.

3. Set up Kubernetes and deploy the microservices using the provided manifests.

4. Configure Jenkins and set up the CI/CD pipeline for automated builds and deployments.

## Contributing

Contributions to this project are welcome. Please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to the branch.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
