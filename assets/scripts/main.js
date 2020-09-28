'use script';
// Test main JS file.
console.log('Your main JS file is working fine.');

// Changes the second heading from a first level heading to a second level heading.
document.getElementById('beginning').outerHTML = "<h2>It's Only The Beginning!</h2>";

// Centers the aside element.
var myList = document.getElementById('toDo');
myList.setAttribute('align', 'center');

// Console logs the number of list items in the document.
var myDemoTags = document.getElementsByTagName('li');
console.log('Number of li links: ' + myDemoTags.length);

// Add more items to the pledge list.
function pledgeItems(name) {
	let li = document.createElement('li');
	li.textContent = name;
	return li;
}
const list = document.querySelector('#list');
list.appendChild(pledgeItems('- Hang in there.'));
list.appendChild(pledgeItems('- Never give up.'));

// Returns the number of items listed in the aside, in red font, when the button is clicked.
function remember() {
	var linksInList = myList.getElementsByTagName('li');
	document.querySelector('#redundant').innerHTML = myDemoTags.innerHTML =
		"You've successfully pledged to keep these " + linksInList.length + ' points in your mind! Good Job!';
	document.querySelector('#redundant').style.cssText = 'color: red; font-weight: bold; font-size: 20px;';
}

// Centers all level 1 headings.
document.querySelector('h1').style.textAlign = 'center';

// Creates a new paragraph node.
let newPara = document.getElementById('addPara');
let p = document.createElement('p');
// Adds content to the newly created node.
p.textContent =
	'I created this paragraph and inserted it using JavaScript. It seemed like a very daunting and somewhat intimidating task at first, but I did it! Blah, blah, blah and lorem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
// Inserts the new node and its contents into the DOM.
newPara.insertBefore(p, newPara.firstElementChild);

// Creates a new, animated text node after clicking button in footer.
function calculatedETA(text) {
	var newText = document.createTextNode(text);
	p1 = document.getElementById('p-time');
	p1.appendChild(newText);
}

// Creates a button with an alert box.
function yesAlert() {
	var alertBox = document.querySelector('.alert-box');
	var textNode = alertBox.firstChild;
	alert(textNode.data);
}

// Creates an alert as soon as the page loads.
window.alert('How long should you try? Until. -Jim Rohn');
