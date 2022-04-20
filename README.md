# Gallery App 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)

## General info

- Creating a gallery page which displays all the available images from the backend's file one by one as grid view, on hovering some image of them a zoom/magnifier icon is shown over the hovered image only and on clicking any of the image it opens the image in a carousel modal showing the clicked image & its name in the carousel's center with possibility to navigate between images through that carousel's left & right arrows and show clicked image's number over total images count 
- [Backend's File URL](https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy)

## Technologies
- HTML5
- CSS3
- ECMAScript (ES6)
- ReactJS
- React Hooks
- Redux
- Redux Thunk (middleware)
- axios

## Setup

In the project directory, Open your terminal and then type:
### `git clone https://github.com/RahmaRamadan/GalleryApp.git`

cd into the new folder and type
### `npm install react-scripts --save`

To run the project
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

## Features
- Getting & displaying images from backend's file as a grid.
- Hovering some image shows magnifier/zoom icon.
- Clicking some image opens it in carousel modal.
- Carousel modal contains arrow on the left and right for navigating to previous & next images.
- Carousel modal displays the clicked image centered, with showing image's title over it and below shows the image's number over total images count ex. (image 2/30) which means 2nd image from 30 images as in the attached example picture in this mail
