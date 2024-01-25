'''
Make a list of stimuli
----------------------
This script is designed to create a list of stimuli and save it as a 
.js script, so that it can be read by JsPsych.

Usage:

For each list of stimuli you need, run the next three steps:
 1. Start by listing your stimuli using 'fetch_images'
 2. Convert this filename list into a json-like dictionary of lists 
    using 'make_json_list'
 
You might need to run these two steps once for your main task stimuli,
and once for your training stimuli, for instance.

Continue using these steps:
 4. Take the resulting json-like dictionaries of lists and pass them into
    'make_json_str' to bind them within a large string.
 5. Write the large string in a .js file using 'write_json'

You can also run the umbrella function 'create_js' which will run
steps 1-5 with default values. For a detailled use case, see the bottom
of this script.
'''

import glob, json, os, pathlib


def fetch_images(img_dir, ext=None):
    '''This function returns a list of images with a given
    extension from a given directory.'''
    if ext:
        files = glob.glob(os.path.join(img_dir, '*' + ext))
    else:
        files = glob.glob(os.path.join(img_dir, '*'))
    return files


def make_json_list(files):
    '''Takes in a list of files and extract a file-wise list of
    dictionaries usable in a json file.'''

    json_list = [{
        'filename': file,
        
    } for file in files]
    
    return json_list


def make_json_str(json_list, json_vars):
    '''
    Takes in a list of strings to turn into json variables along with 
    their corresponding variable names.'''
    # create an empty json content
    json_str = ''
    # loop through the variable names and content
    for string, varname in zip(json_list, json_vars):
        json_str += f"var {varname} = {json.dumps(string, indent=4)};\n"
    
    return json_str


def write_json(string, filename = 'stimuli.js'):
    '''Takes a string as input and writes its content
    as a json file.'''
    with open(filename, "w") as js_file:
        js_file.write(string)




def create_js():
    '''
    Overarching umbrella function. Run this to fetch files, image 
    information, and write a corresponding json.
    '''
    # extra the filenames for the main task and training
    files = fetch_images(r'./stimuli', '.jpg')
    training_files = fetch_images(r'./training_stimuli', '.jpg')
    # make a json list for both
    json_list = make_json_list(files)
    training_json_list = make_json_list(training_files)
    # write the results
    json_str = make_json_str([json_list, training_json_list], ['stimuli', 'training_stimuli'])
    write_json(json_str)




### Detailed use case

# start by listing all the files from the main task
main_task_files = fetch_images(
    img_dir = './stimuli', # where your files are located
    ext = '.jpg' # which extension your files have, no input = take all files
)

# make a json-like list of dictionaries from the files list
main_task_list = make_json_list(
    files = main_task_files # give the list of files you just created
)

# repeat the same steps for the training images (optional)
train_files = fetch_images(img_dir = './training_stimuli')
train_list = make_json_list(files = train_files)

# turn the json-like lists into a large json string
json_string = make_json_str(
    # give the stimuli lists you want here, each list will become one variable in jspsych
    json_list = [main_task_list, train_list],
    # give the name of the variables you want for each list, these will be used by jspsych 
    json_vars = ['stimuli', 'training_stimuli'] 
)

# finally, write the results in a .js file
write_json(
    # give the string as input
    string = json_string,
     # choose a name for your file; it has to match what you give to jspsych
    filename = 'stimuli.js'
)



### Extra

# From the way the functions are designed, it is easy to add extra data to your stimuli.

# For instance, if my stimulus filenames contain the category of my images, I can extract
# it in this way:

def make_json_list(files):
    '''
    Same function as before, except we're extracting information from the
    file names.
    '''

    json_list = [{
        'filename': file,
        'category': (pathlib.Path(file).stem).split('_')[0] # take the first part of the filename
    } for file in main_task_files]
    
    return json_list


# this new variable can then be accessed within jspsych