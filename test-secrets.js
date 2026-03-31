// Hardcoded secrets test
const apiKey = "sk-abc123def456ghi789jkl012mno345p";
const password = "mypassword123";
const secret = "supersecretvalue";
const token = "ghp_abcdefghijklmnopqrstuvwxyz123456";

// AWS key pattern
const awsKey = "AKIAIOSFODNN7EXAMPLE";

// Debug mode
const DEBUG = true;

// Sensitive console log
console.log("User password is:", password);
console.log("Token value:", token);

// TODO comment
// TODO: remove this before production
// FIXME: this is broken

// process.env usage that doesn't exist in .env
const dbUrl = process.env.SUPER_SECRET_DB_URL;
const missingKey = process.env.NONEXISTENT_KEY;
