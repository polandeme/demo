// 文字跟随鼠标动 or 文字不动
(function() {
  var canvas = document.getElementById("canvasId");

  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = .3;
  var s = true;
  var a_point = [];
  var c_point = [];
  var t_pos = [];
  var cp_index = null;
  var dir = ['+', '-'];
  for(var i = 0; i < 150; i++) {
    var a = {
              x: canvas.width * Math.random(),
              vx: ran().vx,
              y: canvas.height * Math.random(),
              vy: ran().vy
            };
    a_point.push(a);
    c_point.push(a);

  }


  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < a_point.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = '#828d8d';
      if(i === cp_index) {
      ctx.strokeStyle = 'red';
      ctx.fillStyle = '#828d8d';
      ctx.fillText('hello', a_point[cp_index].x + 5, a_point[cp_index].y -5 );
      ctx.lineWidth = 3;
      ctx.arc(a_point[cp_index].x, a_point[cp_index].y ,5, 0, 2*Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
      } else {
        var x = a_point[i].x;
        var y = a_point[i].y;
        c_point[i].x = x;
        c_point[i].y = y;
        ctx.arc(x, y ,2, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();        
      }

    }
  }

  function reDraw(p) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < a_point.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'red';
      var x = c_point[i].x;
      var y = c_point[i].y;
      ctx.arc(x, y ,2, 0, 2*Math.PI);
      ctx.fill();

      if(p && ctx.isPointInPath(p.x, p.y)) {
          cp_index = i;
          ctx.fillStyle = 'blue';   
          ctx.beginPath(); 
          ctx.arc(c_point[cp_index].x, c_point[cp_index].y ,15, 0, 2*Math.PI);
          ctx.fill();  
          t_pos[0] = p;
      }else if( p &&t_pos[0] && ((p.x - t_pos[0].x) > 4  || (p.x - t_pos[0].x) < -2 ) ){
        t_pos[0] = p;
        window.cancelAnimationFrame(reId); 
        reId = requestAnimationFrame(moveTo);
        cp_index = null;
        connect(); 
      }
    }
  }

  function connect() {

    for(var i = 0; i < 70; i++) {
      for(var j = 0; j< 50; j++) {
        if((a_point[i].x - a_point[j].x < 100) && (a_point[i].y - a_point[j].y < 100) && (a_point[i].y - a_point[j].y > -100) && (a_point[i].x - a_point[j].x > -100)) {
          ctx.beginPath();
          ctx.strokeStyle = 'gray';
          ctx.lineWidth = .5;
          ctx.moveTo(a_point[i].x, a_point[i].y);
          ctx.lineTo(a_point[j].x, a_point[j].y);
          ctx.stroke();
        }
        
      }
    }
  }

function reCurPoint(ts) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log('reCurPoint');
  ctx.fillStyle = 'gray';   
  ctx.beginPath(); 
  ctx.arc(c_point[ts].x, c_point[ts].y ,15, 0, 2*Math.PI);
  ctx.fill();  
}
  function moveTo() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < a_point.length; i++) {
      if(i === cp_index) {
        console.log(cp_index);
        a_point[cp_index].x = a_point[cp_index].x;
        a_point[cp_index].y = a_point[cp_index].y;
      }else {

        a_point[i].x +=  a_point[i].vx;
        a_point[i].y +=  a_point[i].vy;        
      }
    }
    // reDraw();
    draw();
    check();
    connect();
    reId = requestAnimationFrame(moveTo); 
  }
  
  function ran() {
    var f1 = Math.round(Math.random());
    var f2 = Math.round(Math.random());
    var x = -.5 + Math.random();
    var y = -.5 + Math.random(); 
    return {
      vx : x, 
      vy : y 
    }
  }

  function check() {
    for(var i = 0; i < c_point.length; i++) {
      if(c_point[i].x > window.innerWidth || c_point[i].y > window.innerHeight)
      {
        c_point[i].x -= 1000 * Math.random()  + ran().vx;
        c_point[i].y = 1000 * Math.random() + ran().vx;
      } else if(c_point[i].x <0 || c_point[i].y < 0) {
        c_point[i].x = 1000 * Math.random() + ran().vx;
        c_point[i].y = 1000 * Math.random() + ran().vx;
      }
    }
    
  }

  // bind event 
  $("#canvasId").on({
    mousemove: function(e) {
      var p = getEventPosition(e);
        var ts = reDraw(p);
        console.log(ts);
        connect();
      },
      mousemleave: function(e) {
        console.log('out');
      var p = getEventPosition(e);
        var ts = reDraw(p);
        console.log(ts);
        connect();
      }
  })

  function getEventPosition(e) {
    var x, y;
    if(e.layerX || e.layerX == 0) {
      x = e.layerX;
      y = e.layerY;
    } else if(e.offsetX || e.offsetY == 0) {
      x = e.offsetX;
      y = e.offsetY;
    }
    return {
      x : x,
      y : y,
    }
  }
  draw();
requestAnimationFrame(moveTo); 

})();