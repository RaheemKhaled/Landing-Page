
    const sections = document.querySelectorAll('section'); //take all sections in one constant
    const mnu = document.querySelector('#navbar__list');  //declare the navigation list as a mnu stand for 'menue'
    const fragement = document.createDocumentFragment();  //make a document fragement


    sections.forEach(function(section) {                 //for loop to loop each section in the array of sections
        const data = section.getAttribute('data-nav');   //take the data-nave in data variable
        const sec = document.createElement('li');        //create a new element <li> in a sec variable; sec stands for section
        const link = document.createElement('a');        //create a new element <a> in a link variable
        const node = document.createTextNode(data);      //create text node from the attribute in data variable
        link.setAttribute('class' , " menu__link" );     //set the class ='menu__link' as an attribute for link, so the style of the class will be applied on the link
          
        link.addEventListener ('click' , function(){            //add an event to the link to scroll to the section that is clicked and his behavior is smooth
            section.scrollIntoView({behavior: "smooth"})})
        link.appendChild(node);
        sec.appendChild(link);
        fragement.appendChild(sec);

    })



    const MAIN = document.querySelector('#HOME') ;          //make an id for the main element to call it in a variable MAIN
    const Button = document.createElement('li');            //create an element <li> i Button variable
    const linkOfButton = document.createElement('a');       //create an element <a> in the linkOfButton variable
    linkOfButton.setAttribute('class' , " menu__link" );    //set the class ='menu__link' as an attribute for link, so the style of the class will be applied on the linkOfButton 
    linkOfButton.textContent ='HOME'                        //create a text cotact for linkOfButton
    linkOfButton.addEventListener ('click' , function(){    //add an event to the linkOfButton to scroll to the section that is clicked and his behavior is smooth
        MAIN.scrollIntoView({behavior: "smooth"})})

         Button.appendChild(linkOfButton);
        fragement.appendChild(Button);


    mnu.appendChild(fragement);






    window.addEventListener('scroll' , function() {                         //add an event to window so when u scroll, the style of class 'your-active-class' will be applied
        for ( tab of sections ){                                            //loop in the sections by for of and tab stands for section of sections
            const frame = tab.getBoundingClientRect();                      //get the frame and the boundary of tab in constant frame
            const Top = frame.top;                                          //save the top of the section to a Top constant
            const Bottom = frame.bottom                                     //save the bottom of the section to a Bottom constant
           
            if (frame.top === Top && frame.bottom ===Bottom){               //in the condition of the top of frame and his bottom respectivly is equal to the Top and Bottom of section, so the class 'your-active-class' will be applied
               
                tab.setAttribute('class' ,"your-active-class" );
            } else{
                tab.classlist.remove("your-active-class")                   //else the above codition, so remove class 'your-active-class' from the class list of tab
            }


            const Links = document.querySelectorAll('a')                    //save all links in one variable and loop on them by for of
            for( alink of Links){    
                if(tab.getAttribute('data-nav') === alink.textContent){     //in the codition that the attribute 'data-nav' of the tap is equal to the text content of one lin of all links, so the color of back ground will be changed to '#8c929c' 
                    alink.style.background = '#8c929c'
                }
            }
        
        }
    })

