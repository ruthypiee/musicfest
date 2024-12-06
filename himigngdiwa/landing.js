

const container = document.querySelector('.background-shapes');

if (container) {
    const shapes = ['circle', 'square', 'triangle'];
    const numShapes = 50; // Increased number for a fuller background
    const minDistance = 80; // Minimum distance between shapes to avoid overlap

    const positions = [];

    function isTooClose(newShape) {
        // Check if the new shape overlaps with existing shapes
        const newCenterX = newShape.left * (document.documentElement.scrollWidth / 100);
        const newCenterY = newShape.top * (document.documentElement.scrollHeight / 100);
        const newRadius = newShape.size / 2;

        return positions.some(existing => {
            const existingCenterX = existing.left * (document.documentElement.scrollWidth / 100);
            const existingCenterY = existing.top * (document.documentElement.scrollHeight / 100);
            const existingRadius = existing.size / 2;

            const dx = newCenterX - existingCenterX;
            const dy = newCenterY - existingCenterY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            return distance < newRadius + existingRadius + minDistance;
        });
    }

    for (let i = 0; i < numShapes; i++) {
        let positionFound = false;
        let retries = 0;

        while (!positionFound && retries++ < 50) {
            const type = shapes[Math.floor(Math.random() * shapes.length)];
            const size = Math.floor(Math.random() * 120) + 70; // Random size (70px to 190px)
            const top = Math.random() * 95; // Random position (0% to 95%)
            const left = Math.random() * 95; // Random position (0% to 95%)
            const rotation = Math.random() * 360; // Random rotation

            const newShape = { type, size, top, left, rotation };

            if (!isTooClose(newShape)) {
                positions.push(newShape);
                positionFound = true;

                const shape = document.createElement('div');
                shape.classList.add('shape', type);

                shape.style.width = `${size}px`;
                shape.style.height = `${type === 'triangle' ? 0 : size}px`;
                shape.style.top = `${top}%`;
                shape.style.left = `${left}%`;
                shape.style.transform = `rotate(${rotation}deg)`;
                shape.style.border = '3px solid rgba(255, 255, 255, 0.25)';
                shape.style.background = 'none';

                if (type === 'triangle') {
                    shape.style.borderTop = 'none';
                    shape.style.borderLeft = `${size / 2}px solid transparent`;
                    shape.style.borderRight = `${size / 2}px solid transparent`;
                    shape.style.borderBottom = `${size}px solid rgba(255, 255, 255, 0.25)`;
                }

                container.appendChild(shape);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Get the current file name from the URL
    const currentPath = window.location.pathname.split('/').pop();

    // Select all navigation links
    const links = document.querySelectorAll('.nav-link');

    // Loop through links and add 'active' class to the matched one
    links.forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop(); // Extract file name
      if (linkPath === currentPath) {
        link.classList.add('active'); // Add 'active' class
      }
    });
  });
    

