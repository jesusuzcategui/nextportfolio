import axios from "axios";
import { UrlConnection, AccessToken } from "./Conection";

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

export { FindSkills, FindBlog, FindArticle };