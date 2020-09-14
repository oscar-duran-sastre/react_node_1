import DB_URL, { ENDPOINT_USERS } from "./constants";

const toPostUser = async (body) => {
  try {
    const response = await fetch(DB_URL + ENDPOINT_USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      console.log("La petición fue correcta");
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      console.log("Error en la petición por parte del la API", response.status);
    }
  } catch (error) {
    console.error("ERROR: ", error);
  }
};

export default toPostUser;
