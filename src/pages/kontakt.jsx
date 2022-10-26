import * as React from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import styled from "styled-components";

const StyledForm = styled.div`
  form {
    display: grid;
    grid-template-columns: auto-flow / 1fr 5fr;
    ${'' /* grid-template-columns: 1fr 5fr; */}
    textarea{
      resize: none;
    }
    > * {
      margin: 5px 0;
    }
    > button {
      width: 50%;
    }
  }
`

const kontakt = () => {
  return (
    <Layout>
      <StyledForm>
        <h1>Kontakt.</h1>
        <form action="https://formsubmit.co/info@decomvo.com" method="POST">
          <label>Name</label>
          <input type="text" name="name" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Nachtricht</label>
          <textarea class="form-control" name="message" rows="6" required="" />
          <button type="submit">Send</button>
        </form> 
      </StyledForm>
    </Layout>
  )
}

export function Head() {
  return(
    <>
      <title>DeComVo || Kontakt</title>
      <meta name='description' content='Decolonized Community Voices || Making decolonized voices heard!' />
      <meta name='siteUrl' content='https://decomvo.web.app' />
      <meta name='siteUrl' content='https://decomvo.web.app' />
    </>
  )
}
export default kontakt