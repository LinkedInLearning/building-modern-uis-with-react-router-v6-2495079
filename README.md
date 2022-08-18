# Building Modern UIs with React Router v6
This is the repository for the LinkedIn Learning course Building Modern UIs with React Router v6. The full course is available from [LinkedIn Learning][lil-course-url].

![Building Modern UIs with React Router v6][lil-thumbnail-url] 

Are you already familiar with React and ready to level up your skills and build modern user interfaces? In this course, learn how to extend your React applications by adding routing capabilities with React Router, the standard routing library for React. Instructor Guil Hernandez starts by going over routing basics and single page apps. He then illustrates some of the useful React Router components, hooks, and other features that navigate users to all the different views and help create dynamic user interfaces that automatically update whenever the URL changes. He explains how to create 404 or “not found” routes, as well as how the location state, history object, and the history stack work. Guil also provides several challenges along the way so you can practice as you go and make what you’re learning stick.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have the following installed:
	- [Node.js](https://nodejs.org/en/)
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. Run `npm install` to install all project dependencies, then `npm start` to run and launch the app


### Instructor

Guil Hernandez 
                            
Software Development Instructor and Developer

                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/guil-hernandez).

[lil-course-url]: https://www.linkedin.com/learning/building-modern-uis-with-react-router-v6
[lil-thumbnail-url]: https://cdn.lynda.com/course/2495079/2495079-1660328056345-16x9.jpg
