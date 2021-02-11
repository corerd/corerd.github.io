/**
 * W3.CSS Dropdown Classes management functions
 */

/**
 * Enable dropdown list on mouseover
 * 
 * See: https://stackoverflow.com/a/50206746
 */
var element = document.getElementById('drop_select');
element.addEventListener('mouseover', function() {
  document.getElementById("drop_fields").style.visibility = 'visible';
});
var event = new MouseEvent('mouseover');
element.dispatchEvent(event);

/**
 * Draw item by field class and disable dropdown list
 * 
 * @param {*} field_id 
 * @param {*} field_name 
 * 
 * See: https://stackoverflow.com/q/18414384
 */
function draw_items_grouped_by(field_id, field_name) {
  document.getElementById("drop_fields").style.visibility = 'hidden';

  document.getElementById("sel_field").innerHTML = field_name;

  if (field_id != '__all__')
  {
    for (let el of document.querySelectorAll('.__all__'))
    {
      el.style.display = 'none'
    }
  }

  var treven = 0;
  for (let el of document.querySelectorAll('.'+field_id))
  {
    if (treven)
      el.classList.add("treven");
    else
      el.classList.remove("treven");
      treven = 1 - treven;
    el.style.display = 'table-row'
  }
}

draw_items_grouped_by('__all__', 'Select an Application Field');