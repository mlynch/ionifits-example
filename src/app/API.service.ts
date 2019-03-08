/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreatePersonInput = {
  id?: string | null;
  name: string;
  jobTitle?: string | null;
  profileImage?: string | null;
};

export type UpdatePersonInput = {
  id: string;
  name?: string | null;
  jobTitle?: string | null;
  profileImage?: string | null;
};

export type DeletePersonInput = {
  id?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  title: string;
  contents?: string | null;
  created?: string | null;
};

export type UpdateMessageInput = {
  id: string;
  title?: string | null;
  contents?: string | null;
  created?: string | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type ModelPersonFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  jobTitle?: ModelStringFilterInput | null;
  profileImage?: ModelStringFilterInput | null;
  and?: Array<ModelPersonFilterInput | null> | null;
  or?: Array<ModelPersonFilterInput | null> | null;
  not?: ModelPersonFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  contents?: ModelStringFilterInput | null;
  created?: ModelStringFilterInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type CreatePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  jobTitle: string | null;
  profileImage: string | null;
};

export type UpdatePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  jobTitle: string | null;
  profileImage: string | null;
};

export type DeletePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  jobTitle: string | null;
  profileImage: string | null;
};

export type CreateMessageMutation = {
  __typename: string;
  id: string;
  title: string;
  contents: string | null;
  created: string | null;
};

export type UpdateMessageMutation = {
  __typename: string;
  id: string;
  title: string;
  contents: string | null;
  created: string | null;
};

export type DeleteMessageMutation = {
  __typename: string;
  id: string;
  title: string;
  contents: string | null;
  created: string | null;
};

export type GetPersonQuery = {
  __typename: string;
  id: string;
  name: string;
  jobTitle: string | null;
  profileImage: string | null;
};

export type ListPersonsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Person";
    id: string;
    name: string;
    jobTitle: string | null;
    profileImage: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageQuery = {
  __typename: string;
  id: string;
  title: string;
  contents: string | null;
  created: string | null;
};

export type ListMessagesQuery = {
  __typename: string;
  items: Array<{
    __typename: "Message";
    id: string;
    title: string;
    contents: string | null;
    created: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreatePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  jobTitle: string | null;
  profileImage: string | null;
};

export type OnUpdatePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  jobTitle: string | null;
  profileImage: string | null;
};

export type OnDeletePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  jobTitle: string | null;
  profileImage: string | null;
};

export type OnCreateMessageSubscription = {
  __typename: string;
  id: string;
  title: string;
  contents: string | null;
  created: string | null;
};

export type OnUpdateMessageSubscription = {
  __typename: string;
  id: string;
  title: string;
  contents: string | null;
  created: string | null;
};

export type OnDeleteMessageSubscription = {
  __typename: string;
  id: string;
  title: string;
  contents: string | null;
  created: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePerson(input: CreatePersonInput): Promise<CreatePersonMutation> {
    const statement = `mutation CreatePerson($input: CreatePersonInput!) {
        createPerson(input: $input) {
          __typename
          id
          name
          jobTitle
          profileImage
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePersonMutation>response.data.createPerson;
  }
  async UpdatePerson(input: UpdatePersonInput): Promise<UpdatePersonMutation> {
    const statement = `mutation UpdatePerson($input: UpdatePersonInput!) {
        updatePerson(input: $input) {
          __typename
          id
          name
          jobTitle
          profileImage
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePersonMutation>response.data.updatePerson;
  }
  async DeletePerson(input: DeletePersonInput): Promise<DeletePersonMutation> {
    const statement = `mutation DeletePerson($input: DeletePersonInput!) {
        deletePerson(input: $input) {
          __typename
          id
          name
          jobTitle
          profileImage
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePersonMutation>response.data.deletePerson;
  }
  async CreateMessage(
    input: CreateMessageInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!) {
        createMessage(input: $input) {
          __typename
          id
          title
          contents
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!) {
        updateMessage(input: $input) {
          __typename
          id
          title
          contents
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!) {
        deleteMessage(input: $input) {
          __typename
          id
          title
          contents
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async GetPerson(id: string): Promise<GetPersonQuery> {
    const statement = `query GetPerson($id: ID!) {
        getPerson(id: $id) {
          __typename
          id
          name
          jobTitle
          profileImage
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPersonQuery>response.data.getPerson;
  }
  async ListPersons(
    filter?: ModelPersonFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPersonsQuery> {
    const statement = `query ListPersons($filter: ModelPersonFilterInput, $limit: Int, $nextToken: String) {
        listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            jobTitle
            profileImage
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPersonsQuery>response.data.listPersons;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          title
          contents
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            contents
            created
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  OnCreatePersonListener: Observable<OnCreatePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePerson {
        onCreatePerson {
          __typename
          id
          name
          jobTitle
          profileImage
        }
      }`
    )
  ) as Observable<OnCreatePersonSubscription>;

  OnUpdatePersonListener: Observable<OnUpdatePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePerson {
        onUpdatePerson {
          __typename
          id
          name
          jobTitle
          profileImage
        }
      }`
    )
  ) as Observable<OnUpdatePersonSubscription>;

  OnDeletePersonListener: Observable<OnDeletePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePerson {
        onDeletePerson {
          __typename
          id
          name
          jobTitle
          profileImage
        }
      }`
    )
  ) as Observable<OnDeletePersonSubscription>;

  OnCreateMessageListener: Observable<
    OnCreateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          title
          contents
          created
        }
      }`
    )
  ) as Observable<OnCreateMessageSubscription>;

  OnUpdateMessageListener: Observable<
    OnUpdateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          title
          contents
          created
        }
      }`
    )
  ) as Observable<OnUpdateMessageSubscription>;

  OnDeleteMessageListener: Observable<
    OnDeleteMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          title
          contents
          created
        }
      }`
    )
  ) as Observable<OnDeleteMessageSubscription>;
}
