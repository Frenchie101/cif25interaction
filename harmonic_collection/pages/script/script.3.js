 function randomizeColors() {
            // Generate random colors
            const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
            
            document.documentElement.style.setProperty('--color-heading', randomColor());
            document.documentElement.style.setProperty('--color-body-text', randomColor());
            document.documentElement.style.setProperty('--color-strong', randomColor());
            document.documentElement.style.setProperty('--color-background', randomColor());
            document.documentElement.style.setProperty('--color-section-bg', randomColor());
        }