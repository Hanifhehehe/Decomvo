import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const kooperation = () => {
    return (
        <Layout>
            <h1>Kooperation mit dem Verein Pen Paper Peace</h1>
            <p>Die Idee für Decolonizing Community Voices entstand im Zuge des Toolbox Wettbewerbs von, dem in Berlin sitzenden Verein, Pen Paper Peace. Der Verein setzt sich für politische Arbeit mit Kindern und Jugendlichen in Europa ein. Unterstützt aber auch verschiedene nachhaltige Projekte in Honduras, Haiti und Namibia.</p>
            <br />
            <p>Eine weiterführende Zusammenarbeit mit Pen Paper Peace e.V.wird in Zukunft angestrebt.</p>
            <a href="https://pen-paper-peace.org/wir.html" target="_blank" class="jss165"><img src="https://pen-paper-peace.org/images/stories/Logo_PPP/Logo_PPP_lang.png" /></a>
        </Layout>
    )
}

export function Head() {
  return(
    <>
      <title>DeComVo || Kooperationen</title>
      <meta name='description' content='Decolonized Community Voices || Making decolonized voices heard!' />
      <meta name='siteUrl' content='https://decomvo.web.app' />
      <meta name='siteUrl' content='https://decomvo.web.app' />
    </>
  )
}


export default kooperation