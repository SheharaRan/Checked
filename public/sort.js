console.log("hi");


var task = document.getElementById("newtask");
var class1 = document.getElementById("class1");
var class2 = document.getElementById("class2");
var class3 = document.getElementById("class3");


Sortable.create(task, {
    group: 'shared', // set both lists to same group
    animation: 150,
     pull: 'clone',
    onSort: function (evt){    
    var currentSortable = evt.to[Object.keys(evt.to)[0]];
    var order = currentSortable.toArray();
    console.log('task:');
    console.log(order);
  }
    
});

Sortable.create(class1, {
    group: 'shared', // set both lists to same group
    animation: 150,
    pull: 'clone',
        onSort: function (evt){    
    var currentSortable = evt.to[Object.keys(evt.to)[0]];
    var order = currentSortable.toArray();
    console.log('class1:');
    console.log(order);
  }  
    
});

Sortable.create(class2, {
    group: 'shared', // set both lists to same group
    animation: 150,
    onSort: function (evt){    
    var currentSortable = evt.to[Object.keys(evt.to)[0]];
    var order = currentSortable.toArray();
    console.log('class2:');
    console.log(order);
  }  
});

Sortable.create(class3, {
    group: 'shared', // set both lists to same group
    animation: 150,
     onSort: function (evt){    
    var currentSortable = evt.to[Object.keys(evt.to)[0]];
    var order = currentSortable.toArray();
    console.log('class3:');
    console.log(order);
  }   
});

