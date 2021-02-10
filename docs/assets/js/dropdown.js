/*
  Dropdown management functions
*/

/**
 * Hide element by class
 * 
 * @param {*} field_id 
 * @param {*} field_name 
 * 
 * See: https://stackoverflow.com/q/18414384
 */
function draw_items_grouped_by(field_id, field_name) {
    document.getElementById("sel_field").innerHTML = field_name;

    if (field_id != '__all__')
    {
      for (let el of document.querySelectorAll('.__all__'))
      {
        //el.style.visibility = 'hidden';
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
      //el.style.visibility = 'visible';
      el.style.display = 'table-row'
    }
}

draw_items_grouped_by('__all__', 'Select an Application Field');