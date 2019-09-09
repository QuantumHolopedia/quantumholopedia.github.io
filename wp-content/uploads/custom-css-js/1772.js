<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 



jQuery(document).ready(function( $ ){
	
  	$(".portal-carousel figure").each(function(){
		var websiteTagVal = $(this).attr('website');
		var fileExtension = websiteTagVal != 'holopedia' ? 'png' : 'gif';
		$(this).find('img').attr('src', 'http://quantumfoundation.eu/wp-content/uploads/2018/12/' + websiteTagVal + '-presents.' + fileExtension);
		$('.screenshot, .website_description').hide();	
	});	
  
   var carousel = new Carousel3D(document.getElementById('carousel')),
        panelCountInput = document.getElementById('panel-count'),
        axisButton = document.getElementById('toggle-axis'),
        navButtons = document.querySelectorAll('#navigation button'),


       onNavButtonClick = function (event) {
         var increment = parseInt(event.target.getAttribute('data-increment'));
         carousel.rotation += carousel.theta * increment * -1;
         carousel.transform();
       };
  


    // populate on startup
    carousel.panelCount = $('#carousel figure').length;
    carousel.modify();

 

    // axisButton.addEventListener('click', function () {
    //     carousel.isHorizontal = !carousel.isHorizontal;
    //     carousel.modify();
    // }, false);

    // panelCountInput.addEventListener('change', function (event) {
    //     carousel.panelCount = event.target.value;
    //     carousel.modify();
    // }, false);

    // for (var i = 0; i < 2; i++) {
    //     navButtons[i].addEventListener('click', onNavButtonClick, false);
    // }

    // document.getElementById('toggle-backface-visibility').addEventListener('click', function () {
    //     carousel.element.toggleClassName('panels-backface-invisible');
    // }, false);

    setTimeout(function () {
        document.body.classList.add('ready');
    }, 0);

});

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
};

var transformProp = 'transform'; //Modernizr.prefixed('transform');

function Carousel3D(el) {
    this.element = el;

    this.rotation = 0;
    this.panelCount = 0;
    this.totalPanelCount = (this.element)? this.element.children.length: 0;
    this.theta = 0;

    this.isHorizontal = true;

}

Carousel3D.prototype.modify = function () {

  	if(this.element) {
      var panel, angle, i;

      this.panelSize = this.element[this.isHorizontal ? 'offsetWidth' : 'offsetHeight'];
      this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
      this.theta = 360 / this.panelCount;

      // do some trig to figure out how big the carousel
      // is in 3D space
      this.radius = Math.round((this.panelSize / 2) / Math.tan(Math.PI / this.panelCount));

      for (i = 0; i < this.panelCount; i++) {
          panel = this.element.children[i];
          angle = this.theta * i;
          panel.style.opacity = 1;
          //panel.style.backgroundColor = 'hsla(' + angle + ', 100%, 50%, 0.8)';
          // rotate panel, then push it out in 3D space
          panel.style[transformProp] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
      }

      // hide other panels
      for (; i < this.totalPanelCount; i++) {
          panel = this.element.children[i];
          panel.style.opacity = 0;
          panel.style[transformProp] = 'none';
      }

      // adjust rotation so panels are always flat
      this.rotation = Math.round(this.rotation / this.theta) * this.theta;

      this.transform();
    }
};

Carousel3D.prototype.transform = function () {
   	if(this.element) {
      // push the carousel back in 3D space,
      // and rotate it
      this.element.style[transformProp] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
    }
};



var init = function () {


   

};

window.addEventListener('DOMContentLoaded', init, false);
</script>
<!-- end Simple Custom CSS and JS -->
