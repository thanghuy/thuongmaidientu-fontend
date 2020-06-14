import { UserManager } from 'oidc-client';
import { config } from '../constants/oidc-client';
const settings = config;

const userManager = new UserManager(settings);

export function getUser() {
  return userManager.getUser();
}

export function login() {
  var url = window.location;

  localStorage.setItem("urlback",url);
  return userManager.signinRedirect().catch((err) => {
    alert("sever errors");
  });
}

export function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("token")
  return userManager.signoutRedirect();
}
