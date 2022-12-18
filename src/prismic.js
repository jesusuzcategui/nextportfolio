import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'jesus-uzcategui'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5ZM21fa0JBQUFDUUF4OHp1.fO-_ve-_ve-_ve-_vRRTaWHvv70_CX7vv73vv70jTyde77-977-9Q0Dvv71Z77-977-9Mu-_ve-_vU3vv70',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
  ],
})