$(document).ready(function(){



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBlONPaopJmETIeAcrvix3CIfIa3QYklbA",
    authDomain: "train-scheduler-5be6a.firebaseapp.com",
    databaseURL: "https://train-scheduler-5be6a.firebaseio.com",
    projectId: "train-scheduler-5be6a",
    storageBucket: "",
    messagingSenderId: "1003109742456",
    appId: "1:1003109742456:web:a42cb33d39c37d73b1ba8d"
  };


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


   
    let database = firebase.database();
   
    let name;
    let role;
    let dateStarted;
    let monthlyRate;
   
   function addEmployee() {
       name = $("#nameInput").val();
       role = $("#roleInput").val();
       dateStarted = $("#dateInput").val();
       monthlyRate = $("#rateInput").val();
   
       //need to calculate months worked
       let monthsWorked;
   
       var firstDate = moment().format(dateStarted, "MM-DD-YYYY");
       var secondDate = moment().format("MM-DD-YYYY");
       console.log(firstDate);
       console.log(secondDate);
       
       // var difference =  
   
   
       //need to calculate total billed
       let totalBilled;
   
       let newEmployee = $("<tr>")
       newEmployee.html(`
       <th scope="row">${name}</th>
       <td>${role}</td>
       <td>${dateStarted}</td>
       <td>${monthsWorked}</td>
       <td>${monthlyRate}</td>
       `);
       
       $("#employeeList").append(newEmployee);
   };
   
   
   
   $("#submitButton").on("click", function(event){
       event.preventDefault();
       addEmployee();
   
       database
       .ref()
       .push({
           name: name,
           role: role,
           dateStarted: dateStarted,
           monthlyRate: monthlyRate,
       })
   
       
   
   });
   
   
   // database
   // .ref()
   // .on("child_added", 
   //     function (snapshot) {
   //         let snapshotValue = snapshot.val();
   //         let name = snapshotValue.val();
   //         let role = snapshotValue.val();
   //         let dateStarted = snapshotValue.val();
   //         let monthlyRate = snapshotValue.val();
   //         console.log(snapshotValue);
   //         addEmployee();
   //     }, 
   //     function (error) {
   //         console.error(error)
   //     });
   
   });
   
   