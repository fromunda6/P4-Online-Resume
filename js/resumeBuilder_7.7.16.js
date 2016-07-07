/*Action Items:

    1). Run all code through validators (see proj details,rubric again here)

    2). Clean up directory, syncUp GitHub, and submit
*/
// creating object1: "bio"
var bio = {
    "name": "Greg Zimmer",
    "role": "Web Developer",
    "contacts": {
        "mobile": "720-883-5359",
        "email": "gcolezimmer@gmail.com",
        "github": "fromunda6",
        "location": "Denver"
    },
    "welcomeMessage": "Rending the veil since 1984",
    "skills": [
        "SQL", "Python", "Statistics", "Research"
    ],
    "biopic": "images/selfie_1.webp"
};
// 'hooking' new JS vars to JS-helper VARS, which are in turn assigned to html 'templates',
// & displaying the previously created JS VARS by appending/prepending to HTML sections
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    // illustrating that multiple values can be appended to multiple elements in a single statement
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);

    for (skill = 0; skill < bio.skills.length; skill++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
};
bio.display();


// creating object2: "work"
var work = {
    "jobs": [{
        "title": "Test Scorer",
        "employer": "Pearson",
        "dates": "05/16-present",
        "location": "Centennial",
        "description": "Analysis and scoring of middle school-level composition tests"
    }, {
        "title": "Data Prep Admin",
        "employer": "IBM",
        "dates": "02/15-09/15",
        "location": "Boulder",
        "description": "Data cleaning, documentation, limited automation, and process improvement"
    }]
};
// wrapping the displaying of work history inside a function
work.display = function() {
    for (job = 0; job < work.jobs.length; job++) { //both defines the loop and 'tags' each array-object as a "job"
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();


// creating object3: "projects" with object literal notation
var projects = {
    "projects": [{
        "title": "Sunchaser",
        "dates": "2016",
        "description": "A nifty app to aid in landscape & architecture decision-making",
        "images": ["images/MntGraphic.png", "images/game.jpg", "images/city.jpg"]
    }, {
        "title": "Arcade Game Clone",
        "dates": "2016",
        "description": "A recreation of a classic arcade game, demonstrating some mastery of JS",
        "images": ["images/MntGraphic.png", "images/game.jpg", "images/city.jpg"]
    }, {
        "title": "Neighborhood Map",
        "dates": "2016",
        "description": "An interactive map of the most important sites in my neighborhood",
        "images": ["images/MntGraphic.png", "images/game.jpg", "images/city.jpg"]
    }],
};
// demonstrating encapsulation, &
// loop-assisted iteration-action over all key-value pairs in object.array
// projects.udacity
projects.display = function() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart); //to the 'projects' <div>, append the <div> 'HTMLprojectStart',
        // which is == to the div "project-entry", which if empty, causes the 'projects' div to display:none...(?)

        var formattedprojTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedprojTitle);

        var formattedprojDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedprojDates);

        var formattedprojDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedprojDesc);

        // requires a nested for loop, as you must iterate through the array of images for each object in the parent array encountered in
        // the outer loop
        if ((projects.projects[project]).images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display(); //calls the encapsulated function

// adding formatted map to associated div
$("#mapDiv").append(googleMap);




//creating object4: "education" in array notation
var education = {
    "schools": [{
        "name": "University of Colorado, Denver",
        "location": "Denver",
        "degree": "Bachelor of Arts",
        "majors": ['Economics'],
        "dates": "2004-2007",
        "url": "http://www.ucdenver.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Introduction to Computer Science",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]
};
// wrapping the displaying of school history inside a function
education.display = function() {
    for (college = 0; college < education.schools.length; college++) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[college].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[college].degree);
        $(".education-entry:last").append(formattedschoolName + formattedschoolDegree); //...:last ensures that the appending
        //always occurs on the last object associated with .education-entry, and that no info is overwritten

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[college].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[college].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[college].majors);
        $(".education-entry:last").append(formattedschoolMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (course = 0; course < education.onlineCourses.length; course++) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();


// Collecting click locations via a specialized .click method:

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// function locationizer(work_obj) {
//  var workLocations = [];

//  for(job in work_obj.jobs) {
//      var newLocation = work_obj.jobs[job].location; //sets a new var the iterating-over of
//      // which ('compelled' by the 'for-in' loop which MUST evaluate each JOB[0,1] IN WORK_OBJ.JOBS)
//      // will produce an array of location values (.location) found at each index/position
//      // of the array "jobs" (jobs[0],jobs[1]), itself found inside the Object "work", which is
//      // passed to the function as a parameter
//      workLocations.push(newLocation);
//  }
//  return workLocations;
// }

// locationizer(job[0]);

//would append the button to internationalize names, were it not commented out
// $("#main").append(internationalizeButton);

// my solution - JS flowcontrol - internationalize challenge
var engName = bio.name;

function inName(engFirst, engLast) { //this works because the internationzlizeButton
    var splitName = engName.split(" ");
    engFirst = splitName[0];
    engLast = splitName[1];
    var intName = engFirst.slice(0, 1).toUpperCase() + engFirst.slice(1).toLowerCase() + " " + engLast.toUpperCase();
    return intName;
}
//would call the inName function, were it not commented out
// inName("greg","zimmer");