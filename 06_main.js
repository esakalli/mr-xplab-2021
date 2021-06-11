// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        //all views I want to use in this experiment in the right the order
        views_seq: [
            intro,
            instructions_practice,
            practice,
            //check_response --> had to comment it out because the experiment does not work otherwise
            instructions_main,
            main,
            statistical_experiment_rating,
            postTest,
            thanks,
        ],
        // all information for the deployment
        deploy: {
            experimentID: "253",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            deployMethod: "debug",
            contact_email: "esakalli@uni-osnabrueck.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        //how the progress bar looks like
        progress_bar: {
            in: [
                //view-names of the views for which I want a progress bar
                practice.name,
		main.name
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
