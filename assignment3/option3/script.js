var currentDate = new Date();
var currentHour = currentDate.getHours();

// Determine which CSS file to use based on the current hour
var selectedStyle = (currentHour >= 6 && currentHour < 18) ? 'Day-style.css' : 'Night-style.css';

// Create a link element for the selected CSS file
var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.type = 'text/css';
linkElement.href = selectedStyle;

// Append the link element to the head of the document
document.head.appendChild(linkElement);
