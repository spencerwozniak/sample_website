# Example Website

Welcome to the **Example Website** repository! This project contains all the code you need to develop your own website with a **React + TypeScript front-end** and a **Python + Flask back-end**. Whether you're building a personal portfolio or developing a full-scale web app, this repository provides a structured starting point to help you get started quickly.

### How to Get Started

If you're planning to develop your own website based on this project, the first step is to **fork** this repository to your own GitHub account. Forking creates your own copy of the project where you can freely experiment, add features, and customize the code.

[Click here for instructions on how to fork a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo).

Once you've forked the repository, clone it to your local machine using:

```bash
git clone https://github.com/your-username/example-website.git
cd example-website
```

Now you're ready to start working on your own project! Follow the steps below to set up the front end and back end, and start developing.

## Table of Contents

- [Directory Structure](#directory-structure)
- [Ideas for expanding the project](#ideas)
- [Using GitHub](#using-github)
- [Front End Setup and Usage](#front-end-setup-and-usage)
- [Back End Setup and Usage](#back-end-setup-and-usage)

## Directory Structure

This is a high-level overview of the directory structure. It shows where important files are located and gives some guidance on how you might want to modify the code. You can customize or remove files based on the needs of your project.

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

### Improving Page Design

One of the main goals for this project is to create a visually appealing and professional-looking website. The pages, especially key ones like **HomePage**, **AboutUs**, **ContactUs**, and **CoursesPage**, should be designed with modern aesthetics in mind.

To start with, you can explore creative ideas for web design by browsing through examples and templates available on [FreeFrontend](https://freefrontend.com/css-code-examples/). This website offers a variety of CSS and HTML design examples that can serve as inspiration for styling and enhancing your own pages.

Moreover, if you find a website you like, you can often **Inspect Element** on the page to find the HTML and CSS used. This might not be legal, but you can copy and paste the code into ChatGPT and ask it to design elements with a similar appearance.

#### Key Design Tips:
- **Add more images**: Modern websites heavily rely on visual content. Consider using high-quality images that complement your brand or purpose. These images can be used as page backgrounds, featured content, or within sections to break up text.
- **Smooth scrolling and animations**: Implement subtle scroll animations, hover effects, and transitions to give the website a polished look. These effects create a more interactive and engaging user experience.
- **Modern layouts**: Use flexible, grid-based layouts that adapt well to different screen sizes (responsive design). The pages should look great on both desktops and mobile devices.
- **Typography**: Choose clean, readable fonts that align with the aesthetic you're aiming for. You can use Google Fonts for a wide selection of fonts, or even custom fonts for a unique feel.

As you work on your website, also consider what additional pages might be useful to include. For example, the **AboutUs** and **ContactUs** pages are placeholders that can be expanded with more specific information about your brand, mission, or team. The **CoursesPage** could feature a detailed course catalog, while **NEW PAGES** could include sections like FAQs, Testimonials, or a Services Overview.

Here are some websites you can check out for **artistic inspiration**:
- [Robinhood](https://robinhood.com/us/en/): Clean, professional design with modern UI elements.
- [Material Kit React](https://demos.creative-tim.com/material-kit-react/): A React-based version of the Material Kit UI, great for adding functional, modern design elements to your project.
- [Slider Revolution](https://www.sliderrevolution.com/design/innovative-creative-websites/): "The most innovative and creative websites you just have to see"
- [PoolSuite](https://poolsuite.net/): Retro design with a lot of interactive elements

#### CSS and Aesthetic Enhancements:
To achieve the desired look, you’ll likely need to spend time working on CSS and exploring different styles. Learning advanced CSS techniques, such as **flexbox**, **grid layouts**, and **CSS animations**, will help create a polished and professional look for your website. Consider adding:
- **Hover effects** on buttons and links to give them a more interactive feel.
- **Parallax scrolling effects** to make certain sections stand out as users scroll through the page.
- **Animated transitions** between sections or pages to create a smooth and modern browsing experience.

Spencer is focusing on functionality, but there are plenty of design-related enhancements that could be explored. You may want to dive deeper into these aesthetic aspects, including:
- Refining the CSS styling across the board, ensuring consistency, and creating a cohesive design language throughout the site.
- Overall, focus on making the website look **cool** and professional while keeping it clean and easy to navigate.

### Adding a Blog/Reviews Section

Another idea to enhance the user experience is to create a blog or reviews section. This can add value to the website by encouraging user interaction and engagement. A blog can serve as a space to share updates, thoughts, and news, while a reviews section can help establish credibility through testimonials.

#### Features for a Blog/Reviews Section:
- **User Interaction**: Create a section where users can leave comments, reviews, or feedback about the website or services offered. This could be a great way to build community engagement.
- **Testimonials**: Display customer or user testimonials to add trust and authenticity. You’ll need to gather these first, but once you have them, they can be featured prominently on the site (e.g., on the **HomePage** or **AboutUs** page).
- **Blog Posts**: You could write blog posts about various topics. For example:
  - Updates on website or company news.
  - Insights on your work with AI, web development, or other technical topics relevant to your audience.
  - Personal thoughts or explorations of modern design, technology, and how they intersect with your work.
  - For artistic inspiration, check out [Stanford Medicine's blog on AI innovations](https://stanmed.stanford.edu/translating-ai-concepts-into-innovations/).

This blog section could also be a creative space where you and your team discuss tech trends or insights related to AI, web development, and any new technologies you're exploring.

By including a blog and reviews section, you can foster more **user interaction**, create a sense of community, and provide a dynamic content hub that’s frequently updated. This can keep users engaged, returning to the site to check for new posts, reviews, or testimonials.

### Additional Ideas:
- **FAQ Section**: Add a **Frequently Asked Questions (FAQ)** page to address common queries or concerns about your services or content.
- **Newsletter Signup**: Add a newsletter signup form to collect user emails and keep them updated with new blog posts or services.
- **Analytics Integration**: Consider integrating tools like **Google Analytics** to track user behavior, helping you understand which parts of the website are most engaging.

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

This project is not yet licensed.
