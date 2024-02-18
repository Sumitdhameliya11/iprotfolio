const sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop-150;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animation');
    }
    // // if you want to repating the animation,use this
    // else {
    //   sec.classList.remove('show-animation');
    // }
  });
}