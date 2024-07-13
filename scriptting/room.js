const viewDetailButtons = document.querySelectorAll('.view-details-btn');
const detailsPanels = document.querySelectorAll('.details-panel');
const rightColumn = document.querySelector('.right-column');

viewDetailButtons.forEach((button, index) => {
   button.addEventListener('click', function () {
      detailsPanels[index].classList.toggle('show');

      detailsPanels.forEach((panel, idx) => {
         if (idx !== index && panel.classList.contains('show')) {
            panel.classList.remove('show');
         }
      });

      if (detailsPanels[index].classList.contains('show')) {
         const clone = detailsPanels[index].cloneNode(true);
         rightColumn.innerHTML = '';
         rightColumn.appendChild(clone);
      } else {
         rightColumn.innerHTML = '';
      }
   });
});
