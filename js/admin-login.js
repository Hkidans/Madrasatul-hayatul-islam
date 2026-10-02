import {initializeApp} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import {doc,getDoc,getFirestore} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import {firebaseConfig} from "./firebase-config.js";
const app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app);
document.getElementById("adminLoginForm").addEventListener("submit",async e=>{e.preventDefault();const m=document.getElementById("adminMessage");m.textContent="Signing in...";
try{const c=await signInWithEmailAndPassword(auth,document.getElementById("adminEmail").value.trim(),document.getElementById("adminPassword").value),p=await getDoc(doc(db,"users",c.user.uid)),r=p.exists()?p.data().role:null;
if(r==="admin")location.href="admin-dashboard.html";else if(r==="registration_officer")location.href="registration-officer.html";else throw Error("Invalid role")}catch(err){await auth.signOut().catch(()=>{});m.textContent="Access denied. Check login details or account role.";console.error(err)}});