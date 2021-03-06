/**
 * W3.CSS Dropdown Classes management functions
 */

/**
 * Event constructor
 * 
 * @param {*} eventName
 * 
 * Supply Event constructor to Internet Explorer
 * See: https://stackoverflow.com/a/42089476
 */
function createNewEvent(eventName) {
  var event;
  if (typeof(Event) === 'function') {
      event = new Event(eventName);
  } else {
      event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
  }
  return event;
}

/**
 * Enable dropdown list on mouseover
 * 
 * See: https://stackoverflow.com/a/50206746
 */
var element = document.getElementById('drop_select');
element.addEventListener('mouseover', function() {
  document.getElementById("drop_fields").style.visibility = 'visible';
});
//var event = new MouseEvent('mouseover');
var event = createNewEvent('mouseover');
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

  if (field_name.length > 0)
    document.getElementById("sel_field").innerHTML = field_name;
  // else keep the HTML content

  if (field_id != '__all__')
  {
    [].forEach.call(document.querySelectorAll('.__all__'), function (el) {
      el.style.display = 'none';
    });
  }

  var treven = 0;
  [].forEach.call(document.querySelectorAll('.'+field_id), function (el) {
    if (treven)
      el.classList.add("tr-even");
    else
      el.classList.remove("tr-even");
      treven = 1 - treven;
    el.style.display = 'table-row';
  });
}
