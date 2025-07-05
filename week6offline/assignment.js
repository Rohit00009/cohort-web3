const jwt = require("jsonwebtoken");
const JWT_SECRET = "random";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function jwtSign(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  } else {
    const token = jwt.sign(
      {
        username,
        password,
      },
      JWT_SECRET
    );
    return token;
  }
}
const ans = jwtSign("ro@gmail.com", "rohit123");
console.log(ans);

function jwtDecode(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
console.log(
  jwtDecode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicm9oaXQxMjMiLCJpYXQiOjE3NTExNDY0OTV9.6mrVEQRVXvIZOutFRFf-_5CIB0AMUikw4yget_8iukQ"
  )
);

function jwtVerify(token) {
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    if (verified) {
      return true;
    }
  } catch (e) {
    return false;
  }
}
console.log(
  jwtVerify(
    "eyJhbGciOiJIUzI1CJ9.eyJ1c2VybmFtZSI6InJvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicm9oaXQxMjMiLCJpYXQiOjE3NTExNDY0OTV9.6mrVEQRVXvIZOutFRFf-_5CIB0AMUikw4yget_8iukQ",
    JWT_SECRET
  )
);
