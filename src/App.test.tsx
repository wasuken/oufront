import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("render App component", () => {
  mount(<App />);
  cy.get("p").contains("Hello Vite + React!");

  cy.contains("count is: 0");

  cy.get("button").click();
  cy.get("button").click();
  cy.get("button").click();

  cy.contains("count is: 3");
});
