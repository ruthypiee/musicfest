 // Get all navigation links
 const links = document.querySelectorAll('.nav-link');

 // Get the current URL path, removing query strings and hash fragments
 const currentPath = window.location.pathname.replace(/\/$/, ''); // Remove trailing slash
 const currentFile = currentPath.split('/').pop() || 'index.html'; // Default to 'index.html' if root

 // Match the href of each link to the current file
 links.forEach(link => {
   const linkPath = link.getAttribute('href').replace(/\/$/, ''); // Remove trailing slash
   if (linkPath === currentFile || linkPath === currentPath) {
     link.classList.add('active'); // Add the active class
   }
 });



const container = document.querySelector('.background-shapes'); 

if (container) { 
    const shapes = ['circle', 'square', 'triangle']; 
    let positions = JSON.parse(localStorage.getItem('shapePositions')) || []; if (positions.length === 0) {  
        for (let i = 0; i < numShapes; i++) { 
            const type = shapes[Math.floor(Math.random() * shapes.length)]; 
            const size = Math.floor(Math.random() * 120) + 80; 
            const top = Math.random() * 95 + 3; 
            const left = Math.random() * 95 + 2; 
            const rotation = Math.random() * 360; 
            
            positions.push({ type, size, top, left, rotation }); 
            
            localStorage.setItem('shapePositions', JSON.stringify(positions)); 
        } 
    } 
            
            positions.forEach(position => { 
                const shape = document.createElement('div'); 
                shape.classList.add('shape', position.type);  
                
                shape.style.width = `${position.size}px`; 
                shape.style.height = `${position.type === 'triangle' ? 0 : position.size}px`;  
                shape.style.top = `${position.top}%`; 
                shape.style.left = `${position.left}%`; 
                shape.style.transform = `rotate(${position.rotation}deg)`;  
                
                shape.style.border = '3px solid rgba(255, 255, 255, 0.25)'; 
                shape.style.background = 'none';  
                
                if (position.type === 'triangle') { shape.style.borderTop = 'none'; 
                    shape.style.borderLeft = `${position.size / 2}px solid transparent`;  
                    shape.style.borderRight = `${position.size / 2}px solid transparent`; 
                    shape.style.borderBottom = `${position.size}px solid rgba(255, 255, 255, 0.25)`; 
                }
                    
                    container.appendChild(shape); 
                }); 
            }
            


