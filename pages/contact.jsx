import Head from 'next/head'

import { Button } from "../components/button";

// function ContactForm() {
//     <form
//         action="https://formspree.io/f/xnqyjzjy"
//         method="POST"
//         className="contact-form"
//     >
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" id="email" required />

//         <label htmlFor="message">Message</label>
//         <textarea name="message" id="message" required />

//         <button type="submit">Send</button>
//     </form>;
// }

function Contact() {
    return (
        <>
            <Head>
                <title>Contact — Andriy Massimilla</title>
            </Head>

            <h1>Contact</h1>
            <p>
                Whether you have a business inquiry or just want to chat, I{"'"}
                d love to hear from you!
            </p>

            <Button href="mailto:me@andriym.dev">Send me an email</Button>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}

export default Contact