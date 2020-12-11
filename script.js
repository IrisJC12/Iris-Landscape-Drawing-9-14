function setup() {
  createCanvas(windowWidth, windowWidth);
  background(193,225,236);

  //sun
  fill(255,236,137);
  ellipse(0,0,300,300);

  //grass
  for(let x = 0; x < width; x+=4){
    let green = random(255);
    let grasstop = random(340,360);
    stroke(0, green, 0); 
    strokeWeight(random(1,3));
    line(x, grasstop, x, 390);
  }


  //clouds - maybe this time you don't care about x, so it's just a counting loop i 0 to 100 or whatever
  //x and y can take random values
  for(let count = 0; count < 25; count++){
    fill(255,255,255, random(50, 100));
    let x = random(width);
    let y = random(0,100);
    let w = random(100,150);
    let h = random(90,100);
    noStroke();
    ellipse(x,y,w,h);
    ellipse(x+random(-20,30),y+random(-20,20),w,h);
    //ellipse(x,y,w,h);


  }

  stroke(255,255,255);
  for(let x=0; x<width; x+=120){ //creates random houses horizontally
    let r = random(50,200);
    let h = random(100,250);
    house(x,100,h,r);
  }
}

function draw() {
  
}

 //house
  function house(x,w,h,r){
    fill(r,r,255-r);
    triangle(x,350-h,x+w,350-h, x+w/2, 300-h);
    rect(x,350-h,w,h); //huge rectangle
    fill(230,173,188);
    square(x+20, 250, 10);//windows
    square(x+80,250,10);
    fill(232,244,248);
    rect(x+70,320,20,30);//door
  }


/*
My suggestion for this project is the same one I had for your faces project: make a function to draw the building. That way, you could easily create a row of houses neatly aligned along the street. 

Just as with the faces project, when you use a function to produce groups of shapes on the screen, your code becomes more modular. If you want to make a change to how each building looks, you can make that change in one place (in the body of the function) rather than in dozens of places throughout your program. 

I’d love to see you add more parameters to the building() function to allow more customization. For starters you’ll probably want to control where it is, and how tall it is. But then also: the wall color, window color, door color, window size, number of windows, etc.

Rather than calling all of your building functions one by one, consider using a loop to create a row of buildings, one after the other, at regular or random intervals.

Right now, your clouds are nice, but a little artificial looking. To fix this, I recommend specifying a minimum width and height for each one. Also: you might consider having each cloud consist of a few different overlapping ellipses, each with different alpha values, rather than a single ellipse. 

To optimize this for full-screen display, I recommend using windowWidth and windowHeight to set the size of the canvas. That will make your canvas fill the user's entire display, not just a 400x400 section of it. You can then reference the width and height of your canvas using the width and height variables, which are pre-defined global variables in p5. 

*/