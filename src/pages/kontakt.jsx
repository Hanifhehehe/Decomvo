import * as React from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const kontakt = () => {
  return (
    <Layout>
      <h1>Kontakt.</h1>
      <form action="https://formsubmit.co/info@decomvo.com" method="POST">
        <input placeholder="name" type="text" name="name" required />
        <input placeholder="email" type="email" name="email" required />
        <textarea placeholder="Your Message" class="form-control" name="message" rows="6" required="" />
        <button type="submit">Send</button>
      </form> 
    </Layout>
  )
}
export default kontakt