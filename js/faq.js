 // Get all container elements
 const containers = document.querySelectorAll('.faqlist');

 containers.forEach((container, index) => {
     const firstDiv = container.querySelector('.first-div');
     const plusIcon = container.querySelector(`#plus-icon-${index + 1}`);
     const removeIcon = container.querySelector(`#remove-icon-${index + 1}`);
     const secondDiv = container.querySelector(`#second-div-${index + 1}`);

     // Add click event listener to the first div of each container
     firstDiv.addEventListener('click', () => {
         // Check if the current second div is already visible
         const isSecondDivVisible = !secondDiv.classList.contains('hidden');

         // Reset all icons to the plus icon (show plus, hide remove)
         containers.forEach((otherContainer, otherIndex) => {
             const otherPlusIcon = otherContainer.querySelector(`#plus-icon-${otherIndex + 1}`);
             const otherRemoveIcon = otherContainer.querySelector(`#remove-icon-${otherIndex + 1}`);
             const otherSecondDiv = otherContainer.querySelector(`#second-div-${otherIndex + 1}`);

             otherPlusIcon.classList.remove('hidden');  // Show plus icon
             otherRemoveIcon.classList.add('hidden');  // Hide remove icon
             otherSecondDiv.classList.add('hidden');   // Hide second div
         });

         // Toggle the current container's second div visibility
         if (isSecondDivVisible) {
             // If second div is visible, hide it
             secondDiv.classList.add('hidden');
             plusIcon.classList.remove('hidden');
             removeIcon.classList.add('hidden');
         } else {
             // If second div is hidden, show it and set the current icon to remove
             secondDiv.classList.remove('hidden');
             plusIcon.classList.add('hidden');
             removeIcon.classList.remove('hidden');
         }
     });
 });