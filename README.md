# Example Website

This repository contains all the code you need to start developing your own website with a React + TypeScript front-end and Python + Flask back-end.

[Fork the repository to start working on your own project](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

## Table of Contents

- [Directory Structure](#directory-structure)
- [Ideas](#ideas)
- [Using GitHub](#using-github)
- [Front End Setup and Usage](#front-end-setup-and-usage)
- [Back End Setup and Usage](#back-end-setup-and-usage)

## Directory Structure

Here’s a brief overview of the directory structure. Note that you may want to delete files, add files, or modify files tailored to your specific use case.

```
course/                         # Root directory
|
├── update_github.bat           # Run this script to automatically update the GitHub with your local changes.
│
├── front/                      # Directory containing all front end shit
|   |
|   ├── .gitignore              # Tells GitHub to ignore certain local files (e.g. "node_modules/")
|   ├── index.html              # Basic HTML template (entry point to our application)
|   ├── package.json            # Information about the project (e.g. name, version, scripts, dependencies)
|   ├── package-lock.json       # Automatically generated file to lock down the versions of installed node packages.
|   ├── tsconfig.json           # TypeScript configuration file. (Tells TS compiler how to compile our code to JS.)
|   ├── tsconfig.node.json      # TypeScript configuration file optimized for Node.js environments.
|   ├── vite.config.ts          # Vite configuration file.
|   |
|   ├── src/                        # Directory containing all source code for the front end.
|   |   |
|   |   ├── main.tsx                # MAIN SCRIPT FOR RUNNING THE FRONT END ('npm run dev' runs this script)
|   |   ├── index.css               # Global styles
|   |   ├── vite-env.d.ts           # Used to define types specific to the Vite environment
|   |   |
|   |   ├── pages/                  # Directory containing React elements for pages of the website (TSX + CSS for each page unless otherwise noted)
|   |   |   |
|   |   |   |                       ## Basic webpages ##
|   |   |   ├── HomePage            # Code for landing / home page
|   |   |   ├── NotFound            # Page for 404 not found
|   |   |   ├── MediaPage           # Code for page to showcase media (videos, articles, etc)
|   |   |   |
|   |   |   |                       ## Informational webpages ##
|   |   |   ├── AboutPage           # Code for about us page
|   |   |   ├── WhatWeDoPage        # Code for what we do page
|   |   |   ├── MissionPage         # Code for mission page
|   |   |   ├── HistoryPage         # Code for history page
|   |   |   ├── TeamPage            # Code for team page
|   |   |   |
|   |   |   |                       ## Business-related webpages ##
|   |   |   ├── ContactPage         # Code for contact us page
|   |   |   ├── OpportunitiesPage   # Code for page for job listings
|   |   |   ├── jobData.json        # File for storing job listing data
|   |   |   |
|   |   |   |                       ## Webpages related to user accounts ##
|   |   |   ├── LoginPage           # Code for logging in page (preliminary)
|   |   |   ├── RegisterPage        # Code for registering page (preliminary)
|   |   |   ├── AccountForm.css     # Styling for the above pages
|   |   |   └── ProfilePage         # Code for page for viewing and editing your profile (preliminary)
|   |   |
|   |   ├── items/                  # Directory containing React elements for different items used on the pages of the site (TSX + CSS unless otherwise specified)
|   |   |   |
|   |   |   |                       ## Basic website elements ##
|   |   |   ├── Navigation          # Navigation bar that locks at the top of the page
|   |   |   ├── MenuButton          # Animated button for accessing menu on Navbar
|   |   |   ├── Header              # Header section for the top of a page
|   |   |   ├── Footer              # Footer for bottom of page
|   |   |   ├── LoadingCircle       # Displays when pages are loading
|   |   |   |
|   |   |   |                       ## Optional website elements ##
|   |   |   ├── TempMsg             # Displays a temporary message on the page
|   |   |   ├── VideoPlayer         # A simple video player for embedding YouTube videos
|   |   |   ├── ArticleItem         # Item for displaying an article (preliminary)
|   |   |   |
|   |   |   |                       ## Website elements for business ##
|   |   |   ├── MapSection          # Section for putting a map and company contact information
|   |   |   ├── ContactForm         # Form for filling out contact information
|   |   |   ├── Testimonials        # Testimonials about your website / company
|   |   |   ├── ImpactSection       # Impact of your company
|   |   |   ├── Timeline            # A timeline for the history page (preliminary, does not look right yet)
|   |   |   ├── Timeline.json       # File for storing timeline data
|   |   |   └── TeamCard            # Card for displaying a team member
|   |   |
|   |   ├── components/             # Directory containing purely functional components of the front end
|   |   |   |  
|   |   |   ├── Communicate         # Used for communicating with the back-end (HIGHLY IMPORTANT)
|   |   |   └── ProtectedRoute      # Used to determine whether a user is logged in / has priveleges to access a certain area of the website
|   |   |
|   |   ├── context/                # Directory containing React elements for setting context.
|   |   |   |
|   |   |   └── AuthContext.tsx     # Element for setting context of logged in / logged out
|   |   |
|   |   └── assets/                 # Directory containing assets (e.g. images, videos, etc.) that will be processed and optimized during compilation.
|   |
│   ├── public/                 # Directory containing assets (e.g. images, videos, etc.) that are copied as-is without processing during compilation.
|   |
│   └── node_modules/           # Directory containing shit downloaded with 'npm install'. (The exact contents of this folder are unimportant)
|
├── back/                       # Directory containing all back end shit from course (NEED TO UPDATE THIS)
|   |
|   ├── main.py                 # MAIN SCRIPT FOR RUNNING THE BACK END (do whatever you need on the back end from here)
|   |
|   ├── .env                    # Environment variables for this folder (Contains SQL stuff)
|   ├── instance/               # SQL databases
|   │   |
|   │   └── users.db            # SQL Database for storing user account information
│   |
│   ├── .gitignore              # Tells GitHub to ignore certain local files (e.g. "venv/")
│   ├── setup_venv.bat          # Initializes venv for Windows
│   ├── requirements.txt        # Contains dependencies needed for the venv
│   ├── README.md               # README file for back end
│   |
│   └── venv/                   # Directory containing shit downloaded with 'setup_venv'
│   
└── README.md                   # The file you are currently reading.
```

## Ideas

### Pretty pages

See https://freefrontend.com/css-code-examples/

HomePage / AboutUs / ContactUs / CoursesPage / NEW PAGES
- Add more images, scroll down through
- I want these pages to look like a modern website
- Think about what we might want on these pages, and what other pages we might want (e.g. AboutUs, ContactUs are just there as placeholders for now. We can make these anything we want.)

See these websites for **artistic inspiration**:
- https://robinhood.com/us/en/
- https://wepresent.wetransfer.com/
- https://www.thisiscolossal.com/
- https://mymodernmet.com/
- https://www.zariaforman.com/drawings
- https://www.louisehourcade.com/copie-de-qui-suis-je
- https://www.charlypalmer.com/
- https://demos.creative-tim.com/material-kit-material-ui-v4/?_ga=2.182095975.1991156074.1719462591-1272164145.1719462591#/
- https://demos.creative-tim.com/material-kit-react/?_ga=2.58760429.1991156074.1719462591-1272164145.1719462591#/presentation

This may involve more tutorials, messing with CSS, etc. Spencer is focused on the functionality. Brady will figure this out.
- Make AudioPlayer appear like the Siri logo or something, where it looks more like an AI is speaking to you.
- CSS styling for everything
- Make shit look cool.

#### Could add a blog / reviews section
- A section where users can talk to each other, we can chime in, etc.
- Customer testimonials (need to get these first)
- Could have blog posts by us (for artistic inspiration, see https://stanmed.stanford.edu/translating-ai-concepts-into-innovations/)
- Could be a way for us to run blog posts aside from just the course as well, could give thoughts on AI, etc?

## Using GitHub

GitHub is a platform for version control and collaboration. It lets you and others work together on projects from anywhere. This section will guide you through some basic commands to help you start working with your project.

### Install GitHub

Download and install Git for Windows: https://git-scm.com/download/win

### Configure GitHub

You must run the following commands to access your GitHub account. You may also be directed to the GitHub website to login.

**1. Configure your email address.**
```powershell
git config --global user.email "you@example.com"
```
**2. Configure your name.**
```powershell
git config --global user.name "Your Name"
```

### Setting Up Your Directory

**1. To clone the repository and create a local copy on your computer, use the following command:**
```powershell
git clone https://github.com/spencerwozniak/course.git
```
**2. You must be in the directory to run any of the following commands, so change into it:**
```powershell
cd course/
```

### Downloading Changes

**To download the latest changes from the repository, you can simply run:**
```powershell
git pull origin main 
```
*This pulls global updates into your local repository. You should do always do this before you do anything within your local repository.*

### Uploading Changes

#### Automatic Script

To upload changes made to files in your local repository to GitHub, simply run the following command:

```powershell
.\update_github.bat "Your commit message."
```
_Note that your commit message must be in quotes so it isn't perceived as multiple arguments._

#### Manual Steps

With more complex uploads (e.g. with other arguments and/or commands), you may want to follow these general steps:

**1. Stash your local changes:**
```powershell
git stash
```
*This temporarily removes all the local changes you've made since your last commit and saves them in a special area called a "stash." It reverts your working directory to match the last global, essentially making it look like you haven't made any changes.*

**2. Pull global repository:**
```powershell
git pull origin main
```
*This pulls any global updates (since you last pulled) into your local repository.*

**3. Apply your stashed changes:**
```powershell
git stash pop
```
*This applies the changes saved in the "stash" to your current working directory and then removes the stash if the merge is successful.*

**4. Add your modified files to the "staging" area:**
```powershell
git add {filename} # Specify file you want to update.
```
*This command adds specified file(s) to the "staging" area, meaning it is ready to be a part of the committed change to GitHub.*

You can also specify all files in the working directory with:
```powershell
git add . # Specify all files within your working directory.
```

**5. Commit your changes and include a message describing what you have modified:**
```powershell
git commit -m 'changes to python code' # The message should explain what changes you made.
```
*This command creates the commit in your local repository.*

**6. Push the changes to the main branch of the global repository:**
```powershell
git push origin main
```
*This command sends your local updates to the global repository.*

### Summary
These basic commands should help you manage your files and synchronize your local repository with GitHub. For more detailed information, refer to the [GitHub documentation](https://docs.github.com/en).

## Front End Setup and Usage

### Installation

#### Prerequisites

- [Install node.js](https://nodejs.org/en/download/package-manager) (recommended: v20.x or later)
- [Install VSCode](https://code.visualstudio.com/)

You can verify installations with the following commands:

```powershell
# Verify Node.js installation
node --version

# Verify npm installation
npm --version

# Verify VSCode installation
code --version
```

#### Additional installations

You may need to also install the following components:

```powershell
npm install react-bootstrap bootstrap
```

### Usage

#### Working on the website

1. Clone the repository (Only need to do this if you are setting up for the first time):
```powershell
git clone https://github.com/spencerwozniak/course.git
```
2. Update your local repository:
```powershell
git pull origin main
```
3. Change into the correct directory:
```powershell
cd course/front
```
4. Install dependencies:
```powershell
npm install --force
```
5. Open in VSCode:
```powershell
code .
```
6. Start the development server (can do within VSCode):
```powershell
npm run dev
```

#### Running the Application

To start the application in development mode, run:
```powershell
npm start
```

#### Building the Application

For a production build, use:
```powershell
npm run build
```
This compiles all the assets into the **build/** directory.

## Back End Setup and Usage

### Usage

1. Clone the repository (Only need to do this if you are setting up for the first time):
```powershell
git clone https://github.com/spencerwozniak/course.git
```
2. Update your local repository:
```powershell
git pull origin main
```
3. Change into the correct directory:
```powershell
cd course/back
```
4. Run setup:
```bash
./setup_venv.sh # Linux
```
```powershell
.\setup_venv.bat # Windows
```
5. Enter virtual environment:
```bash
source venv/bin/activate # Linux
```
```powershell
.\venv\Scripts\activate # Windows
```
6. Open in VSCode:
```powershell
code .
```
7. Start the development server (can do within VSCode):
```powershell
python main.py
```

### License

This project is not yet licensed. See the [LICENSE.md]() file for details.
