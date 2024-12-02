# 🚀 UP-DP landing
___
## 🛠️ Stack:

<img src="https://skillicons.dev/icons?i=ts,next,react,sass,docker"  alt="stack icons" title="stack icons" />

___
## 📦 Project Setup Guide

Follow these simple steps to get the project up and running:

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/vlad1slove1/landing.git
cd landing
```

### 2. Install Dependencies

Next, install the required dependencies using npm:

```bash
npm install
```

### 3. Setting Up .env

Copy or rename the .env.example file to .env:

```bash
cp .env.example .env
```

Then open the .env file and set the appropriate values for your environment variables:

```bash
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=personal bot token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=chat_id for specific telegram group
```

Save the .env file after updating all the variables

### 4. Start the Development Server

Once the dependencies are installed, run the development server:

```bash
npm run dev
```

The app will now be running on http://localhost:3000

### 5. Lint the Project

To check the code for style and potential issues, run the linting command:

```bash
npm run lint
```

### 6. Build the Project

To create a production build of the project, run the following command:

```bash
npm run build
```
___
## 🐳 Run with Docker

Build the image:
```bash
docker build -t landing .
```

Run the container:

```bash
docker run -p 3000:3000 landing
```

Now app is up and running on http://localhost:3000
