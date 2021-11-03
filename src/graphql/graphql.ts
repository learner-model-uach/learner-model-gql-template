/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: string;
  /** ID that parses as non-negative integer, serializes to string, and can be passed as string or number */
  IntID: string;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: Record<string, unknown>;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: number;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: string;
  /** Represents NULL values */
  Void: void | undefined | null;
};

export type Action = {
  __typename?: "Action";
  amount?: Maybe<Scalars["Float"]>;
  content?: Maybe<Content>;
  createdAt: Scalars["DateTime"];
  detail?: Maybe<Scalars["String"]>;
  extra?: Maybe<Scalars["JSONObject"]>;
  hintID?: Maybe<Scalars["ID"]>;
  id: Scalars["IntID"];
  kcs: Array<Kc>;
  result?: Maybe<Scalars["Float"]>;
  stepID?: Maybe<Scalars["ID"]>;
  timestamp: Scalars["Timestamp"];
  topic?: Maybe<Topic>;
  user?: Maybe<User>;
  verb: ActionVerb;
};

export type ActionInput = {
  amount?: Maybe<Scalars["Float"]>;
  contentID?: Maybe<Scalars["ID"]>;
  detail?: Maybe<Scalars["String"]>;
  extra?: Maybe<Scalars["JSONObject"]>;
  hintID?: Maybe<Scalars["ID"]>;
  kcsIDs?: Maybe<Array<Scalars["ID"]>>;
  projectId: Scalars["IntID"];
  result?: Maybe<Scalars["Float"]>;
  stepID?: Maybe<Scalars["ID"]>;
  timestamp: Scalars["Timestamp"];
  topicID?: Maybe<Scalars["ID"]>;
  verbName: Scalars["String"];
};

export type ActionVerb = {
  __typename?: "ActionVerb";
  id: Scalars["IntID"];
  name: Scalars["String"];
};

export type ActionsConnection = Connection & {
  __typename?: "ActionsConnection";
  nodes: Array<Action>;
  pageInfo: PageInfo;
};

export type ActionsVerbsConnection = Connection & {
  __typename?: "ActionsVerbsConnection";
  nodes: Array<ActionVerb>;
  pageInfo: PageInfo;
};

export type AdminActionQueries = {
  __typename?: "AdminActionQueries";
  allActions: ActionsConnection;
  allActionsVerbs: ActionsVerbsConnection;
};

export type AdminActionQueriesAllActionsArgs = {
  filters?: Maybe<AdminActionsFilter>;
  orderBy?: Maybe<AdminActionsOrderBy>;
  pagination: CursorConnectionArgs;
};

export type AdminActionQueriesAllActionsVerbsArgs = {
  pagination: CursorConnectionArgs;
};

export type AdminActionsFilter = {
  content?: Maybe<Array<Scalars["IntID"]>>;
  endDate?: Maybe<Scalars["DateTime"]>;
  kcs?: Maybe<Array<Scalars["IntID"]>>;
  projects?: Maybe<Array<Scalars["IntID"]>>;
  startDate?: Maybe<Scalars["DateTime"]>;
  topics?: Maybe<Array<Scalars["IntID"]>>;
  users?: Maybe<Array<Scalars["IntID"]>>;
  verbNames?: Maybe<Array<Scalars["String"]>>;
};

export type AdminActionsOrderBy = {
  id?: Maybe<Order_By>;
};

export type AdminContentFilter = {
  projects?: Maybe<Array<Scalars["IntID"]>>;
  tags?: Maybe<Array<Scalars["String"]>>;
};

export type AdminContentMutations = {
  __typename?: "AdminContentMutations";
  createContent: Content;
  updateContent: Content;
};

export type AdminContentMutationsCreateContentArgs = {
  data: CreateContent;
};

export type AdminContentMutationsUpdateContentArgs = {
  data: UpdateContent;
};

export type AdminContentQueries = {
  __typename?: "AdminContentQueries";
  allContent: ContentConnection;
};

