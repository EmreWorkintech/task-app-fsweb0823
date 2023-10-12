/* global cy */

//beforeAll, beforeEach, afterAll, afterEach

describe("LOGIN", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("opens the login page", () => {
    //Arrange
    //cy.visit("http://localhost:3000");
    //Act

    //Assert
    cy.url().should("include", "login");
  });

  it("logs in successfully", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act
    cy.get("[data-cy=email-input]").type("george.bluth@reqres.in");
    cy.get("[data-cy=password-input]").type("George");
    cy.contains("Submit").click();

    //Assert
    cy.url().should("include", "tasks");
  });
});

describe("ADD TASK", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/tasks");
    cy.get("[data-cy=email-input]").type("george.bluth@reqres.in");
    cy.get("[data-cy=password-input]").type("George");
    cy.contains("Submit").click();
  });

  it("can not submit task, button is disabled", () => {
    //Act
    cy.get("[data-cy=subject-input]").type(
      "One of your dependencies, babel-preset-react-app"
    );

    //Assert
    cy.contains("Save").should("be.disabled");
  });

  it("submits a new task", () => {
    //Act
    cy.get("[data-cy=subject-input]").type(
      "One of your dependencies, babel-preset-react-app"
    );
    cy.get("[data-cy=description-input]")
      .type(`One of your dependencies, babel-preset-react-app, is importing the
    "@babel/plugin-proposal-private-property-in-object" package without
    declaring it in its dependencies. This is currently working because
    "@babel/plugin-proposal-private-property-in-object" is already in your
    node_modules folder for unrelated reasons, but it may break at any time.`);
    cy.get("[data-cy=deadline-input]").type("2023-10-20");

    cy.get("[name='George Bluth'").check();
    cy.contains("Save").click();
    //Assert

    cy.get("[data-cy=incomplete-task]").should("have.length", 1);
  });

  it("submits 2 tasks", () => {
    //Act

    //first task
    cy.get("[data-cy=subject-input]").type(
      "1- One of your dependencies, babel-preset-react-app"
    );
    cy.get("[data-cy=description-input]")
      .type(`One of your dependencies, babel-preset-react-app, is importing the
    "@babel/plugin-proposal-private-property-in-object" package without
    declaring it in its dependencies. This is currently working because
    "@babel/plugin-proposal-private-property-in-object" is already in your
    node_modules folder for unrelated reasons, but it may break at any time.`);
    cy.get("[data-cy=deadline-input]").type("2023-10-20");

    cy.get("[name='George Bluth'").check();
    cy.contains("Save").click();

    //second task
    cy.get("[data-cy=subject-input]").type(
      "2- One of your dependencies, babel-preset-react-app"
    );
    cy.get("[data-cy=description-input]").type(
      `One of your dependencies, babel-preset-react-app, is importing`
    );
    cy.get("[data-cy=deadline-input]").type("2023-11-01");

    cy.get("[name='Rachel Howell'").check();
    cy.get("[name='Byron Fields'").check();
    cy.get("[name='Tobias Funke'").check();
    cy.contains("Save").click();
    //Assert

    cy.get("[data-cy=incomplete-task]").should("have.length", 2);
  });

  it.only("submits 2 tasks", () => {
    //Act

    //first task
    cy.get("[data-cy=subject-input]").type(
      "1- One of your dependencies, babel-preset-react-app"
    );
    cy.get("[data-cy=description-input]")
      .type(`One of your dependencies, babel-preset-react-app, is importing the
    "@babel/plugin-proposal-private-property-in-object" package without
    declaring it in its dependencies. This is currently working because
    "@babel/plugin-proposal-private-property-in-object" is already in your
    node_modules folder for unrelated reasons, but it may break at any time.`);
    cy.get("[data-cy=deadline-input]").type("2023-10-20");

    cy.get("[name='George Bluth'").check();
    cy.contains("Save").click();

    //second task
    cy.get("[data-cy=subject-input]").type(
      "2- One of your dependencies, babel-preset-react-app"
    );
    cy.get("[data-cy=description-input]").type(
      `One of your dependencies, babel-preset-react-app, is importing`
    );
    cy.get("[data-cy=deadline-input]").type("2023-11-01");

    cy.get("[name='Rachel Howell'").check();
    cy.get("[name='Byron Fields'").check();
    cy.get("[name='Tobias Funke'").check();
    cy.contains("Save").click();

    cy.contains("Complete").first().click();
    //Assert

    cy.get("[data-cy=completed-task]").should("have.length", 1);
    cy.get("[data-cy=incomplete-task]").should("have.length", 1);
  });
});

describe("SET TASK COMPLETE", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/tasks");
    cy.get("[data-cy=email-input]").type("george.bluth@reqres.in");
    cy.get("[data-cy=password-input]").type("George");
    cy.contains("Submit").click();
  });

  it("submits a new task", () => {
    //Act
    cy.get("[data-cy=subject-input]").type(
      "One of your dependencies, babel-preset-react-app"
    );
    cy.get("[data-cy=description-input]")
      .type(`One of your dependencies, babel-preset-react-app, is importing the
    "@babel/plugin-proposal-private-property-in-object" package without
    declaring it in its dependencies. This is currently working because
    "@babel/plugin-proposal-private-property-in-object" is already in your
    node_modules folder for unrelated reasons, but it may break at any time.`);
    cy.get("[data-cy=deadline-input]").type("2023-10-20");

    cy.get("[name='George Bluth'").check();
    cy.contains("Save").click();
    cy.contains("Complete").click();
    //Assert

    cy.get("[data-cy=completed-task]").should("have.length", 1);
  });
});
