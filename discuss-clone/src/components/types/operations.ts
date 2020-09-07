import * as Types from '../../types/graphql';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type PostDataFragment = (
  { __typename?: 'Post' }
  & Pick<Types.Post, 'id' | 'title' | 'text' | 'tags' | 'datePublished' | 'likes'>
  & { category: (
    { __typename?: 'Category' }
    & Pick<Types.Category, 'id' | 'name'>
  ), author: (
    { __typename?: 'User' }
    & Pick<Types.User, 'username' | 'displayName' | 'avatarImg'>
  ) }
);

export type AllPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { queryPost?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Post' }
    & PostDataFragment
  )>>> }
);

export type GetPostQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { getPost?: Types.Maybe<(
    { __typename?: 'Post' }
    & PostDataFragment
  )> }
);

export type AllCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = (
  { __typename?: 'Query' }
  & { queryCategory?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Category' }
    & Pick<Types.Category, 'id' | 'name'>
  )>>> }
);

export type AddPostMutationVariables = Types.Exact<{
  post: Types.AddPostInput;
}>;


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & { addPost?: Types.Maybe<(
    { __typename?: 'AddPostPayload' }
    & { post?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Post' }
      & Pick<Types.Post, 'id'>
    )>>> }
  )> }
);

export type AddCommentMutationVariables = Types.Exact<{
  comment: Types.AddCommentInput;
}>;


export type AddCommentMutation = (
  { __typename?: 'Mutation' }
  & { addComment?: Types.Maybe<(
    { __typename?: 'AddCommentPayload' }
    & { comment?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Comment' }
      & Pick<Types.Comment, 'id' | 'text'>
      & { author: (
        { __typename?: 'User' }
        & Pick<Types.User, 'username' | 'displayName'>
      ) }
    )>>> }
  )> }
);

export const PostDataFragmentDoc = gql`
    fragment postData on Post {
  id
  title
  text
  tags
  datePublished
  likes
  category {
    id
    name
  }
  author {
    username
    displayName
    avatarImg
  }
}
    `;
export const AllPostsDocument = gql`
    query allPosts {
  queryPost(order: {desc: datePublished}) {
    ...postData
  }
}
    ${PostDataFragmentDoc}`;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = ApolloReactCommon.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const GetPostDocument = gql`
    query getPost($id: ID!) {
  getPost(id: $id) {
    ...postData
  }
}
    ${PostDataFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = ApolloReactCommon.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const AllCategoriesDocument = gql`
    query allCategories {
  queryCategory {
    id
    name
  }
}
    `;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, baseOptions);
      }
export function useAllCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, baseOptions);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesQueryResult = ApolloReactCommon.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const AddPostDocument = gql`
    mutation addPost($post: AddPostInput!) {
  addPost(input: [$post]) {
    post {
      id
    }
  }
}
    `;
export type AddPostMutationFn = ApolloReactCommon.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      post: // value for 'post'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, baseOptions);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = ApolloReactCommon.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const AddCommentDocument = gql`
    mutation addComment($comment: AddCommentInput!) {
  addComment(input: [$comment]) {
    comment {
      id
      text
      author {
        username
        displayName
      }
    }
  }
}
    `;
export type AddCommentMutationFn = ApolloReactCommon.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, baseOptions);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = ApolloReactCommon.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;