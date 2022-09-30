import axios from "axios";

export const setUser = (items) => ({
  type: "SET_USER",
  payload: items,
});

export const deleteUser = () => ({
  type: "DELETE_USER",
});
