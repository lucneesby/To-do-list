//User clicked on the add buttonClick
//if there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function () {
  var value = document.getElementById('item').value;
  if (value) {
    console.log('Alas, the variable value exists within the context of the function!')
  }

});