export type AdminContentQueriesAllContentArgs = {
  filters?: Maybe<AdminContentFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminDomainMutations = {
  __typename?: "AdminDomainMutations";
  createDomain: Domain;
  createKC: Kc;
  createTopic: Topic;
  updateDomain: Domain;
  updateKC: Kc;
  updateTopic: Topic;
};

export type AdminDomainMutationsCreateDomainArgs = {
  input: CreateDomain;
};

export type AdminDomainMutationsCreateKcArgs = {
  data: CreateKcInput;
};

export type AdminDomainMutationsCreateTopicArgs = {
  input: CreateTopic;
};

export type AdminDomainMutationsUpdateDomainArgs = {
  input: UpdateDomain;
};

export type AdminDomainMutationsUpdateKcArgs = {
  data: UpdateKcInput;
};

export type AdminDomainMutationsUpdateTopicArgs = {
  input: UpdateTopic;
};

export type AdminDomainQueries = {
  __typename?: "AdminDomainQueries";
  allDomains: DomainsConnection;
  allKCs: KCsConnection;
  allTopics: TopicsConnection;
};

export type AdminDomainQueriesAllDomainsArgs = {
  filters?: Maybe<AdminDomainsFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminDomainQueriesAllKCsArgs = {
  filters?: Maybe<AdminKCsFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminDomainQueriesAllTopicsArgs = {
  filters?: Maybe<AdminTopicsFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminDomainsFilter = {
  projects?: Maybe<Array<Scalars["IntID"]>>;
};

export type AdminGroupsFilter = {
  tags?: Maybe<Array<Scalars["String"]>>;
};

export type AdminKCsFilter = {
  domains?: Maybe<Array<Scalars["IntID"]>>;
  projects?: Maybe<Array<Scalars["IntID"]>>;
};

export type AdminProjectsMutations = {
  __typename?: "AdminProjectsMutations";
  createProject: Project;
  updateProject: Project;
};

export type AdminProjectsMutationsCreateProjectArgs = {
  data: CreateProject;
};

export type AdminProjectsMutationsUpdateProjectArgs = {
  data: UpdateProject;
};

export type AdminProjectsQueries = {
  __typename?: "AdminProjectsQueries";
  allProjects: ProjectsConnection;
};

export type AdminProjectsQueriesAllProjectsArgs = {
  pagination: CursorConnectionArgs;
};

export type AdminTopicsFilter = {
  projects?: Maybe<Array<Scalars["IntID"]>>;
};

export type AdminUserMutations = {
  __typename?: "AdminUserMutations";
  createGroup: Group;
  setProjectsToUsers: Array<User>;
  setUserGroups: Array<Group>;
  updateGroup: Group;
  updateUser: User;
  /** Upsert specified users with specified project */
  upsertUsersWithProjects: Array<User>;
};

export type AdminUserMutationsCreateGroupArgs = {
  data: CreateGroupInput;
};

export type AdminUserMutationsSetProjectsToUsersArgs = {
  projectIds: Array<Scalars["IntID"]>;
  userIds: Array<Scalars["IntID"]>;
};

export type AdminUserMutationsSetUserGroupsArgs = {
  groupIds: Array<Scalars["IntID"]>;
  usersEmails: Array<Scalars["EmailAddress"]>;
};

export type AdminUserMutationsUpdateGroupArgs = {
  data: UpdateGroupInput;
};

export type AdminUserMutationsUpdateUserArgs = {
  data: UpdateUserInput;
};

export type AdminUserMutationsUpsertUsersWithProjectsArgs = {
  emails: Array<Scalars["EmailAddress"]>;
  projectsIds: Array<Scalars["IntID"]>;
};

export type AdminUserQueries = {
  __typename?: "AdminUserQueries";
  allGroups: GroupsConnection;
  allUsers: UsersConnection;
};

export type AdminUserQueriesAllGroupsArgs = {
  filters?: Maybe<AdminGroupsFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminUserQueriesAllUsersArgs = {
  filters?: Maybe<AdminUsersFilter>;
  pagination: CursorConnectionArgs;
};

export type AdminUsersFilter = {
  tags?: Maybe<Array<Scalars["String"]>>;
};

export type Connection = {
  pageInfo: PageInfo;
};

export type Content = {
  __typename?: "Content";
  binaryBase64?: Maybe<Scalars["String"]>;
  binaryFilename?: Maybe<Scalars["String"]>;
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["IntID"];
  json?: Maybe<Scalars["JSONObject"]>;
  kcs: Array<Kc>;
  label: Scalars["String"];
  project: Project;
  sortIndex?: Maybe<Scalars["Int"]>;
  tags: Array<Scalars["String"]>;
  topics: Array<Topic>;
  updatedAt: Scalars["DateTime"];
  url?: Maybe<Scalars["String"]>;
};

export type ContentConnection = Connection & {
  __typename?: "ContentConnection";
  nodes: Array<Content>;
  pageInfo: PageInfo;
};

export type CreateContent = {
  binaryBase64?: Maybe<Scalars["String"]>;
  binaryFilename?: Maybe<Scalars["String"]>;
  code: Scalars["String"];
  description: Scalars["String"];
  json?: Maybe<Scalars["JSONObject"]>;
  kcs: Array<Scalars["IntID"]>;
  label: Scalars["String"];
  projectId: Scalars["IntID"];
  tags: Array<Scalars["String"]>;
  topics: Array<Scalars["IntID"]>;
  url?: Maybe<Scalars["URL"]>;
};

export type CreateDomain = {
  code: Scalars["String"];
  label: Scalars["String"];
  projectsIds: Array<Scalars["IntID"]>;
};

export type CreateGroupInput = {
  code: Scalars["String"];
  flags?: Maybe<GroupFlagsInput>;
  label: Scalars["String"];
  projectIds: Array<Scalars["IntID"]>;
  tags: Array<Scalars["String"]>;
};

export type CreateKcInput = {
  code: Scalars["String"];
  domainId: Scalars["IntID"];
  label: Scalars["String"];
};

export type CreateProject = {
  code: Scalars["String"];
  domains: Array<Scalars["IntID"]>;
  label: Scalars["String"];
};

export type CreateTopic = {
  code: Scalars["String"];
  contentIds: Array<Scalars["IntID"]>;
  label: Scalars["String"];
  parentTopicId?: Maybe<Scalars["IntID"]>;
  projectId: Scalars["IntID"];
  sortIndex?: Maybe<Scalars["Int"]>;
};

export type CursorConnectionArgs = {
  after?: Maybe<Scalars["IntID"]>;
  before?: Maybe<Scalars["IntID"]>;
  first?: Maybe<Scalars["NonNegativeInt"]>;
  last?: Maybe<Scalars["NonNegativeInt"]>;
};

export type Domain = {
  __typename?: "Domain";
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["IntID"];
  kcs: Array<Kc>;
  label: Scalars["String"];
  projects: Array<Project>;
  updatedAt: Scalars["DateTime"];
};

export type DomainsConnection = Connection & {
  __typename?: "DomainsConnection";
  nodes: Array<Domain>;
  pageInfo: PageInfo;
};

export type Group = {
  __typename?: "Group";
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  flags: GroupFlags;
  id: Scalars["IntID"];
  label: Scalars["String"];
  projects: Array<Project>;
  projectsIds: Array<Scalars["IntID"]>;
  tags: Array<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  users: Array<User>;
};

export type GroupFlags = {
  __typename?: "GroupFlags";
  createdAt: Scalars["DateTime"];
  id: Scalars["IntID"];
  readProjectActions: Scalars["Boolean"];
  updatedAt: Scalars["DateTime"];
};

export type GroupFlagsInput = {
  readProjectActions: Scalars["Boolean"];
};

export type GroupsConnection = Connection & {
  __typename?: "GroupsConnection";
  nodes: Array<Group>;
  pageInfo: PageInfo;
};

export type Kc = {
  __typename?: "KC";
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  domain: Domain;
  id: Scalars["IntID"];
  label: Scalars["String"];
  topics: Array<Topic>;
  updatedAt: Scalars["DateTime"];
};

export type KCsConnection = Connection & {
  __typename?: "KCsConnection";
  nodes: Array<Kc>;
  pageInfo: PageInfo;
};

export type Mutation = {
  __typename?: "Mutation";
  action?: Maybe<Scalars["Void"]>;
  adminContent: AdminContentMutations;
  adminDomain: AdminDomainMutations;
  adminProjects: AdminProjectsMutations;
  adminUsers: AdminUserMutations;
  hello: Scalars["String"];
};

export type MutationActionArgs = {
  data: ActionInput;
};

export type Node = {
  id: Scalars["IntID"];
};

export const Order_By = {
  Asc: "ASC",
  Desc: "DESC",
} as const;

export type Order_By = typeof Order_By[keyof typeof Order_By];
export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

export type Project = {
  __typename?: "Project";
  actions: ActionsConnection;
  code: Scalars["String"];
  createdAt: Scalars["DateTime"];
  domains: Array<Domain>;
  id: Scalars["IntID"];
  label: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ProjectActionsArgs = {
  filters?: Maybe<ProjectActionsFilter>;
  pagination: CursorConnectionArgs;
};

export type ProjectActionsFilter = {
  content?: Maybe<Array<Scalars["IntID"]>>;
  endDate?: Maybe<Scalars["DateTime"]>;
  kcs?: Maybe<Array<Scalars["IntID"]>>;
  startDate?: Maybe<Scalars["DateTime"]>;
  topics?: Maybe<Array<Scalars["IntID"]>>;
  users?: Maybe<Array<Scalars["IntID"]>>;
  verbNames?: Maybe<Array<Scalars["String"]>>;
};

export type ProjectsConnection = Connection & {
  __typename?: "ProjectsConnection";
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: "Query";
  adminActions: AdminActionQueries;
  adminContent: AdminContentQueries;
  adminDomain: AdminDomainQueries;
  /** [ADMIN] Project related administration queries */
  adminProjects: AdminProjectsQueries;
  adminUsers: AdminUserQueries;
  content: Array<Content>;
  currentUser?: Maybe<User>;
  domains: Array<Domain>;
  groups: Array<Group>;
  hello: Scalars["String"];
  hello2: Scalars["String"];
  kcs: Array<Kc>;
  /**
   * Get specified project by either "id" or "code".
   *
   * - If user is not authenticated it will always return NULL.
   * - If authenticated user has no permissions on the specified project it returns NULL.
   */
  project?: Maybe<Project>;
  projects: Array<Project>;
  topics: Array<Topic>;
  users: Array<User>;
};

export type QueryContentArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryDomainsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryGroupsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryKcsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryProjectArgs = {
  code?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["IntID"]>;
};

export type QueryProjectsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryTopicsArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type QueryUsersArgs = {
  ids: Array<Scalars["IntID"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  hello: Scalars["String"];
};

export type Topic = {
  __typename?: "Topic";
  childrens: Array<Topic>;
  code: Scalars["String"];
  content: Array<Content>;
  createdAt: Scalars["DateTime"];
  id: Scalars["IntID"];
  kcs: Array<Kc>;
  label: Scalars["String"];
  parent?: Maybe<Topic>;
  project: Project;
  sortIndex?: Maybe<Scalars["Int"]>;
  updatedAt: Scalars["DateTime"];
};

export type TopicsConnection = Connection & {
  __typename?: "TopicsConnection";
  nodes: Array<Topic>;
  pageInfo: PageInfo;
};

export type UpdateContent = {
  binaryBase64?: Maybe<Scalars["String"]>;
  binaryFilename?: Maybe<Scalars["String"]>;
  code: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["IntID"];
  json?: Maybe<Scalars["JSONObject"]>;
  kcs: Array<Scalars["IntID"]>;
  label: Scalars["String"];
  projectId: Scalars["IntID"];
  tags: Array<Scalars["String"]>;
  topics: Array<Scalars["IntID"]>;
  url?: Maybe<Scalars["URL"]>;
};

export type UpdateDomain = {
  code: Scalars["String"];
  id: Scalars["IntID"];
  label: Scalars["String"];
};

export type UpdateGroupInput = {
  code: Scalars["String"];
  flags?: Maybe<GroupFlagsInput>;
  id: Scalars["IntID"];
  label: Scalars["String"];
  projectIds: Array<Scalars["IntID"]>;
  tags: Array<Scalars["String"]>;
};

export type UpdateKcInput = {
  code: Scalars["String"];
  id: Scalars["IntID"];
  label: Scalars["String"];
};

export type UpdateProject = {
  code: Scalars["String"];
  domains: Array<Scalars["IntID"]>;
  id: Scalars["IntID"];
  label: Scalars["String"];
};

export type UpdateTopic = {
  code: Scalars["String"];
  contentIds: Array<Scalars["IntID"]>;
  id: Scalars["IntID"];
  label: Scalars["String"];
  parentTopicId?: Maybe<Scalars["IntID"]>;
  sortIndex?: Maybe<Scalars["Int"]>;
};

export type UpdateUserInput = {
  id: Scalars["IntID"];
  locked: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  projectIds: Array<Scalars["IntID"]>;
  role: UserRole;
  tags: Array<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  active: Scalars["Boolean"];
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  enabled: Scalars["Boolean"];
  groups: Array<Group>;
  id: Scalars["IntID"];
  lastOnline?: Maybe<Scalars["DateTime"]>;
  locked: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  projects: Array<Project>;
  projectsIds: Array<Scalars["IntID"]>;
  role: UserRole;
  tags: Array<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export const UserRole = {
  Admin: "ADMIN",
  User: "USER",
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];
export type UsersConnection = Connection & {
  __typename?: "UsersConnection";
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: "Query";
  currentUser?:
    | {
        __typename?: "User";
        id: string;
        email: string;
        name?: string | null | undefined;
        role: UserRole;
        picture?: string | null | undefined;
        tags: Array<string>;
        projects: Array<{
          __typename?: "Project";
          id: string;
          code: string;
          label: string;
        }>;
        groups: Array<{
          __typename?: "Group";
          id: string;
          code: string;
          label: string;
          tags: Array<string>;
        }>;
      }
    | null
    | undefined;
  project?:
    | { __typename?: "Project"; id: string; code: string; label: string }
    | null
    | undefined;
};

export const CurrentUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "currentUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currentUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "picture" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "groups" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      { kind: "Field", name: { kind: "Name", value: "tags" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: {
                  kind: "StringValue",
                  value: "Project Code",
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "code" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CurrentUserQuery, CurrentUserQueryVariables>;
