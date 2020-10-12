import VueCookie from "vue-cookie";

const tokenService = {
  saveToken: (token) => {
    VueCookie.set("token", token, { expires: "7D" });
  },

  getToken: () => {
    const token = VueCookie.get("token");
    return token ? token : "";
  },

  removeToken: () => {
    VueCookie.delete("token");
  },
};

export default tokenService;
