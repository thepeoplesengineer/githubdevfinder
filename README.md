# Candidate Search Application

## Description

This Candidate Search application is built with React and TypeScript, using Vite as the build tool. The application retrieves user data from the GitHub API and displays candidate profiles, allowing you to save or skip candidates. The saved candidates are stored in local storage and can be viewed later.

## Features

- **Candidate Search Page**: Fetches a random GitHub user's profile and displays relevant information including their avatar, name, location, and a link to their GitHub profile.
- **Save/Skip Candidates**: Allows users to save a candidate's profile or skip to the next one.
- **Saved Candidates Page**: Displays a list of all saved candidates, with their profile information.
- **Local Storage Persistence**: Saved candidates persist even after the page is reloaded.

## Installation

To install and run this application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/candidate-query.git
   cd candidate-query
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed, then install the dependencies:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your GitHub Personal Access Token:
   ```env
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

4. **Run the Application**:
   Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Usage

- **Candidate Search**: On the home page, view a random GitHub user's profile. Use the `+` button to save the candidate or the `-` button to skip to the next candidate.
- **Saved Candidates**: Navigate to the "Your Saved Candidates" page to view all the candidates you've saved.

## Deployment

To deploy this application:

1. **Build the Application**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   Follow the instructions of your preferred hosting service (e.g., Vercel, Netlify, Render) to deploy the contents of the `dist` folder.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more information.

