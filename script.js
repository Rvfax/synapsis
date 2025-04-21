           // Zmienna przechowująca liczbę kliknięć
           let clickCount = 0;

           // Element linku
           const link = document.getElementById('clickLink');
           
           // Funkcja obsługująca kliknięcia
           link.addEventListener('click', (event) => {
               event.preventDefault(); // Zapobiega domyślnej akcji linku (przejście do innej strony)
               
               clickCount++; // Zwiększ licznik
           
               // Warunek, który sprawdza liczbę kliknięć
               if (clickCount === 5) {
                   tajne();
                   clickCount = 0; // Reset licznika (opcjonalnie)
               }
           });
           
           function tajne(){
               document.getElementById("tajne").style.display="block";
           }
           
               // Funkcja otwierająca okno modalne i wstawiająca PDF
                   function openModal(pdfUrl) {
                       const modal = document.getElementById("modal");
                       const pdfFrame = document.getElementById("pdfFrame");
                       pdfFrame.src = pdfUrl; // Ustaw link do PDF
                       modal.style.display = "flex";
                   }
           
                   // Funkcja zamykająca okno modalne
                   function closeModal() {
                       const modal = document.getElementById("modal");
                       const pdfFrame = document.getElementById("pdfFrame");
                       pdfFrame.src = ""; // Czyści zawartość iframe
                       modal.style.display = "none";
                   }
