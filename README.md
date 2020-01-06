# hackerbay-backend-challenge 

| Service         | Badge  |
| -------------   |----------|
| Circle CI status| [![CircleCI](https://circleci.com/gh/katunold/hackerbay-backend-challenge.svg?style=svg)](https://circleci.com/gh/katunold/hackerbay-backend-challenge)|
| Codeclimate maintainability| [![Maintainability](https://api.codeclimate.com/v1/badges/a3fb70f7bd621e51e5d7/maintainability)](https://codeclimate.com/github/katunold/hackerbay-backend-challenge/maintainability) |
| Codeclimate test coverage | [![Test Coverage](https://api.codeclimate.com/v1/badges/a3fb70f7bd621e51e5d7/test_coverage)](https://codeclimate.com/github/katunold/hackerbay-backend-challenge/test_coverage) |

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes.

### Prerequisites
What you need to install the software and get started.

```bash
- git : to update and clone the repository.
- Node.js: A platform on which the application will be running.
- npm: a package manager for Node.js used to install project dependencies.
```

### Installation
Clone the repository by typing the following command in your terminal to clone the repo.
```bash
git clone https://github.com/katunold/hackerbay-backend-challenge.git
```
#### Development setup
- Access the root directory of the cloned application.
- Install dependencies.
    ```bash
    npm i
    ```
- Run the application
    ```bash
    npm start
    ```
 - Now you can access the system api Endpoints through port `8000` on `localhost`, 
 routes include the following:
 
 | End Point                                           | Verb |Use                                       |
 | ----------------------------------------------------|------|------------------------------------------|
 |`/login`                                    |POST   | Login a user with the right credentials |
 |`/update`                     |PATCH   | Update the user object using `JSON patch` |
 |`/generate-thumbnail`                                    |POST  | Generate a thumbnail from a public image uri |

 - You can also be able to test out the api through swagger api documentation. To access the documentation, run the application and
 then access the swagger document through the browser using this link.
 ```bash
http://localhost:8000/docs
```
 - To login and get an access token you will use the following credentials
 ```bash
{
  "userName": "Arnold",
  "password": "1qaz2wsx"
}
```
 - To test out the application using Docker download the image by typing the following command in terminal
 ```bash
docker pull katunold/hackerbay-backend-challenge:latest 
```
 - Create and run a container by running this command in your terminal
 ```bash
docker run -p 8000:8000 katunold/hackerbay-backend-challenge
```
## Running the tests

- To run the tests, run the following command in your terminal.

```bash
npm run test
```
## Built With

* [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Node.js](https://nodejs.org/en/) - A JavaScript-based platform for server-side and networking applications.

## Author

* **Katumba Arnold** - *Initial work* - [katunold](https://github.com/katunold)
