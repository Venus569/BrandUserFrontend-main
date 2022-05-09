

export const changeLoginStatus = (loginStatus) => {
  return {
    type: "CHANGELOGIN",
    payload: !loginStatus,
  };
};

