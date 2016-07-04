/*Action Items - Req'd to pass this project:
	1). add missing attr/value pairs to sections, most notable absent in EDU:online courses
	2). Encapsulate display functions inside respective objects
	3). Iterate over each display function using for-each loops only
	4). add a map per instructions in "Proj Prep:Proj Details"
	5). Add project images
	6). Run all code through validators (see proj details,rubric again here)
	7). Clean up directory, syncUp GitHub, and submit
*/

// creating object1: "bio"
var bio = {
	"name" : "Greg Zimmer",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "720-883-5359",
		"email": "gcolezimmer@gmail.com",
		"github": "fromunda6",
		"location": "Denver"
	},
	"greeting" : "Rending the veil since 1984",
	"skills" : [
		"SQL", "Python", "Statistics", "Research"
	],
	"picture" : "images/selfie_1.webp",
}
// 'hooking' new JS vars to JS-helper VARS, which are in turn assigned to html 'templates',
// & displaying the previously created JS VARS by appending/prepending to HTML sections
function displayBio(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.greeting);
	$("#header").append(formattedWelcome);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills);/*unnecessary given
	its inclusion as an array in the bio object?*/

	var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedPic);
}
displayBio();


// creating object2: "work"
var work = {
	"jobs": [
	{
		"position" : "Test Scorer",
		"employer" : "Pearson",
		"dates" : "05/16-present",
		"location" : "Centennial",
		"description" : "Analysis and scoring of middle school-level composition tests"
	},
	{
		"position" : "Data Prep Admin",
		"employer" : "IBM",
		"dates" : "02/15-09/15",
		"location" : "Boulder",
		"description" : "Data cleaning, documentation, limited automation, and process improvement"
	}
  ]
}
// wrapping the displaying of work history inside a function
work.display = function() {
	for (job in work.jobs) { //both defines the loop and 'tags' each array-object as a "job"
	 	$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
	return work.display;
}
work.display;


// creating object3: "education" in array notation
var education = {};
	education["name"] = "University of Colorado, Denver";
	education["schoolDates"] = "2004-2007";
	education["schoolLocation"] = "Denver, CO";

// wrapping the displaying of school history inside a function
function displayEdu() {
	var formattedschoolName = HTMLschoolName.replace("%data%", education["name"]);
	$("#main").append(formattedschoolName);

	var formattedschoolDates = HTMLschoolDates.replace("%data%", education["schoolDates"]);
	$("#main").append(formattedschoolDates);

	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education["schoolLocation"]);
	$("#main").append(formattedschoolLocation);
}
displayEdu();


// creating object4: "projects" with object literal notation
var projects = {
	"Udacity": [
	{
		"name": "Interactive Portfolio",
		"dates": "2016",
		"description": "A well-designed adventure through my coding achievements"
	},
	{
		"name": "Arcade Game Clone",
		"dates": "2016",
		"description": "A recreation of a classic arcade game, demonstrating some mastery of JS"
	},
	{
		"name": "Neighborhood Map",
		"dates": "2016",
		"description": "An interactive map of the most important sites in my neighborhood"
	}
  ]
}
// demonstrating encapsulation, &
// loop-assisted iteration-action over all key-value pairs in object.array
// projects.udacity
function displayProj() {
	for (project in projects.Udacity) {
		$("#projects").append(HTMLprojectStart); //to the 'projects' <div>, append the <div> 'HTMLprojectStart',
		// which is == to the div "project-entry", which if empty, causes the 'projects' div to display:none...(?)

		var formattedprojTitle = HTMLprojectTitle.replace("%data%", projects.Udacity[project].name);
		$(".project-entry:last").append(formattedprojTitle);

		var formattedprojDates = HTMLprojectDates.replace("%data%", projects.Udacity[project].dates);
		$(".project-entry:last").append(formattedprojDates);

		var formattedprojDesc = HTMLprojectDescription.replace("%data%", projects.Udacity[project].description);
		$(".project-entry:last").append(formattedprojDesc);
	}
}
displayProj(); //calls the



// manual iteration over all skills in object.array bio.skills, the same
// end can be achieved with a loop (and less coding:))
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
}
var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkill);

// separate variables for each skill are not necessary because after
// each appending a substitution/replacement on var formattedSkill is
// performed, thus the next append is acting on a different value

// Collecting click locations via a specialized .click method:

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

// function locationizer(work_obj) {
	// 	var workLocations = [];

	// 	for(job in work_obj.jobs) {
	// 		var newLocation = work_obj.jobs[job].location; //sets a new var the iterating-over of
	// 		// which ('compelled' by the 'for-in' loop which MUST evaluate each JOB[0,1] IN WORK_OBJ.JOBS)
	// 		// will produce an array of location values (.location) found at each index/position
	// 		// of the array "jobs" (jobs[0],jobs[1]), itself found inside the Object "work", which is
	// 		// passed to the function as a parameter
	// 		workLocations.push(newLocation);
	// 	}
	// 	return workLocations;
// }

// locationizer(job[0]);

//would append the button to internationalize names, were it not commented out
// $("#main").append(internationalizeButton);

// my solution - JS flowcontrol - internationalize challenge
var engName = bio.name;
function inName(engFirst,engLast){ //this works because the internationzlizeButton
	var splitName=engName.split(" ");
	engFirst=splitName[0];
	engLast=splitName[1];
	var intName=engFirst.slice(0,1).toUpperCase() + engFirst.slice(1).toLowerCase() + " " + engLast.toUpperCase()
	return intName;
}
//would call the inName function, were it not commented out
// inName("greg","zimmer");

