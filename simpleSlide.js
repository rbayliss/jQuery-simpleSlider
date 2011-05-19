

(function ($) {
  $.fn.simpleSlider = function(settings) {
    if(!this.length) return false;
    
    this.settings = $.extend(settings, $.fn.simpleSlider.defaults);
    this.slider = $(this.settings.sliderSelector, this);
    if(!this.slider.length) return false;
    
    this.slides = $(this.settings.slideSelector, this.slider);
    if(!this.slides.length) return false;
    
    this.currentSlide = 0;
    this.slideCount = this.slides.length;
    var self = this;

    this.go = function(idx, animation) {
      var newSlide = self.slides.eq(idx);
      if(!newSlide.length) return false;
      
      var pos = newSlide.position();
      pos.top *= -1;
      pos.left *= -1;

      self.trigger('slide_start', self.slides.eq(self.currentSlide), newSlide);
      self.currentSlide = idx;
      if(animation) {
        self.slider.stop().animate(pos, this.settings.animationSpeed, function() {
          self.trigger('slide_end', newSlide);
        });
      }
      else {
        self.slider.css(pos);
        self.trigger('slide_end', newSlide);
      }

      if(self.currentSlide == 0){
        self.trigger('slide_limit', 'start');
      }

      if(self.currentSlide == self.slides.length -1) {
        self.trigger('slide_limit', 'end');
      }
        
      return true;
    }

    this.forward = function() {
      var dest = self.currentSlide + 1;
      
      if(dest == self.slideCount && self.settings.wrap)
        dest = 0; //Wrap
      
      return self.go(dest, true);
    }
    
    this.back = function() {
      var dest = self.currentSlide -1;
      
      if(dest < 0 && self.settings.wrap) 
        dest = self.slideCount -1; //Wrap
      
      return self.go(self.currentSlide -1, true);
    }
    
    setTimeout(function() {
      self.go(self.currentSlide, false);
    }, 50);

    return this;
  }

  $.fn.simpleSlider.defaults = {
    slideSelector: 'li',
    sliderSelector: 'ul',
    animationSpeed: 1000,
    wrap: true
  }
})(jQuery);
