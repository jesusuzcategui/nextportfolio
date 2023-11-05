export const HEADER_LAYOUT = `
{
  layoutHeaderCollection(limit: 1){
    items {
      sys {
        id
      }
      name
      menuItemsCollection(limit: 8){
        items {
          text
          href
          sys {
            id
          }
        }
      }
    }
  }
}
`;