export const baseUrl = "https://sleepy-mesa-61446.herokuapp.com/";


export const config = (token) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return header;
};
