
//.env
const TOKEN = "4c00bb63c79221a1cc9ec12d035b3d4987fcc8e7";

export const fetchAddress = (value: string) => fetch(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + TOKEN,
        },
        body: JSON.stringify({ query: value }),
      }
    )