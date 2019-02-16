      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyA-A5xRAyWhCXfUbsQxdBteiKIS-YMwSSM",
        authDomain: "dontpigout-6a78f.firebaseapp.com",
        databaseURL: "https://dontpigout-6a78f.firebaseio.com",
        projectId: "dontpigout-6a78f",
        storageBucket: "dontpigout-6a78f.appspot.com",
        messagingSenderId: "103970144178"
      };
      firebase.initializeApp(config);

      // var ref = firebase.database().ref();                           
      // ref.on("value", function(snapshot) {
      //   output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
      // });
      database = firebase.database();

      let userRef = database.ref('users/' + "userId");
    userRef.child('ben').set({'firstName': "value.firstName", 'lastName': "value.lastName", 'gender': "value.gender.toLowerCase()",
       'dateOfBirth': "moment(value.dateOfBirth).toDate().getTime()"})