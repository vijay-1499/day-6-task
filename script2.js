//3.Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, email, address,place) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.address = address;
      this.place = place;
      
    }
  }
  var bio = new Person("vijay", "viji", 25, "mahiviji99@gmail.com", "112 kn nagar","namakkal")
  
  for (a in bio){
      console.log(a,":",bio[a] )
  }