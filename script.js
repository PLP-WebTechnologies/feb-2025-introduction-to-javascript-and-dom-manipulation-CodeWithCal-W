// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Changing text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const description = document.querySelector('.description');
    
    changeTextBtn.addEventListener('click', function() {
        description.textContent = "The text has been changed using JavaScript!";
    });
    
    // 2. Modifying CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    const heading = document.getElementById('main-heading');
    
    changeStyleBtn.addEventListener('click', function() {
        heading.style.color = 'red';
        heading.style.backgroundColor = '#f0f0f0';
        heading.style.padding = '10px';
        heading.style.borderRadius = '5px';
        heading.style.transition = 'all 0.3s ease';
    });
    
    // 3. Adding or removing an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const dynamicContent = document.getElementById('dynamic-content');
    let isVisible = true;
    
    toggleElementBtn.addEventListener('click', function() {
        if (isVisible) {
            dynamicContent.style.display = 'none';
            toggleElementBtn.textContent = 'Show Element';
        } else {
            dynamicContent.style.display = 'block';
            toggleElementBtn.textContent = 'Hide Element';
        }
        isVisible = !isVisible;
    });
    
    // Adding a new element
    const newElementBtn = document.createElement('button');
    newElementBtn.textContent = 'Add New Item';
    document.getElementById('interactive-elements').appendChild(newElementBtn);
    
    newElementBtn.addEventListener('click', function() {
        const newItem = document.createElement('p');
        newItem.textContent = 'New item added at ' + new Date().toLocaleTimeString();
        dynamicContent.appendChild(newItem);
    });
});