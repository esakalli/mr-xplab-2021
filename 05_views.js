
// intro view and information about the experiment
const intro = magpieViews.view_generator("intro", {
    trials: 1,
    name: 'intro',
    title: 'The experiment',
    text:   `Thank you a lot for taking part in our experiment and thus helping us for our research.`,
   buttonText: 'Please begin the experiment'
});

// Many tasks require instructions views
const instructions_practice = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_practice',
    title: 'General Instructions',
    text:  `We will now show you several pictures of geometrical objects, always two of them next one another. What you have to do now is to look at these two objects and then decide whether you think they are the same or different. If you think both objects are the same, please press "f". Otherwise, if you think the objects are different, please press "j". We only ask you to answer as quick and acccurately as possible please. Thank you again for taking part in the experiment!',
            <br />
            <br />
            But let us practice this first.`,
    buttonText: 'Go to the practice session'
});

const instructions_main = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructions_main',
    title: 'Get ready for the main experiment',
    text:  `We can now move on to the main experiment if the practice session is over. Again, we will again ask you to answer as quickly and accurately as possible please! Thank you!`,
    buttonText: 'Start'
});


// additional questions for participants that can help analyzing their results
const postTest = magpieViews.view_generator("post_test", {
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'You do not have to answer the next questions, but your answers would help us a lot for understanding and analyzing your results.',
    buttonText: 'Answer questions',
/*
--> had to comment it out because the experiment would not work with these code lines as well
    question_age: 'Age';,
    question_gender: 'Sex';,
    question_gender_male: 'Male',
    question_gender_female: 'Female',
    question_gender_other: 'Other',
    question_demographics: 'Demographical data',
    question_mother_tongue: 'Mother tongue',
    question_other_languages: 'Other languages',
    question_age_english_aquisition: 'Age to learn english',
    question_education: 'Education',
    question_education_high_school: 'High School',
    question_education_college: 'College',
    question_education_higher_degree: 'Higher degree',
    question_education_other: 'Other',
    question_occupation: 'Occupation'
    */
});

// The 'thanks' view  submits the results!
const thanks = magpieViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment! We really appreciate your help!',
    prolificConfirmText: 'Press the button please',
    buttonText: 'Done'
});


// Initialization of a keyPress task
const practice = custom_views.keypress_rotation_practice({
    trials: 12,
    // trials: 2,
    name: 'practice',
    trial_type: 'practice',
    pause: 250,
    stim_duration: 500,
    data: _.shuffle(practice_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});


const main = custom_views.keypress_rotation_main({
    trials: 48,
    // trials: 8,
    name: 'main',
    trial_type: 'main',
    pause: 250,
    stim_duration:500,
    data: _.shuffle(main_trials.key_press),
    key1: "f",
    key2: "j",
    f: "same",
    j: "different",
});


/*
--> had to comment this out because the experiment was not working with these code lines as well
const forced_choice_2A = magpieViews.view_generator("key_press", {
    trials: trial_info.forced_choice.length,
    name: 'forced_choice_2A',
    data: trial_info.forced_choice,
    hook: {
        after_response_enabled: check_response
    }

});
*/

//participants can rate how easy/difficult this task was for them
const statistical_experiment_rating = magpieViews.view_generator("rating_scale", {
    trials: 1,
    name: 'experiment_rating',
    title: 'Rating the experiment',
    text: 'You have completed the experiment! Congrats! If you would like to, you can now rate the experiment as to how easy (or difficult) you think it was. There are no right or wrong answers.',
    data: [{
        question: "Please rate the experiment from 1 (the experiment tasks were extremely easy to do), to 7 (the experiment tasks were extremely difficult to do)?",
        optionLeft: '',
        optionRight: ''
    }]
  },
  {
      stimulus_container_generator: function(config, CT) {
          return `<div class='magpie-view'>
                    <h1 class='magpie-view-title'>${config.title}</h1>
                    <p class='magpie-view-question'></p>
                </div>`;
      }
  });


// forcedChoice, sliderRating, dropdownChoice, testboxInput, ratingScale, imageSelection, sentenceChoice, keyPress, selfPacedReading and selfPacedReading_ratingScale
