const getUrl = (resource) => {
  if (import.meta.env.MODE === "development") {
    return `http://localhost:3000${resource}`;
  } else {
    return resource;
  }
};

const getCrossOriginOptions = () => {
  if (import.meta.env.MODE === "development") {
    return {
      mode: "cors",
      credentials: "include",
    };
  } else {
    return {};
  }
};

const fetch2 = async (resource, method, body) => {
  try {
    const response = await fetch(getUrl(resource), {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
      //mode: "cors",
      ...getCrossOriginOptions(),
    });

    const data = await response.json();

    return {
      ok: response.ok,
      ...data,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.stack,
    };
  }
};

export default {
  user: {
    insert: async (first_name, last_name, username, password, email) => await fetch2("/api/user/", "POST", { first_name, last_name, username, password, email }),
    login: async (email, password) => await fetch2("/api/user/log-in/", "POST", { email, password }),
    isAuth: async () => await fetch2("/api/user/is-auth/", "GET"),
    signOut: async () => await fetch2("/api/user/sign-out/", "POST"),
    update: async (id, first_name, last_name, username, email) => await fetch2(`/api/user/${id}`, "PUT", { first_name, last_name, username, email }),
  },
};
