const data = [
  {
    id: "1",
    question: "What is TypeScript?",
    answer:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers optional static typing, classes, and interfaces.",
  },
  {
    id: "2",
    question: "How do I install TypeScript?",
    answer:
      "You can install TypeScript via npm by running the command `npm install -g typescript`. This installs TypeScript globally on your system.",
  },
  {
    id: "3",
    question: "What are the benefits of using TypeScript?",
    answer:
      "TypeScript offers several benefits including improved code readability, early detection of errors through static type checking, enhanced IDE support, and the ability to use modern JavaScript features.",
  },
  {
    id: "4",
    question: "How do I compile TypeScript code?",
    answer:
      "To compile TypeScript code, you can use the TypeScript compiler by running `tsc <filename>.ts`. This will generate a corresponding JavaScript file.",
  },
  {
    id: "5",
    question: "Can I use existing JavaScript libraries with TypeScript?",
    answer:
      "Yes, you can use existing JavaScript libraries with TypeScript. You may need to install type definition files for the libraries using `@types` packages, for example `npm install @types/lodash`.",
  },
  {
    id: "6",
    question: "What is the difference between TypeScript and JavaScript?",
    answer:
      "The main difference between TypeScript and JavaScript is that TypeScript adds optional static typing to the language. This allows for better code organization, early error detection, and improved tooling support.",
  },
  {
    id: "7",
    question: "Can I use TypeScript with React?",
    answer:
      "Yes, TypeScript can be used with React to build robust, type-safe applications. You can create a new React project with TypeScript using Create React App with the command `npx create-react-app my-app --template typescript`.",
  },
  {
    id: "8",
    question: "How do I configure TypeScript?",
    answer:
      "TypeScript configuration is managed via the `tsconfig.json` file. This file specifies the root files and the compiler options required to compile the project. You can generate this file by running `tsc --init`.",
  },
  {
    id: "9",
    question: "What are TypeScript interfaces?",
    answer:
      "Interfaces in TypeScript are used to define the shape of an object. They can be used to describe the structure of an object, including the types of properties and methods it has, which helps in type-checking.",
  },
];

export default data;
