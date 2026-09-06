import { useState } from "react";

export default function Exercise1(){
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const nameOk = name.trim().length >= 2 
    const nameError = nameOk ? "" : 'Two more symbols, please'

// true/false
    function handleSubmit(e) {
        e.preventDefault();

        alert(` Your name is ${name}, Your Message ${message}`)
    }

    return (
          <section>
            <h2>Exercise 11111111</h2>


            <form onSubmit={handleSubmit}>
                <label htmlFor="https://www.youtube.com/@DBUFF-p6b">
                <input
                type="text"
                placeholder="yeah"
                value={name}
                 onChange = {e => setName(e.target.value)}
                 />
                { !nameOk ? <span>{nameError}</span> : <span></span> }
                </label>

                <label>
                    Message
                </label>

                <input
                type=""
                placeholder="yeah 2"
                value={message}
                onChange={e => setMessage(e.target.value)}
                >
                </input>


               <button type="submit">Send</button>
            </form>
              <div> Hello, {name} </div>
              <div> Your message {message} </div>
          </section>
    );
}