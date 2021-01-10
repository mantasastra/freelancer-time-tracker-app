# Freelancer Time Tracker App

This is a small full-stack web application that can help a freelancer track their time.

## Implemented User Stories

- As a user, I want to be able to start a time tracking session
- As a user, I want to be able to stop a time tracking session
- As a user, I want to be able to name my time tracking session
- As a user, I want to be able to save my time tracking session when I am done with it
- As a user, I want an overview of my sessions for the day, week and month
- As a user, I want to be able to close my browser and shut down my computer and still have my sessions visible to me when I power it up again.

## Next Steps

The following will need to be implemented before releasing the app to production

- Add E2E tests for the app (mainly around session form)
- Add API tests for controllers
- Add the ability to delete saved sessions
- Implement the ability to create users
  - Add user authentication/authorization in both API and Client
  - Amend the DB data to handle users
- Improve validation for API requests
- Create CI & CD pipeline
- Host the API & Client

## Demo

![Demo of the time tracker app](https://i.imgur.com/wZWWYaj.gif)

## Tech Stack

### API

- Implemented using `Express` with `Typescript`
- Used `MongoDB` for database
- Used `Jest` for testing

### Client

- Implemented using `ReactJS` with `Typescript`
- Used `Jest`, `react-testing-library` and `msw` for testing
- Used `React-bootstrap` for faster, responsive and accessible styling

## Getting Started

### Prerequisites

- `yarn`

### How to run

To get a local copy up and running follow these simple steps.

1. Clone this repo
2. Go to the API `cd ./api`
   1. Install dependencies `yarn`
   2. Create `.env` file in the root of the dir
   3. Configure the `.env` file as per the example (`.env.example`) with the provided credentials
   4. Run the API `yarn start`
   5. The API will run on `localhost:8000`
3. Open a new terminal window and go to the Client `cd ./client`
   1. Install dependencies `yarn`
   2. Run the client `yarn start`
   3. The client will run on `localhost:3000`
4. You can access the application through `http://localhost:3000`

## Tests

This application is tested using a mix of unit and integration tests. Not everything has been tested due to the time. The next steps would be to test session form using e2e tests (preferably cypress) and also add more tests for the API.

## File Structure

Project is split into multiple directories for better access and easier usage.

    .
    ├── api                         # All the files related to the API
        ├── src                     # API source files
            ├── db                  # Database files for connecting MongoDB
            ├── resources           # Main API logic consisting of constructors, models & routes
    ├── client                      # All the files related to the client
        ├── src                     # Client source files
            ├── components          # Components used throughout the project
            ├── hooks               # Reusable custom hooks
            ├── layout              # Layout file of the app UI
            ├── pages               # Main pages of the app
            ├── test                # Test helper files for mocking API
            ├── utils               # Extra helper files
