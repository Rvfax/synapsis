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
           
           
           
                   window.onload = function() {
               // Ustawienie menu jako zwinięte przy załadowaniu strony
               const menu = document.getElementById("menu");
               menu.classList.add("collapsed");  // Ustawienie klasy collapsed, aby menu było zwinięte na początku
           
               // Zaktualizowanie widoczności przycisku Home
               const homeButton = document.getElementById("home-btn");
               homeButton.style.display = "none"; // Ukrycie przycisku Home na początku
           };
           
                   function toggleMenu() {
               const menu = document.getElementById("menu");
               const homeButton = document.getElementById("home-btn");
               
               menu.classList.toggle("collapsed"); // Przełączanie stanu zwinięcia menu
               
               // Zmiana widoczności przycisku Home
               if (menu.classList.contains("collapsed")) {
                   homeButton.style.display = "none"; // Ukrycie przycisku Home, gdy menu jest zwinięte
               } else {
                   homeButton.style.display = "block"; // Pokazanie przycisku Home, gdy menu jest rozwinięte
               }
           }
           
           
           
           function adjustMenuHeight() {
               const menu = document.querySelector('.menu');
               const marginFix = 16; // Ustawiony margines (od góry i dołu)
               menu.style.height = `calc(${window.innerHeight}px - ${marginFix}px)`;
           }
           
           // Dopasuj przy ładowaniu strony i podczas zmiany rozmiaru okna
           window.addEventListener('load', adjustMenuHeight);
           window.addEventListener('resize', adjustMenuHeight);