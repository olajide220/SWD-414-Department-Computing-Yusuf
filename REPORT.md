# SWD414 Assignment Report
## Managing a Web Development Project Using Git and GitHub

**Student name:** [Enter your full name]  
**Matriculation number:** [Enter your matric number]  
**Course:** SWD414  
**Assignment:** Managing a Web Development Project Using Git and GitHub  
**Institution:** [Enter institution name]  
**Date:** 30 October 2026

## 1. Introduction
The aim of this practical work was to develop a simple Department of Computing website and use Git and GitHub to manage the project files and record the development history.

## 2. Project setup
A project folder was created with separate `css` and `js` folders. The website contains a homepage, About Us page, Programmes page and Contact Us page. Git was initialised in the folder, and the status command was used to inspect files before committing.

Commands:
```bash
git init
git status
```

## 3. Recording changes
The initial website files were added and committed. The homepage was then improved and the changes were saved in a separate commit. The commit history was checked using `git log --oneline`.

Commands:
```bash
git add .
git commit -m "Create initial department website"
git add index.html css/style.css
git commit -m "Improve homepage content and design"
git log --oneline
```

## 4. Working with branches
A branch named `contact-page` was created for the Contact Us page. The page was added and committed on that branch. The branch was then merged into `main`.

Commands:
```bash
git switch -c contact-page
git add contact.html
git commit -m "Add contact us page"
git switch main
git merge contact-page
```

## 5. Using GitHub
A remote repository was created on GitHub. The local repository was connected to it and the project history was pushed to the remote repository.

Commands (replace `YOUR-USERNAME` with your GitHub username):
```bash
git remote add origin https://github.com/YOUR-USERNAME/swd414-department-of-computing.git
git push -u origin main
git push origin --all
```

## 6. Updating the project
A README file was added to explain the website and how to run it. The update was committed locally and pushed to GitHub.

Commands:
```bash
git add README.md
git commit -m "Add project documentation"
git push
```

## 7. Difference between commit and push
A **commit** saves a snapshot of staged changes in the local Git repository. It records the changes and commit message on the computer. A **push** transfers local commits to a remote repository such as GitHub, making the commits available online. A commit can exist locally without being pushed.

## 8. Challenges encountered
The following are possible practical challenges and solutions to discuss after carrying out the work:
- **Remembering Git commands:** I used the command sequence in the project instructions and checked the repository with `git status`.
- **Working with branches:** I switched to the feature branch before editing the Contact Us page and returned to `main` before merging.
- **Connecting to GitHub:** I needed to use my own GitHub repository URL and authenticate before pushing.
- **Customising the website:** I identified sample department details that must be replaced with official institutional information.

Only retain challenges that you actually encountered and edit this section to reflect your experience.

## 9. Conclusion
The project demonstrates a multi-page website and a basic Git workflow involving repository initialisation, status checking, commits, branching, merging and remote publishing. The final step is to push the repository to my GitHub account and attach screenshots as evidence.

## 10. Evidence to attach
Insert your own screenshots below or submit them as separate image files:
1. Homepage displayed in a browser.
2. About Us, Programmes and Contact Us pages.
3. `git status` and `git log --oneline --graph --all`.
4. The `contact-page` branch and successful merge.
5. GitHub repository page showing the uploaded files and commits.

**GitHub repository URL:** [Paste your actual repository URL here]
