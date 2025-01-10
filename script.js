// question 1/
var book=
   {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925
   }
   console.log(book);
   console.log(book.author);
   console.log(book.yearpublished);
   console.log(book.genre="friction");
    delete book.title;
    console.log(book);


    // question 2
    
var employee=
{
 name: "Navyasrireddy",
 age: "21",
 position: "software engineer",
 salary: "35000"
 } 
 console.log(employee);
 console.log(employee.position);
 console.log(employee.age);
 console.log(employee.salary="35000");
 console.log(employee.department="HR");
 delete employee.age;
 console.log(employee);


//  question 3

var product= {
    id: "955",
    name: "smart phone",
    price: "45000",
    category: "electronics",
}
    console.log(product);
    console.log(product.price);
    console.log(product.category="electronics");
    console.log(product.instock="true");
    delete product.id;
    console.log(product);


    // question 4
    var car={
        propertymake:"mahindra",
        model:"xuv3x0",
        year:"2024",
        color:"white",
    }
    console.log(car);
    console.log(car.make);
    console.log(car.modifycolour="black");
    console.log(car.enginetype="V6");
    delete car.year;
    console.log(car);

    // question 5
    var student={
        name:'Navyasrireddy',
        age:'21',
        Grade:'88',
        school:'TTS'
    }
    console.log(student);
    console.log(student.school);
    console.log(student.grade="88");
    console.log(student.hobbies="watching movies","sports");
    delete student.age;
    console.log(student);


    // question 6
    const user = {
        username: "john_doe",
        profile: {
           firstName: "John",
           lastName: "Doe",
           age: 28,
           address: {
             street: "456 Elm St",
             city: "Gotham",
             zip: "54321"
           }
         },
         preferences: {
          theme: "dark",
           notifications: true
         }
       }
  
  console.log(user);
  console.log(user.profile.address.city);
  console.log(user.preferences['theme']="light");
  console.log(user.profile.phone=["555-9876"]);
  delete user.profile.address['zip'];
  console.log(user);

//   question 7

const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  }

  console.log(company);
  console.log(company.employees['1'].contact.email);
  console.log(company.employees['0'].contact.phoner=["555-1111"]);
  console.log(company.employees['0'].department=["Engineering"]);
  delete company.location;
  console.log(company);



