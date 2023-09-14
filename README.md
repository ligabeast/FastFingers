# FastFingers Vue WPM Tracker
# https://fastfingers-2a437.web.app/

## Description

The Vue WPM Tracker is a web-based application inspired by TypeTest that allows users to measure their Words Per Minute (WPM) while typing. The application records WPM values and visualizes them in an informative graph. It leverages a Firebase database in the backend to store and manage the data.

## Features

- **WPM Measurement:** The application enables users to input text and measures the time it takes to type it. Based on the input time and the number of words typed, it calculates the WPM.

- **Graphical Representation:** The measured WPM values are presented in an interactive graph. Users can easily track the evolution of their typing speed over time.

- **Statistics:** The application displays statistical information, including the average measured WPM, the best recorded value, and the total number of measurement attempts.

- **Firebase Database Integration:** The backend of this application is powered by Firebase, a real-time cloud database. Firebase allows for efficient data storage and retrieval, ensuring a seamless user experience.

## Installation

To run the Vue WPM Tracker locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/vue-wpm-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vue-wpm-tracker
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a Firebase project and configure it by adding your Firebase credentials in the appropriate configuration file.

5. Start the development server:

   ```bash
   npm run serve
   ```

6. Access the application in your web browser at `http://localhost:8080`.

## Usage

1. Enter a piece of text in the input field -> starts the test

2. By typing a space the current word will be skipped

3. Type the given text as quickly and accurately as possible.

4. When the timer is expired the calculated WPM value will be displayed, and the result will be added to the graph.

5. You can view your WPM history and statistics on the dashboard.

6. If you broke the top10 wpm you get a notification if you want to add your test to the top10 (currently the wpm is not checked, so you will be notify in every test end)

## Technologies Used

- Vue.js
- Firebase (Realtime Database)
- Chart.js (for graph visualization)
- Other Vue.js plugins and dependencies (specified in `package.json`)

## Inspired by TypeTest

The frontend design and user experience of this application are inspired by the popular TypeTest application, providing a similar typing test experience to measure your WPM.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the Vue.js and Firebase communities for their excellent documentation and resources.
- Chart.js for providing a powerful charting library.
- The creators of TypeTest for inspiring the frontend design and user experience.
- Our awesome contributors who help improve this project.
