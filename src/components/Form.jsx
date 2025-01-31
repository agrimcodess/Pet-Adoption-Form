import { useState } from "react";

function Form() {
  // Initialize state to store the form input values and list of adopters
  let [inputValues, setInputValues] = useState({
    petName: "",
    petType: "",
    breed: "",
    yourName: "",
    email: "",
    phone: ""
  });
  
  let [adopters, setAdopters] = useState([]); 

  function Submit(e) {
    e.preventDefault();

    setAdopters([...adopters, inputValues]);

    setInputValues({
      petName: "",
      petType: "",
      breed: "",
      yourName: "",
      email: "",
      phone: ""
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          marginTop: 50,
          backgroundColor: "rgba(128,128,128,0.7)",
          width: 600,
          height: 750,
          borderRadius: 20
        }}
      >
        <div>
          <div style={{ marginTop: 20, paddingBottom: 20, marginLeft: 15 }}>Pet Name</div>
          <input onChange={(e) =>setInputValues({ ...inputValues, petName: e.target.value })}value={inputValues.petName} placeholder="Pet Name" style={{width: 500, height: 30, marginBottom: 20, marginLeft: 15, borderRadius: 10 }} name="petName"/>

          <div style={{ paddingBottom: 20, marginLeft: 15 }}>Pet Type</div>
          <input onChange={(e) =>setInputValues({ ...inputValues, petType: e.target.value })}value={inputValues.petType}placeholder="Pet Type" style={{ width: 500, height: 30, marginBottom: 20, marginLeft: 15, borderRadius: 10}} name="petType"/>

          <div style={{ paddingBottom: 20, marginLeft: 15 }}>Breed</div>
          <input onChange={(e) =>setInputValues({ ...inputValues, breed: e.target.value })} value={inputValues.breed} placeholder="Breed" style={{ width: 500, height: 30, marginBottom: 20, marginLeft: 15, borderRadius: 10 }} name="breed" />

          <div style={{ paddingBottom: 20, marginLeft: 15 }}>Your Name</div>
          <input onChange={(e) =>setInputValues({ ...inputValues, yourName: e.target.value })} value={inputValues.yourName} placeholder="Your Name" style={{ width: 500, height: 30, marginBottom: 20, marginLeft: 15, borderRadius: 10 }} name="yourName"/>

          <div style={{ paddingBottom: 20, marginLeft: 15 }}>Email</div>
          <input onChange={(e) =>setInputValues({ ...inputValues, email: e.target.value })} value={inputValues.email} placeholder="Email" style={{width: 500, height: 30, marginBottom: 20, marginLeft: 15, borderRadius: 10}}name="email"/>

          <div style={{ paddingBottom: 20, marginLeft: 15 }}>Phone</div>
          <input onChange={(e) =>setInputValues({ ...inputValues, phone: e.target.value })}value={inputValues.phone} placeholder="Phone" style={{width: 500, height: 30, marginBottom: 20, marginLeft: 15, borderRadius: 10}} name="phone"/>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={Submit} style={{ width: 550, height: 40, marginTop: 50,backgroundColor: "green", borderRadius: 20}}>Submit</button>
        </div>
        
        <div style={{ display:"flex", justifyContent:"center" ,backgroundColor:"green"}}>
          {adopters.map((adopter, index) => (
            <div key={index} style={{ marginTop: 20, paddingLeft: 15 }}>
              <h3>Adopter {index + 1}:</h3>
              <p>Pet Name: {adopter.petName}</p>
              <p>Pet Type: {adopter.petType}</p>
              <p>Breed: {adopter.breed}</p>
              <p>Your Name: {adopter.yourName}</p>
              <p>Email: {adopter.email}</p>
              <p>Phone: {adopter.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
