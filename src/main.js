
// Smooth Scrolling
$('#navbar link').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('div').animate(
      {
        scrollTop: $(hash).offset().top - 1000
      },
      800
    );
  }
});