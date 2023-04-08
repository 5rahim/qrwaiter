import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { GraphQLClient } from 'graphql-request'
import { RequestInit } from 'graphql-request/dist/types.dom'

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders,
  })
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type DB_Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type DB_Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type DB_String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "accounts" */
export type DB_Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['bigint']>;
  id: Scalars['uuid'];
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  refresh_token_expires_in?: Maybe<Scalars['bigint']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  /** An object relationship */
  user: DB_Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type DB_Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<DB_Accounts_Aggregate_Fields>;
  nodes: Array<DB_Accounts>;
};

export type DB_Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<DB_Accounts_Aggregate_Bool_Exp_Count>;
};

export type DB_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DB_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Accounts_Bool_Exp>;
  predicate: DB_Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type DB_Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<DB_Accounts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<DB_Accounts_Max_Fields>;
  min?: Maybe<DB_Accounts_Min_Fields>;
  stddev?: Maybe<DB_Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<DB_Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DB_Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<DB_Accounts_Sum_Fields>;
  var_pop?: Maybe<DB_Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<DB_Accounts_Var_Samp_Fields>;
  variance?: Maybe<DB_Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type DB_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type DB_Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<DB_Accounts_Avg_Order_By>;
  count?: InputMaybe<DB_Order_By>;
  max?: InputMaybe<DB_Accounts_Max_Order_By>;
  min?: InputMaybe<DB_Accounts_Min_Order_By>;
  stddev?: InputMaybe<DB_Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DB_Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DB_Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DB_Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<DB_Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DB_Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<DB_Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type DB_Accounts_Arr_Rel_Insert_Input = {
  data: Array<DB_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type DB_Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "accounts" */
export type DB_Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type DB_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Accounts_Bool_Exp>>;
  _not?: InputMaybe<DB_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Accounts_Bool_Exp>>;
  access_token?: InputMaybe<DB_String_Comparison_Exp>;
  expires_at?: InputMaybe<DB_Bigint_Comparison_Exp>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  id_token?: InputMaybe<DB_String_Comparison_Exp>;
  oauth_token?: InputMaybe<DB_String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<DB_String_Comparison_Exp>;
  provider?: InputMaybe<DB_String_Comparison_Exp>;
  providerAccountId?: InputMaybe<DB_String_Comparison_Exp>;
  refresh_token?: InputMaybe<DB_String_Comparison_Exp>;
  refresh_token_expires_in?: InputMaybe<DB_Bigint_Comparison_Exp>;
  scope?: InputMaybe<DB_String_Comparison_Exp>;
  session_state?: InputMaybe<DB_String_Comparison_Exp>;
  token_type?: InputMaybe<DB_String_Comparison_Exp>;
  type?: InputMaybe<DB_String_Comparison_Exp>;
  user?: InputMaybe<DB_Users_Bool_Exp>;
  userId?: InputMaybe<DB_Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export type DB_Accounts_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'accounts_pkey';

/** input type for incrementing numeric columns in table "accounts" */
export type DB_Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['bigint']>;
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "accounts" */
export type DB_Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<DB_Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type DB_Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  refresh_token_expires_in?: Maybe<Scalars['bigint']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "accounts" */
export type DB_Accounts_Max_Order_By = {
  access_token?: InputMaybe<DB_Order_By>;
  expires_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  id_token?: InputMaybe<DB_Order_By>;
  oauth_token?: InputMaybe<DB_Order_By>;
  oauth_token_secret?: InputMaybe<DB_Order_By>;
  provider?: InputMaybe<DB_Order_By>;
  providerAccountId?: InputMaybe<DB_Order_By>;
  refresh_token?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
  scope?: InputMaybe<DB_Order_By>;
  session_state?: InputMaybe<DB_Order_By>;
  token_type?: InputMaybe<DB_Order_By>;
  type?: InputMaybe<DB_Order_By>;
  userId?: InputMaybe<DB_Order_By>;
};

/** aggregate min on columns */
export type DB_Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  refresh_token_expires_in?: Maybe<Scalars['bigint']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "accounts" */
export type DB_Accounts_Min_Order_By = {
  access_token?: InputMaybe<DB_Order_By>;
  expires_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  id_token?: InputMaybe<DB_Order_By>;
  oauth_token?: InputMaybe<DB_Order_By>;
  oauth_token_secret?: InputMaybe<DB_Order_By>;
  provider?: InputMaybe<DB_Order_By>;
  providerAccountId?: InputMaybe<DB_Order_By>;
  refresh_token?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
  scope?: InputMaybe<DB_Order_By>;
  session_state?: InputMaybe<DB_Order_By>;
  token_type?: InputMaybe<DB_Order_By>;
  type?: InputMaybe<DB_Order_By>;
  userId?: InputMaybe<DB_Order_By>;
};

/** response of any mutation on the table "accounts" */
export type DB_Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type DB_Accounts_On_Conflict = {
  constraint: DB_Accounts_Constraint;
  update_columns?: Array<DB_Accounts_Update_Column>;
  where?: InputMaybe<DB_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type DB_Accounts_Order_By = {
  access_token?: InputMaybe<DB_Order_By>;
  expires_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  id_token?: InputMaybe<DB_Order_By>;
  oauth_token?: InputMaybe<DB_Order_By>;
  oauth_token_secret?: InputMaybe<DB_Order_By>;
  provider?: InputMaybe<DB_Order_By>;
  providerAccountId?: InputMaybe<DB_Order_By>;
  refresh_token?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
  scope?: InputMaybe<DB_Order_By>;
  session_state?: InputMaybe<DB_Order_By>;
  token_type?: InputMaybe<DB_Order_By>;
  type?: InputMaybe<DB_Order_By>;
  user?: InputMaybe<DB_Users_Order_By>;
  userId?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: accounts */
export type DB_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export type DB_Accounts_Select_Column =
/** column name */
   | 'access_token'
   /** column name */
   | 'expires_at'
   /** column name */
   | 'id'
   /** column name */
   | 'id_token'
   /** column name */
   | 'oauth_token'
   /** column name */
   | 'oauth_token_secret'
   /** column name */
   | 'provider'
   /** column name */
   | 'providerAccountId'
   /** column name */
   | 'refresh_token'
   /** column name */
   | 'refresh_token_expires_in'
   /** column name */
   | 'scope'
   /** column name */
   | 'session_state'
   /** column name */
   | 'token_type'
   /** column name */
   | 'type'
   /** column name */
   | 'userId';

/** input type for updating data in table "accounts" */
export type DB_Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type DB_Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "accounts" */
export type DB_Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_pop on columns */
export type DB_Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type DB_Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_samp on columns */
export type DB_Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type DB_Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type DB_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  refresh_token_expires_in?: InputMaybe<Scalars['bigint']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type DB_Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['bigint']>;
  refresh_token_expires_in?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "accounts" */
export type DB_Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
};

/** update columns of table "accounts" */
export type DB_Accounts_Update_Column =
/** column name */
   | 'access_token'
   /** column name */
   | 'expires_at'
   /** column name */
   | 'id'
   /** column name */
   | 'id_token'
   /** column name */
   | 'oauth_token'
   /** column name */
   | 'oauth_token_secret'
   /** column name */
   | 'provider'
   /** column name */
   | 'providerAccountId'
   /** column name */
   | 'refresh_token'
   /** column name */
   | 'refresh_token_expires_in'
   /** column name */
   | 'scope'
   /** column name */
   | 'session_state'
   /** column name */
   | 'token_type'
   /** column name */
   | 'type'
   /** column name */
   | 'userId';

export type DB_Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DB_Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DB_Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "accounts" */
export type DB_Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
};

/** aggregate var_samp on columns */
export type DB_Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "accounts" */
export type DB_Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
};

/** aggregate variance on columns */
export type DB_Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "accounts" */
export type DB_Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<DB_Order_By>;
  refresh_token_expires_in?: InputMaybe<DB_Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type DB_Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "categories" */
export type DB_Categories = {
  __typename?: 'categories';
  id: Scalars['uuid'];
  /** An array relationship */
  items: Array<DB_Items>;
  /** An aggregate relationship */
  items_aggregate: DB_Items_Aggregate;
  name: Scalars['String'];
  order: Scalars['Int'];
  /** An object relationship */
  restaurant: DB_Restaurants;
  restaurant_id: Scalars['uuid'];
};


/** columns and relationships of "categories" */
export type DB_CategoriesItemsArgs = {
  distinct_on?: InputMaybe<Array<DB_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Items_Order_By>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type DB_CategoriesItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Items_Order_By>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type DB_Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<DB_Categories_Aggregate_Fields>;
  nodes: Array<DB_Categories>;
};

export type DB_Categories_Aggregate_Bool_Exp = {
  count?: InputMaybe<DB_Categories_Aggregate_Bool_Exp_Count>;
};

export type DB_Categories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DB_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Categories_Bool_Exp>;
  predicate: DB_Int_Comparison_Exp;
};

/** aggregate fields of "categories" */
export type DB_Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<DB_Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<DB_Categories_Max_Fields>;
  min?: Maybe<DB_Categories_Min_Fields>;
  stddev?: Maybe<DB_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<DB_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DB_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<DB_Categories_Sum_Fields>;
  var_pop?: Maybe<DB_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<DB_Categories_Var_Samp_Fields>;
  variance?: Maybe<DB_Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type DB_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories" */
