document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // Add entrance animation delay
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('click', () => {
            // Remove any existing transform from hover effect
            card.style.transform = '';
            // Toggle the flipped class
            card.classList.toggle('flipped');
            
            // Add sound effect (optional)
            const flipSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZRA0PVqzn77BdGAg+ltryxnMpBSl+zPLaizsIGGS57OihUBELTKXh8bllHgU2jdXzzn0vBSF1xe/glEILElyx6OyrWBUIQ5zd8sFuJAUuhM/z1YU2Bhxqvu7mnEYODlOq5O+zYBoGPJPY88p2KwUme8rx3I4+CRZiturqpVITC0mi4PK8aB8GM4nU8tGAMQYfcsLu45ZFDBFYr+ftrVoXCECY3PLEcSYELIHO8diJOQgZaLvt559NEAxPqOPwtmMcBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGnt/yvmwhBTCG0fPTgjQGHW/A7eSaRQ0PVqzl77BeGQc9ltvyxnUoBSh+zPDaizsIGGS56+mjTxELTKXh8bllHgU1jdT0z3wvBSJ1xe/glEILElyx6OyrWRUIRJve8sFuJAUug8/z1YU2BRxqvu3mnEYODlOq5O+zYRsGPJPY88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccPu45ZFDBFYr+ftrVwWCECY3PLEcSYGK4DN8tiIOQgZZ7zs56BODwxPqOPxtmQcBjiP1/PMeS0GI3fH8N+RQAoUXrTp66hWFApGnt/yv2wiBTCG0fPTgzQHHG/A7eSaSw0PVqzl77BeGQc9ltrzxnUoBSh9y/HajDsIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSJ0xe/glEQKElux6eyrWRUJQ5vd88FwJAQug8/z1YY2BRxqvu3mnEgNDlOq5O+zYRsGOpPY88p3KgUmecnw3Y4/CBVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccLv45dGCxFYr+ftrVwWCECX2/PEcigEK4DN8tiIOQgZZ7vs56BODwxPpuPxtmQdBTiP1/PMeS0GI3bH8d+RQQkUXrTp66hWFApGnt/yv2wiBTCG0fPTgzQHHG3A7eSaSw0PVqzl77BeGQc9ltrzxnUoBSh9y/HajDwIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSJ0xe/glEQKElux6eyrWRUIQ5vd88FwJAQug8/z1YY2BRxqvu3mnEgNDlOq5O+zYRsGOpPY88p3KgUmecnw3Y4/CBVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccLv45dGCxFYr+ftrVwWCECX2/PEcigEK4DN8tiIOQgZZ7vs56BODwxPpuPxtmQdBTiP1/PMeS0GI3bH8d+RQQkUXrTp66hWFApGnt/yv2wiBTCG0fPTgzQHHG3A7eSaSw0PVqzl77BeGQc9ltrzxnUoBSh9y/HajDwIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSJ0xe/glEQKElux6eyrWRUIQ5vd88FwJAQug8/z1YY2BRxqvu3mnEgNDlOq5O+zYRsGOpPY88p3KgUmecnw3Y4/CBVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccLv45dGCxFYr+ftrVwWCECX2/PEcigEK4DN8tiIOQgZZ7vs56BODwxPpuPxtmQdBTiP1/PMeS0GI3bH8d+RQQkUXrTp66hWFA==');
            flipSound.volume = 0.2;
            flipSound.play().catch(() => {
                // Ignore audio play errors
            });
            
            // Add particle effect on flip
            createParticles(card);
        });
        
        // Add hover effect
        card.addEventListener('mousemove', (e) => {
            if (card.classList.contains('flipped')) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        });
        
        // Reset transform on mouse leave
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('flipped')) {
                card.style.transform = '';
            }
        });
    });
    
    // Particle effect function
    function createParticles(card) {
        const particles = 10;
        const colors = ['#ff6b6b', '#556270', '#ffffff'];
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.position = 'absolute';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            
            const rect = card.getBoundingClientRect();
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;
            
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            
            document.body.appendChild(particle);
            
            const angle = (i / particles) * 360;
            const velocity = 2;
            const rad = (angle * Math.PI) / 180;
            const velocityX = Math.cos(rad) * velocity;
            const velocityY = Math.sin(rad) * velocity;
            
            let posX = 0;
            let posY = 0;
            
            const animate = () => {
                if (posX === 0 && posY === 0) {
                    particle.style.opacity = '1';
                }
                
                posX += velocityX;
                posY += velocityY;
                
                particle.style.transform = `translate(${posX}px, ${posY}px)`;
                particle.style.opacity = 1 - (Math.abs(posX) + Math.abs(posY)) / 100;
                
                if (Math.abs(posX) < 100 && Math.abs(posY) < 100) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            requestAnimationFrame(animate);
        }
    }
});