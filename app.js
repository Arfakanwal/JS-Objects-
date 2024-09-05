//Q # 1
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
  ];
  
  // Calculate total price for each item and total price for all items
  var totalPriceOfAllItems = 0;
  
  itemsArray.forEach(item => {
    let totalItemPrice = item.price * item.quantity;
    console.log(`Total price of ${item.name}: ${totalItemPrice}`);
    totalPriceOfAllItems += totalItemPrice;
  });
  
  console.log(`Total price of all items: ${totalPriceOfAllItems}`);
  

//Q # 2
var user = {
    name: "Arfa",
    email: "Arfa@example.com",
    password: "secret123",
    age: 25,
    gender: "female",
    city: "Karachi",
    country: "Pakistan"
  };
  
  // Check if 'age' and 'country' properties exist
  console.log('age' in user);    // true
  console.log('country' in user); // true
  
  // Check if 'firstName' and 'lastName' properties exist
  console.log('firstName' in user); // false
  console.log('lastName' in user);  // false
  
  //Q # 3

  // Constructor function for Person
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  // Create multiple records
  var person1 = new Person("Alice", 25, "Female");
  var person2 = new Person("Bob", 30, "Male");
  var person3 = new Person("Charlie", 22, "Male");
  
  console.log(person1);
  console.log(person2);
  console.log(person3);

  //Q # 4

 // Constructor function for Population Record
function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
  
  // Save record to localStorage
  function saveRecord() {
    var name = document.getElementById('name').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var profession = document.getElementById('profession').value;
  
    var record = new PopulationRecord(name, gender, address, education, profession);
  
    // Get existing records from localStorage
    var records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    
    // Add new record
    records.push(record);
    
    // Save updated records back to localStorage
    localStorage.setItem('populationRecords', JSON.stringify(records));
  
    // Display all records
    displayRecords();
  }
  
  // Function to display all records
  function displayRecords() {
    var recordsDiv = document.getElementById('records');
    var records = JSON.parse(localStorage.getItem('populationRecords')) || [];
  
    recordsDiv.innerHTML = ''; // Clear previous records
  
    records.forEach(function(record, index) {
      recordsDiv.innerHTML += `
        <p>Record ${index + 1}:</p>
        <p>Name: ${record.name}</p>
        <p>Gender: ${record.gender}</p>
        <p>Address: ${record.address}</p>
        <p>Education: ${record.education}</p>
        <p>Profession: ${record.profession}</p>
        <hr>
      `;
    });
  }
  
  // Display records on page load
  window.onload = displayRecords;

  