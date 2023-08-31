
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');
const { ref} = require('firebase/database')

const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://web-portfolio-8caf6-default-rtdb.europe-west1.firebasedatabase.app/",
  };

  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);

   const dbRef = ref(database,"/users")


  //  const getUsers = async ()=>{
  //   await ref.on('value', (snapshot) => {
  //     console.log(snapshot.val());
  //   }, (errorObject) => {
  //     console.log('The read failed: ' + errorObject.name);
  //   }); 
  //  }

  //  getUsers()
  // module.exports= dbRef