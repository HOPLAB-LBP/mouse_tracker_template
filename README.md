# Mouse tracker template
------------------------

This is a template for a mouse tracker experiment. It runs on a minimal set of images randomly selected from MS COCO. The mouse tracker tasj is inspired by the work from Koenig-Robert et al 2023.

Fill this template with your own experimental parameters to use it. Use the following sections as a guide.

### Directory structure

```
.
├── README.md
├── buttons
│   └── button_styles.css
├── data
│   └── _your data will arrive here_
├── demographics
│   └── demographics.js
├── **index.html**
├── informed_consent
│   ├── KULeuvenlogo.png
│   └── informed_consent.html
├── instructions
│   └── instructions.js
├── jspsych-7-pavlovia-2021.12.js
├── list_stimuli.py
├── stimuli
│   └── _your main task stimuli here_
├── stimuli.js
└── training_stimuli
    └── _your training stimuli here_
```

### Stimuli

To use your own stimuli, upload images in the `stimuli` folder. If you want to include some training, include the training images in the `training_stimuli` folder.

**Using your stimuli with _jsPsych_**

To have jsPsych read and use your files, you need to refer to them in your main script. There are two ways of doing so.

1. If you don't have a lot of images, it's probably the easiest to list them inside your `index.html`, like this:
```let stimuli = ['./stimuli/image1.png, './stimuli/image2.png', …]```
1. In most cases, if you have a lot of images and/or if you want a cleaner script, your can make use of an external `.js` file. This is in use by default in this template. Such a file should contain a list of stimuli like this:
```
var training_stimuli = [
  {
    "filename": "./stimuli/image1.png"
  },
  {
    "filename": "./stimuli/image2.png"
  },
  ...
 ]
```

You can create this external `.js` file as you please. One way to go about it is illustrated in `list_stimuli.py`, a python script that will take the stimuli you uploaded in the stimuli folders and automatically create an external `.js` list for you (see `stimuli.js`).


### Notes on the files

This experiment is designed to work with as few local dependencies as possible. Some
local files are necessary:
 - *stimuli.js* lists all the main task trial stimulus information.
 - *training_stimuli.js* lists all the training trial stimulus information IF you have a training phase.
 - *debugging_stimuli.js* lists only four of the main task trial; link it instead of 
  *stimuli.js* for a much shorter task. Useful for debugging.

The extra file *jspsych-7-pavlovia-2021.12.js* comes from this [gitlab repository](https://gitlab.pavlovia.org/shir/jsPsych_SimpleReactionTime/blob/master/jspsych-7-pavlovia-2021.12.js)
and is the only way around using the readily available *jspsych-7-pavlovia-2022.1.1.js*
which faces consistent issues with terminating the pavlovia connection.

### Links

Koening-Robert et al 2023, implementation of the mouse tracker.
 - [Link to the paper](https://www.biorxiv.org/content/10.1101/2023.03.15.532848v1)
 - [Link to the repositository](https://osf.io/9g4rz/)


### Things to adapt:

 - The *title of your experiment*: it will show up as the name of the tab opened in the participant's browser. Change it in the `<title>` section of your *index.html* script (line …).
 - The *ID of your experiment*: optional parameter to record in the data associated with your `initJsPsych` trial. Give a unique, recognisable ID to easily identify the source of your data once you are playing with your result files (line …).