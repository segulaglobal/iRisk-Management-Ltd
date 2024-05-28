 //Preloader

const preloader = document.querySelector('#preloader');
// if (preloader) {
// window.addEventListener('load', () => {
//   preloader.remove()
//   console.log("preloader has been removed")
// });
// } else {
//     console.log('Preloader not found.');
// }

window.addEventListener("load", () => {
  preloader.remove();
  console.log("Pre-loader done");
})