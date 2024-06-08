// document.addEventListener("DOMContentLoaded", function() {
//     const handleScroll = () => {
//       document.querySelectorAll('.block').forEach(block => {
//         const rect = block.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           block.classList.add('show');
//           block.querySelectorAll('.child').forEach(child => {
//             child.classList.add('show');
//           });
//         }
//       });
//     };
  
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial check on page load
  
//     return () => window.removeEventListener('scroll', handleScroll);
//   });
  