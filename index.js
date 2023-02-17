
function addHrefs ()
{
    var list = document.getElementsByTagName("li");

    console.log(list)

    for( let i =0; i<list.length ;i++)
    {
        // create an anchor tag 
        var anchor = document.createElement('a');
        anchor.setAttribute('href','https://www.google.com/search?q='+list[i].innerHTML);
        anchor.innerHTML = list[i].innerHTML;
        list[i].innerHTML ="";
        console.log(anchor);
        // adding into the li item

        list[i].append(anchor);

    }
}
function changeTheme()
{
    // grab the element you wnat to chnage
        var item = document.getElementById('list');
        console.log(item);
    // add the clasName
   
    item.style.backgroundColor = 'brown';
}

addHrefs();