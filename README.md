# Cancer Connect Website Front-End

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Libraries and Frameworks](#libraries-and-frameworks)
- [License](#license)

## Introduction
Welcome to Cancer Connect, a social media platform dedicated to cancer patients and survivors. This web application is designed to provide a supportive online community where users can connect, share their experiences, and find encouragement. The platform includes unique features such as customizable avatars, badges based on user roles and engagement, and a dedicated donations page.

## Repository Information
This project was part of the Amazon Industry Program 2.0 at the American University of Beirut (AUB), where this project secured first place in the competition.

This repository contains the frontend code for the Cancer Connect website, while the backend code is available at [Cancer Connect Lambda Functions](https://github.com/RubaHoussami/Cancer-Connect-Lambda-Functions).

## Features
- **Home Page**: Presents the mission and vision of Cancer Connect.
- **Donation Page**: Allows users to make donations to support cancer patients in need.
- **Authentication & Registration**: Secure pages for user sign-in and account creation.
- **Feed Page**: An interactive social feed where users can post, like, comment, and delete posts.
- **Profile Page**: Displays user information, posts, and customizable avatars.
- **Badges**: Users can earn badges based on their role (e.g., cancer patient, survivor, healthcare professional) or their engagement level.

## Usage
Visit the website at: [Cancer Connect](https://main.d3qiaaf9mnve31.amplifyapp.com/)

## Project Structure
- **src**: Contains the source code for the React application.
  - **components**: Includes files for reusable components used in different pages.
  - **pages**: Includes folders for various pages such as "Home," "Donation," "Feed," "Profile," "Signup," "Authentication,".
- **public**: Houses the images, videos, PDFs, and the main HTML file.

## Libraries and Frameworks
This project utilizes the following libraries and frameworks to enhance functionality and design:

- **React**: The core library for building the user interface.
- **AWS Amplify**: Used for hosting the application and integrating with AWS services.
- **DynamoDB**: Database service for storing user data and posts.
- **Material-UI**: A popular React UI framework for designing components.
  - **@mui/icons-material**: Material-UI icons.
  - **@mui/material**: Material-UI core components.
  - **@mui/styled-engine-sc**: Integration with styled components.
- **Bootstrap**: For building responsive and modern web applications.
- **React Router DOM**: For handling navigation and routing.
- **Styled Components**: For styling React components with CSS-in-JS.
- **FontAwesome**: For including vector icons and social logos.

## License
This project is licensed under the MIT License.
