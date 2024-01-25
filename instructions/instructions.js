/* 
INSTRUCTIONS CONTENT
--------------------
This file contains the content of all the instructions you will give
in the mouse tracker task. Modify them as you wish.
*/

const INSTRUCTIONS = {

    // A welcome screen to say hi to the participant
    Welcome : function() {

        return (
            '<h3> Hello! Welcome to this experiment.</h3>' +
            '<p> Here some text. This can be in <i>italics</i>, in <b>bold</>, etc. </p>' +
            "<p style='color:red'><b> You can even write in red. </b></p>" +
            
            "<p style='color:blue'> <b> Some more instructions here. </b> </p>"

        );
    },
    
    // Start giving your actual instructions here
    First_page: function() {

        return (
            "<p> Use your mouse to respond. Trials will start when you press this box: </p>" + 
            '<button class"jspsych-btn" style="position:relative; align-items: center; width:50px; font-size:35px;">+</button>' +
            "<p> An image will appear in the center of the screen.<br>" +
            "<p> Report a <i style:'color:grey'>first option</i> by clicking <i> option 1</i>, and a <i style:'color:grey'>second option</i> <br>"+
            "valence by clicking <i>option 2</i> " +
            "using these boxes on the screen: </p>" +
            '<button class"jspsych-btn" style="position:absolute; align-items: center; left: 550px; font-size:20px;">option 1</button>' +
            '<button class"jspsych-btn" style="position:absolute; align-items: center; right: 550px; font-size:20px;">option 2</button>' +
            " <br> <br>"            
        )
    },

    // Another page of instructions at the start (add/remove as you wish)
    Second_page: function() {
        
        return (
            "Press <i>space</i> when you're ready to start!"
        )
    },
    
    // Instructions to give at the start of the training (if you have training)
    Pre_training_instructions: function() {

        return (
            "<p> Let's start with some training. You will be shown some images during this phase, similar to those you will see in the real task. </p>" +
            "<p> You will get as much time as you want to respond. Remember to be as fast and accurate as you can, and try to <br>" +
            "<b><i>move your mouse as soon as possible!</i></b> </p>" +
            "<p> <b> Good luck! </b> </p>" +
            "<p> Press <i>space</i> to begin. </p>"
        )
    },

    Post_training_instructions: function(n_runs, n_blocks) {

        return (
            "<p> The training is now over. The full task will begin. It contains <br>" + 
            n_runs*n_blocks + " blocks with breaks in between. Trials will now be <i>shorter</i>!</p>" +
            "<p> Do your best to be fast and accurate. </p>" + 
            "<p> Remember, try to <b><i>move your mouse as soon as possible!</i></b> </p>" +
            "<p> <b> Good luck! </b> </p>" +
            "<p> Press <i>space</i> to begin. </p>"
        )
    },

    Pre_run_instructions: function(run_count, n_runs) {

        return (
            "<h4> Get ready </h4>" +
            "<p> You are about to start part " + run_count + "out of " + n_runs +  "</p>" +
            "<p> In the next trials, the <b>" + update_choices()[0] + "</b> button will be on the <b>left</b> and the <br>" +
            "<b>" + update_choices()[1] + "</b> button will  be on the <b>right</b>, like this: </p>" +
            '<br><br> <button class"jspsych-btn" style="position:absolute; align-items: center; left: 550px; height: 70px; width: 180px; font-size:25px;">' + update_choices()[0] + '</button>' +
            '<button class"jspsych-btn" style="position:absolute; align-items: center; right: 550px; height: 70px; width: 180px; font-size:25px;">' + update_choices()[1] + '</button> <br>' +
            "<br><br>" +
            "<p> Remember, try to <b><i>move your mouse as soon as possible!</i></b> </p>" +
            "<p> When you're ready, press <b><i>space</i></b>.</p>"
        )
    },
    
    Post_run_instructions: function(run_count, n_runs) {

        return (
            "<h4> End of this part </h4>" +
            "<p> You just finished part " + run_count + "out of " + n_runs +  "</p>" +
            "<p> Press <b><i>space</i></b> to continue.</p>" 
        )
    }
}