const triggers = document.querySelectorAll('.trigger');

const popup = document.getElementById('popup');

triggers.forEach(trigger => {

   let altName = trigger.alt;
   const dynamicText = `<center>This is a dynamic text for ${altName} images info</center>`;

   trigger.addEventListener('mouseover', () => {
      popup.innerHTML = dynamicText;
      popup.classList.remove('hidden');
   });

   trigger.addEventListener('mouseout', () => {
      popup.classList.add('hidden');
   });

});