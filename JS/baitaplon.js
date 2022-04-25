function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
$(document).ready(function() {
    $("#menu1").click(function() {
        if($(".sidebar").css("display")=="none")
        {
           $(".sidebar").css("display", "block");
        }else{
            $(".sidebar").css("display", "none");
         }
    })
})
function KiemTraTenDN() {
    var re = /^[a-z]\w*/;
    if (re.test(document.getElementById('txtDN').value.trim()) == false){
        tendn.innerText = "* bắc buộc,bắt đầu bằng ký tự";
        return false;
    }else {
        tendn.innerText = "Đúng";
        return true;
    }
}
function KiemTraPassWord(){
var re =/(?=.*\d).{6,}/;
if (re.test(document.getElementById('txtMK').value.trim())==false) {
    mk.innerText="* phải có chữ ,số ,ít nhất 6 ký tự";
    return false;
    } else {
       mk.innerText = "*";
       return true;
    }
}
function KiemTraXacNhanPassWord(){
if (document.getElementById('txtXNMK').value !=
    document.getElementById('txtMK').value) {
    xnmk.innerText="* phải giống ô mật khẩu";
    return false;
    } else {
       xnmk.innerText = "*";
       return true;
    }    
}
function KiemTraNgaySinh(){
var ns = new Date(document.getElementById('txtNS').value);
var today = new Date();
if (eval(today.getFullYear()  - ns.getFullYear())<= 10)  {
    ngaysinh.innerText="* tuổi phải > 10";
    return false;
    } else {
       ngaysinh.innerText = "";
       return true;
    }
}
function SubmitForm(){
if (KiemTraTenDN()==false || KiemTraPassWord() == false || KiemTraXacNhanPassWord() ==false) {
    alert("bạn chưa nhập đầu đủ và đúng thông tin!");
    } else {
       var tt1= document.getElementById("txtName").value;
       var tt2= document.getElementById("txtNS").value;
       var w = open("FormValidation_info.html","Ketqua");
       w.document.write("<B>THONG TIN CA NHAN</b>");
       w.document.write("Ho ten:" + tt1 + "<br>");
       w.document.write("Nam sinh: " + tt2 + "<br>");
    }
}
// sound effect
var free = document.getElementById("free");

free.addEventListener("click", () => {
    document.getElementById("freePopUp").style.display = "block";
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("freePopUp").style.display = "none";
})
var free2 = document.getElementById("free2");

free2.addEventListener("click", () => {
    document.getElementById("freePopUp2").style.display = "block";
})

document.getElementById("close2").addEventListener("click", () => {
    document.getElementById("freePopUp2").style.display = "none";
})
var free3 = document.getElementById("free3");

free3.addEventListener("click", () => {
    document.getElementById("freePopUp3").style.display = "block";
})

document.getElementById("close3").addEventListener("click", () => {
    document.getElementById("freePopUp3").style.display = "none";
})
var free4 = document.getElementById("free4");

free4.addEventListener("click", () => {
    document.getElementById("freePopUp4").style.display = "block";
})

document.getElementById("close4").addEventListener("click", () => {
    document.getElementById("freePopUp4").style.display = "none";
})
var free5 = document.getElementById("free5");

free5.addEventListener("click", () => {
    document.getElementById("freePopUp5").style.display = "block";
})

document.getElementById("close5").addEventListener("click", () => {
    document.getElementById("freePopUp5").style.display = "none";
})
var free6 = document.getElementById("free6");

free6.addEventListener("click", () => {
    document.getElementById("freePopUp6").style.display = "block";
})

document.getElementById("close6").addEventListener("click", () => {
    document.getElementById("freePopUp6").style.display = "none";
})
// yeu cau cua khach Hang
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }