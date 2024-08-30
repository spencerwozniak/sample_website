# Helix Website Upgrade

- Current Website: https://www.helixscribes.com/hss/
- Goal Website: https://www.scribeamerica.com/

https://youtu.be/FvEtPjhBXAw

See this chat to see how ChatGPT was used to massively accelerate the development of this project: https://chatgpt.com/c/66620eb2-34d7-4ca1-9f26-6165a8349b04

## Table of Contents

- [Directory Structure](#directory-structure)
- [Ideas](#ideas)
- [Using GitHub](#using-github)
- [Front End Setup and Usage](#front-end-setup-and-usage)
- [Back End Setup and Usage](#back-end-setup-and-usage)



## Directory Structure

Here’s a brief overview of the directory structure:

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
|   |   ├── main.tsx                # MAIN SCRIPT FOR RUNNING THE FRONT END
|   |   ├── index.css               # Global styles
|   |   ├── vite-env.d.ts           # Used to define types specific to the Vite environment
|   |   |
|   |   ├── pages/                  # Directory containing React elements for the main pages
|   |   |
|   |   ├── items/                  # Directory containing React elements for different items of the site
|   |   |
|   |   ├── components/             # Directory containing purely functional components of the front end
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
|   ├── main.py                 # MAIN SCRIPT FOR RUNNING THE BACK END
|   |
|   ├── .env                    # Environment variables for this folder (Contains SQL stuff)
|   ├── instance/               # SQL databases
|   │   |
|   │   └── users.db            # SQL Database for storing user account information
│   |
│   ├── .gitignore              # Tells GitHub to ignore certain local files (e.g. "venv/")
│   ├── setup_venv.bat          # Initializes venv for Windows
│   ├── requirements.txt        # Contains dependencies needed for the venv
│   ├── README.md               # 
│   |
│   └── venv/                   # Directory containing shit downloaded with 'setup_venv'
│   
└── README.md                   # The file you are currently reading.
```

## Ideas

### Pretty pages

#### Goal front page

![image](https://github.com/user-attachments/assets/1288d065-b690-4afd-87e8-e64506a80654)

#### Goal about page

![image](https://github.com/user-attachments/assets/89caf63f-1b4e-44af-8ee2-4f8777e8c1cf)

#### Goal "What We Do" page

![image](https://github.com/user-attachments/assets/5d20281f-fc73-43dd-ba8a-bcb8588f1345)

#### Old front page

![image](https://github.com/user-attachments/assets/ffb6089c-20e5-4539-9a02-ddb22ce61a9a)

#### Old about page

![image](https://github.com/user-attachments/assets/3bdff67e-8960-409e-b6cc-c40a7d9301da)

#### Old "What We Do" page

![image](https://github.com/user-attachments/assets/ed1e5e05-2f02-4949-b872-02ce2f43886e)

#### Current front page

![image](https://github.com/user-attachments/assets/339be81b-b33e-43ad-994d-81cd76cf8ddf)

#### Current about page

- _Does not have to be overkill necessarily with something like a functional timeline, but want to make it nice._

![image](https://github.com/user-attachments/assets/86039c5a-7a03-4295-8d45-689dec3b0508)

#### Current 'What We Do' Page

![image](https://github.com/user-attachments/assets/72989bb1-21bb-45f2-8cdc-31bf0d7297f4)

### Pretty Footer

#### Goal footer

![image](https://github.com/user-attachments/assets/06ce70c0-0ae0-4fe2-a148-cbaabaa49a3c)

#### Old footer

![image](https://github.com/user-attachments/assets/2b4ffc4d-8317-41bb-adb4-943ac5bfe908)

#### Current footer

![image](https://github.com/user-attachments/assets/35c30c38-b655-4dae-9379-3430aaa3057b)

### Better contact sections

#### Goal

![image](https://github.com/user-attachments/assets/95f939b4-628f-4a02-a8fe-fa4235c276f8)

#### Old

![image](https://github.com/user-attachments/assets/42a290d0-88cb-435a-a0b8-85246fde0d66)

#### Current

![image](https://github.com/user-attachments/assets/01322ce1-9b48-4f99-bc80-0e6cf3f44dee)

### Add More Detail to the Website / Make Website Pretty

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
