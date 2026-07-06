 import { useState } from 'react';
 import Welcome from './components/welcome';
   const title="Welcome to Product Management System";
 function App() {
  //const[count,setCount]=useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  //to handle form submission
  const handleSubmit = () => {
    if (!name || !price || !quantity || !category) {
      alert("Please fill in all fields.");
      return;
    }
    // Here you can handle the form submission, e.g., send data to a server or update state
    console.log("Product Details:", { name, price, quantity, category });
    alert("Product details saved successfully!");
    // Reset form fields after submission
    setName("");
    setPrice("");
    setQuantity("");
    setCategory("");
  };
  return (
    <div>
      <h1>{title}</h1>
      <Welcome name="Yvonne" />
     { /*<p>Let's practice counting <h2>{count}</h2></p>
     <p><button onClick={()=>setCount(count+1)}>Click Me to increase your count👍</button></p>
     
      <button onClick={()=>setCount(count-1)}>Click Me to decrease your count👎</button>
       <p>Now enter your name:</p>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <p>Hello, {name}!</p>*/}

      <h1>Product Form </h1>
      <div>
        <label>Product Name:</label> 
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name" /> 
      </div> <br />
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price" />
      </div> <br />
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder="Enter quantity" />
      </div> <br />
      <div>
        <label>Category:</label>
        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter category" />
      </div> <br />
      <h2>Entered Product Details</h2>
      <p><strong>Product Name:</strong> {name}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Quantity:</strong> {quantity}</p>
      <p><strong>Category:</strong> {category}</p>
      <br />
      <button onClick={handleSubmit}>Save Product</button>
    </div>
  );
 }
export default App;
  