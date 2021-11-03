/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import * as graphql from "./graphql";

const documents = {
  '\n      query currentUser {\n        currentUser {\n          id\n          email\n          name\n          role\n          picture\n          tags\n          projects {\n            id\n            code\n            label\n          }\n          groups {\n            id\n            code\n            label\n            tags\n          }\n        }\n        project(code: "Project Code") {\n          id\n          code\n          label\n        }\n      }\n    ':
    graphql.CurrentUserDocument,
};

export function gql(
  source: '\n      query currentUser {\n        currentUser {\n          id\n          email\n          name\n          role\n          picture\n          tags\n          projects {\n            id\n            code\n            label\n          }\n          groups {\n            id\n            code\n            label\n            tags\n          }\n        }\n        project(code: "Project Code") {\n          id\n          code\n          label\n        }\n      }\n    '
): typeof documents['\n      query currentUser {\n        currentUser {\n          id\n          email\n          name\n          role\n          picture\n          tags\n          projects {\n            id\n            code\n            label\n          }\n          groups {\n            id\n            code\n            label\n            tags\n          }\n        }\n        project(code: "Project Code") {\n          id\n          code\n          label\n        }\n      }\n    '];

export function gql(source: string): DocumentNode | string;
export function gql(source: string) {
  return (documents as any)[source] || source;
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

export * from "rq-gql";
export * from "./graphql";
