let day;
switch (new Date().getDay()) {
  case 0:
    day = "Yakshanba";
    break;
  case 1:
    day = "Dushanba";
    break;
  case 2:
    day = "Seshanba";
    break;
  case 3:
    day = "Chorshanba";
    break;
  case 4:
    day = "Juma";
    break;
  case 5:
    day = "Shanba";
    break;
  case  6:
    day = "Yakshanba";
}
document.getElementById("demo").innerHTML = day;

let months;

switch (new Date().getMonth()) {
    case 0:
        months = "1";
        break;
    case 1:
        months = "2";
        break;
    case 2:
        months = "3";
        break;
    case 3:
        months = "4";
        break;
    case 4:
        months = "5";
        break;
    case 5:
        months = "6";
        break;    
    case 6:
        months = "7";
        break;
    case 7:
        months = "8";
        break;
    case 8:
        months = "9";
        break;
    case 9:
        months = "10";
        break;
    case 10:
        months = "11";
        break;
    case 11:
        months = "12";
        break;    
    // default:
    //     break;
}

document.getElementById("oy").innerHTML = months;


let kun = new Date().getDay()

document.getElementById("kun").innerHTML = kun;

let year = new Date().getFullYear()

document.getElementById("yil").innerHTML = year;

// let year = document.getElementById("yil");

// let now = new Date();
// let dname = now.getFullYear();

