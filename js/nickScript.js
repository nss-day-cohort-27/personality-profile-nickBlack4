console.log("working");

const container = document.querySelector(".page-container");

const nickBigAssFunction = function () {
    // function expression 
    // loadDatabase can be invoked with loadDatabase()
    const loadDatabase = function (localStorageKey) {
      // Get the string version of the database
      const databaseString = localStorage.getItem(localStorageKey);
      // use JSON.parse() to convert the string back into an object
      return JSON.parse(databaseString);
    }
  
    // myData is now a reference to personalityProfileStorage DB
    const myData = loadDatabase("personalityProfileStorage");
  
    // handle the data inside local storage for nick's data
      
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "<h3>General Profile Section</h3>";
    paragraph.innerHTML += "<h4>Three statements you agree with</h4>";
    container.appendChild(paragraph);
    // paragraph.innerHTML += myData.intro;
    paragraph.innerHTML += myData.general.agree[0] + "<br/>" +
        myData.general.agree[1] + "<br/>" + 
        myData.general.agree[2] + "<br/>";
    paragraph.innerHTML += "<h4>Three statements you disagree with and why";
    paragraph.innerHTML += myData.general.disagree[0][0] + "<br/>" +
    myData.general.disagree[0][1];

    paragraph.innerHTML += "<br/><br/>";

    paragraph.innerHTML += myData.general.disagree[1][0] + "<br/>" +
    myData.general.disagree[1][1];

    paragraph.innerHTML += "<br/><br/>";

    paragraph.innerHTML += myData.general.disagree[2][0] + "<br/>" +
    myData.general.disagree[2][2];


  
      let p2 = document.createElement("p");
      p2.innerHTML = "<h3>People Like Me</h3>";
      container.appendChild(p2);
   
      for (let i=0; i < myData.peopleLikeMe.length; i++) {
        let currentItem = myData.peopleLikeMe[i];
        p2.innerHTML += currentItem + "<br/>";
      }

  
      let p3 = document.createElement("p");
      p3.innerHTML = "<h3>Communication</h3>";
      container.appendChild(p3);

      p3.innerHTML += "<h4>sib:</h4>";
      p3.innerHTML += myData.communication.sib + "<br/>";

      p3.innerHTML += "<h4>teachers:</h4>";
      p3.innerHTML += myData.communication.instructors + "<br/>";

      p3.innerHTML += "<h4>teammates:</h4>";
      p3.innerHTML += myData.communication.teammates + "<br/>";
  

  
    // let p4 = document.createElement("p");
    //   p4.innerHTML = "<br/><h3>Residence</h3>";
    //   container.appendChild(p4);
    // for (let i=0; i < myData.residence.length; i++) {
    //   // console.log(myData.residence[i]);
    //   let currentItem = myData.residence[i];
    //   p4.innerHTML += currentItem + "<br/>";
    // }
  
    // let p5 = document.createElement("p");
    //   p5.innerHTML = "<h3>Collaborators</h3>";
    //   container.appendChild(p5);
    // for (let i=0; i < myData.collaborators.length; i++) {
    //   let currentItem = myData.collaborators[i];
    //   p5.innerHTML += currentItem + "<br/>";
    // }
  
    // let p6 = document.createElement("p");
    //   p6.innerHTML = "<h3>Awards</h3>";
    //   container.appendChild(p6);
    //   for (let i=0; i < myData.awards.length; i++) {
    //     for (var key in myData.awards[i]) {
    //       currentItem = myData.awards[i][key];
    //       p6.innerHTML += currentItem + "<br/>";
    //     }
    //     p6.innerHTML += "<br/>";
    //   }
  
    } // nickBigAssFunction()

makeNickData();
nickBigAssFunction();
