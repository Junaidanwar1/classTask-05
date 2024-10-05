
function calculateAge() {
   const birthdate = document.getElementById("date-input").value;
   if (birthdate === '') {
       document.getElementById("display").innerText = "Please select a valid birthdate.";
       return;
   }

   const birthDateObj = new Date(birthdate);
   const today = new Date();
   
   let age = today.getFullYear() - birthDateObj.getFullYear();
   const monthDifference = today.getMonth() - birthDateObj.getMonth();
   const dayDifference = today.getDate() - birthDateObj.getDate();

   if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
       age--;
   }

   document.getElementById("years").innerText = `${age}`;
   document.getElementById("Month").innerText = `${monthDifference}`;
   document.getElementById("Day").innerText = ` ${dayDifference}`;
}
