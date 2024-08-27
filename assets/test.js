    // Create a new h2 element
    const newHeading = document.createElement('h2');
        
    // Set the text content for the new h2
    newHeading.textContent = 'Welcome to the Login Page';
    
    // Select the container where you want to add the new h2
    const container = document.querySelector('.login-container');
    
    // Insert the new h2 before the existing one or at the end of the container
    // container.insertBefore(newHeading, container.firstChild);
    // Or use appendChild to add it at the end
    // container.appendChild(newHeading);
    container.appendChild(newHeading);