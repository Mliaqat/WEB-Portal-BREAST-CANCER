export const getUser = () => {
  const fname = sessionStorage.getItem("fname");
  const lname = sessionStorage.getItem("lname");
  if (fname && lname) return JSON.parse(lname, fname);
  else return null;
};

export const getUserId = () => {
  const userStr = sessionStorage.getItem("userId");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const setUserSession = (
  token,
  fname,
  lname,
  userId,
  email,
  mobile,
  role
) => {
  //set user infromation in session storage
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("fname", fname);
  sessionStorage.setItem("lname", lname);
  // sessionStorage.setItem("fname", JSON.stringify(fname));
  // sessionStorage.setItem("lname", JSON.stringify(lname));
  sessionStorage.setItem("userId", userId);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("mobile", mobile);
  sessionStorage.setItem("userrole", JSON.stringify(role));
};

export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("fname");
  sessionStorage.removeItem("lname");
  sessionStorage.removeItem("mobile");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("userrole");
  sessionStorage.removeItem("userId");
};
