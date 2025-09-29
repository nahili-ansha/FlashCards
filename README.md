# Web Development Project 2 - *FlashCards*

Submitted by: **Nahili Ansha**

This web app: **Study Quiz**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x ] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [x ] Header/title describing the theme is displayed
- [x ] **At least 10 unique events or resources are displayed in a responsive card format**
  - [x ] There are at least 10 cards displayed 
  - [ x] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [x ] Each card should include some information about the event or resource


The following **optional** features are implemented:

- [x ] Buttons or links to a related resources are on each card component
  - [x ] All cards have buttons or links in addition to text
- [x ] The site is responsive for both desktop and mobile formats
  - [ x] Web app is shown in a mobile format
  - [x ] **Video Walkthrough Special Instructions**: To ease the grading process, please use Chrome Developer Tools' "Toggle Device" button to demonstrate that your web application's responsiveness in both a desktop *and* a mobile format. Detailed instructions can be found below this stretch feature on the project page. 

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/nahili-ansha/FlashCards/blob/main/flashcards.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

## Describe any challenges encountered while building the app.
- Managing component state and prop flow: I kept the cards state in App.jsx and passed onAdd / card array down to components to keep data flow simple.
- Implementing the study flip animation: CSS 3D transforms (rotateY) and backface-visibility required careful layering to make the flip smooth and accessible.
- Responsive layout: balancing panel sizes and spacing so the left (form/list) and right (study) panels look good on desktop and stack nicely on mobile.
- Background image handling: opted to use a static image path (you can put images in public/ for easy referencing) and added a subtle overlay so the study card remains readable.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
