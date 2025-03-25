import express from "express";
import passport from "passport";
import session from "express-session";
import { Request, Response, NextFunction } from "express";
import "./auth";

const app = express();

function isLoggedIn(req: Request, res: Response, next: NextFunction) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/google/failure",
  })
);

declare namespace Express {
  export interface User {
    id: string;
    name?: {
      givenName?: string;
      familyName?: string;
    };
    displayName?: string;
    // Add other properties from your OAuth provider
    emails?: Array<{ value: string }>;
    photos?: Array<{ value: string }>;
  }
}

app.get("/protected", isLoggedIn, (req: Request, res: Response) => {
  const user = req.user as Express.User;

  if (user?.displayName) {
    res.send(`Hello ${user.displayName}`);
    return;
  }

  if (user?.name?.givenName) {
    res.send(`Hello ${user.name.givenName}`);
    return;
  }

  res.send("Hello!");
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy((err) => {
      if (err) {
        console.error("Session destruction error:", err);
        return res.status(500).send("Could not log out");
      }
    });
    res.send("Goodbye!");
  });
});

app.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

app.listen(5000, () => console.log("listening on port: 5000"));
function next(err: any): void {
  throw new Error("Function not implemented.");
}
