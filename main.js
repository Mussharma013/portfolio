var typed = new Typed(".text", {
    strings: ["Frontend Developer.", "Programmer.","Designer.","Python Developer.","ML Ethusiast"],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: false
  });
  
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    delay: 100,
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const interestsContainer = aboutSection.querySelector('.interests');
  
    aboutSection.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const interestsOffsetTop = interestsContainer.offsetTop;
  
      if (scrollPosition >= interestsOffsetTop - 200) {
        interestsContainer.classList.add('animate');
      }
    });
  });
// Add event listener to the about section
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
  
    // Add event listener to the interests container
    const interestsContainer = aboutSection.querySelector('.interests');
    interestsContainer.addEventListener('mouseover', () => {
      interestsContainer.classList.add('animate');
    });
  
    interestsContainer.addEventListener('mouseout', () => {
      interestsContainer.classList.remove('animate');
    });
  });
  
  // Initialize the AOS plugin
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    delay: 100,
  });
// Get the portfolio filters
const portfolioFilters = document.querySelectorAll('#portfolio-flters li');

// Get the portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add event listener to each filter
portfolioFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    // Remove active class from all filters
    portfolioFilters.forEach(f => f.classList.remove('filter-active'));

    // Add active class to the clicked filter
    filter.classList.add('filter-active');

    // Get the filter data attribute
    const filterData = filter.dataset.filter;

    // Filter the portfolio items
    portfolioItems.forEach(item => {
      if (filterData === '*') {
        item.style.display = 'block';
      } else {
        item.classList.contains(filterData) ? item.style.display = 'block' : item.style.display = 'none';
      }
    });
  });
});

// Add event listener to each portfolio item
portfolioItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.portfolio-info').style.opacity = '1';
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('.portfolio-info').style.opacity = '0';
  });
});

// Initialize the Venobox plugin
new VenoBox({
  selector: '.venobox',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotatingPlane'
});
    