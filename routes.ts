/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/charities",
  "/about-us",
  "/donate-now",
  "/beneficiaries",
];
export const charityRoutes = "/charities/";

/**
 * An array of routes that are used for authentication
 * These routes will be redirect logged in users to /settings
 * @type {string[]}
 **/
export const authRoutes = ["/auth/login", "/auth/register,"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes.
 * Always open
 * @type {string}
 */
export const apiAuthRoute = "/api/auth";

/**
 * The default redirect after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/profile";

/**
 * The default redirect
 * @type {string}
 */
export const DEFAULT_REDIRECT = "/charities";

export const DRAFT_REDIRECT = "/create/start-fundraiser/draft";
