import axios from "axios";

export const getContent = async phonenumber => {
  try {
    return await axios.post(`https://chimpu.online/api/post.php`, phonenumber);
  } catch (error) {
    console.log("Error while calling Api", error.message);
  }
};
