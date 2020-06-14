export const config = {
    authority: "https://localhost:3117/",
    client_id: "client",
    redirect_uri: "http://localhost:3000/signin-oidc.html",
    post_logout_redirect_uri: "http://localhost:3000/logout.html",
    response_type: "code",
    scope: "openid profile book"
}