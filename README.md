# 🚀 UP-DP landing
___
## 🛠️ Stack:

<img src="https://skillicons.dev/icons?i=ts,next,react,sass,docker"  alt="stack icons" title="stack icons" />

___
## 📦 Project Setup Guide

### ⚙️ Prerequisites

⚠️ **Project requires Node.js v18 and npm v9.8.1 (or later)**

Use nvm (Node Version Manager) to install and manage the required versions of Node.js and npm:

1) Install nvm:
    If nvm isn't installed, follow the official installation [guide](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

    Or, run this commands:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
    ```
    
    ```bash
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    ```
    
    ```bash
    # These should pick up the nvm command
    source ~/.bashrc
    ```

2) Install Node.js (v18 or higher) and npm (latest):

   This will install the latest long-term support (LTS) version of Node.js and the latest compatible npm version.

    ```bash
    nvm install --lts  
    nvm use --lts  
    ```

3) Verify installation:

    ```bash
    node -v  
    npm -v  
    ```
___
### 📥 Follow these simple steps to get the project up and running:

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
___
## 🚢 Docker image as systemd service

### 1. Create a new service file:

Create a new service file in /etc/systemd/system/:

```bash
sudo nano /etc/systemd/system/landing.service
```

Add the following content:

```                
[Unit]
Description=landing container
After=docker.service
Wants=network-online.target docker.socket
Requires=docker.socket

[Service]
Restart=always
ExecStart=/usr/bin/docker run -p 3000:3000 landing
ExecStop=/usr/bin/docker stop landing

[Install]
WantedBy=multi-user.target
```

### 2. Enable and Start the Service

Enable and start the service using:

```bash
sudo systemctl daemon-reload
sudo systemctl enable landing.service
sudo systemctl start landing.service
```

### 3. Check the Status

Verify that the service is running:

```bash
sudo systemctl status landing.service
```

Now the Dockerized app is running as a systemd service!
