//get Data
if (window.localStorage.getItem("admins") == null) {
  let admins = {
    20210184: {
      id: "20210184",
      password: "admin",
      firstName: "Shawky",
      lastName: "Ebrahim",
    },
    20210755: {
      id: "20210755",
      password: "admin",
      firstName: "Alan",
      lastName: "Samir",
    },
  };
  window.localStorage.setItem("admins", JSON.stringify(admins));
}

if(window.localStorage.getItem("loggedAdmin") != null){
    window.location.href = "../admin-panel.html";
}

function loginAdmin() {
  const idNumberInput = document.getElementById("ID").value;
  const passwordInput = document.getElementById("Password").value;
  let allAdmins = JSON.parse(window.localStorage.getItem("admins"));
  if (allAdmins[idNumberInput]) {
    if (allAdmins[idNumberInput].password == passwordInput) {
      window.localStorage.setItem(
        "loggedAdmin",
        JSON.stringify(allAdmins[idNumberInput])
      );
      window.location.href = "../admin-panel.html";
    }
  }
}
