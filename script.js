


document.getElementById("smail").onclick = function () {
  alert("Thank you for signing up!");
};



document.getElementById("timedgreets").innerHTML = '<b>' + greet + '</b> and Thank You for Visiting My Site!';
  let myDate = new Date();
    let hrs = myDate.getHours();
    let greet;

 if (hrs < 12) greet = 'Good Morning!';
 else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon!';
 else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening!';
