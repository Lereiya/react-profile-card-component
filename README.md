# React Profile Card Component

This is a project I built as an assignment for my React course to demonstrate how components, props, and styling work together in practice. The goal was to build a single, reusable profile card component that could display unique information for multiple people without duplicating code.

## Key Features

* Reusable Component Structure: The core ProfileCard component dynamically accepts and renders data like names, roles, locations, and bios using React props.
* Interactive Button State: I added a basic click event to the Follow button using React's useState hook. Clicking the button toggles its state to Following and updates the background color to give real-time feedback.
* Clean Layout and Design: The layout uses Flexbox to keep everything aligned cleanly. Even if one profile bio is longer than the others, the cards stay a uniform height and the buttons align perfectly along the bottom row.
* Localized Context: One of the profile cards is explicitly customized around a Kenyan context, highlighting a Software Engineer profile based in Nairobi.

## Technologies Used

* React.js (Functional components, props, and hooks)
* Vanilla CSS (Flexbox, hover states, and smooth transitions)
* Semantic HTML5

## How to Run This Project Locally

If you want to pull this project down and run it on your own machine, you can follow these steps:

1. Clone the repository to your local machine:
   git clone https://github.com/Lereiya/react-profile-card-component.git

2. Navigate into the project folder:
   cd react-profile-app

3. Install all the necessary dependencies:
   npm install

4. Start the local development server:
   npm start

Your browser should automatically open up to http://localhost:3000 where you can see the cards in action.
