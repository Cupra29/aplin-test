const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccount.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const PRODUCTS_COLLECTION = "Products";

async function createData(data) {
  await db.collection(PRODUCTS_COLLECTION).doc().set(data);
}

async function getData() {
  const snapshot = await db.collection(PRODUCTS_COLLECTION).get();
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
