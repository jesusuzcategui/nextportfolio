import axios from "axios";
import { UrlConnection, AccessToken } from "./Conection";

const FindProject = async (id) => {
  try {
    const query = `
    query {
      projectsCollection(where: {
        slug: "${id}"
      }, limit: 1) {
        items {
          title
          content
          link
          video
          slug
          sys {
            id
          }
          imageCollection {
            items {
              title
              url
            }
          }
          skillsCollection {
            items {
              titleskill
              logo {
                url
              }
            }
          }
        }
      }
    }`;

    let response = null;
    const { status, data } = await axios.post(UrlConnection, JSON.stringify({ query }), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": AccessToken
      }
    });

    response = [status, data];

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

const FindProjects = async (limit = 15) => {
  try {
    const query = `
    {
      projectsCollection(limit: ${limit}, order: sys_publishedAt_DESC) {
        items {
          sys {
            id
            publishedAt
          }
          slug
          title
          content
          imageCollection(limit: 1) {
            items {
              url
            }
          }
          skillsCollection {
            __typename
            items {
              titleskill
              logo {
                url
              }
            }
          }
        }
        total
        limit
        skip
      }
    }`;

    let response = null;
    const { status, data } = await axios.post(UrlConnection, JSON.stringify({ query }), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": AccessToken
      }
    });

    response = [status, data];

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const FindSkills = async () => {
  try {
    const query = `
        {
            skillCollection(limit: 50) {
              items {
                titleskill,
                experience,
                logo {
                  url
                }
              }
            }
        }
        `;
    let response = null;
    const { status, data } = await axios.post(UrlConnection, JSON.stringify({ query }), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": AccessToken
      }
    });

    response = [status, data];

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const FindBlog = async (limit = 15) => {
  try {
    const query = `
    {
      blogCollection(limit: ${limit}, order: sys_publishedAt_DESC) {
        items {
          sys {
            id,
            publishedAt
          },
          title,
          imagen {
            url
          },
          metadescripcion,
          content {
            json
          },
          contentfulMetadata {
            tags {
              id,
              name
            }
          }
        },
        total,
        limit,
        skip
      }
    }`;

    let response = null;
    const { status, data } = await axios.post(UrlConnection, JSON.stringify({ query }), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": AccessToken
      }
    });

    response = [status, data];

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const FindByWords = async (q) => {
  try {
    const query = `
    {
      blogCollection(where: {
        title_contains: "${q}"
      }){
        items {
          title,
          imagen {
            url
          },
          sys {
            id,
            publishedAt
          }
        }
      }
    }`;

    let response = null;
    const { status, data } = await axios.post(UrlConnection, JSON.stringify({ query }), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": AccessToken
      }
    });

    response = [status, data];

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

const FindArticle = async (id = null) => {
  try {
    const query = `
    {
      blog(id: "${id}"){
        title,
        content {
          json
        },
        sys {
          publishedAt,
        },
        contentfulMetadata {
          tags {
            id, 
            name
          }
        },
        imagen {
          url
        }
      }
    }`;

    let response = null;
    const { status, data } = await axios.post(UrlConnection, JSON.stringify({ query }), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": AccessToken
      }
    });

    response = [status, data];

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export { FindSkills, FindBlog, FindArticle, FindByWords, FindProjects, FindProject };