export type DB_Categories_Aggregate_Order_By = {
  avg?: InputMaybe<DB_Categories_Avg_Order_By>;
  count?: InputMaybe<DB_Order_By>;
  max?: InputMaybe<DB_Categories_Max_Order_By>;
  min?: InputMaybe<DB_Categories_Min_Order_By>;
  stddev?: InputMaybe<DB_Categories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DB_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DB_Categories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DB_Categories_Sum_Order_By>;
  var_pop?: InputMaybe<DB_Categories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DB_Categories_Var_Samp_Order_By>;
  variance?: InputMaybe<DB_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "categories" */
export type DB_Categories_Arr_Rel_Insert_Input = {
  data: Array<DB_Categories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type DB_Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "categories" */
export type DB_Categories_Avg_Order_By = {
  order?: InputMaybe<DB_Order_By>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type DB_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Categories_Bool_Exp>>;
  _not?: InputMaybe<DB_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Categories_Bool_Exp>>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  items?: InputMaybe<DB_Items_Bool_Exp>;
  items_aggregate?: InputMaybe<DB_Items_Aggregate_Bool_Exp>;
  name?: InputMaybe<DB_String_Comparison_Exp>;
  order?: InputMaybe<DB_Int_Comparison_Exp>;
  restaurant?: InputMaybe<DB_Restaurants_Bool_Exp>;
  restaurant_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export type DB_Categories_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'categories_pkey';

/** input type for incrementing numeric columns in table "categories" */
export type DB_Categories_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type DB_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  items?: InputMaybe<DB_Items_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  restaurant?: InputMaybe<DB_Restaurants_Obj_Rel_Insert_Input>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type DB_Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "categories" */
export type DB_Categories_Max_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
};

/** aggregate min on columns */
export type DB_Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "categories" */
export type DB_Categories_Min_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
};

/** response of any mutation on the table "categories" */
export type DB_Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type DB_Categories_Obj_Rel_Insert_Input = {
  data: DB_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type DB_Categories_On_Conflict = {
  constraint: DB_Categories_Constraint;
  update_columns?: Array<DB_Categories_Update_Column>;
  where?: InputMaybe<DB_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type DB_Categories_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  items_aggregate?: InputMaybe<DB_Items_Aggregate_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
  restaurant?: InputMaybe<DB_Restaurants_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: categories */
export type DB_Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export type DB_Categories_Select_Column =
/** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'order'
   /** column name */
   | 'restaurant_id';

/** input type for updating data in table "categories" */
export type DB_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type DB_Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "categories" */
export type DB_Categories_Stddev_Order_By = {
  order?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_pop on columns */
export type DB_Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "categories" */
export type DB_Categories_Stddev_Pop_Order_By = {
  order?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_samp on columns */
export type DB_Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "categories" */
export type DB_Categories_Stddev_Samp_Order_By = {
  order?: InputMaybe<DB_Order_By>;
};

/** Streaming cursor of the table "categories" */
export type DB_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type DB_Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "categories" */
export type DB_Categories_Sum_Order_By = {
  order?: InputMaybe<DB_Order_By>;
};

/** update columns of table "categories" */
export type DB_Categories_Update_Column =
/** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'order'
   /** column name */
   | 'restaurant_id';

export type DB_Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DB_Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DB_Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "categories" */
export type DB_Categories_Var_Pop_Order_By = {
  order?: InputMaybe<DB_Order_By>;
};

/** aggregate var_samp on columns */
export type DB_Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "categories" */
export type DB_Categories_Var_Samp_Order_By = {
  order?: InputMaybe<DB_Order_By>;
};

/** aggregate variance on columns */
export type DB_Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "categories" */
export type DB_Categories_Variance_Order_By = {
  order?: InputMaybe<DB_Order_By>;
};

/** ordering argument of a cursor */
export type DB_Cursor_Ordering =
/** ascending ordering of the cursor */
   | 'ASC'
   /** descending ordering of the cursor */
   | 'DESC';

/** columns and relationships of "items" */
export type DB_Items = {
  __typename?: 'items';
  allergens?: Maybe<Scalars['jsonb']>;
  available: Scalars['Boolean'];
  /** An object relationship */
  category?: Maybe<DB_Categories>;
  category_id?: Maybe<Scalars['uuid']>;
  choices: Scalars['jsonb'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  images: Scalars['jsonb'];
  name: Scalars['String'];
  price: Scalars['Int'];
  /** An object relationship */
  restaurant: DB_Restaurants;
  restaurant_id: Scalars['uuid'];
  variations: Scalars['jsonb'];
};


/** columns and relationships of "items" */
export type DB_ItemsAllergensArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "items" */
export type DB_ItemsChoicesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "items" */
export type DB_ItemsImagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "items" */
export type DB_ItemsVariationsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "items" */
export type DB_Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate?: Maybe<DB_Items_Aggregate_Fields>;
  nodes: Array<DB_Items>;
};

export type DB_Items_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<DB_Items_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<DB_Items_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<DB_Items_Aggregate_Bool_Exp_Count>;
};

export type DB_Items_Aggregate_Bool_Exp_Bool_And = {
  arguments: DB_Items_Select_Column_Items_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Items_Bool_Exp>;
  predicate: DB_Boolean_Comparison_Exp;
};

export type DB_Items_Aggregate_Bool_Exp_Bool_Or = {
  arguments: DB_Items_Select_Column_Items_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Items_Bool_Exp>;
  predicate: DB_Boolean_Comparison_Exp;
};

export type DB_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DB_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Items_Bool_Exp>;
  predicate: DB_Int_Comparison_Exp;
};

/** aggregate fields of "items" */
export type DB_Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  avg?: Maybe<DB_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<DB_Items_Max_Fields>;
  min?: Maybe<DB_Items_Min_Fields>;
  stddev?: Maybe<DB_Items_Stddev_Fields>;
  stddev_pop?: Maybe<DB_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DB_Items_Stddev_Samp_Fields>;
  sum?: Maybe<DB_Items_Sum_Fields>;
  var_pop?: Maybe<DB_Items_Var_Pop_Fields>;
  var_samp?: Maybe<DB_Items_Var_Samp_Fields>;
  variance?: Maybe<DB_Items_Variance_Fields>;
};


/** aggregate fields of "items" */
export type DB_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "items" */
export type DB_Items_Aggregate_Order_By = {
  avg?: InputMaybe<DB_Items_Avg_Order_By>;
  count?: InputMaybe<DB_Order_By>;
  max?: InputMaybe<DB_Items_Max_Order_By>;
  min?: InputMaybe<DB_Items_Min_Order_By>;
  stddev?: InputMaybe<DB_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DB_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DB_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DB_Items_Sum_Order_By>;
  var_pop?: InputMaybe<DB_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DB_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<DB_Items_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type DB_Items_Append_Input = {
  allergens?: InputMaybe<Scalars['jsonb']>;
  choices?: InputMaybe<Scalars['jsonb']>;
  images?: InputMaybe<Scalars['jsonb']>;
  variations?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "items" */
export type DB_Items_Arr_Rel_Insert_Input = {
  data: Array<DB_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type DB_Items_Avg_Fields = {
  __typename?: 'items_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "items" */
export type DB_Items_Avg_Order_By = {
  price?: InputMaybe<DB_Order_By>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type DB_Items_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Items_Bool_Exp>>;
  _not?: InputMaybe<DB_Items_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Items_Bool_Exp>>;
  allergens?: InputMaybe<DB_Jsonb_Comparison_Exp>;
  available?: InputMaybe<DB_Boolean_Comparison_Exp>;
  category?: InputMaybe<DB_Categories_Bool_Exp>;
  category_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  choices?: InputMaybe<DB_Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<DB_Timestamptz_Comparison_Exp>;
  description?: InputMaybe<DB_String_Comparison_Exp>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  images?: InputMaybe<DB_Jsonb_Comparison_Exp>;
  name?: InputMaybe<DB_String_Comparison_Exp>;
  price?: InputMaybe<DB_Int_Comparison_Exp>;
  restaurant?: InputMaybe<DB_Restaurants_Bool_Exp>;
  restaurant_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  variations?: InputMaybe<DB_Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export type DB_Items_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'items_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type DB_Items_Delete_At_Path_Input = {
  allergens?: InputMaybe<Array<Scalars['String']>>;
  choices?: InputMaybe<Array<Scalars['String']>>;
  images?: InputMaybe<Array<Scalars['String']>>;
  variations?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type DB_Items_Delete_Elem_Input = {
  allergens?: InputMaybe<Scalars['Int']>;
  choices?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Scalars['Int']>;
  variations?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type DB_Items_Delete_Key_Input = {
  allergens?: InputMaybe<Scalars['String']>;
  choices?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Scalars['String']>;
  variations?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "items" */
export type DB_Items_Inc_Input = {
  price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "items" */
export type DB_Items_Insert_Input = {
  allergens?: InputMaybe<Scalars['jsonb']>;
  available?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<DB_Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']>;
  choices?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  images?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  restaurant?: InputMaybe<DB_Restaurants_Obj_Rel_Insert_Input>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
  variations?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type DB_Items_Max_Fields = {
  __typename?: 'items_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "items" */
export type DB_Items_Max_Order_By = {
  category_id?: InputMaybe<DB_Order_By>;
  created_at?: InputMaybe<DB_Order_By>;
  description?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  price?: InputMaybe<DB_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
};

/** aggregate min on columns */
export type DB_Items_Min_Fields = {
  __typename?: 'items_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "items" */
export type DB_Items_Min_Order_By = {
  category_id?: InputMaybe<DB_Order_By>;
  created_at?: InputMaybe<DB_Order_By>;
  description?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  price?: InputMaybe<DB_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
};

/** response of any mutation on the table "items" */
export type DB_Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Items>;
};

/** on_conflict condition type for table "items" */
export type DB_Items_On_Conflict = {
  constraint: DB_Items_Constraint;
  update_columns?: Array<DB_Items_Update_Column>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type DB_Items_Order_By = {
  allergens?: InputMaybe<DB_Order_By>;
  available?: InputMaybe<DB_Order_By>;
  category?: InputMaybe<DB_Categories_Order_By>;
  category_id?: InputMaybe<DB_Order_By>;
  choices?: InputMaybe<DB_Order_By>;
  created_at?: InputMaybe<DB_Order_By>;
  description?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  images?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  price?: InputMaybe<DB_Order_By>;
  restaurant?: InputMaybe<DB_Restaurants_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
  variations?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: items */
export type DB_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type DB_Items_Prepend_Input = {
  allergens?: InputMaybe<Scalars['jsonb']>;
  choices?: InputMaybe<Scalars['jsonb']>;
  images?: InputMaybe<Scalars['jsonb']>;
  variations?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "items" */
export type DB_Items_Select_Column =
/** column name */
   | 'allergens'
   /** column name */
   | 'available'
   /** column name */
   | 'category_id'
   /** column name */
   | 'choices'
   /** column name */
   | 'created_at'
   /** column name */
   | 'description'
   /** column name */
   | 'id'
   /** column name */
   | 'images'
   /** column name */
   | 'name'
   /** column name */
   | 'price'
   /** column name */
   | 'restaurant_id'
   /** column name */
   | 'variations';

/** select "items_aggregate_bool_exp_bool_and_arguments_columns" columns of table "items" */
export type DB_Items_Select_Column_Items_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
/** column name */
   | 'available';

/** select "items_aggregate_bool_exp_bool_or_arguments_columns" columns of table "items" */
export type DB_Items_Select_Column_Items_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
/** column name */
   | 'available';

/** input type for updating data in table "items" */
export type DB_Items_Set_Input = {
  allergens?: InputMaybe<Scalars['jsonb']>;
  available?: InputMaybe<Scalars['Boolean']>;
  category_id?: InputMaybe<Scalars['uuid']>;
  choices?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  images?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
  variations?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type DB_Items_Stddev_Fields = {
  __typename?: 'items_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "items" */
export type DB_Items_Stddev_Order_By = {
  price?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_pop on columns */
export type DB_Items_Stddev_Pop_Fields = {
  __typename?: 'items_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "items" */
export type DB_Items_Stddev_Pop_Order_By = {
  price?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_samp on columns */
export type DB_Items_Stddev_Samp_Fields = {
  __typename?: 'items_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "items" */
export type DB_Items_Stddev_Samp_Order_By = {
  price?: InputMaybe<DB_Order_By>;
};

/** Streaming cursor of the table "items" */
export type DB_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Items_Stream_Cursor_Value_Input = {
  allergens?: InputMaybe<Scalars['jsonb']>;
  available?: InputMaybe<Scalars['Boolean']>;
  category_id?: InputMaybe<Scalars['uuid']>;
  choices?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  images?: InputMaybe<Scalars['jsonb']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
  variations?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type DB_Items_Sum_Fields = {
  __typename?: 'items_sum_fields';
  price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "items" */
export type DB_Items_Sum_Order_By = {
  price?: InputMaybe<DB_Order_By>;
};

/** update columns of table "items" */
export type DB_Items_Update_Column =
/** column name */
   | 'allergens'
   /** column name */
   | 'available'
   /** column name */
   | 'category_id'
   /** column name */
   | 'choices'
   /** column name */
   | 'created_at'
   /** column name */
   | 'description'
   /** column name */
   | 'id'
   /** column name */
   | 'images'
   /** column name */
   | 'name'
   /** column name */
   | 'price'
   /** column name */
   | 'restaurant_id'
   /** column name */
   | 'variations';

export type DB_Items_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<DB_Items_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<DB_Items_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<DB_Items_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<DB_Items_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DB_Items_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<DB_Items_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DB_Items_Var_Pop_Fields = {
  __typename?: 'items_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "items" */
export type DB_Items_Var_Pop_Order_By = {
  price?: InputMaybe<DB_Order_By>;
};

/** aggregate var_samp on columns */
export type DB_Items_Var_Samp_Fields = {
  __typename?: 'items_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "items" */
export type DB_Items_Var_Samp_Order_By = {
  price?: InputMaybe<DB_Order_By>;
};

/** aggregate variance on columns */
export type DB_Items_Variance_Fields = {
  __typename?: 'items_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "items" */
export type DB_Items_Variance_Order_By = {
  price?: InputMaybe<DB_Order_By>;
};

export type DB_Jsonb_Cast_Exp = {
  String?: InputMaybe<DB_String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type DB_Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<DB_Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type DB_Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<DB_Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<DB_Accounts>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<DB_Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<DB_Categories>;
  /** delete data from the table: "items" */
  delete_items?: Maybe<DB_Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<DB_Items>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<DB_Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<DB_Orders>;
  /** delete data from the table: "restaurant_administrators" */
  delete_restaurant_administrators?: Maybe<DB_Restaurant_Administrators_Mutation_Response>;
  /** delete single row from the table: "restaurant_administrators" */
  delete_restaurant_administrators_by_pk?: Maybe<DB_Restaurant_Administrators>;
  /** delete data from the table: "restaurants" */
  delete_restaurants?: Maybe<DB_Restaurants_Mutation_Response>;
  /** delete single row from the table: "restaurants" */
  delete_restaurants_by_pk?: Maybe<DB_Restaurants>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<DB_Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<DB_Sessions>;
  /** delete data from the table: "supermarket_items" */
  delete_supermarket_items?: Maybe<DB_Supermarket_Items_Mutation_Response>;
  /** delete single row from the table: "supermarket_items" */
  delete_supermarket_items_by_pk?: Maybe<DB_Supermarket_Items>;
  /** delete data from the table: "table_orders" */
  delete_table_orders?: Maybe<DB_Table_Orders_Mutation_Response>;
  /** delete single row from the table: "table_orders" */
  delete_table_orders_by_pk?: Maybe<DB_Table_Orders>;
  /** delete data from the table: "tables" */
  delete_tables?: Maybe<DB_Tables_Mutation_Response>;
  /** delete single row from the table: "tables" */
  delete_tables_by_pk?: Maybe<DB_Tables>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<DB_Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<DB_Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<DB_Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<DB_Verification_Tokens>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<DB_Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<DB_Accounts>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<DB_Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<DB_Categories>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<DB_Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<DB_Items>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<DB_Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<DB_Orders>;
  /** insert data into the table: "restaurant_administrators" */
  insert_restaurant_administrators?: Maybe<DB_Restaurant_Administrators_Mutation_Response>;
  /** insert a single row into the table: "restaurant_administrators" */
  insert_restaurant_administrators_one?: Maybe<DB_Restaurant_Administrators>;
  /** insert data into the table: "restaurants" */
  insert_restaurants?: Maybe<DB_Restaurants_Mutation_Response>;
  /** insert a single row into the table: "restaurants" */
  insert_restaurants_one?: Maybe<DB_Restaurants>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<DB_Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<DB_Sessions>;
  /** insert data into the table: "supermarket_items" */
  insert_supermarket_items?: Maybe<DB_Supermarket_Items_Mutation_Response>;
  /** insert a single row into the table: "supermarket_items" */
  insert_supermarket_items_one?: Maybe<DB_Supermarket_Items>;
  /** insert data into the table: "table_orders" */
  insert_table_orders?: Maybe<DB_Table_Orders_Mutation_Response>;
  /** insert a single row into the table: "table_orders" */
  insert_table_orders_one?: Maybe<DB_Table_Orders>;
  /** insert data into the table: "tables" */
  insert_tables?: Maybe<DB_Tables_Mutation_Response>;
  /** insert a single row into the table: "tables" */
  insert_tables_one?: Maybe<DB_Tables>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<DB_Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<DB_Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<DB_Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<DB_Verification_Tokens>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<DB_Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<DB_Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<DB_Accounts_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<DB_Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<DB_Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<DB_Categories_Mutation_Response>>>;
  /** update data of the table: "items" */
  update_items?: Maybe<DB_Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk?: Maybe<DB_Items>;
  /** update multiples rows of table: "items" */
  update_items_many?: Maybe<Array<Maybe<DB_Items_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<DB_Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<DB_Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<DB_Orders_Mutation_Response>>>;
  /** update data of the table: "restaurant_administrators" */
  update_restaurant_administrators?: Maybe<DB_Restaurant_Administrators_Mutation_Response>;
  /** update single row of the table: "restaurant_administrators" */
  update_restaurant_administrators_by_pk?: Maybe<DB_Restaurant_Administrators>;
  /** update multiples rows of table: "restaurant_administrators" */
  update_restaurant_administrators_many?: Maybe<Array<Maybe<DB_Restaurant_Administrators_Mutation_Response>>>;
  /** update data of the table: "restaurants" */
  update_restaurants?: Maybe<DB_Restaurants_Mutation_Response>;
  /** update single row of the table: "restaurants" */
  update_restaurants_by_pk?: Maybe<DB_Restaurants>;
  /** update multiples rows of table: "restaurants" */
  update_restaurants_many?: Maybe<Array<Maybe<DB_Restaurants_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<DB_Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<DB_Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<DB_Sessions_Mutation_Response>>>;
  /** update data of the table: "supermarket_items" */
  update_supermarket_items?: Maybe<DB_Supermarket_Items_Mutation_Response>;
  /** update single row of the table: "supermarket_items" */
  update_supermarket_items_by_pk?: Maybe<DB_Supermarket_Items>;
  /** update multiples rows of table: "supermarket_items" */
  update_supermarket_items_many?: Maybe<Array<Maybe<DB_Supermarket_Items_Mutation_Response>>>;
  /** update data of the table: "table_orders" */
  update_table_orders?: Maybe<DB_Table_Orders_Mutation_Response>;
  /** update single row of the table: "table_orders" */
  update_table_orders_by_pk?: Maybe<DB_Table_Orders>;
  /** update multiples rows of table: "table_orders" */
  update_table_orders_many?: Maybe<Array<Maybe<DB_Table_Orders_Mutation_Response>>>;
  /** update data of the table: "tables" */
  update_tables?: Maybe<DB_Tables_Mutation_Response>;
  /** update single row of the table: "tables" */
  update_tables_by_pk?: Maybe<DB_Tables>;
  /** update multiples rows of table: "tables" */
  update_tables_many?: Maybe<Array<Maybe<DB_Tables_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<DB_Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<DB_Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<DB_Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<DB_Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<DB_Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<Array<Maybe<DB_Verification_Tokens_Mutation_Response>>>;
};


/** mutation root */
export type DB_Mutation_RootDelete_AccountsArgs = {
  where: DB_Accounts_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_CategoriesArgs = {
  where: DB_Categories_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_ItemsArgs = {
  where: DB_Items_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_OrdersArgs = {
  where: DB_Orders_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_Restaurant_AdministratorsArgs = {
  where: DB_Restaurant_Administrators_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Restaurant_Administrators_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_RestaurantsArgs = {
  where: DB_Restaurants_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Restaurants_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_SessionsArgs = {
  where: DB_Sessions_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_Supermarket_ItemsArgs = {
  where: DB_Supermarket_Items_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Supermarket_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_Table_OrdersArgs = {
  where: DB_Table_Orders_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Table_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_TablesArgs = {
  where: DB_Tables_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Tables_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_UsersArgs = {
  where: DB_Users_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type DB_Mutation_RootDelete_Verification_TokensArgs = {
  where: DB_Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type DB_Mutation_RootInsert_AccountsArgs = {
  objects: Array<DB_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<DB_Accounts_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Accounts_OneArgs = {
  object: DB_Accounts_Insert_Input;
  on_conflict?: InputMaybe<DB_Accounts_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_CategoriesArgs = {
  objects: Array<DB_Categories_Insert_Input>;
  on_conflict?: InputMaybe<DB_Categories_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Categories_OneArgs = {
  object: DB_Categories_Insert_Input;
  on_conflict?: InputMaybe<DB_Categories_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_ItemsArgs = {
  objects: Array<DB_Items_Insert_Input>;
  on_conflict?: InputMaybe<DB_Items_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Items_OneArgs = {
  object: DB_Items_Insert_Input;
  on_conflict?: InputMaybe<DB_Items_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_OrdersArgs = {
  objects: Array<DB_Orders_Insert_Input>;
  on_conflict?: InputMaybe<DB_Orders_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Orders_OneArgs = {
  object: DB_Orders_Insert_Input;
  on_conflict?: InputMaybe<DB_Orders_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Restaurant_AdministratorsArgs = {
  objects: Array<DB_Restaurant_Administrators_Insert_Input>;
  on_conflict?: InputMaybe<DB_Restaurant_Administrators_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Restaurant_Administrators_OneArgs = {
  object: DB_Restaurant_Administrators_Insert_Input;
  on_conflict?: InputMaybe<DB_Restaurant_Administrators_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_RestaurantsArgs = {
  objects: Array<DB_Restaurants_Insert_Input>;
  on_conflict?: InputMaybe<DB_Restaurants_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Restaurants_OneArgs = {
  object: DB_Restaurants_Insert_Input;
  on_conflict?: InputMaybe<DB_Restaurants_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_SessionsArgs = {
  objects: Array<DB_Sessions_Insert_Input>;
  on_conflict?: InputMaybe<DB_Sessions_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Sessions_OneArgs = {
  object: DB_Sessions_Insert_Input;
  on_conflict?: InputMaybe<DB_Sessions_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Supermarket_ItemsArgs = {
  objects: Array<DB_Supermarket_Items_Insert_Input>;
  on_conflict?: InputMaybe<DB_Supermarket_Items_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Supermarket_Items_OneArgs = {
  object: DB_Supermarket_Items_Insert_Input;
  on_conflict?: InputMaybe<DB_Supermarket_Items_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Table_OrdersArgs = {
  objects: Array<DB_Table_Orders_Insert_Input>;
  on_conflict?: InputMaybe<DB_Table_Orders_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Table_Orders_OneArgs = {
  object: DB_Table_Orders_Insert_Input;
  on_conflict?: InputMaybe<DB_Table_Orders_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_TablesArgs = {
  objects: Array<DB_Tables_Insert_Input>;
  on_conflict?: InputMaybe<DB_Tables_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Tables_OneArgs = {
  object: DB_Tables_Insert_Input;
  on_conflict?: InputMaybe<DB_Tables_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_UsersArgs = {
  objects: Array<DB_Users_Insert_Input>;
  on_conflict?: InputMaybe<DB_Users_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Users_OneArgs = {
  object: DB_Users_Insert_Input;
  on_conflict?: InputMaybe<DB_Users_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<DB_Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<DB_Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: DB_Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<DB_Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<DB_Accounts_Inc_Input>;
  _set?: InputMaybe<DB_Accounts_Set_Input>;
  where: DB_Accounts_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<DB_Accounts_Inc_Input>;
  _set?: InputMaybe<DB_Accounts_Set_Input>;
  pk_columns: DB_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<DB_Accounts_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<DB_Categories_Inc_Input>;
  _set?: InputMaybe<DB_Categories_Set_Input>;
  where: DB_Categories_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<DB_Categories_Inc_Input>;
  _set?: InputMaybe<DB_Categories_Set_Input>;
  pk_columns: DB_Categories_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<DB_Categories_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_ItemsArgs = {
  _append?: InputMaybe<DB_Items_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Items_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Items_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Items_Delete_Key_Input>;
  _inc?: InputMaybe<DB_Items_Inc_Input>;
  _prepend?: InputMaybe<DB_Items_Prepend_Input>;
  _set?: InputMaybe<DB_Items_Set_Input>;
  where: DB_Items_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Items_By_PkArgs = {
  _append?: InputMaybe<DB_Items_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Items_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Items_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Items_Delete_Key_Input>;
  _inc?: InputMaybe<DB_Items_Inc_Input>;
  _prepend?: InputMaybe<DB_Items_Prepend_Input>;
  _set?: InputMaybe<DB_Items_Set_Input>;
  pk_columns: DB_Items_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Items_ManyArgs = {
  updates: Array<DB_Items_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_OrdersArgs = {
  _append?: InputMaybe<DB_Orders_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Orders_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Orders_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Orders_Delete_Key_Input>;
  _inc?: InputMaybe<DB_Orders_Inc_Input>;
  _prepend?: InputMaybe<DB_Orders_Prepend_Input>;
  _set?: InputMaybe<DB_Orders_Set_Input>;
  where: DB_Orders_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Orders_By_PkArgs = {
  _append?: InputMaybe<DB_Orders_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Orders_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Orders_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Orders_Delete_Key_Input>;
  _inc?: InputMaybe<DB_Orders_Inc_Input>;
  _prepend?: InputMaybe<DB_Orders_Prepend_Input>;
  _set?: InputMaybe<DB_Orders_Set_Input>;
  pk_columns: DB_Orders_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<DB_Orders_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Restaurant_AdministratorsArgs = {
  _set?: InputMaybe<DB_Restaurant_Administrators_Set_Input>;
  where: DB_Restaurant_Administrators_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Restaurant_Administrators_By_PkArgs = {
  _set?: InputMaybe<DB_Restaurant_Administrators_Set_Input>;
  pk_columns: DB_Restaurant_Administrators_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Restaurant_Administrators_ManyArgs = {
  updates: Array<DB_Restaurant_Administrators_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_RestaurantsArgs = {
  _append?: InputMaybe<DB_Restaurants_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Restaurants_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Restaurants_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Restaurants_Delete_Key_Input>;
  _prepend?: InputMaybe<DB_Restaurants_Prepend_Input>;
  _set?: InputMaybe<DB_Restaurants_Set_Input>;
  where: DB_Restaurants_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Restaurants_By_PkArgs = {
  _append?: InputMaybe<DB_Restaurants_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Restaurants_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Restaurants_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Restaurants_Delete_Key_Input>;
  _prepend?: InputMaybe<DB_Restaurants_Prepend_Input>;
  _set?: InputMaybe<DB_Restaurants_Set_Input>;
  pk_columns: DB_Restaurants_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Restaurants_ManyArgs = {
  updates: Array<DB_Restaurants_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<DB_Sessions_Set_Input>;
  where: DB_Sessions_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<DB_Sessions_Set_Input>;
  pk_columns: DB_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<DB_Sessions_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Supermarket_ItemsArgs = {
  _inc?: InputMaybe<DB_Supermarket_Items_Inc_Input>;
  _set?: InputMaybe<DB_Supermarket_Items_Set_Input>;
  where: DB_Supermarket_Items_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Supermarket_Items_By_PkArgs = {
  _inc?: InputMaybe<DB_Supermarket_Items_Inc_Input>;
  _set?: InputMaybe<DB_Supermarket_Items_Set_Input>;
  pk_columns: DB_Supermarket_Items_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Supermarket_Items_ManyArgs = {
  updates: Array<DB_Supermarket_Items_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Table_OrdersArgs = {
  _append?: InputMaybe<DB_Table_Orders_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Table_Orders_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Table_Orders_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Table_Orders_Delete_Key_Input>;
  _prepend?: InputMaybe<DB_Table_Orders_Prepend_Input>;
  _set?: InputMaybe<DB_Table_Orders_Set_Input>;
  where: DB_Table_Orders_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Table_Orders_By_PkArgs = {
  _append?: InputMaybe<DB_Table_Orders_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Table_Orders_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Table_Orders_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Table_Orders_Delete_Key_Input>;
  _prepend?: InputMaybe<DB_Table_Orders_Prepend_Input>;
  _set?: InputMaybe<DB_Table_Orders_Set_Input>;
  pk_columns: DB_Table_Orders_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Table_Orders_ManyArgs = {
  updates: Array<DB_Table_Orders_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_TablesArgs = {
  _append?: InputMaybe<DB_Tables_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Tables_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Tables_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Tables_Delete_Key_Input>;
  _inc?: InputMaybe<DB_Tables_Inc_Input>;
  _prepend?: InputMaybe<DB_Tables_Prepend_Input>;
  _set?: InputMaybe<DB_Tables_Set_Input>;
  where: DB_Tables_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Tables_By_PkArgs = {
  _append?: InputMaybe<DB_Tables_Append_Input>;
  _delete_at_path?: InputMaybe<DB_Tables_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<DB_Tables_Delete_Elem_Input>;
  _delete_key?: InputMaybe<DB_Tables_Delete_Key_Input>;
  _inc?: InputMaybe<DB_Tables_Inc_Input>;
  _prepend?: InputMaybe<DB_Tables_Prepend_Input>;
  _set?: InputMaybe<DB_Tables_Set_Input>;
  pk_columns: DB_Tables_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Tables_ManyArgs = {
  updates: Array<DB_Tables_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<DB_Users_Set_Input>;
  where: DB_Users_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<DB_Users_Set_Input>;
  pk_columns: DB_Users_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<DB_Users_Updates>;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<DB_Verification_Tokens_Set_Input>;
  where: DB_Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<DB_Verification_Tokens_Set_Input>;
  pk_columns: DB_Verification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type DB_Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<DB_Verification_Tokens_Updates>;
};

/** column ordering options */
export type DB_Order_By =
/** in ascending order, nulls last */
   | 'asc'
   /** in ascending order, nulls first */
   | 'asc_nulls_first'
   /** in ascending order, nulls last */
   | 'asc_nulls_last'
   /** in descending order, nulls first */
   | 'desc'
   /** in descending order, nulls first */
   | 'desc_nulls_first'
   /** in descending order, nulls last */
   | 'desc_nulls_last';

/** columns and relationships of "orders" */
export type DB_Orders = {
  __typename?: 'orders';
  chair_number: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  items?: Maybe<Scalars['jsonb']>;
  subtotal: Scalars['Int'];
  /** An object relationship */
  table_order: DB_Table_Orders;
  table_order_id: Scalars['uuid'];
  total: Scalars['Int'];
  total_tax: Scalars['Int'];
};


/** columns and relationships of "orders" */
export type DB_OrdersItemsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "orders" */
export type DB_Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<DB_Orders_Aggregate_Fields>;
  nodes: Array<DB_Orders>;
};

export type DB_Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<DB_Orders_Aggregate_Bool_Exp_Count>;
};

export type DB_Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DB_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Orders_Bool_Exp>;
  predicate: DB_Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type DB_Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<DB_Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<DB_Orders_Max_Fields>;
  min?: Maybe<DB_Orders_Min_Fields>;
  stddev?: Maybe<DB_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<DB_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DB_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<DB_Orders_Sum_Fields>;
  var_pop?: Maybe<DB_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<DB_Orders_Var_Samp_Fields>;
  variance?: Maybe<DB_Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type DB_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type DB_Orders_Aggregate_Order_By = {
  avg?: InputMaybe<DB_Orders_Avg_Order_By>;
  count?: InputMaybe<DB_Order_By>;
  max?: InputMaybe<DB_Orders_Max_Order_By>;
  min?: InputMaybe<DB_Orders_Min_Order_By>;
  stddev?: InputMaybe<DB_Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DB_Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DB_Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DB_Orders_Sum_Order_By>;
  var_pop?: InputMaybe<DB_Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DB_Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<DB_Orders_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type DB_Orders_Append_Input = {
  items?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "orders" */
export type DB_Orders_Arr_Rel_Insert_Input = {
  data: Array<DB_Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type DB_Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  chair_number?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_tax?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type DB_Orders_Avg_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type DB_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Orders_Bool_Exp>>;
  _not?: InputMaybe<DB_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Orders_Bool_Exp>>;
  chair_number?: InputMaybe<DB_Int_Comparison_Exp>;
  created_at?: InputMaybe<DB_Timestamptz_Comparison_Exp>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  items?: InputMaybe<DB_Jsonb_Comparison_Exp>;
  subtotal?: InputMaybe<DB_Int_Comparison_Exp>;
  table_order?: InputMaybe<DB_Table_Orders_Bool_Exp>;
  table_order_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  total?: InputMaybe<DB_Int_Comparison_Exp>;
  total_tax?: InputMaybe<DB_Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export type DB_Orders_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'orders_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type DB_Orders_Delete_At_Path_Input = {
  items?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type DB_Orders_Delete_Elem_Input = {
  items?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type DB_Orders_Delete_Key_Input = {
  items?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "orders" */
export type DB_Orders_Inc_Input = {
  chair_number?: InputMaybe<Scalars['Int']>;
  subtotal?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['Int']>;
  total_tax?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type DB_Orders_Insert_Input = {
  chair_number?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  items?: InputMaybe<Scalars['jsonb']>;
  subtotal?: InputMaybe<Scalars['Int']>;
  table_order?: InputMaybe<DB_Table_Orders_Obj_Rel_Insert_Input>;
  table_order_id?: InputMaybe<Scalars['uuid']>;
  total?: InputMaybe<Scalars['Int']>;
  total_tax?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type DB_Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  chair_number?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subtotal?: Maybe<Scalars['Int']>;
  table_order_id?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['Int']>;
  total_tax?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "orders" */
export type DB_Orders_Max_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  created_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  table_order_id?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** aggregate min on columns */
export type DB_Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  chair_number?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subtotal?: Maybe<Scalars['Int']>;
  table_order_id?: Maybe<Scalars['uuid']>;
  total?: Maybe<Scalars['Int']>;
  total_tax?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "orders" */
export type DB_Orders_Min_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  created_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  table_order_id?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** response of any mutation on the table "orders" */
export type DB_Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Orders>;
};

/** on_conflict condition type for table "orders" */
export type DB_Orders_On_Conflict = {
  constraint: DB_Orders_Constraint;
  update_columns?: Array<DB_Orders_Update_Column>;
  where?: InputMaybe<DB_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type DB_Orders_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  created_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  items?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  table_order?: InputMaybe<DB_Table_Orders_Order_By>;
  table_order_id?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: orders */
export type DB_Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type DB_Orders_Prepend_Input = {
  items?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "orders" */
export type DB_Orders_Select_Column =
/** column name */
   | 'chair_number'
   /** column name */
   | 'created_at'
   /** column name */
   | 'id'
   /** column name */
   | 'items'
   /** column name */
   | 'subtotal'
   /** column name */
   | 'table_order_id'
   /** column name */
   | 'total'
   /** column name */
   | 'total_tax';

/** input type for updating data in table "orders" */
export type DB_Orders_Set_Input = {
  chair_number?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  items?: InputMaybe<Scalars['jsonb']>;
  subtotal?: InputMaybe<Scalars['Int']>;
  table_order_id?: InputMaybe<Scalars['uuid']>;
  total?: InputMaybe<Scalars['Int']>;
  total_tax?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type DB_Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  chair_number?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_tax?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type DB_Orders_Stddev_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_pop on columns */
export type DB_Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  chair_number?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_tax?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type DB_Orders_Stddev_Pop_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_samp on columns */
export type DB_Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  chair_number?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_tax?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type DB_Orders_Stddev_Samp_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** Streaming cursor of the table "orders" */
export type DB_Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Orders_Stream_Cursor_Value_Input = {
  chair_number?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  items?: InputMaybe<Scalars['jsonb']>;
  subtotal?: InputMaybe<Scalars['Int']>;
  table_order_id?: InputMaybe<Scalars['uuid']>;
  total?: InputMaybe<Scalars['Int']>;
  total_tax?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type DB_Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  chair_number?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  total_tax?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "orders" */
export type DB_Orders_Sum_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** update columns of table "orders" */
export type DB_Orders_Update_Column =
/** column name */
   | 'chair_number'
   /** column name */
   | 'created_at'
   /** column name */
   | 'id'
   /** column name */
   | 'items'
   /** column name */
   | 'subtotal'
   /** column name */
   | 'table_order_id'
   /** column name */
   | 'total'
   /** column name */
   | 'total_tax';

export type DB_Orders_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<DB_Orders_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<DB_Orders_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<DB_Orders_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<DB_Orders_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DB_Orders_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<DB_Orders_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DB_Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  chair_number?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_tax?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type DB_Orders_Var_Pop_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** aggregate var_samp on columns */
export type DB_Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  chair_number?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_tax?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type DB_Orders_Var_Samp_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

/** aggregate variance on columns */
export type DB_Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  chair_number?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  total_tax?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type DB_Orders_Variance_Order_By = {
  chair_number?: InputMaybe<DB_Order_By>;
  subtotal?: InputMaybe<DB_Order_By>;
  total?: InputMaybe<DB_Order_By>;
  total_tax?: InputMaybe<DB_Order_By>;
};

export type DB_Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accounts: Array<DB_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: DB_Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<DB_Accounts>;
  /** An array relationship */
  categories: Array<DB_Categories>;
  /** An aggregate relationship */
  categories_aggregate: DB_Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<DB_Categories>;
  /** An array relationship */
  items: Array<DB_Items>;
  /** An aggregate relationship */
  items_aggregate: DB_Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<DB_Items>;
  /** An array relationship */
  orders: Array<DB_Orders>;
  /** An aggregate relationship */
  orders_aggregate: DB_Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<DB_Orders>;
  /** fetch data from the table: "restaurant_administrators" */
  restaurant_administrators: Array<DB_Restaurant_Administrators>;
  /** fetch aggregated fields from the table: "restaurant_administrators" */
  restaurant_administrators_aggregate: DB_Restaurant_Administrators_Aggregate;
  /** fetch data from the table: "restaurant_administrators" using primary key columns */
  restaurant_administrators_by_pk?: Maybe<DB_Restaurant_Administrators>;
  /** fetch data from the table: "restaurants" */
  restaurants: Array<DB_Restaurants>;
  /** fetch aggregated fields from the table: "restaurants" */
  restaurants_aggregate: DB_Restaurants_Aggregate;
  /** fetch data from the table: "restaurants" using primary key columns */
  restaurants_by_pk?: Maybe<DB_Restaurants>;
  /** An array relationship */
  sessions: Array<DB_Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: DB_Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<DB_Sessions>;
  /** fetch data from the table: "supermarket_items" */
  supermarket_items: Array<DB_Supermarket_Items>;
  /** fetch aggregated fields from the table: "supermarket_items" */
  supermarket_items_aggregate: DB_Supermarket_Items_Aggregate;
  /** fetch data from the table: "supermarket_items" using primary key columns */
  supermarket_items_by_pk?: Maybe<DB_Supermarket_Items>;
  /** An array relationship */
  table_orders: Array<DB_Table_Orders>;
  /** An aggregate relationship */
  table_orders_aggregate: DB_Table_Orders_Aggregate;
  /** fetch data from the table: "table_orders" using primary key columns */
  table_orders_by_pk?: Maybe<DB_Table_Orders>;
  /** An array relationship */
  tables: Array<DB_Tables>;
  /** An aggregate relationship */
  tables_aggregate: DB_Tables_Aggregate;
  /** fetch data from the table: "tables" using primary key columns */
  tables_by_pk?: Maybe<DB_Tables>;
  /** fetch data from the table: "users" */
  users: Array<DB_Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: DB_Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<DB_Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<DB_Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: DB_Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<DB_Verification_Tokens>;
};


export type DB_Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<DB_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Accounts_Order_By>>;
  where?: InputMaybe<DB_Accounts_Bool_Exp>;
};


export type DB_Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Accounts_Order_By>>;
  where?: InputMaybe<DB_Accounts_Bool_Exp>;
};


export type DB_Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<DB_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Categories_Order_By>>;
  where?: InputMaybe<DB_Categories_Bool_Exp>;
};


export type DB_Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Categories_Order_By>>;
  where?: InputMaybe<DB_Categories_Bool_Exp>;
};


export type DB_Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootItemsArgs = {
  distinct_on?: InputMaybe<Array<DB_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Items_Order_By>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};


export type DB_Query_RootItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Items_Order_By>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};


export type DB_Query_RootItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<DB_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Orders_Order_By>>;
  where?: InputMaybe<DB_Orders_Bool_Exp>;
};


export type DB_Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Orders_Order_By>>;
  where?: InputMaybe<DB_Orders_Bool_Exp>;
};


export type DB_Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootRestaurant_AdministratorsArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurant_Administrators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurant_Administrators_Order_By>>;
  where?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
};


export type DB_Query_RootRestaurant_Administrators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurant_Administrators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurant_Administrators_Order_By>>;
  where?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
};


export type DB_Query_RootRestaurant_Administrators_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootRestaurantsArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurants_Order_By>>;
  where?: InputMaybe<DB_Restaurants_Bool_Exp>;
};


export type DB_Query_RootRestaurants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurants_Order_By>>;
  where?: InputMaybe<DB_Restaurants_Bool_Exp>;
};


export type DB_Query_RootRestaurants_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<DB_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Sessions_Order_By>>;
  where?: InputMaybe<DB_Sessions_Bool_Exp>;
};


export type DB_Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Sessions_Order_By>>;
  where?: InputMaybe<DB_Sessions_Bool_Exp>;
};


export type DB_Query_RootSessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootSupermarket_ItemsArgs = {
  distinct_on?: InputMaybe<Array<DB_Supermarket_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Supermarket_Items_Order_By>>;
  where?: InputMaybe<DB_Supermarket_Items_Bool_Exp>;
};


export type DB_Query_RootSupermarket_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Supermarket_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Supermarket_Items_Order_By>>;
  where?: InputMaybe<DB_Supermarket_Items_Bool_Exp>;
};


export type DB_Query_RootSupermarket_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootTable_OrdersArgs = {
  distinct_on?: InputMaybe<Array<DB_Table_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Table_Orders_Order_By>>;
  where?: InputMaybe<DB_Table_Orders_Bool_Exp>;
};


export type DB_Query_RootTable_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Table_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Table_Orders_Order_By>>;
  where?: InputMaybe<DB_Table_Orders_Bool_Exp>;
};


export type DB_Query_RootTable_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootTablesArgs = {
  distinct_on?: InputMaybe<Array<DB_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Tables_Order_By>>;
  where?: InputMaybe<DB_Tables_Bool_Exp>;
};


export type DB_Query_RootTables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Tables_Order_By>>;
  where?: InputMaybe<DB_Tables_Bool_Exp>;
};


export type DB_Query_RootTables_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<DB_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Users_Order_By>>;
  where?: InputMaybe<DB_Users_Bool_Exp>;
};


export type DB_Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Users_Order_By>>;
  where?: InputMaybe<DB_Users_Bool_Exp>;
};


export type DB_Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<DB_Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Verification_Tokens_Order_By>>;
  where?: InputMaybe<DB_Verification_Tokens_Bool_Exp>;
};


export type DB_Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Verification_Tokens_Order_By>>;
  where?: InputMaybe<DB_Verification_Tokens_Bool_Exp>;
};


export type DB_Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};

/** columns and relationships of "restaurant_administrators" */
export type DB_Restaurant_Administrators = {
  __typename?: 'restaurant_administrators';
  id: Scalars['uuid'];
  /** An object relationship */
  restaurant: DB_Restaurants;
  restaurant_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "restaurant_administrators" */
export type DB_Restaurant_Administrators_Aggregate = {
  __typename?: 'restaurant_administrators_aggregate';
  aggregate?: Maybe<DB_Restaurant_Administrators_Aggregate_Fields>;
  nodes: Array<DB_Restaurant_Administrators>;
};

export type DB_Restaurant_Administrators_Aggregate_Bool_Exp = {
  count?: InputMaybe<DB_Restaurant_Administrators_Aggregate_Bool_Exp_Count>;
};

export type DB_Restaurant_Administrators_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DB_Restaurant_Administrators_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
  predicate: DB_Int_Comparison_Exp;
};

/** aggregate fields of "restaurant_administrators" */
export type DB_Restaurant_Administrators_Aggregate_Fields = {
  __typename?: 'restaurant_administrators_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DB_Restaurant_Administrators_Max_Fields>;
  min?: Maybe<DB_Restaurant_Administrators_Min_Fields>;
};


/** aggregate fields of "restaurant_administrators" */
export type DB_Restaurant_Administrators_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Restaurant_Administrators_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Aggregate_Order_By = {
  count?: InputMaybe<DB_Order_By>;
  max?: InputMaybe<DB_Restaurant_Administrators_Max_Order_By>;
  min?: InputMaybe<DB_Restaurant_Administrators_Min_Order_By>;
};

/** input type for inserting array relation for remote table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Arr_Rel_Insert_Input = {
  data: Array<DB_Restaurant_Administrators_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Restaurant_Administrators_On_Conflict>;
};

/** Boolean expression to filter rows from the table "restaurant_administrators". All fields are combined with a logical 'AND'. */
export type DB_Restaurant_Administrators_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Restaurant_Administrators_Bool_Exp>>;
  _not?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Restaurant_Administrators_Bool_Exp>>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  restaurant?: InputMaybe<DB_Restaurants_Bool_Exp>;
  restaurant_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  user_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'restaurant_administrators_pkey'
   /** unique or primary key constraint on columns "user_id" */
   | 'restaurant_administrators_user_id_key';

/** input type for inserting data into table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  restaurant?: InputMaybe<DB_Restaurants_Obj_Rel_Insert_Input>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type DB_Restaurant_Administrators_Max_Fields = {
  __typename?: 'restaurant_administrators_max_fields';
  id?: Maybe<Scalars['uuid']>;
  restaurant_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Max_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
  user_id?: InputMaybe<DB_Order_By>;
};

/** aggregate min on columns */
export type DB_Restaurant_Administrators_Min_Fields = {
  __typename?: 'restaurant_administrators_min_fields';
  id?: Maybe<Scalars['uuid']>;
  restaurant_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Min_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
  user_id?: InputMaybe<DB_Order_By>;
};

/** response of any mutation on the table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Mutation_Response = {
  __typename?: 'restaurant_administrators_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Restaurant_Administrators>;
};

/** on_conflict condition type for table "restaurant_administrators" */
export type DB_Restaurant_Administrators_On_Conflict = {
  constraint: DB_Restaurant_Administrators_Constraint;
  update_columns?: Array<DB_Restaurant_Administrators_Update_Column>;
  where?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
};

/** Ordering options when selecting data from "restaurant_administrators". */
export type DB_Restaurant_Administrators_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  restaurant?: InputMaybe<DB_Restaurants_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
  user_id?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: restaurant_administrators */
export type DB_Restaurant_Administrators_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Select_Column =
/** column name */
   | 'id'
   /** column name */
   | 'restaurant_id'
   /** column name */
   | 'user_id';

/** input type for updating data in table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Restaurant_Administrators_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Restaurant_Administrators_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "restaurant_administrators" */
export type DB_Restaurant_Administrators_Update_Column =
/** column name */
   | 'id'
   /** column name */
   | 'restaurant_id'
   /** column name */
   | 'user_id';

export type DB_Restaurant_Administrators_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Restaurant_Administrators_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Restaurant_Administrators_Bool_Exp;
};

/** columns and relationships of "restaurants" */
export type DB_Restaurants = {
  __typename?: 'restaurants';
  /** An array relationship */
  administrators: Array<DB_Restaurant_Administrators>;
  /** An aggregate relationship */
  administrators_aggregate: DB_Restaurant_Administrators_Aggregate;
  /** An array relationship */
  categories: Array<DB_Categories>;
  /** An aggregate relationship */
  categories_aggregate: DB_Categories_Aggregate;
  customization: Scalars['jsonb'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  items: Array<DB_Items>;
  /** An aggregate relationship */
  items_aggregate: DB_Items_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  owner?: Maybe<DB_Users>;
  owner_id: Scalars['uuid'];
  slug: Scalars['String'];
  /** An array relationship */
  tables: Array<DB_Tables>;
  /** An aggregate relationship */
  tables_aggregate: DB_Tables_Aggregate;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsAdministratorsArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurant_Administrators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurant_Administrators_Order_By>>;
  where?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsAdministrators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurant_Administrators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurant_Administrators_Order_By>>;
  where?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsCategoriesArgs = {
  distinct_on?: InputMaybe<Array<DB_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Categories_Order_By>>;
  where?: InputMaybe<DB_Categories_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Categories_Order_By>>;
  where?: InputMaybe<DB_Categories_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsCustomizationArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsItemsArgs = {
  distinct_on?: InputMaybe<Array<DB_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Items_Order_By>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Items_Order_By>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsTablesArgs = {
  distinct_on?: InputMaybe<Array<DB_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Tables_Order_By>>;
  where?: InputMaybe<DB_Tables_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type DB_RestaurantsTables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Tables_Order_By>>;
  where?: InputMaybe<DB_Tables_Bool_Exp>;
};

/** aggregated selection of "restaurants" */
export type DB_Restaurants_Aggregate = {
  __typename?: 'restaurants_aggregate';
  aggregate?: Maybe<DB_Restaurants_Aggregate_Fields>;
  nodes: Array<DB_Restaurants>;
};

/** aggregate fields of "restaurants" */
export type DB_Restaurants_Aggregate_Fields = {
  __typename?: 'restaurants_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DB_Restaurants_Max_Fields>;
  min?: Maybe<DB_Restaurants_Min_Fields>;
};


/** aggregate fields of "restaurants" */
export type DB_Restaurants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Restaurants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type DB_Restaurants_Append_Input = {
  customization?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "restaurants". All fields are combined with a logical 'AND'. */
export type DB_Restaurants_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Restaurants_Bool_Exp>>;
  _not?: InputMaybe<DB_Restaurants_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Restaurants_Bool_Exp>>;
  administrators?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
  administrators_aggregate?: InputMaybe<DB_Restaurant_Administrators_Aggregate_Bool_Exp>;
  categories?: InputMaybe<DB_Categories_Bool_Exp>;
  categories_aggregate?: InputMaybe<DB_Categories_Aggregate_Bool_Exp>;
  customization?: InputMaybe<DB_Jsonb_Comparison_Exp>;
  description?: InputMaybe<DB_String_Comparison_Exp>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  items?: InputMaybe<DB_Items_Bool_Exp>;
  items_aggregate?: InputMaybe<DB_Items_Aggregate_Bool_Exp>;
  name?: InputMaybe<DB_String_Comparison_Exp>;
  owner?: InputMaybe<DB_Users_Bool_Exp>;
  owner_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  slug?: InputMaybe<DB_String_Comparison_Exp>;
  tables?: InputMaybe<DB_Tables_Bool_Exp>;
  tables_aggregate?: InputMaybe<DB_Tables_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "restaurants" */
export type DB_Restaurants_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'restaurants_id_key'
   /** unique or primary key constraint on columns "id" */
   | 'restaurants_pkey'
   /** unique or primary key constraint on columns "slug" */
   | 'restaurants_slug_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type DB_Restaurants_Delete_At_Path_Input = {
  customization?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type DB_Restaurants_Delete_Elem_Input = {
  customization?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type DB_Restaurants_Delete_Key_Input = {
  customization?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "restaurants" */
export type DB_Restaurants_Insert_Input = {
  administrators?: InputMaybe<DB_Restaurant_Administrators_Arr_Rel_Insert_Input>;
  categories?: InputMaybe<DB_Categories_Arr_Rel_Insert_Input>;
  customization?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  items?: InputMaybe<DB_Items_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<DB_Users_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  tables?: InputMaybe<DB_Tables_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type DB_Restaurants_Max_Fields = {
  __typename?: 'restaurants_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type DB_Restaurants_Min_Fields = {
  __typename?: 'restaurants_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "restaurants" */
export type DB_Restaurants_Mutation_Response = {
  __typename?: 'restaurants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Restaurants>;
};

/** input type for inserting object relation for remote table "restaurants" */
export type DB_Restaurants_Obj_Rel_Insert_Input = {
  data: DB_Restaurants_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Restaurants_On_Conflict>;
};

/** on_conflict condition type for table "restaurants" */
export type DB_Restaurants_On_Conflict = {
  constraint: DB_Restaurants_Constraint;
  update_columns?: Array<DB_Restaurants_Update_Column>;
  where?: InputMaybe<DB_Restaurants_Bool_Exp>;
};

/** Ordering options when selecting data from "restaurants". */
export type DB_Restaurants_Order_By = {
  administrators_aggregate?: InputMaybe<DB_Restaurant_Administrators_Aggregate_Order_By>;
  categories_aggregate?: InputMaybe<DB_Categories_Aggregate_Order_By>;
  customization?: InputMaybe<DB_Order_By>;
  description?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  items_aggregate?: InputMaybe<DB_Items_Aggregate_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  owner?: InputMaybe<DB_Users_Order_By>;
  owner_id?: InputMaybe<DB_Order_By>;
  slug?: InputMaybe<DB_Order_By>;
  tables_aggregate?: InputMaybe<DB_Tables_Aggregate_Order_By>;
};

/** primary key columns input for table: restaurants */
export type DB_Restaurants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type DB_Restaurants_Prepend_Input = {
  customization?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "restaurants" */
export type DB_Restaurants_Select_Column =
/** column name */
   | 'customization'
   /** column name */
   | 'description'
   /** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'owner_id'
   /** column name */
   | 'slug';

/** input type for updating data in table "restaurants" */
export type DB_Restaurants_Set_Input = {
  customization?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "restaurants" */
export type DB_Restaurants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Restaurants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Restaurants_Stream_Cursor_Value_Input = {
  customization?: InputMaybe<Scalars['jsonb']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** update columns of table "restaurants" */
export type DB_Restaurants_Update_Column =
/** column name */
   | 'customization'
   /** column name */
   | 'description'
   /** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'owner_id'
   /** column name */
   | 'slug';

export type DB_Restaurants_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<DB_Restaurants_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<DB_Restaurants_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<DB_Restaurants_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<DB_Restaurants_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<DB_Restaurants_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Restaurants_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Restaurants_Bool_Exp;
};

/** columns and relationships of "sessions" */
export type DB_Sessions = {
  __typename?: 'sessions';
  expires?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  sessionToken: Scalars['String'];
  /** An object relationship */
  user: DB_Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "sessions" */
export type DB_Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<DB_Sessions_Aggregate_Fields>;
  nodes: Array<DB_Sessions>;
};

export type DB_Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<DB_Sessions_Aggregate_Bool_Exp_Count>;
};

export type DB_Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DB_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Sessions_Bool_Exp>;
  predicate: DB_Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type DB_Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DB_Sessions_Max_Fields>;
  min?: Maybe<DB_Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type DB_Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type DB_Sessions_Aggregate_Order_By = {
  count?: InputMaybe<DB_Order_By>;
  max?: InputMaybe<DB_Sessions_Max_Order_By>;
  min?: InputMaybe<DB_Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type DB_Sessions_Arr_Rel_Insert_Input = {
  data: Array<DB_Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type DB_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Sessions_Bool_Exp>>;
  _not?: InputMaybe<DB_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Sessions_Bool_Exp>>;
  expires?: InputMaybe<DB_Timestamptz_Comparison_Exp>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<DB_String_Comparison_Exp>;
  user?: InputMaybe<DB_Users_Bool_Exp>;
  userId?: InputMaybe<DB_Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export type DB_Sessions_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'sessions_pkey';

/** input type for inserting data into table "sessions" */
export type DB_Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<DB_Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type DB_Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "sessions" */
export type DB_Sessions_Max_Order_By = {
  expires?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  sessionToken?: InputMaybe<DB_Order_By>;
  userId?: InputMaybe<DB_Order_By>;
};

/** aggregate min on columns */
export type DB_Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "sessions" */
export type DB_Sessions_Min_Order_By = {
  expires?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  sessionToken?: InputMaybe<DB_Order_By>;
  userId?: InputMaybe<DB_Order_By>;
};

/** response of any mutation on the table "sessions" */
export type DB_Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type DB_Sessions_On_Conflict = {
  constraint: DB_Sessions_Constraint;
  update_columns?: Array<DB_Sessions_Update_Column>;
  where?: InputMaybe<DB_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type DB_Sessions_Order_By = {
  expires?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  sessionToken?: InputMaybe<DB_Order_By>;
  user?: InputMaybe<DB_Users_Order_By>;
  userId?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: sessions */
export type DB_Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sessions" */
export type DB_Sessions_Select_Column =
/** column name */
   | 'expires'
   /** column name */
   | 'id'
   /** column name */
   | 'sessionToken'
   /** column name */
   | 'userId';

/** input type for updating data in table "sessions" */
export type DB_Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "sessions" */
export type DB_Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "sessions" */
export type DB_Sessions_Update_Column =
/** column name */
   | 'expires'
   /** column name */
   | 'id'
   /** column name */
   | 'sessionToken'
   /** column name */
   | 'userId';

export type DB_Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Sessions_Bool_Exp;
};

export type DB_Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<DB_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: DB_Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<DB_Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<DB_Accounts>;
  /** An array relationship */
  categories: Array<DB_Categories>;
  /** An aggregate relationship */
  categories_aggregate: DB_Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<DB_Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<DB_Categories>;
  /** An array relationship */
  items: Array<DB_Items>;
  /** An aggregate relationship */
  items_aggregate: DB_Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<DB_Items>;
  /** fetch data from the table in a streaming manner: "items" */
  items_stream: Array<DB_Items>;
  /** An array relationship */
  orders: Array<DB_Orders>;
  /** An aggregate relationship */
  orders_aggregate: DB_Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<DB_Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<DB_Orders>;
  /** fetch data from the table: "restaurant_administrators" */
  restaurant_administrators: Array<DB_Restaurant_Administrators>;
  /** fetch aggregated fields from the table: "restaurant_administrators" */
  restaurant_administrators_aggregate: DB_Restaurant_Administrators_Aggregate;
  /** fetch data from the table: "restaurant_administrators" using primary key columns */
  restaurant_administrators_by_pk?: Maybe<DB_Restaurant_Administrators>;
  /** fetch data from the table in a streaming manner: "restaurant_administrators" */
  restaurant_administrators_stream: Array<DB_Restaurant_Administrators>;
  /** fetch data from the table: "restaurants" */
  restaurants: Array<DB_Restaurants>;
  /** fetch aggregated fields from the table: "restaurants" */
  restaurants_aggregate: DB_Restaurants_Aggregate;
  /** fetch data from the table: "restaurants" using primary key columns */
  restaurants_by_pk?: Maybe<DB_Restaurants>;
  /** fetch data from the table in a streaming manner: "restaurants" */
  restaurants_stream: Array<DB_Restaurants>;
  /** An array relationship */
  sessions: Array<DB_Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: DB_Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<DB_Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<DB_Sessions>;
  /** fetch data from the table: "supermarket_items" */
  supermarket_items: Array<DB_Supermarket_Items>;
  /** fetch aggregated fields from the table: "supermarket_items" */
  supermarket_items_aggregate: DB_Supermarket_Items_Aggregate;
  /** fetch data from the table: "supermarket_items" using primary key columns */
  supermarket_items_by_pk?: Maybe<DB_Supermarket_Items>;
  /** fetch data from the table in a streaming manner: "supermarket_items" */
  supermarket_items_stream: Array<DB_Supermarket_Items>;
  /** An array relationship */
  table_orders: Array<DB_Table_Orders>;
  /** An aggregate relationship */
  table_orders_aggregate: DB_Table_Orders_Aggregate;
  /** fetch data from the table: "table_orders" using primary key columns */
  table_orders_by_pk?: Maybe<DB_Table_Orders>;
  /** fetch data from the table in a streaming manner: "table_orders" */
  table_orders_stream: Array<DB_Table_Orders>;
  /** An array relationship */
  tables: Array<DB_Tables>;
  /** An aggregate relationship */
  tables_aggregate: DB_Tables_Aggregate;
  /** fetch data from the table: "tables" using primary key columns */
  tables_by_pk?: Maybe<DB_Tables>;
  /** fetch data from the table in a streaming manner: "tables" */
  tables_stream: Array<DB_Tables>;
  /** fetch data from the table: "users" */
  users: Array<DB_Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: DB_Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<DB_Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<DB_Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<DB_Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: DB_Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<DB_Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<DB_Verification_Tokens>;
};


export type DB_Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<DB_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Accounts_Order_By>>;
  where?: InputMaybe<DB_Accounts_Bool_Exp>;
};


export type DB_Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Accounts_Order_By>>;
  where?: InputMaybe<DB_Accounts_Bool_Exp>;
};


export type DB_Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Accounts_Bool_Exp>;
};


export type DB_Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<DB_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Categories_Order_By>>;
  where?: InputMaybe<DB_Categories_Bool_Exp>;
};


export type DB_Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Categories_Order_By>>;
  where?: InputMaybe<DB_Categories_Bool_Exp>;
};


export type DB_Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Categories_Bool_Exp>;
};


export type DB_Subscription_RootItemsArgs = {
  distinct_on?: InputMaybe<Array<DB_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Items_Order_By>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};


export type DB_Subscription_RootItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Items_Order_By>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};


export type DB_Subscription_RootItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootItems_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Items_Bool_Exp>;
};


export type DB_Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<DB_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Orders_Order_By>>;
  where?: InputMaybe<DB_Orders_Bool_Exp>;
};


export type DB_Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Orders_Order_By>>;
  where?: InputMaybe<DB_Orders_Bool_Exp>;
};


export type DB_Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Orders_Bool_Exp>;
};


export type DB_Subscription_RootRestaurant_AdministratorsArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurant_Administrators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurant_Administrators_Order_By>>;
  where?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
};


export type DB_Subscription_RootRestaurant_Administrators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurant_Administrators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurant_Administrators_Order_By>>;
  where?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
};


export type DB_Subscription_RootRestaurant_Administrators_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootRestaurant_Administrators_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Restaurant_Administrators_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Restaurant_Administrators_Bool_Exp>;
};


export type DB_Subscription_RootRestaurantsArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurants_Order_By>>;
  where?: InputMaybe<DB_Restaurants_Bool_Exp>;
};


export type DB_Subscription_RootRestaurants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Restaurants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Restaurants_Order_By>>;
  where?: InputMaybe<DB_Restaurants_Bool_Exp>;
};


export type DB_Subscription_RootRestaurants_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootRestaurants_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Restaurants_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Restaurants_Bool_Exp>;
};


export type DB_Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<DB_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Sessions_Order_By>>;
  where?: InputMaybe<DB_Sessions_Bool_Exp>;
};


export type DB_Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Sessions_Order_By>>;
  where?: InputMaybe<DB_Sessions_Bool_Exp>;
};


export type DB_Subscription_RootSessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Sessions_Bool_Exp>;
};


export type DB_Subscription_RootSupermarket_ItemsArgs = {
  distinct_on?: InputMaybe<Array<DB_Supermarket_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Supermarket_Items_Order_By>>;
  where?: InputMaybe<DB_Supermarket_Items_Bool_Exp>;
};


export type DB_Subscription_RootSupermarket_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Supermarket_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Supermarket_Items_Order_By>>;
  where?: InputMaybe<DB_Supermarket_Items_Bool_Exp>;
};


export type DB_Subscription_RootSupermarket_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootSupermarket_Items_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Supermarket_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Supermarket_Items_Bool_Exp>;
};


export type DB_Subscription_RootTable_OrdersArgs = {
  distinct_on?: InputMaybe<Array<DB_Table_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Table_Orders_Order_By>>;
  where?: InputMaybe<DB_Table_Orders_Bool_Exp>;
};


export type DB_Subscription_RootTable_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Table_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Table_Orders_Order_By>>;
  where?: InputMaybe<DB_Table_Orders_Bool_Exp>;
};


export type DB_Subscription_RootTable_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootTable_Orders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Table_Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Table_Orders_Bool_Exp>;
};


export type DB_Subscription_RootTablesArgs = {
  distinct_on?: InputMaybe<Array<DB_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Tables_Order_By>>;
  where?: InputMaybe<DB_Tables_Bool_Exp>;
};


export type DB_Subscription_RootTables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Tables_Order_By>>;
  where?: InputMaybe<DB_Tables_Bool_Exp>;
};


export type DB_Subscription_RootTables_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootTables_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Tables_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Tables_Bool_Exp>;
};


export type DB_Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<DB_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Users_Order_By>>;
  where?: InputMaybe<DB_Users_Bool_Exp>;
};


export type DB_Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Users_Order_By>>;
  where?: InputMaybe<DB_Users_Bool_Exp>;
};


export type DB_Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type DB_Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Users_Bool_Exp>;
};


export type DB_Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<DB_Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Verification_Tokens_Order_By>>;
  where?: InputMaybe<DB_Verification_Tokens_Bool_Exp>;
};


export type DB_Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Verification_Tokens_Order_By>>;
  where?: InputMaybe<DB_Verification_Tokens_Bool_Exp>;
};


export type DB_Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


export type DB_Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DB_Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<DB_Verification_Tokens_Bool_Exp>;
};

/** columns and relationships of "supermarket_items" */
export type DB_Supermarket_Items = {
  __typename?: 'supermarket_items';
  code: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  quantity_sold: Scalars['Int'];
  supplier: Scalars['String'];
};

/** aggregated selection of "supermarket_items" */
export type DB_Supermarket_Items_Aggregate = {
  __typename?: 'supermarket_items_aggregate';
  aggregate?: Maybe<DB_Supermarket_Items_Aggregate_Fields>;
  nodes: Array<DB_Supermarket_Items>;
};

/** aggregate fields of "supermarket_items" */
export type DB_Supermarket_Items_Aggregate_Fields = {
  __typename?: 'supermarket_items_aggregate_fields';
  avg?: Maybe<DB_Supermarket_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<DB_Supermarket_Items_Max_Fields>;
  min?: Maybe<DB_Supermarket_Items_Min_Fields>;
  stddev?: Maybe<DB_Supermarket_Items_Stddev_Fields>;
  stddev_pop?: Maybe<DB_Supermarket_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DB_Supermarket_Items_Stddev_Samp_Fields>;
  sum?: Maybe<DB_Supermarket_Items_Sum_Fields>;
  var_pop?: Maybe<DB_Supermarket_Items_Var_Pop_Fields>;
  var_samp?: Maybe<DB_Supermarket_Items_Var_Samp_Fields>;
  variance?: Maybe<DB_Supermarket_Items_Variance_Fields>;
};


/** aggregate fields of "supermarket_items" */
export type DB_Supermarket_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Supermarket_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type DB_Supermarket_Items_Avg_Fields = {
  __typename?: 'supermarket_items_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  quantity_sold?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supermarket_items". All fields are combined with a logical 'AND'. */
export type DB_Supermarket_Items_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Supermarket_Items_Bool_Exp>>;
  _not?: InputMaybe<DB_Supermarket_Items_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Supermarket_Items_Bool_Exp>>;
  code?: InputMaybe<DB_String_Comparison_Exp>;
  created_at?: InputMaybe<DB_Timestamptz_Comparison_Exp>;
  description?: InputMaybe<DB_String_Comparison_Exp>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  name?: InputMaybe<DB_String_Comparison_Exp>;
  price?: InputMaybe<DB_Int_Comparison_Exp>;
  quantity?: InputMaybe<DB_Int_Comparison_Exp>;
  quantity_sold?: InputMaybe<DB_Int_Comparison_Exp>;
  supplier?: InputMaybe<DB_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "supermarket_items" */
export type DB_Supermarket_Items_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'supermarket_items_pkey';

/** input type for incrementing numeric columns in table "supermarket_items" */
export type DB_Supermarket_Items_Inc_Input = {
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_sold?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "supermarket_items" */
export type DB_Supermarket_Items_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_sold?: InputMaybe<Scalars['Int']>;
  supplier?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DB_Supermarket_Items_Max_Fields = {
  __typename?: 'supermarket_items_max_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_sold?: Maybe<Scalars['Int']>;
  supplier?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type DB_Supermarket_Items_Min_Fields = {
  __typename?: 'supermarket_items_min_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_sold?: Maybe<Scalars['Int']>;
  supplier?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "supermarket_items" */
export type DB_Supermarket_Items_Mutation_Response = {
  __typename?: 'supermarket_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Supermarket_Items>;
};

/** on_conflict condition type for table "supermarket_items" */
export type DB_Supermarket_Items_On_Conflict = {
  constraint: DB_Supermarket_Items_Constraint;
  update_columns?: Array<DB_Supermarket_Items_Update_Column>;
  where?: InputMaybe<DB_Supermarket_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "supermarket_items". */
export type DB_Supermarket_Items_Order_By = {
  code?: InputMaybe<DB_Order_By>;
  created_at?: InputMaybe<DB_Order_By>;
  description?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  price?: InputMaybe<DB_Order_By>;
  quantity?: InputMaybe<DB_Order_By>;
  quantity_sold?: InputMaybe<DB_Order_By>;
  supplier?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: supermarket_items */
export type DB_Supermarket_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "supermarket_items" */
export type DB_Supermarket_Items_Select_Column =
/** column name */
   | 'code'
   /** column name */
   | 'created_at'
   /** column name */
   | 'description'
   /** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'price'
   /** column name */
   | 'quantity'
   /** column name */
   | 'quantity_sold'
   /** column name */
   | 'supplier';

/** input type for updating data in table "supermarket_items" */
export type DB_Supermarket_Items_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_sold?: InputMaybe<Scalars['Int']>;
  supplier?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type DB_Supermarket_Items_Stddev_Fields = {
  __typename?: 'supermarket_items_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  quantity_sold?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type DB_Supermarket_Items_Stddev_Pop_Fields = {
  __typename?: 'supermarket_items_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  quantity_sold?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type DB_Supermarket_Items_Stddev_Samp_Fields = {
  __typename?: 'supermarket_items_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  quantity_sold?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "supermarket_items" */
export type DB_Supermarket_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Supermarket_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Supermarket_Items_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_sold?: InputMaybe<Scalars['Int']>;
  supplier?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type DB_Supermarket_Items_Sum_Fields = {
  __typename?: 'supermarket_items_sum_fields';
  price?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_sold?: Maybe<Scalars['Int']>;
};

/** update columns of table "supermarket_items" */
export type DB_Supermarket_Items_Update_Column =
/** column name */
   | 'code'
   /** column name */
   | 'created_at'
   /** column name */
   | 'description'
   /** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'price'
   /** column name */
   | 'quantity'
   /** column name */
   | 'quantity_sold'
   /** column name */
   | 'supplier';

export type DB_Supermarket_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DB_Supermarket_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Supermarket_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Supermarket_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DB_Supermarket_Items_Var_Pop_Fields = {
  __typename?: 'supermarket_items_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  quantity_sold?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type DB_Supermarket_Items_Var_Samp_Fields = {
  __typename?: 'supermarket_items_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  quantity_sold?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type DB_Supermarket_Items_Variance_Fields = {
  __typename?: 'supermarket_items_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  quantity_sold?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "table_orders" */
export type DB_Table_Orders = {
  __typename?: 'table_orders';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  order_number?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<DB_Orders>;
  /** An aggregate relationship */
  orders_aggregate: DB_Orders_Aggregate;
  status: Scalars['String'];
  /** An object relationship */
  table?: Maybe<DB_Tables>;
  table_id?: Maybe<Scalars['uuid']>;
  tokens: Scalars['jsonb'];
};


/** columns and relationships of "table_orders" */
export type DB_Table_OrdersOrdersArgs = {
  distinct_on?: InputMaybe<Array<DB_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Orders_Order_By>>;
  where?: InputMaybe<DB_Orders_Bool_Exp>;
};


/** columns and relationships of "table_orders" */
export type DB_Table_OrdersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Orders_Order_By>>;
  where?: InputMaybe<DB_Orders_Bool_Exp>;
};


/** columns and relationships of "table_orders" */
export type DB_Table_OrdersTokensArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "table_orders" */
export type DB_Table_Orders_Aggregate = {
  __typename?: 'table_orders_aggregate';
  aggregate?: Maybe<DB_Table_Orders_Aggregate_Fields>;
  nodes: Array<DB_Table_Orders>;
};

export type DB_Table_Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<DB_Table_Orders_Aggregate_Bool_Exp_Count>;
};

export type DB_Table_Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DB_Table_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Table_Orders_Bool_Exp>;
  predicate: DB_Int_Comparison_Exp;
};

/** aggregate fields of "table_orders" */
export type DB_Table_Orders_Aggregate_Fields = {
  __typename?: 'table_orders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DB_Table_Orders_Max_Fields>;
  min?: Maybe<DB_Table_Orders_Min_Fields>;
};


/** aggregate fields of "table_orders" */
export type DB_Table_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Table_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "table_orders" */
export type DB_Table_Orders_Aggregate_Order_By = {
  count?: InputMaybe<DB_Order_By>;
  max?: InputMaybe<DB_Table_Orders_Max_Order_By>;
  min?: InputMaybe<DB_Table_Orders_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type DB_Table_Orders_Append_Input = {
  tokens?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "table_orders" */
export type DB_Table_Orders_Arr_Rel_Insert_Input = {
  data: Array<DB_Table_Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Table_Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "table_orders". All fields are combined with a logical 'AND'. */
export type DB_Table_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Table_Orders_Bool_Exp>>;
  _not?: InputMaybe<DB_Table_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Table_Orders_Bool_Exp>>;
  created_at?: InputMaybe<DB_Timestamptz_Comparison_Exp>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  order_number?: InputMaybe<DB_String_Comparison_Exp>;
  orders?: InputMaybe<DB_Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<DB_Orders_Aggregate_Bool_Exp>;
  status?: InputMaybe<DB_String_Comparison_Exp>;
  table?: InputMaybe<DB_Tables_Bool_Exp>;
  table_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  tokens?: InputMaybe<DB_Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "table_orders" */
export type DB_Table_Orders_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'table_orders_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type DB_Table_Orders_Delete_At_Path_Input = {
  tokens?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type DB_Table_Orders_Delete_Elem_Input = {
  tokens?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type DB_Table_Orders_Delete_Key_Input = {
  tokens?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "table_orders" */
export type DB_Table_Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_number?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<DB_Orders_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<DB_Tables_Obj_Rel_Insert_Input>;
  table_id?: InputMaybe<Scalars['uuid']>;
  tokens?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type DB_Table_Orders_Max_Fields = {
  __typename?: 'table_orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  table_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "table_orders" */
export type DB_Table_Orders_Max_Order_By = {
  created_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  order_number?: InputMaybe<DB_Order_By>;
  status?: InputMaybe<DB_Order_By>;
  table_id?: InputMaybe<DB_Order_By>;
};

/** aggregate min on columns */
export type DB_Table_Orders_Min_Fields = {
  __typename?: 'table_orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  table_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "table_orders" */
export type DB_Table_Orders_Min_Order_By = {
  created_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  order_number?: InputMaybe<DB_Order_By>;
  status?: InputMaybe<DB_Order_By>;
  table_id?: InputMaybe<DB_Order_By>;
};

/** response of any mutation on the table "table_orders" */
export type DB_Table_Orders_Mutation_Response = {
  __typename?: 'table_orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Table_Orders>;
};

/** input type for inserting object relation for remote table "table_orders" */
export type DB_Table_Orders_Obj_Rel_Insert_Input = {
  data: DB_Table_Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Table_Orders_On_Conflict>;
};

/** on_conflict condition type for table "table_orders" */
export type DB_Table_Orders_On_Conflict = {
  constraint: DB_Table_Orders_Constraint;
  update_columns?: Array<DB_Table_Orders_Update_Column>;
  where?: InputMaybe<DB_Table_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "table_orders". */
export type DB_Table_Orders_Order_By = {
  created_at?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  order_number?: InputMaybe<DB_Order_By>;
  orders_aggregate?: InputMaybe<DB_Orders_Aggregate_Order_By>;
  status?: InputMaybe<DB_Order_By>;
  table?: InputMaybe<DB_Tables_Order_By>;
  table_id?: InputMaybe<DB_Order_By>;
  tokens?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: table_orders */
export type DB_Table_Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type DB_Table_Orders_Prepend_Input = {
  tokens?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "table_orders" */
export type DB_Table_Orders_Select_Column =
/** column name */
   | 'created_at'
   /** column name */
   | 'id'
   /** column name */
   | 'order_number'
   /** column name */
   | 'status'
   /** column name */
   | 'table_id'
   /** column name */
   | 'tokens';

/** input type for updating data in table "table_orders" */
export type DB_Table_Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_number?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  table_id?: InputMaybe<Scalars['uuid']>;
  tokens?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "table_orders" */
export type DB_Table_Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Table_Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Table_Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_number?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  table_id?: InputMaybe<Scalars['uuid']>;
  tokens?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "table_orders" */
export type DB_Table_Orders_Update_Column =
/** column name */
   | 'created_at'
   /** column name */
   | 'id'
   /** column name */
   | 'order_number'
   /** column name */
   | 'status'
   /** column name */
   | 'table_id'
   /** column name */
   | 'tokens';

export type DB_Table_Orders_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<DB_Table_Orders_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<DB_Table_Orders_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<DB_Table_Orders_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<DB_Table_Orders_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<DB_Table_Orders_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Table_Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Table_Orders_Bool_Exp;
};

/** columns and relationships of "tables" */
export type DB_Tables = {
  __typename?: 'tables';
  id: Scalars['uuid'];
  name: Scalars['String'];
  no_of_chairs: Scalars['Int'];
  order: Scalars['Int'];
  qr_codes?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  restaurant: DB_Restaurants;
  restaurant_id: Scalars['uuid'];
  /** An array relationship */
  table_orders: Array<DB_Table_Orders>;
  /** An aggregate relationship */
  table_orders_aggregate: DB_Table_Orders_Aggregate;
};


/** columns and relationships of "tables" */
export type DB_TablesQr_CodesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tables" */
export type DB_TablesTable_OrdersArgs = {
  distinct_on?: InputMaybe<Array<DB_Table_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Table_Orders_Order_By>>;
  where?: InputMaybe<DB_Table_Orders_Bool_Exp>;
};


/** columns and relationships of "tables" */
export type DB_TablesTable_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Table_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Table_Orders_Order_By>>;
  where?: InputMaybe<DB_Table_Orders_Bool_Exp>;
};

/** aggregated selection of "tables" */
export type DB_Tables_Aggregate = {
  __typename?: 'tables_aggregate';
  aggregate?: Maybe<DB_Tables_Aggregate_Fields>;
  nodes: Array<DB_Tables>;
};

export type DB_Tables_Aggregate_Bool_Exp = {
  count?: InputMaybe<DB_Tables_Aggregate_Bool_Exp_Count>;
};

export type DB_Tables_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DB_Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DB_Tables_Bool_Exp>;
  predicate: DB_Int_Comparison_Exp;
};

/** aggregate fields of "tables" */
export type DB_Tables_Aggregate_Fields = {
  __typename?: 'tables_aggregate_fields';
  avg?: Maybe<DB_Tables_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<DB_Tables_Max_Fields>;
  min?: Maybe<DB_Tables_Min_Fields>;
  stddev?: Maybe<DB_Tables_Stddev_Fields>;
  stddev_pop?: Maybe<DB_Tables_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<DB_Tables_Stddev_Samp_Fields>;
  sum?: Maybe<DB_Tables_Sum_Fields>;
  var_pop?: Maybe<DB_Tables_Var_Pop_Fields>;
  var_samp?: Maybe<DB_Tables_Var_Samp_Fields>;
  variance?: Maybe<DB_Tables_Variance_Fields>;
};


/** aggregate fields of "tables" */
export type DB_Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tables" */
export type DB_Tables_Aggregate_Order_By = {
  avg?: InputMaybe<DB_Tables_Avg_Order_By>;
  count?: InputMaybe<DB_Order_By>;
  max?: InputMaybe<DB_Tables_Max_Order_By>;
  min?: InputMaybe<DB_Tables_Min_Order_By>;
  stddev?: InputMaybe<DB_Tables_Stddev_Order_By>;
  stddev_pop?: InputMaybe<DB_Tables_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<DB_Tables_Stddev_Samp_Order_By>;
  sum?: InputMaybe<DB_Tables_Sum_Order_By>;
  var_pop?: InputMaybe<DB_Tables_Var_Pop_Order_By>;
  var_samp?: InputMaybe<DB_Tables_Var_Samp_Order_By>;
  variance?: InputMaybe<DB_Tables_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type DB_Tables_Append_Input = {
  qr_codes?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "tables" */
export type DB_Tables_Arr_Rel_Insert_Input = {
  data: Array<DB_Tables_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Tables_On_Conflict>;
};

/** aggregate avg on columns */
export type DB_Tables_Avg_Fields = {
  __typename?: 'tables_avg_fields';
  no_of_chairs?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tables" */
export type DB_Tables_Avg_Order_By = {
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
};

/** Boolean expression to filter rows from the table "tables". All fields are combined with a logical 'AND'. */
export type DB_Tables_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Tables_Bool_Exp>>;
  _not?: InputMaybe<DB_Tables_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Tables_Bool_Exp>>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  name?: InputMaybe<DB_String_Comparison_Exp>;
  no_of_chairs?: InputMaybe<DB_Int_Comparison_Exp>;
  order?: InputMaybe<DB_Int_Comparison_Exp>;
  qr_codes?: InputMaybe<DB_Jsonb_Comparison_Exp>;
  restaurant?: InputMaybe<DB_Restaurants_Bool_Exp>;
  restaurant_id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  table_orders?: InputMaybe<DB_Table_Orders_Bool_Exp>;
  table_orders_aggregate?: InputMaybe<DB_Table_Orders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tables" */
export type DB_Tables_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'tables_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type DB_Tables_Delete_At_Path_Input = {
  qr_codes?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type DB_Tables_Delete_Elem_Input = {
  qr_codes?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type DB_Tables_Delete_Key_Input = {
  qr_codes?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "tables" */
export type DB_Tables_Inc_Input = {
  no_of_chairs?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tables" */
export type DB_Tables_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  no_of_chairs?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  qr_codes?: InputMaybe<Scalars['jsonb']>;
  restaurant?: InputMaybe<DB_Restaurants_Obj_Rel_Insert_Input>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
  table_orders?: InputMaybe<DB_Table_Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type DB_Tables_Max_Fields = {
  __typename?: 'tables_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  no_of_chairs?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tables" */
export type DB_Tables_Max_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
};

/** aggregate min on columns */
export type DB_Tables_Min_Fields = {
  __typename?: 'tables_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  no_of_chairs?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tables" */
export type DB_Tables_Min_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
};

/** response of any mutation on the table "tables" */
export type DB_Tables_Mutation_Response = {
  __typename?: 'tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Tables>;
};

/** input type for inserting object relation for remote table "tables" */
export type DB_Tables_Obj_Rel_Insert_Input = {
  data: DB_Tables_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Tables_On_Conflict>;
};

/** on_conflict condition type for table "tables" */
export type DB_Tables_On_Conflict = {
  constraint: DB_Tables_Constraint;
  update_columns?: Array<DB_Tables_Update_Column>;
  where?: InputMaybe<DB_Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "tables". */
export type DB_Tables_Order_By = {
  id?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
  qr_codes?: InputMaybe<DB_Order_By>;
  restaurant?: InputMaybe<DB_Restaurants_Order_By>;
  restaurant_id?: InputMaybe<DB_Order_By>;
  table_orders_aggregate?: InputMaybe<DB_Table_Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: tables */
export type DB_Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type DB_Tables_Prepend_Input = {
  qr_codes?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "tables" */
export type DB_Tables_Select_Column =
/** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'no_of_chairs'
   /** column name */
   | 'order'
   /** column name */
   | 'qr_codes'
   /** column name */
   | 'restaurant_id';

/** input type for updating data in table "tables" */
export type DB_Tables_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  no_of_chairs?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  qr_codes?: InputMaybe<Scalars['jsonb']>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type DB_Tables_Stddev_Fields = {
  __typename?: 'tables_stddev_fields';
  no_of_chairs?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tables" */
export type DB_Tables_Stddev_Order_By = {
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_pop on columns */
export type DB_Tables_Stddev_Pop_Fields = {
  __typename?: 'tables_stddev_pop_fields';
  no_of_chairs?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tables" */
export type DB_Tables_Stddev_Pop_Order_By = {
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
};

/** aggregate stddev_samp on columns */
export type DB_Tables_Stddev_Samp_Fields = {
  __typename?: 'tables_stddev_samp_fields';
  no_of_chairs?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tables" */
export type DB_Tables_Stddev_Samp_Order_By = {
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
};

/** Streaming cursor of the table "tables" */
export type DB_Tables_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Tables_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Tables_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  no_of_chairs?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  qr_codes?: InputMaybe<Scalars['jsonb']>;
  restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type DB_Tables_Sum_Fields = {
  __typename?: 'tables_sum_fields';
  no_of_chairs?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tables" */
export type DB_Tables_Sum_Order_By = {
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
};

/** update columns of table "tables" */
export type DB_Tables_Update_Column =
/** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'no_of_chairs'
   /** column name */
   | 'order'
   /** column name */
   | 'qr_codes'
   /** column name */
   | 'restaurant_id';

export type DB_Tables_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<DB_Tables_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<DB_Tables_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<DB_Tables_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<DB_Tables_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DB_Tables_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<DB_Tables_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Tables_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Tables_Bool_Exp;
};

/** aggregate var_pop on columns */
export type DB_Tables_Var_Pop_Fields = {
  __typename?: 'tables_var_pop_fields';
  no_of_chairs?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tables" */
export type DB_Tables_Var_Pop_Order_By = {
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
};

/** aggregate var_samp on columns */
export type DB_Tables_Var_Samp_Fields = {
  __typename?: 'tables_var_samp_fields';
  no_of_chairs?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tables" */
export type DB_Tables_Var_Samp_Order_By = {
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
};

/** aggregate variance on columns */
export type DB_Tables_Variance_Fields = {
  __typename?: 'tables_variance_fields';
  no_of_chairs?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tables" */
export type DB_Tables_Variance_Order_By = {
  no_of_chairs?: InputMaybe<DB_Order_By>;
  order?: InputMaybe<DB_Order_By>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type DB_Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type DB_Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<DB_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: DB_Accounts_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  /** An array relationship */
  sessions: Array<DB_Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: DB_Sessions_Aggregate;
};


/** columns and relationships of "users" */
export type DB_UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<DB_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Accounts_Order_By>>;
  where?: InputMaybe<DB_Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type DB_UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Accounts_Order_By>>;
  where?: InputMaybe<DB_Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type DB_UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<DB_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Sessions_Order_By>>;
  where?: InputMaybe<DB_Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type DB_UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DB_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DB_Sessions_Order_By>>;
  where?: InputMaybe<DB_Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type DB_Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<DB_Users_Aggregate_Fields>;
  nodes: Array<DB_Users>;
};

/** aggregate fields of "users" */
export type DB_Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DB_Users_Max_Fields>;
  min?: Maybe<DB_Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type DB_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type DB_Users_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Users_Bool_Exp>>;
  _not?: InputMaybe<DB_Users_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Users_Bool_Exp>>;
  accounts?: InputMaybe<DB_Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<DB_Accounts_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<DB_Timestamptz_Comparison_Exp>;
  email?: InputMaybe<DB_String_Comparison_Exp>;
  emailVerified?: InputMaybe<DB_Timestamptz_Comparison_Exp>;
  id?: InputMaybe<DB_Uuid_Comparison_Exp>;
  image?: InputMaybe<DB_String_Comparison_Exp>;
  name?: InputMaybe<DB_String_Comparison_Exp>;
  role?: InputMaybe<DB_String_Comparison_Exp>;
  sessions?: InputMaybe<DB_Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<DB_Sessions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type DB_Users_Constraint =
/** unique or primary key constraint on columns "email" */
   | 'users_email_key'
   /** unique or primary key constraint on columns "id" */
   | 'users_pkey';

/** input type for inserting data into table "users" */
export type DB_Users_Insert_Input = {
  accounts?: InputMaybe<DB_Accounts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<DB_Sessions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type DB_Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type DB_Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type DB_Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Users>;
};

/** input type for inserting object relation for remote table "users" */
export type DB_Users_Obj_Rel_Insert_Input = {
  data: DB_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<DB_Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type DB_Users_On_Conflict = {
  constraint: DB_Users_Constraint;
  update_columns?: Array<DB_Users_Update_Column>;
  where?: InputMaybe<DB_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type DB_Users_Order_By = {
  accounts_aggregate?: InputMaybe<DB_Accounts_Aggregate_Order_By>;
  created_at?: InputMaybe<DB_Order_By>;
  email?: InputMaybe<DB_Order_By>;
  emailVerified?: InputMaybe<DB_Order_By>;
  id?: InputMaybe<DB_Order_By>;
  image?: InputMaybe<DB_Order_By>;
  name?: InputMaybe<DB_Order_By>;
  role?: InputMaybe<DB_Order_By>;
  sessions_aggregate?: InputMaybe<DB_Sessions_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type DB_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export type DB_Users_Select_Column =
/** column name */
   | 'created_at'
   /** column name */
   | 'email'
   /** column name */
   | 'emailVerified'
   /** column name */
   | 'id'
   /** column name */
   | 'image'
   /** column name */
   | 'name'
   /** column name */
   | 'role';

/** input type for updating data in table "users" */
export type DB_Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type DB_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export type DB_Users_Update_Column =
/** column name */
   | 'created_at'
   /** column name */
   | 'email'
   /** column name */
   | 'emailVerified'
   /** column name */
   | 'id'
   /** column name */
   | 'image'
   /** column name */
   | 'name'
   /** column name */
   | 'role';

export type DB_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type DB_Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_tokens" */
export type DB_Verification_Tokens = {
  __typename?: 'verification_tokens';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier: Scalars['String'];
  token: Scalars['String'];
};

/** aggregated selection of "verification_tokens" */
export type DB_Verification_Tokens_Aggregate = {
  __typename?: 'verification_tokens_aggregate';
  aggregate?: Maybe<DB_Verification_Tokens_Aggregate_Fields>;
  nodes: Array<DB_Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type DB_Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DB_Verification_Tokens_Max_Fields>;
  min?: Maybe<DB_Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "verification_tokens" */
export type DB_Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DB_Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type DB_Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<DB_Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<DB_Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<DB_Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<DB_Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<DB_String_Comparison_Exp>;
  token?: InputMaybe<DB_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export type DB_Verification_Tokens_Constraint =
/** unique or primary key constraint on columns "token" */
   | 'verification_tokens_pkey';

/** input type for inserting data into table "verification_tokens" */
export type DB_Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DB_Verification_Tokens_Max_Fields = {
  __typename?: 'verification_tokens_max_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type DB_Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "verification_tokens" */
export type DB_Verification_Tokens_Mutation_Response = {
  __typename?: 'verification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DB_Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type DB_Verification_Tokens_On_Conflict = {
  constraint: DB_Verification_Tokens_Constraint;
  update_columns?: Array<DB_Verification_Tokens_Update_Column>;
  where?: InputMaybe<DB_Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type DB_Verification_Tokens_Order_By = {
  expires?: InputMaybe<DB_Order_By>;
  identifier?: InputMaybe<DB_Order_By>;
  token?: InputMaybe<DB_Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type DB_Verification_Tokens_Pk_Columns_Input = {
  token: Scalars['String'];
};

/** select columns of table "verification_tokens" */
export type DB_Verification_Tokens_Select_Column =
/** column name */
   | 'expires'
   /** column name */
   | 'identifier'
   /** column name */
   | 'token';

/** input type for updating data in table "verification_tokens" */
export type DB_Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type DB_Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DB_Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<DB_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DB_Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verification_tokens" */
export type DB_Verification_Tokens_Update_Column =
/** column name */
   | 'expires'
   /** column name */
   | 'identifier'
   /** column name */
   | 'token';

export type DB_Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DB_Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: DB_Verification_Tokens_Bool_Exp;
};

export type DB_GetCategoriesQueryVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_GetCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, name: string, restaurant_id: any, order: number }> };

export type DB_SubscribeCategoriesSubscriptionVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_SubscribeCategoriesSubscription = { __typename?: 'subscription_root', categories: Array<{ __typename?: 'categories', id: any, name: string, restaurant_id: any, order: number }> };

export type DB_GetHomePageCategoriesQueryVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_GetHomePageCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, name: string, restaurant_id: any, items: Array<{ __typename?: 'items', available: boolean, category_id?: any | null, choices: any, description?: string | null, id: any, images: any, name: string, price: number, allergens?: any | null, restaurant_id: any, variations: any, created_at: any }> }> };

export type DB_GetCategoryQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_GetCategoryQuery = { __typename?: 'query_root', categories_by_pk?: { __typename?: 'categories', id: any, name: string, restaurant_id: any, order: number } | null };

export type DB_CreateCategoryMutationVariables = Exact<{
  name: Scalars['String'];
  restaurant_id: Scalars['uuid'];
  order: Scalars['Int'];
}>;


export type DB_CreateCategoryMutation = { __typename?: 'mutation_root', insert_categories_one?: { __typename?: 'categories', id: any } | null };

export type DB_UpdateCategoryMutationVariables = Exact<{
  id: Scalars['uuid'];
  name: Scalars['String'];
}>;


export type DB_UpdateCategoryMutation = { __typename?: 'mutation_root', update_categories_by_pk?: { __typename?: 'categories', id: any, name: string, restaurant_id: any, order: number } | null };

export type DB_UpdateCategoryOrderMutationVariables = Exact<{
  order: Array<DB_Categories_Updates> | DB_Categories_Updates;
}>;


export type DB_UpdateCategoryOrderMutation = { __typename?: 'mutation_root', update_categories_many?: Array<{ __typename?: 'categories_mutation_response', affected_rows: number } | null> | null };

export type DB_DeleteCategoryMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_DeleteCategoryMutation = { __typename?: 'mutation_root', delete_categories_by_pk?: { __typename?: 'categories', id: any } | null, update_items?: { __typename?: 'items_mutation_response', affected_rows: number } | null };

export type DB_ItemFragmentFragment = { __typename?: 'items', available: boolean, category_id?: any | null, choices: any, description?: string | null, id: any, images: any, name: string, price: number, allergens?: any | null, restaurant_id: any, variations: any, created_at: any };

export type DB_GetItemsQueryVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_GetItemsQuery = { __typename?: 'query_root', items: Array<{ __typename?: 'items', available: boolean, category_id?: any | null, choices: any, description?: string | null, id: any, images: any, name: string, price: number, allergens?: any | null, restaurant_id: any, variations: any, created_at: any }> };

export type DB_SubscribeItemsSubscriptionVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_SubscribeItemsSubscription = { __typename?: 'subscription_root', items: Array<{ __typename?: 'items', available: boolean, category_id?: any | null, choices: any, description?: string | null, id: any, images: any, name: string, price: number, allergens?: any | null, restaurant_id: any, variations: any, created_at: any }> };

export type DB_GetItemQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_GetItemQuery = { __typename?: 'query_root', items_by_pk?: { __typename?: 'items', available: boolean, category_id?: any | null, choices: any, description?: string | null, id: any, images: any, name: string, price: number, allergens?: any | null, restaurant_id: any, variations: any, created_at: any } | null };

export type DB_CreateItemMutationVariables = Exact<{
  available: Scalars['Boolean'];
  category_id: Scalars['uuid'];
  choices: Scalars['jsonb'];
  description?: InputMaybe<Scalars['String']>;
  images: Scalars['jsonb'];
  name: Scalars['String'];
  price: Scalars['Int'];
  allergens: Scalars['jsonb'];
  restaurant_id: Scalars['uuid'];
  variations: Scalars['jsonb'];
}>;


export type DB_CreateItemMutation = { __typename?: 'mutation_root', insert_items_one?: { __typename?: 'items', available: boolean, category_id?: any | null, choices: any, description?: string | null, id: any, images: any, name: string, price: number, allergens?: any | null, restaurant_id: any, variations: any, created_at: any } | null };

export type DB_UpdateItemMutationVariables = Exact<{
  id: Scalars['uuid'];
  available: Scalars['Boolean'];
  category_id: Scalars['uuid'];
  choices: Scalars['jsonb'];
  description?: InputMaybe<Scalars['String']>;
  images: Scalars['jsonb'];
  name: Scalars['String'];
  price: Scalars['Int'];
  allergens: Scalars['jsonb'];
  variations: Scalars['jsonb'];
}>;


export type DB_UpdateItemMutation = { __typename?: 'mutation_root', update_items_by_pk?: { __typename?: 'items', available: boolean, category_id?: any | null, choices: any, description?: string | null, id: any, images: any, name: string, price: number, allergens?: any | null, restaurant_id: any, variations: any, created_at: any } | null };

export type DB_DeleteItemMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_DeleteItemMutation = { __typename?: 'mutation_root', delete_items_by_pk?: { __typename?: 'items', id: any } | null };

export type DB_OrderFragmentFragment = { __typename?: 'orders', chair_number: number, created_at: any, id: any, items?: any | null, subtotal: number, table_order_id: any, total: number, total_tax: number };

export type DB_GetOrderQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_GetOrderQuery = { __typename?: 'query_root', orders_by_pk?: { __typename?: 'orders', chair_number: number, created_at: any, id: any, items?: any | null, subtotal: number, table_order_id: any, total: number, total_tax: number, table_order: { __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, order_number?: string | null, table_id?: any | null, table?: { __typename?: 'tables', name: string } | null } } | null };

export type DB_CreateOrdersMutationVariables = Exact<{
  chair_number: Scalars['Int'];
  items: Scalars['jsonb'];
  subtotal: Scalars['Int'];
  total: Scalars['Int'];
  total_tax: Scalars['Int'];
  table_order_id: Scalars['uuid'];
}>;


export type DB_CreateOrdersMutation = { __typename?: 'mutation_root', insert_orders?: { __typename?: 'orders_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'orders', chair_number: number, created_at: any, id: any, items?: any | null, subtotal: number, table_order_id: any, total: number, total_tax: number }> } | null };

export type DB_CreateRestaurantMutationVariables = Exact<{
  slug: Scalars['String'];
  name: Scalars['String'];
  owner_id: Scalars['uuid'];
  description?: InputMaybe<Scalars['String']>;
  customization: Scalars['jsonb'];
}>;


export type DB_CreateRestaurantMutation = { __typename?: 'mutation_root', insert_restaurants_one?: { __typename?: 'restaurants', id: any, slug: string } | null };

export type DB_GetRestaurantBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type DB_GetRestaurantBySlugQuery = { __typename?: 'query_root', restaurants: Array<{ __typename?: 'restaurants', id: any, description?: string | null, customization: any, name: string, owner_id: any, slug: string }> };

export type DB_GetRestaurantByOwnerIdQueryVariables = Exact<{
  owner_id: Scalars['uuid'];
}>;


export type DB_GetRestaurantByOwnerIdQuery = { __typename?: 'query_root', restaurants: Array<{ __typename?: 'restaurants', id: any, description?: string | null, customization: any, name: string, owner_id: any, slug: string }> };

export type DB_GetRestaurantByAdministratorIdQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type DB_GetRestaurantByAdministratorIdQuery = { __typename?: 'query_root', restaurant_administrators: Array<{ __typename?: 'restaurant_administrators', id: any, user_id: any, restaurant_id: any, restaurant: { __typename?: 'restaurants', id: any, description?: string | null, customization: any, name: string, owner_id: any, slug: string } }> };

export type DB_UpdateRestaurantThemeMutationVariables = Exact<{
  id: Scalars['uuid'];
  customization: Scalars['jsonb'];
}>;


export type DB_UpdateRestaurantThemeMutation = { __typename?: 'mutation_root', update_restaurants_by_pk?: { __typename?: 'restaurants', customization: any } | null };

export type DB_UpdateRestaurantDetailsMutationVariables = Exact<{
  id: Scalars['uuid'];
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type DB_UpdateRestaurantDetailsMutation = { __typename?: 'mutation_root', update_restaurants_by_pk?: { __typename?: 'restaurants', customization: any } | null };

export type DB_TableOrderFragmentFragment = { __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, order_number?: string | null, table_id?: any | null, table?: { __typename?: 'tables', name: string } | null };

export type DB_GetTableOrdersQueryVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_GetTableOrdersQuery = { __typename?: 'query_root', table_orders: Array<{ __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, order_number?: string | null, table_id?: any | null, table?: { __typename?: 'tables', name: string } | null }> };

export type DB_GetTableOrderQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_GetTableOrderQuery = { __typename?: 'query_root', table_orders_by_pk?: { __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, order_number?: string | null, table_id?: any | null, table?: { __typename?: 'tables', name: string, id: any, no_of_chairs: number, restaurant_id: any, order: number } | null, orders: Array<{ __typename?: 'orders', chair_number: number, created_at: any, id: any, items?: any | null, subtotal: number, table_order_id: any, total: number, total_tax: number }> } | null };

export type DB_SubscribeTableOrderSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_SubscribeTableOrderSubscription = { __typename?: 'subscription_root', table_orders_by_pk?: { __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, order_number?: string | null, table_id?: any | null, table?: { __typename?: 'tables', name: string, id: any, no_of_chairs: number, restaurant_id: any, order: number } | null, orders: Array<{ __typename?: 'orders', chair_number: number, created_at: any, id: any, items?: any | null, subtotal: number, table_order_id: any, total: number, total_tax: number }> } | null };

export type DB_CreateTableOrderMutationVariables = Exact<{
  status: Scalars['String'];
  table_id: Scalars['uuid'];
  tokens: Scalars['jsonb'];
  order_number: Scalars['String'];
}>;


export type DB_CreateTableOrderMutation = { __typename?: 'mutation_root', insert_table_orders_one?: { __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, table_id?: any | null, order_number?: string | null } | null };

export type DB_GetLatestTableOrderByTableIdQueryVariables = Exact<{
  table_id: Scalars['uuid'];
}>;


export type DB_GetLatestTableOrderByTableIdQuery = { __typename?: 'query_root', table_orders: Array<{ __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, table_id?: any | null, order_number?: string | null, table?: { __typename?: 'tables', no_of_chairs: number, name: string } | null }> };

export type DB_TableFragmentFragment = { __typename?: 'tables', id: any, no_of_chairs: number, restaurant_id: any, name: string, order: number };

export type DB_GetTablesQueryVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_GetTablesQuery = { __typename?: 'query_root', tables: Array<{ __typename?: 'tables', id: any, no_of_chairs: number, restaurant_id: any, name: string, order: number }> };

export type DB_GetTableInfoQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_GetTableInfoQuery = { __typename?: 'query_root', tables_by_pk?: { __typename?: 'tables', id: any, no_of_chairs: number, restaurant_id: any, name: string, order: number } | null };

export type DB_GetTableQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_GetTableQuery = { __typename?: 'query_root', tables_by_pk?: { __typename?: 'tables', id: any, no_of_chairs: number, restaurant_id: any, name: string, order: number, table_orders: Array<{ __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, order_number?: string | null, table_id?: any | null, orders: Array<{ __typename?: 'orders', chair_number: number, created_at: any, id: any, items?: any | null, subtotal: number, table_order_id: any, total: number, total_tax: number }>, table?: { __typename?: 'tables', name: string } | null }> } | null };

export type DB_SubscribeTablesSubscriptionVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_SubscribeTablesSubscription = { __typename?: 'subscription_root', tables: Array<{ __typename?: 'tables', id: any, no_of_chairs: number, restaurant_id: any, name: string, order: number }> };

export type DB_CreateTableMutationVariables = Exact<{
  no_of_chairs: Scalars['Int'];
  qr_codes?: InputMaybe<Scalars['jsonb']>;
  restaurant_id: Scalars['uuid'];
  name: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
}>;


export type DB_CreateTableMutation = { __typename?: 'mutation_root', insert_tables_one?: { __typename?: 'tables', id: any } | null };

export type DB_UpdateTableMutationVariables = Exact<{
  id: Scalars['uuid'];
  no_of_chairs: Scalars['Int'];
  name: Scalars['String'];
  qr_codes?: InputMaybe<Scalars['jsonb']>;
  order?: InputMaybe<Scalars['Int']>;
}>;


export type DB_UpdateTableMutation = { __typename?: 'mutation_root', update_tables_by_pk?: { __typename?: 'tables', id: any } | null };

export type DB_UpdateTableOrderMutationVariables = Exact<{
  order: Array<DB_Tables_Updates> | DB_Tables_Updates;
}>;


export type DB_UpdateTableOrderMutation = { __typename?: 'mutation_root', update_tables_many?: Array<{ __typename?: 'tables_mutation_response', affected_rows: number } | null> | null };

export type DB_DeleteTableMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_DeleteTableMutation = { __typename?: 'mutation_root', delete_tables_by_pk?: { __typename?: 'tables', id: any } | null, update_table_orders?: { __typename?: 'table_orders_mutation_response', affected_rows: number } | null };

export type DB_SubscribeTableOrdersSubscriptionVariables = Exact<{
  restaurant_id: Scalars['uuid'];
}>;


export type DB_SubscribeTableOrdersSubscription = { __typename?: 'subscription_root', table_orders: Array<{ __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, table_id?: any | null, order_number?: string | null, table?: { __typename?: 'tables', name: string } | null }> };

export type DB_GetLatestTableOrderQueryVariables = Exact<{
  table_id: Scalars['uuid'];
}>;


export type DB_GetLatestTableOrderQuery = { __typename?: 'query_root', table_orders: Array<{ __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, table_id?: any | null, table?: { __typename?: 'tables', no_of_chairs: number, name: string } | null }> };

export type DB_GetTableOrderInfoQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_GetTableOrderInfoQuery = { __typename?: 'query_root', table_orders: Array<{ __typename?: 'table_orders', id: any, created_at: any, status: string, tokens: any, table_id?: any | null, table?: { __typename?: 'tables', no_of_chairs: number, name: string } | null }> };

export type DB_GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DB_GetUserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', created_at?: any | null, email?: string | null, emailVerified?: any | null, id: any, image?: string | null, name?: string | null, role?: string | null } | null };

export type DB_UpdateUserProfilePictureMutationVariables = Exact<{
  id: Scalars['uuid'];
  image: Scalars['String'];
}>;


export type DB_UpdateUserProfilePictureMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type DB_UpdateUserDetailsMutationVariables = Exact<{
  id: Scalars['uuid'];
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type DB_UpdateUserDetailsMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export const ItemFragmentFragmentDoc = `
    fragment ItemFragment on items {
  available
  category_id
  choices
  description
  id
  images
  name
  price
  allergens
  restaurant_id
  variations
  created_at
}
    `;
export const OrderFragmentFragmentDoc = `
    fragment OrderFragment on orders {
  chair_number
  created_at
  id
  items
  subtotal
  table_order_id
  total
  total_tax
}
    `;
export const TableOrderFragmentFragmentDoc = `
    fragment TableOrderFragment on table_orders {
  id
  created_at
  status
  tokens
  order_number
  table_id
  table {
    name
  }
}
    `;
export const TableFragmentFragmentDoc = `
    fragment TableFragment on tables {
  id
  no_of_chairs
  restaurant_id
  name
  order
}
    `
export const GetCategoriesDocument = `
    query GetCategories($restaurant_id: uuid!) {
  categories(
    order_by: {order: asc}
    where: {restaurant_id: {_eq: $restaurant_id}}
  ) {
    id
    name
    restaurant_id
    order
  }
}
    `
export const useGetCategoriesQuery = <
   TData = DB_GetCategoriesQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetCategoriesQueryVariables,
   options?: UseQueryOptions<DB_GetCategoriesQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetCategoriesQuery, TError, TData>(
      ['GetCategories', variables],
      fetcher<DB_GetCategoriesQuery, DB_GetCategoriesQueryVariables>(client, GetCategoriesDocument, variables, headers),
      options,
   )
export const SubscribeCategoriesDocument = `
    subscription SubscribeCategories($restaurant_id: uuid!) {
  categories(where: {restaurant_id: {_eq: $restaurant_id}}) {
    id
    name
    restaurant_id
    order
  }
}
    `
export const GetHomePageCategoriesDocument = `
    query GetHomePageCategories($restaurant_id: uuid!) {
  categories(
    order_by: {order: asc}
    where: {restaurant_id: {_eq: $restaurant_id}}
  ) {
    id
    name
    restaurant_id
    items(where: {available: {_eq: true}}) {
      ...ItemFragment
    }
  }
}
    ${ItemFragmentFragmentDoc}`
export const useGetHomePageCategoriesQuery = <
   TData = DB_GetHomePageCategoriesQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetHomePageCategoriesQueryVariables,
   options?: UseQueryOptions<DB_GetHomePageCategoriesQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetHomePageCategoriesQuery, TError, TData>(
      ['GetHomePageCategories', variables],
      fetcher<DB_GetHomePageCategoriesQuery, DB_GetHomePageCategoriesQueryVariables>(client, GetHomePageCategoriesDocument, variables, headers),
      options,
   )
export const GetCategoryDocument = `
    query GetCategory($id: uuid!) {
  categories_by_pk(id: $id) {
    id
    name
    restaurant_id
    order
  }
}
    `
export const useGetCategoryQuery = <
   TData = DB_GetCategoryQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetCategoryQueryVariables,
   options?: UseQueryOptions<DB_GetCategoryQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetCategoryQuery, TError, TData>(
      ['GetCategory', variables],
      fetcher<DB_GetCategoryQuery, DB_GetCategoryQueryVariables>(client, GetCategoryDocument, variables, headers),
      options,
   )
export const CreateCategoryDocument = `
    mutation CreateCategory($name: String!, $restaurant_id: uuid!, $order: Int!) {
  insert_categories_one(
    object: {name: $name, restaurant_id: $restaurant_id, order: $order}
  ) {
    id
  }
}
    `
export const useCreateCategoryMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_CreateCategoryMutation, TError, DB_CreateCategoryMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_CreateCategoryMutation, TError, DB_CreateCategoryMutationVariables, TContext>(
      ['CreateCategory'],
      (variables?: DB_CreateCategoryMutationVariables) => fetcher<DB_CreateCategoryMutation, DB_CreateCategoryMutationVariables>(client, CreateCategoryDocument, variables, headers)(),
      options,
   )
export const UpdateCategoryDocument = `
    mutation UpdateCategory($id: uuid!, $name: String!) {
  update_categories_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    id
    name
    restaurant_id
    order
  }
}
    `
export const useUpdateCategoryMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateCategoryMutation, TError, DB_UpdateCategoryMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateCategoryMutation, TError, DB_UpdateCategoryMutationVariables, TContext>(
      ['UpdateCategory'],
      (variables?: DB_UpdateCategoryMutationVariables) => fetcher<DB_UpdateCategoryMutation, DB_UpdateCategoryMutationVariables>(client, UpdateCategoryDocument, variables, headers)(),
      options,
   )
export const UpdateCategoryOrderDocument = `
    mutation UpdateCategoryOrder($order: [categories_updates!]!) {
  update_categories_many(updates: $order) {
    affected_rows
  }
}
    `
export const useUpdateCategoryOrderMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateCategoryOrderMutation, TError, DB_UpdateCategoryOrderMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateCategoryOrderMutation, TError, DB_UpdateCategoryOrderMutationVariables, TContext>(
      ['UpdateCategoryOrder'],
      (variables?: DB_UpdateCategoryOrderMutationVariables) => fetcher<DB_UpdateCategoryOrderMutation, DB_UpdateCategoryOrderMutationVariables>(client, UpdateCategoryOrderDocument, variables, headers)(),
      options,
   )
export const DeleteCategoryDocument = `
    mutation DeleteCategory($id: uuid!) {
  delete_categories_by_pk(id: $id) {
    id
  }
  update_items(where: {category_id: {_eq: $id}}, _set: {category_id: null}) {
    affected_rows
  }
}
    `
export const useDeleteCategoryMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_DeleteCategoryMutation, TError, DB_DeleteCategoryMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_DeleteCategoryMutation, TError, DB_DeleteCategoryMutationVariables, TContext>(
      ['DeleteCategory'],
      (variables?: DB_DeleteCategoryMutationVariables) => fetcher<DB_DeleteCategoryMutation, DB_DeleteCategoryMutationVariables>(client, DeleteCategoryDocument, variables, headers)(),
      options,
   )
export const GetItemsDocument = `
    query GetItems($restaurant_id: uuid!) {
  items(
    order_by: {created_at: desc}
    where: {restaurant_id: {_eq: $restaurant_id}}
  ) {
    ...ItemFragment
  }
}
    ${ItemFragmentFragmentDoc}`
export const useGetItemsQuery = <
   TData = DB_GetItemsQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetItemsQueryVariables,
   options?: UseQueryOptions<DB_GetItemsQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetItemsQuery, TError, TData>(
      ['GetItems', variables],
      fetcher<DB_GetItemsQuery, DB_GetItemsQueryVariables>(client, GetItemsDocument, variables, headers),
      options,
   )
export const SubscribeItemsDocument = `
    subscription SubscribeItems($restaurant_id: uuid!) {
  items(where: {restaurant_id: {_eq: $restaurant_id}}) {
    ...ItemFragment
  }
}
    ${ItemFragmentFragmentDoc}`
export const GetItemDocument = `
    query GetItem($id: uuid!) {
  items_by_pk(id: $id) {
    ...ItemFragment
  }
}
    ${ItemFragmentFragmentDoc}`
export const useGetItemQuery = <
   TData = DB_GetItemQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetItemQueryVariables,
   options?: UseQueryOptions<DB_GetItemQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetItemQuery, TError, TData>(
      ['GetItem', variables],
      fetcher<DB_GetItemQuery, DB_GetItemQueryVariables>(client, GetItemDocument, variables, headers),
      options,
   )
export const CreateItemDocument = `
    mutation CreateItem($available: Boolean!, $category_id: uuid!, $choices: jsonb!, $description: String, $images: jsonb!, $name: String!, $price: Int!, $allergens: jsonb!, $restaurant_id: uuid!, $variations: jsonb!) {
  insert_items_one(
    object: {available: $available, category_id: $category_id, choices: $choices, description: $description, images: $images, name: $name, price: $price, allergens: $allergens, restaurant_id: $restaurant_id, variations: $variations}
  ) {
    ...ItemFragment
  }
}
    ${ItemFragmentFragmentDoc}`
export const useCreateItemMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_CreateItemMutation, TError, DB_CreateItemMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_CreateItemMutation, TError, DB_CreateItemMutationVariables, TContext>(
      ['CreateItem'],
      (variables?: DB_CreateItemMutationVariables) => fetcher<DB_CreateItemMutation, DB_CreateItemMutationVariables>(client, CreateItemDocument, variables, headers)(),
      options,
   )
export const UpdateItemDocument = `
    mutation UpdateItem($id: uuid!, $available: Boolean!, $category_id: uuid!, $choices: jsonb!, $description: String, $images: jsonb!, $name: String!, $price: Int!, $allergens: jsonb!, $variations: jsonb!) {
  update_items_by_pk(
    pk_columns: {id: $id}
    _set: {available: $available, category_id: $category_id, choices: $choices, description: $description, images: $images, name: $name, price: $price, allergens: $allergens, variations: $variations}
  ) {
    ...ItemFragment
  }
}
    ${ItemFragmentFragmentDoc}`
export const useUpdateItemMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateItemMutation, TError, DB_UpdateItemMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateItemMutation, TError, DB_UpdateItemMutationVariables, TContext>(
      ['UpdateItem'],
      (variables?: DB_UpdateItemMutationVariables) => fetcher<DB_UpdateItemMutation, DB_UpdateItemMutationVariables>(client, UpdateItemDocument, variables, headers)(),
      options,
   )
export const DeleteItemDocument = `
    mutation DeleteItem($id: uuid!) {
  delete_items_by_pk(id: $id) {
    id
  }
}
    `
export const useDeleteItemMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_DeleteItemMutation, TError, DB_DeleteItemMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_DeleteItemMutation, TError, DB_DeleteItemMutationVariables, TContext>(
      ['DeleteItem'],
      (variables?: DB_DeleteItemMutationVariables) => fetcher<DB_DeleteItemMutation, DB_DeleteItemMutationVariables>(client, DeleteItemDocument, variables, headers)(),
      options,
   )
export const GetOrderDocument = `
    query GetOrder($id: uuid!) {
  orders_by_pk(id: $id) {
    ...OrderFragment
    table_order {
      ...TableOrderFragment
    }
  }
}
    ${OrderFragmentFragmentDoc}
${TableOrderFragmentFragmentDoc}`
export const useGetOrderQuery = <
   TData = DB_GetOrderQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetOrderQueryVariables,
   options?: UseQueryOptions<DB_GetOrderQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetOrderQuery, TError, TData>(
      ['GetOrder', variables],
      fetcher<DB_GetOrderQuery, DB_GetOrderQueryVariables>(client, GetOrderDocument, variables, headers),
      options,
   )
export const CreateOrdersDocument = `
    mutation CreateOrders($chair_number: Int!, $items: jsonb!, $subtotal: Int!, $total: Int!, $total_tax: Int!, $table_order_id: uuid!) {
  insert_orders(
    objects: {chair_number: $chair_number, items: $items, subtotal: $subtotal, total: $total, total_tax: $total_tax, table_order_id: $table_order_id}
  ) {
    affected_rows
    returning {
      ...OrderFragment
    }
  }
}
    ${OrderFragmentFragmentDoc}`
export const useCreateOrdersMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_CreateOrdersMutation, TError, DB_CreateOrdersMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_CreateOrdersMutation, TError, DB_CreateOrdersMutationVariables, TContext>(
      ['CreateOrders'],
      (variables?: DB_CreateOrdersMutationVariables) => fetcher<DB_CreateOrdersMutation, DB_CreateOrdersMutationVariables>(client, CreateOrdersDocument, variables, headers)(),
      options,
   )
export const CreateRestaurantDocument = `
    mutation CreateRestaurant($slug: String!, $name: String!, $owner_id: uuid!, $description: String, $customization: jsonb!) {
  insert_restaurants_one(
    object: {slug: $slug, owner_id: $owner_id, description: $description, customization: $customization, name: $name}
  ) {
    id
    slug
  }
}
    `
export const useCreateRestaurantMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_CreateRestaurantMutation, TError, DB_CreateRestaurantMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_CreateRestaurantMutation, TError, DB_CreateRestaurantMutationVariables, TContext>(
      ['CreateRestaurant'],
      (variables?: DB_CreateRestaurantMutationVariables) => fetcher<DB_CreateRestaurantMutation, DB_CreateRestaurantMutationVariables>(client, CreateRestaurantDocument, variables, headers)(),
      options,
   )
export const GetRestaurantBySlugDocument = `
    query GetRestaurantBySlug($slug: String!) {
  restaurants(where: {slug: {_eq: $slug}}) {
    id
    description
    customization
    name
    owner_id
    slug
  }
}
    `
export const useGetRestaurantBySlugQuery = <
   TData = DB_GetRestaurantBySlugQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetRestaurantBySlugQueryVariables,
   options?: UseQueryOptions<DB_GetRestaurantBySlugQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetRestaurantBySlugQuery, TError, TData>(
      ['GetRestaurantBySlug', variables],
      fetcher<DB_GetRestaurantBySlugQuery, DB_GetRestaurantBySlugQueryVariables>(client, GetRestaurantBySlugDocument, variables, headers),
      options,
   )
export const GetRestaurantByOwnerIdDocument = `
    query GetRestaurantByOwnerId($owner_id: uuid!) {
  restaurants(where: {owner_id: {_eq: $owner_id}}) {
    id
    description
    customization
    name
    owner_id
    slug
  }
}
    `
export const useGetRestaurantByOwnerIdQuery = <
   TData = DB_GetRestaurantByOwnerIdQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetRestaurantByOwnerIdQueryVariables,
   options?: UseQueryOptions<DB_GetRestaurantByOwnerIdQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetRestaurantByOwnerIdQuery, TError, TData>(
      ['GetRestaurantByOwnerId', variables],
      fetcher<DB_GetRestaurantByOwnerIdQuery, DB_GetRestaurantByOwnerIdQueryVariables>(client, GetRestaurantByOwnerIdDocument, variables, headers),
      options,
   )
export const GetRestaurantByAdministratorIdDocument = `
    query GetRestaurantByAdministratorId($user_id: uuid!) {
  restaurant_administrators(where: {user_id: {_eq: $user_id}}) {
    id
    user_id
    restaurant_id
    restaurant {
      id
      description
      customization
      name
      owner_id
      slug
    }
  }
}
    `
export const useGetRestaurantByAdministratorIdQuery = <
   TData = DB_GetRestaurantByAdministratorIdQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetRestaurantByAdministratorIdQueryVariables,
   options?: UseQueryOptions<DB_GetRestaurantByAdministratorIdQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetRestaurantByAdministratorIdQuery, TError, TData>(
      ['GetRestaurantByAdministratorId', variables],
      fetcher<DB_GetRestaurantByAdministratorIdQuery, DB_GetRestaurantByAdministratorIdQueryVariables>(client, GetRestaurantByAdministratorIdDocument, variables, headers),
      options,
   )
export const UpdateRestaurantThemeDocument = `
    mutation UpdateRestaurantTheme($id: uuid!, $customization: jsonb!) {
  update_restaurants_by_pk(
    pk_columns: {id: $id}
    _set: {customization: $customization}
  ) {
    customization
  }
}
    `
export const useUpdateRestaurantThemeMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateRestaurantThemeMutation, TError, DB_UpdateRestaurantThemeMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateRestaurantThemeMutation, TError, DB_UpdateRestaurantThemeMutationVariables, TContext>(
      ['UpdateRestaurantTheme'],
      (variables?: DB_UpdateRestaurantThemeMutationVariables) => fetcher<DB_UpdateRestaurantThemeMutation, DB_UpdateRestaurantThemeMutationVariables>(client, UpdateRestaurantThemeDocument, variables, headers)(),
      options,
   )
export const UpdateRestaurantDetailsDocument = `
    mutation UpdateRestaurantDetails($id: uuid!, $name: String!, $description: String) {
  update_restaurants_by_pk(
    pk_columns: {id: $id}
    _set: {name: $name, description: $description}
  ) {
    customization
  }
}
    `
export const useUpdateRestaurantDetailsMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateRestaurantDetailsMutation, TError, DB_UpdateRestaurantDetailsMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateRestaurantDetailsMutation, TError, DB_UpdateRestaurantDetailsMutationVariables, TContext>(
      ['UpdateRestaurantDetails'],
      (variables?: DB_UpdateRestaurantDetailsMutationVariables) => fetcher<DB_UpdateRestaurantDetailsMutation, DB_UpdateRestaurantDetailsMutationVariables>(client, UpdateRestaurantDetailsDocument, variables, headers)(),
      options,
   )
export const GetTableOrdersDocument = `
    query GetTableOrders($restaurant_id: uuid!) {
  table_orders(where: {table: {restaurant_id: {_eq: $restaurant_id}}}) {
    ...TableOrderFragment
  }
}
    ${TableOrderFragmentFragmentDoc}`
export const useGetTableOrdersQuery = <
   TData = DB_GetTableOrdersQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetTableOrdersQueryVariables,
   options?: UseQueryOptions<DB_GetTableOrdersQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetTableOrdersQuery, TError, TData>(
      ['GetTableOrders', variables],
      fetcher<DB_GetTableOrdersQuery, DB_GetTableOrdersQueryVariables>(client, GetTableOrdersDocument, variables, headers),
      options,
   )
export const GetTableOrderDocument = `
    query GetTableOrder($id: uuid!) {
  table_orders_by_pk(id: $id) {
    ...TableOrderFragment
    table {
      ...TableFragment
    }
    orders {
      ...OrderFragment
    }
  }
}
    ${TableOrderFragmentFragmentDoc}
${TableFragmentFragmentDoc}
${OrderFragmentFragmentDoc}`
export const useGetTableOrderQuery = <
   TData = DB_GetTableOrderQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetTableOrderQueryVariables,
   options?: UseQueryOptions<DB_GetTableOrderQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetTableOrderQuery, TError, TData>(
      ['GetTableOrder', variables],
      fetcher<DB_GetTableOrderQuery, DB_GetTableOrderQueryVariables>(client, GetTableOrderDocument, variables, headers),
      options,
   )
export const SubscribeTableOrderDocument = `
    subscription SubscribeTableOrder($id: uuid!) {
  table_orders_by_pk(id: $id) {
    ...TableOrderFragment
    table {
      ...TableFragment
    }
    orders {
      ...OrderFragment
    }
  }
}
    ${TableOrderFragmentFragmentDoc}
${TableFragmentFragmentDoc}
${OrderFragmentFragmentDoc}`
export const CreateTableOrderDocument = `
    mutation CreateTableOrder($status: String!, $table_id: uuid!, $tokens: jsonb!, $order_number: String!) {
  insert_table_orders_one(
    object: {status: $status, table_id: $table_id, tokens: $tokens, order_number: $order_number}
  ) {
    id
    created_at
    status
    tokens
    table_id
    order_number
  }
}
    `
export const useCreateTableOrderMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_CreateTableOrderMutation, TError, DB_CreateTableOrderMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_CreateTableOrderMutation, TError, DB_CreateTableOrderMutationVariables, TContext>(
      ['CreateTableOrder'],
      (variables?: DB_CreateTableOrderMutationVariables) => fetcher<DB_CreateTableOrderMutation, DB_CreateTableOrderMutationVariables>(client, CreateTableOrderDocument, variables, headers)(),
      options,
   )
export const GetLatestTableOrderByTableIdDocument = `
    query GetLatestTableOrderByTableId($table_id: uuid!) {
  table_orders(
    limit: 1
    order_by: {created_at: desc}
    where: {table_id: {_eq: $table_id}}
  ) {
    id
    created_at
    status
    tokens
    table_id
    order_number
    table {
      no_of_chairs
      name
    }
  }
}
    `
export const useGetLatestTableOrderByTableIdQuery = <
   TData = DB_GetLatestTableOrderByTableIdQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetLatestTableOrderByTableIdQueryVariables,
   options?: UseQueryOptions<DB_GetLatestTableOrderByTableIdQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetLatestTableOrderByTableIdQuery, TError, TData>(
      ['GetLatestTableOrderByTableId', variables],
      fetcher<DB_GetLatestTableOrderByTableIdQuery, DB_GetLatestTableOrderByTableIdQueryVariables>(client, GetLatestTableOrderByTableIdDocument, variables, headers),
      options,
   )
export const GetTablesDocument = `
    query GetTables($restaurant_id: uuid!) {
  tables(order_by: {order: asc}, where: {restaurant_id: {_eq: $restaurant_id}}) {
    ...TableFragment
  }
}
    ${TableFragmentFragmentDoc}`
export const useGetTablesQuery = <
   TData = DB_GetTablesQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetTablesQueryVariables,
   options?: UseQueryOptions<DB_GetTablesQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetTablesQuery, TError, TData>(
      ['GetTables', variables],
      fetcher<DB_GetTablesQuery, DB_GetTablesQueryVariables>(client, GetTablesDocument, variables, headers),
      options,
   )
export const GetTableInfoDocument = `
    query GetTableInfo($id: uuid!) {
  tables_by_pk(id: $id) {
    ...TableFragment
  }
}
    ${TableFragmentFragmentDoc}`
export const useGetTableInfoQuery = <
   TData = DB_GetTableInfoQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetTableInfoQueryVariables,
   options?: UseQueryOptions<DB_GetTableInfoQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetTableInfoQuery, TError, TData>(
      ['GetTableInfo', variables],
      fetcher<DB_GetTableInfoQuery, DB_GetTableInfoQueryVariables>(client, GetTableInfoDocument, variables, headers),
      options,
   )
export const GetTableDocument = `
    query GetTable($id: uuid!) {
  tables_by_pk(id: $id) {
    ...TableFragment
    table_orders {
      ...TableOrderFragment
      orders {
        ...OrderFragment
      }
    }
  }
}
    ${TableFragmentFragmentDoc}
${TableOrderFragmentFragmentDoc}
${OrderFragmentFragmentDoc}`
export const useGetTableQuery = <
   TData = DB_GetTableQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetTableQueryVariables,
   options?: UseQueryOptions<DB_GetTableQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetTableQuery, TError, TData>(
      ['GetTable', variables],
      fetcher<DB_GetTableQuery, DB_GetTableQueryVariables>(client, GetTableDocument, variables, headers),
      options,
   )
export const SubscribeTablesDocument = `
    subscription SubscribeTables($restaurant_id: uuid!) {
  tables(order_by: {order: asc}, where: {restaurant_id: {_eq: $restaurant_id}}) {
    ...TableFragment
  }
}
    ${TableFragmentFragmentDoc}`
export const CreateTableDocument = `
    mutation CreateTable($no_of_chairs: Int!, $qr_codes: jsonb, $restaurant_id: uuid!, $name: String!, $order: Int) {
  insert_tables_one(
    object: {no_of_chairs: $no_of_chairs, qr_codes: $qr_codes, restaurant_id: $restaurant_id, name: $name, order: $order}
  ) {
    id
  }
}
    `
export const useCreateTableMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_CreateTableMutation, TError, DB_CreateTableMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_CreateTableMutation, TError, DB_CreateTableMutationVariables, TContext>(
      ['CreateTable'],
      (variables?: DB_CreateTableMutationVariables) => fetcher<DB_CreateTableMutation, DB_CreateTableMutationVariables>(client, CreateTableDocument, variables, headers)(),
      options,
   )
export const UpdateTableDocument = `
    mutation UpdateTable($id: uuid!, $no_of_chairs: Int!, $name: String!, $qr_codes: jsonb, $order: Int) {
  update_tables_by_pk(
    pk_columns: {id: $id}
    _set: {no_of_chairs: $no_of_chairs, name: $name, qr_codes: $qr_codes, order: $order}
  ) {
    id
  }
}
    `
export const useUpdateTableMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateTableMutation, TError, DB_UpdateTableMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateTableMutation, TError, DB_UpdateTableMutationVariables, TContext>(
      ['UpdateTable'],
      (variables?: DB_UpdateTableMutationVariables) => fetcher<DB_UpdateTableMutation, DB_UpdateTableMutationVariables>(client, UpdateTableDocument, variables, headers)(),
      options,
   )
export const UpdateTableOrderDocument = `
    mutation UpdateTableOrder($order: [tables_updates!]!) {
  update_tables_many(updates: $order) {
    affected_rows
  }
}
    `
export const useUpdateTableOrderMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateTableOrderMutation, TError, DB_UpdateTableOrderMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateTableOrderMutation, TError, DB_UpdateTableOrderMutationVariables, TContext>(
      ['UpdateTableOrder'],
      (variables?: DB_UpdateTableOrderMutationVariables) => fetcher<DB_UpdateTableOrderMutation, DB_UpdateTableOrderMutationVariables>(client, UpdateTableOrderDocument, variables, headers)(),
      options,
   )
export const DeleteTableDocument = `
    mutation DeleteTable($id: uuid!) {
  delete_tables_by_pk(id: $id) {
    id
  }
  update_table_orders(where: {table_id: {_eq: $id}}, _set: {table_id: null}) {
    affected_rows
  }
}
    `
export const useDeleteTableMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_DeleteTableMutation, TError, DB_DeleteTableMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_DeleteTableMutation, TError, DB_DeleteTableMutationVariables, TContext>(
      ['DeleteTable'],
      (variables?: DB_DeleteTableMutationVariables) => fetcher<DB_DeleteTableMutation, DB_DeleteTableMutationVariables>(client, DeleteTableDocument, variables, headers)(),
      options,
   )
export const SubscribeTableOrdersDocument = `
    subscription SubscribeTableOrders($restaurant_id: uuid!) {
  table_orders(
    order_by: {created_at: desc}
    where: {table: {restaurant_id: {_eq: $restaurant_id}}}
  ) {
    id
    created_at
    status
    tokens
    table_id
    order_number
    table {
      name
    }
  }
}
    `
export const GetLatestTableOrderDocument = `
    query GetLatestTableOrder($table_id: uuid!) {
  table_orders(
    limit: 1
    order_by: {created_at: desc}
    where: {table_id: {_eq: $table_id}}
  ) {
    id
    created_at
    status
    tokens
    table_id
    table {
      no_of_chairs
      name
    }
  }
}
    `
export const useGetLatestTableOrderQuery = <
   TData = DB_GetLatestTableOrderQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetLatestTableOrderQueryVariables,
   options?: UseQueryOptions<DB_GetLatestTableOrderQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetLatestTableOrderQuery, TError, TData>(
      ['GetLatestTableOrder', variables],
      fetcher<DB_GetLatestTableOrderQuery, DB_GetLatestTableOrderQueryVariables>(client, GetLatestTableOrderDocument, variables, headers),
      options,
   )
export const GetTableOrderInfoDocument = `
    query GetTableOrderInfo($id: uuid!) {
  table_orders(limit: 1, order_by: {created_at: desc}, where: {id: {_eq: $id}}) {
    id
    created_at
    status
    tokens
    table_id
    table {
      no_of_chairs
      name
    }
  }
}
    `
export const useGetTableOrderInfoQuery = <
   TData = DB_GetTableOrderInfoQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetTableOrderInfoQueryVariables,
   options?: UseQueryOptions<DB_GetTableOrderInfoQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetTableOrderInfoQuery, TError, TData>(
      ['GetTableOrderInfo', variables],
      fetcher<DB_GetTableOrderInfoQuery, DB_GetTableOrderInfoQueryVariables>(client, GetTableOrderInfoDocument, variables, headers),
      options,
   )
export const GetUserByIdDocument = `
    query GetUserById($id: uuid!) {
  users_by_pk(id: $id) {
    created_at
    email
    emailVerified
    id
    image
    name
    role
  }
}
    `
export const useGetUserByIdQuery = <
   TData = DB_GetUserByIdQuery,
   TError = unknown
>(
   client: GraphQLClient,
   variables: DB_GetUserByIdQueryVariables,
   options?: UseQueryOptions<DB_GetUserByIdQuery, TError, TData>,
   headers?: RequestInit['headers'],
) =>
   useQuery<DB_GetUserByIdQuery, TError, TData>(
      ['GetUserById', variables],
      fetcher<DB_GetUserByIdQuery, DB_GetUserByIdQueryVariables>(client, GetUserByIdDocument, variables, headers),
      options,
   )
export const UpdateUserProfilePictureDocument = `
    mutation UpdateUserProfilePicture($id: uuid!, $image: String!) {
  update_users(where: {id: {_eq: $id}}, _set: {image: $image}) {
    affected_rows
  }
}
    `
export const useUpdateUserProfilePictureMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateUserProfilePictureMutation, TError, DB_UpdateUserProfilePictureMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateUserProfilePictureMutation, TError, DB_UpdateUserProfilePictureMutationVariables, TContext>(
      ['UpdateUserProfilePicture'],
      (variables?: DB_UpdateUserProfilePictureMutationVariables) => fetcher<DB_UpdateUserProfilePictureMutation, DB_UpdateUserProfilePictureMutationVariables>(client, UpdateUserProfilePictureDocument, variables, headers)(),
      options,
   )
export const UpdateUserDetailsDocument = `
    mutation UpdateUserDetails($id: uuid!, $name: String!, $email: String!) {
  update_users(where: {id: {_eq: $id}}, _set: {name: $name, email: $email}) {
    affected_rows
  }
}
    `
export const useUpdateUserDetailsMutation = <
   TError = unknown,
   TContext = unknown
>(
   client: GraphQLClient,
   options?: UseMutationOptions<DB_UpdateUserDetailsMutation, TError, DB_UpdateUserDetailsMutationVariables, TContext>,
   headers?: RequestInit['headers'],
) =>
   useMutation<DB_UpdateUserDetailsMutation, TError, DB_UpdateUserDetailsMutationVariables, TContext>(
      ['UpdateUserDetails'],
      (variables?: DB_UpdateUserDetailsMutationVariables) => fetcher<DB_UpdateUserDetailsMutation, DB_UpdateUserDetailsMutationVariables>(client, UpdateUserDetailsDocument, variables, headers)(),
      options,
   )
