$(document).on('ready', function() {

	// Pre-compile the handlebars template...
	var templateSource = $('#my-template').html();
	console.log('TemplateSource:', templateSource);

	// Compile a handlebars template, handlebars.com takes in a string of HTML and gives back a function 
	var myTemplate = Handlebars.compile(templateSource);
	console.log('MyTemplate:', myTemplate);


	// Generate a context (lookup table) for handlebars to Use

	var context = {
		title:'Using Handlebars!', 
		message: 'This is a message from Javascript'
	};

	// Run the template function and append the output to the html DOM. Pass an object literal that represents all the variables that handlebars shuld have access to.

	var output = myTemplate(context);
	console.log('Output:', output);

	// Use jQuery to append the output string of html to the DOM

	$('body').append(output);

	// Render another template to my page

	var context2 = {
		title: "This is from 2",
		message: 'Hello world, from template v2'
	};

	$('body').append(myTemplate(context2));

	// list out our favorite games
	var games = [
	{title:'Braid', platform:'all', price: '$5.00'},
	{title:'Halflife', platform:'pc', price: ''},
	{title:'System Shock 2', platform:'pc', price: '$2.00'}
	];

	var gameItemSource = $('#item-template').html();
	var gameItemTemplate = Handlebars.compile(gameItemSource);

	for (var i = 0; i < games.length; i++) {
		$('#games-list').append(gameItemTemplate(games[i]))
	};


// use the helper to render the whole list of games without running a "for loop"

var gameHelperSource = $('#helper-template').html();
var gameHelperTemplate = Handlebars.compile(gameHelperSource);

	$('#games-list-helper').append(gameHelperTemplate(
		{games: games}

	));


  
});