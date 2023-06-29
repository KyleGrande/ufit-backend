# ufit-backend
A capstone project.

## Setting up your ENVIRONMENT

### Installs

[Git - Downloads (git-scm.com)](https://git-scm.com/downloads)

[Node.js (nodejs.org)](https://nodejs.org/en)

Alternatively, you can get a node version manager like [NVM](https://github.com/nvm-sh/nvm)

### Getting the Repo

In the directory of your choice clone the backend by running the following in the terminal

```bash
git clone https://github.com/KyleGrande/ufit-backend.git
```

### Installing Dependencies, Setting Up Environment Variables, Connecting to MongoDB, and Running the Server


First change the directory to the backend and install its dependencies

```bash
cd ufit-backend
npm install

```

Then in the same directory create a .env file and place the UFIT_PORT and UFIT_URI in there.

```bash
touch .env # Alternatively you can right-click in the directory to create it
```

Get the environment variables from Notion.

```env
UFIT_PORT = 3000
UFIT_URI = "mongodb...."
```

Start the server

```bash
npm start
```

### Making Contributions

Before anything else and every time you are going to work on the application you need to get all recent updates

in the directory run

```bash
git pull #pull updates
```

Then once you want to work on something create a branch, these are created for each component of the application. Use a name that describes a component of the app you are working on.

```bash
git checkout -b branch_name. # create and goto branch
```

Once you are finished you can push branches to the repo on GitHub using

```bash
git add . #add all updates
git commit -m "a message saying what you did"  # commit a message
git push -u origin branch_name # push your branch and updates to the repo
```

Then on the GitHub site in the repository, you can see your pull/merge request and accept them.

Once merged you can return to the main branch

```bash
git checkout main.  # return to the main branch
git pull # pull the updates you merged
git branch -d branch_name # delete your old branch
```
