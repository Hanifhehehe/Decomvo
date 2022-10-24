const path = require('path')

exports.createPages = async ({ graphql, actions}) => {
    const { data } = await graphql(`
        query ArtikelPage {
            allNotion {
                edges {
                    node{
                        id
                        title
                    }
                }
            }
        }
    `)

    data.allNotion.edges.forEach( n => {
        actions.createPage({
            path: '/artikel/' + n.node.title.split(" ").join("-").toLowerCase(),
            component: path.resolve('./src/templates/ArtikelPages.js'),
            context: { id: n.node.id }
        })
    } )
}