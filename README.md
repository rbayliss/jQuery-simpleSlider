jQuery Simple Slider Plugin
===========================

A stripped down slider plugin with event based architecture.  

Sick of slider plugins that try to do it all?  Simple slider is strictly made for the DIY
inclined developer. What it lacks in options, it makes up for in speed and extensibility.


HTML Structure
--------------
<div id="container">
  <div id="slider"> <!-- This is the container -->
    <div>This is a slide</div>
    <div>This is another slide</div>
  </div>
</div>

Using simpleSlider
------------------
For the above HTML structure, use the following call:

$('#container').simpleSlider({
  sliderSelector:'#slider',
  slideSelector:'div'
});

Available Methods
-----------------
* go(index, animation) - Move the slider to the slide indicated by index.  Animation is a boolean of whether to use animation or not.
* forward() - Move the slider (using animation) to the next slide.
* back() - Move the slider (using animation) to the previous slide.

Options
-------
*  slideSelector: The jQuery selector used to determine the slides. (Defaults to 'li')
*  sliderSelector: The jQuery selector used to determine the sliding pane. (Defaults to 'ul')
*  animationSpeed: The time to draw out the animations (ex: 1000 or 'slow'/'fast')
*  wrap: Whether to "wrap" the starting/ending slides.

Events
------
*  slide_start: Fired when the animation is starting. Params: oldSlide, newSlide
*  slide_end: Fired when the animation is finished.  Params: newSlide
*  slide_limit: Fired when the animation hits the first or last slide is reached.  Params: type (one of 'start' or 'end')
