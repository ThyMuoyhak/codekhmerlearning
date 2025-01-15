 // Fetch the JSON file and display the course cards
 fetch('course_card.json')
 .then(response => response.json()) // Parse the JSON
 .then(data => {
     const coursesContainer = document.getElementById('courses');
     
     data.courses.forEach(course => {
         // Create card elements dynamically
         const courseCard = document.createElement('div');
         courseCard.classList.add('shadow-lg', 'rounded-lg', 'overflow-hidden', 'hover:shadow-xl', 'transition-shadow', 'duration-300');

         // Create course image element
         const courseImage = document.createElement('img');
         courseImage.src = course.image;
         courseImage.alt = course.title;
         courseImage.classList.add('w-full', 'h-48', 'object-cover');

         // Create card body
         const cardBody = document.createElement('div');
         cardBody.classList.add('p-6');
         
         // Create course title
         const courseTitle = document.createElement('h3');
         courseTitle.classList.add('text-xl', 'font-bold', 'mb-2');
         courseTitle.textContent = course.title;
         
         // Create course description
         const courseDescription = document.createElement('p');
         courseDescription.classList.add('mb-4');
         courseDescription.textContent = course.description;
         
         // Create "Learn more" button
         const learnMoreBtn = document.createElement('a');
         learnMoreBtn.href = course.link;
         learnMoreBtn.classList.add('inline-block', 'bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-blue-600');
         learnMoreBtn.textContent = 'ចុចដើម្បីរៀន';

         // Append elements to the card
         cardBody.appendChild(courseTitle);
         cardBody.appendChild(courseDescription);
         cardBody.appendChild(learnMoreBtn);
         
         courseCard.appendChild(courseImage);
         courseCard.appendChild(cardBody);
         
         // Append the course card to the container
         coursesContainer.appendChild(courseCard);
     });
 })
 .catch(error => console.error('Error loading the courses:', error));