const sections = document.querySelectorAll('section');
const sectBtns = document.querySelectorAll('.controls .control'); 
const allSections = document.querySelector('.main-content'); 

function PageTransitions(){
    for(let i = 0; i < sectBtns.length; i++){ 
        sectBtns[i].addEventListener('click', function(){
            let currentBtn = document.querySelector('.active-btn'); 
            if (currentBtn) {
                currentBtn.classList.remove('active-btn'); 
            }
            this.classList.add('active-btn'); 
            const id = this.dataset.id; 
            sections.forEach((section) => {
                section.classList.remove('active'); 
            });
            const targetSection = document.getElementById(id);
            if (targetSection) {
                targetSection.classList.add('active'); 
            }
        });
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active'); 
            });
            e.target.classList.add('active')

            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });





    const themeBtn = document.querySelector('.theme-btn');
    const icon = themeBtn.querySelector('i');
    
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode'); 
    
        // Change icon based on the theme
        if (element.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon'); // Assuming you're using Font Awesome
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

PageTransitions();
    



