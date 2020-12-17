function fetchData(){

/*Here, proxy url has been used as the chrome browser was blocking to display the response data when firing the url. 
So to avoid the "no-cors" issue proxy url has been concatenated with the actual url
*/
var targetUrl = 'https://postman-echo.com/get?foo1=bar1&foo2=bar2'
fetch(targetUrl)
.then(response => {
    if(!response.ok)
    {
        throw Error("Error");
    }
    return response.json();
})
.then(data => {
    /*
    fetching the keys and values for the given API
     */
    var args_value = (Object.values(data.args));
    var args_key = (Object.keys(data.args)); 

    var headers_value = (Object.values(data.headers));
    var headers_key = (Object.keys(data.headers));


    //displaying the values of arguments & headers on the HTML page.
    document.getElementById("app").innerHTML = "<h3><b><u>ARGUMENTS</u> :</b><h3>"
    console.log("Values for Arguments are---------");
    for(var i=0 ; i<args_key.length ; i++)
    {
            document.getElementById("app").innerHTML += "<li class='list-group-item' style='background-color:black'>" + "<b>" + args_key[i].fontcolor('white') + "</b>" + " " + ":" + " " + args_value[i].fontcolor('cyan')+"</li>";
            console.log(args_key[i] + ":" + args_value[i]);
    }

    document.getElementById("app").innerHTML += "<br></br>"
    document.getElementById("app").innerHTML += "<h3><b><u>HEADERS</u> :</b></h3>"
    console.log("\n");
    console.log("Values for Headers are---------");
    for(var j=0 ; j<headers_key.length ; j++)
    {
            document.getElementById("app").innerHTML += "<ul class='list-group-item' style='background-color:black'>"+ "<b>" + headers_key[j].fontcolor('white') + "</b>" + " " + ":" + " " + headers_value[j].fontcolor('cyan')+"</li>";
            console.log(headers_key[j] + ":" + headers_value[j]);
    }
    
})
}

fetchData();


