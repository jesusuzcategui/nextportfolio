import axios from "axios";
import { UrlConnection, AccessToken } from "./Conection";

const FindSkills = async () => {
    try {
        const query = `
        {
            skillCollection(limit: 20) {
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
        const { status, data } = await axios.post(UrlConnection, JSON.stringify({query}), {
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

export { FindSkills };