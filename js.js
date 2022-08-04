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
    day = "Payshanba";
    break;
  case 5:
    day = "Juma";
    break;
  case  6:
    day = "Shanba";
}
document.getElementById("demo").innerHTML = day;

let months;

switch (new Date().getMonth()) {
    case 0:
        months = "Yanvar";
        break;
    case 1:
        months = "Fevral";
        break;
    case 2:
        months = "Mart";
        break;
    case 3:
        months = "Aprel";
        break;
    case 4:
        months = "May";
        break;
    case 5:
        months = "Iyun";
        break;    
    case 6:
        months = "Iyul";
        break;
    case 7:
        months = "Avgust";
        break;
    case 8:
        months = "Sentyabr";
        break;
    case 9:
        months = "Oktyabr";
        break;
    case 10:
        months = "Noyabr";
        break;
    case 11:
        months = "Dekabr";
        break;    
    // default:
    //     break;
}

document.getElementById("oy").innerHTML = months;


let kun = new Date().getDay()

document.getElementById("kun").innerHTML = kun;

let year = new Date().getFullYear()

document.getElementById("yil").innerHTML = year;




