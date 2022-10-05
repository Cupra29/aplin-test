const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require("./serviceAccount.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function createData(data) {
  await db.collection("Products").doc().set(data);
}

async function getData() {
  const snapshot = await db.collection("Products").get();
  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
    console.log(doc.id, "=>", doc.data());
  });
  return data;
}

module.exports = {
  createData,
  getData,
};
