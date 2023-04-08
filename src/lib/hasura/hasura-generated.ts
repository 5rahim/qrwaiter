import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
export type Boolean_Comparison_Exp = {
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
export type Int_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
export type Accounts = {
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
   user: Users;
   userId: Scalars['uuid'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
   __typename?: 'accounts_aggregate';
   aggregate?: Maybe<Accounts_Aggregate_Fields>;
   nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
   count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
   arguments?: InputMaybe<Array<Accounts_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Accounts_Bool_Exp>;
   predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
   __typename?: 'accounts_aggregate_fields';
   avg?: Maybe<Accounts_Avg_Fields>;
   count: Scalars['Int'];
   max?: Maybe<Accounts_Max_Fields>;
   min?: Maybe<Accounts_Min_Fields>;
   stddev?: Maybe<Accounts_Stddev_Fields>;
   stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
   stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
   sum?: Maybe<Accounts_Sum_Fields>;
   var_pop?: Maybe<Accounts_Var_Pop_Fields>;
   var_samp?: Maybe<Accounts_Var_Samp_Fields>;
   variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Accounts_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
   avg?: InputMaybe<Accounts_Avg_Order_By>;
   count?: InputMaybe<Order_By>;
   max?: InputMaybe<Accounts_Max_Order_By>;
   min?: InputMaybe<Accounts_Min_Order_By>;
   stddev?: InputMaybe<Accounts_Stddev_Order_By>;
   stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
   stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
   sum?: InputMaybe<Accounts_Sum_Order_By>;
   var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
   var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
   variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
   data: Array<Accounts_Insert_Input>;
   /** upsert condition */
   on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
   __typename?: 'accounts_avg_fields';
   expires_at?: Maybe<Scalars['Float']>;
   refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
   expires_at?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
   _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
   _not?: InputMaybe<Accounts_Bool_Exp>;
   _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
   access_token?: InputMaybe<String_Comparison_Exp>;
   expires_at?: InputMaybe<Bigint_Comparison_Exp>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   id_token?: InputMaybe<String_Comparison_Exp>;
   oauth_token?: InputMaybe<String_Comparison_Exp>;
   oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
   provider?: InputMaybe<String_Comparison_Exp>;
   providerAccountId?: InputMaybe<String_Comparison_Exp>;
   refresh_token?: InputMaybe<String_Comparison_Exp>;
   refresh_token_expires_in?: InputMaybe<Bigint_Comparison_Exp>;
   scope?: InputMaybe<String_Comparison_Exp>;
   session_state?: InputMaybe<String_Comparison_Exp>;
   token_type?: InputMaybe<String_Comparison_Exp>;
   type?: InputMaybe<String_Comparison_Exp>;
   user?: InputMaybe<Users_Bool_Exp>;
   userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export type Accounts_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'accounts_pkey';

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
   expires_at?: InputMaybe<Scalars['bigint']>;
   refresh_token_expires_in?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
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
   user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
   userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
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
export type Accounts_Max_Order_By = {
   access_token?: InputMaybe<Order_By>;
   expires_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   id_token?: InputMaybe<Order_By>;
   oauth_token?: InputMaybe<Order_By>;
   oauth_token_secret?: InputMaybe<Order_By>;
   provider?: InputMaybe<Order_By>;
   providerAccountId?: InputMaybe<Order_By>;
   refresh_token?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
   scope?: InputMaybe<Order_By>;
   session_state?: InputMaybe<Order_By>;
   token_type?: InputMaybe<Order_By>;
   type?: InputMaybe<Order_By>;
   userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
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
export type Accounts_Min_Order_By = {
   access_token?: InputMaybe<Order_By>;
   expires_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   id_token?: InputMaybe<Order_By>;
   oauth_token?: InputMaybe<Order_By>;
   oauth_token_secret?: InputMaybe<Order_By>;
   provider?: InputMaybe<Order_By>;
   providerAccountId?: InputMaybe<Order_By>;
   refresh_token?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
   scope?: InputMaybe<Order_By>;
   session_state?: InputMaybe<Order_By>;
   token_type?: InputMaybe<Order_By>;
   type?: InputMaybe<Order_By>;
   userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
   __typename?: 'accounts_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
   constraint: Accounts_Constraint;
   update_columns?: Array<Accounts_Update_Column>;
   where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
   access_token?: InputMaybe<Order_By>;
   expires_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   id_token?: InputMaybe<Order_By>;
   oauth_token?: InputMaybe<Order_By>;
   oauth_token_secret?: InputMaybe<Order_By>;
   provider?: InputMaybe<Order_By>;
   providerAccountId?: InputMaybe<Order_By>;
   refresh_token?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
   scope?: InputMaybe<Order_By>;
   session_state?: InputMaybe<Order_By>;
   token_type?: InputMaybe<Order_By>;
   type?: InputMaybe<Order_By>;
   user?: InputMaybe<Users_Order_By>;
   userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export type Accounts_Select_Column =
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
export type Accounts_Set_Input = {
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
export type Accounts_Stddev_Fields = {
   __typename?: 'accounts_stddev_fields';
   expires_at?: Maybe<Scalars['Float']>;
   refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
   expires_at?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
   __typename?: 'accounts_stddev_pop_fields';
   expires_at?: Maybe<Scalars['Float']>;
   refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
   expires_at?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
   __typename?: 'accounts_stddev_samp_fields';
   expires_at?: Maybe<Scalars['Float']>;
   refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
   expires_at?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Accounts_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
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
export type Accounts_Sum_Fields = {
   __typename?: 'accounts_sum_fields';
   expires_at?: Maybe<Scalars['bigint']>;
   refresh_token_expires_in?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
   expires_at?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export type Accounts_Update_Column =
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

export type Accounts_Updates = {
   /** increments the numeric columns with given value of the filtered values */
   _inc?: InputMaybe<Accounts_Inc_Input>;
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Accounts_Set_Input>;
   /** filter the rows which have to be updated */
   where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
   __typename?: 'accounts_var_pop_fields';
   expires_at?: Maybe<Scalars['Float']>;
   refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
   expires_at?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
   __typename?: 'accounts_var_samp_fields';
   expires_at?: Maybe<Scalars['Float']>;
   refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
   expires_at?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
   __typename?: 'accounts_variance_fields';
   expires_at?: Maybe<Scalars['Float']>;
   refresh_token_expires_in?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
   expires_at?: InputMaybe<Order_By>;
   refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
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
export type Categories = {
   __typename?: 'categories';
   id: Scalars['uuid'];
   /** An array relationship */
   items: Array<Items>;
   /** An aggregate relationship */
   items_aggregate: Items_Aggregate;
   name: Scalars['String'];
   order: Scalars['Int'];
   /** An object relationship */
   restaurant: Restaurants;
   restaurant_id: Scalars['uuid'];
};


/** columns and relationships of "categories" */
export type CategoriesItemsArgs = {
   distinct_on?: InputMaybe<Array<Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Items_Order_By>>;
   where?: InputMaybe<Items_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesItems_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Items_Order_By>>;
   where?: InputMaybe<Items_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
   __typename?: 'categories_aggregate';
   aggregate?: Maybe<Categories_Aggregate_Fields>;
   nodes: Array<Categories>;
};

export type Categories_Aggregate_Bool_Exp = {
   count?: InputMaybe<Categories_Aggregate_Bool_Exp_Count>;
};

export type Categories_Aggregate_Bool_Exp_Count = {
   arguments?: InputMaybe<Array<Categories_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Categories_Bool_Exp>;
   predicate: Int_Comparison_Exp;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
   __typename?: 'categories_aggregate_fields';
   avg?: Maybe<Categories_Avg_Fields>;
   count: Scalars['Int'];
   max?: Maybe<Categories_Max_Fields>;
   min?: Maybe<Categories_Min_Fields>;
   stddev?: Maybe<Categories_Stddev_Fields>;
   stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
   stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
   sum?: Maybe<Categories_Sum_Fields>;
   var_pop?: Maybe<Categories_Var_Pop_Fields>;
   var_samp?: Maybe<Categories_Var_Samp_Fields>;
   variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Categories_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
   avg?: InputMaybe<Categories_Avg_Order_By>;
   count?: InputMaybe<Order_By>;
   max?: InputMaybe<Categories_Max_Order_By>;
   min?: InputMaybe<Categories_Min_Order_By>;
   stddev?: InputMaybe<Categories_Stddev_Order_By>;
   stddev_pop?: InputMaybe<Categories_Stddev_Pop_Order_By>;
   stddev_samp?: InputMaybe<Categories_Stddev_Samp_Order_By>;
   sum?: InputMaybe<Categories_Sum_Order_By>;
   var_pop?: InputMaybe<Categories_Var_Pop_Order_By>;
   var_samp?: InputMaybe<Categories_Var_Samp_Order_By>;
   variance?: InputMaybe<Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
   data: Array<Categories_Insert_Input>;
   /** upsert condition */
   on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
   __typename?: 'categories_avg_fields';
   order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "categories" */
export type Categories_Avg_Order_By = {
   order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
   _and?: InputMaybe<Array<Categories_Bool_Exp>>;
   _not?: InputMaybe<Categories_Bool_Exp>;
   _or?: InputMaybe<Array<Categories_Bool_Exp>>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   items?: InputMaybe<Items_Bool_Exp>;
   items_aggregate?: InputMaybe<Items_Aggregate_Bool_Exp>;
   name?: InputMaybe<String_Comparison_Exp>;
   order?: InputMaybe<Int_Comparison_Exp>;
   restaurant?: InputMaybe<Restaurants_Bool_Exp>;
   restaurant_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export type Categories_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'categories_pkey';

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
   order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   items?: InputMaybe<Items_Arr_Rel_Insert_Input>;
   name?: InputMaybe<Scalars['String']>;
   order?: InputMaybe<Scalars['Int']>;
   restaurant?: InputMaybe<Restaurants_Obj_Rel_Insert_Input>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
   __typename?: 'categories_max_fields';
   id?: Maybe<Scalars['uuid']>;
   name?: Maybe<Scalars['String']>;
   order?: Maybe<Scalars['Int']>;
   restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
   id?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
   __typename?: 'categories_min_fields';
   id?: Maybe<Scalars['uuid']>;
   name?: Maybe<Scalars['String']>;
   order?: Maybe<Scalars['Int']>;
   restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
   id?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
   __typename?: 'categories_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
   data: Categories_Insert_Input;
   /** upsert condition */
   on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
   constraint: Categories_Constraint;
   update_columns?: Array<Categories_Update_Column>;
   where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
   id?: InputMaybe<Order_By>;
   items_aggregate?: InputMaybe<Items_Aggregate_Order_By>;
   name?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
   restaurant?: InputMaybe<Restaurants_Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** select columns of table "categories" */
export type Categories_Select_Column =
/** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'order'
   /** column name */
   | 'restaurant_id';

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   name?: InputMaybe<Scalars['String']>;
   order?: InputMaybe<Scalars['Int']>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
   __typename?: 'categories_stddev_fields';
   order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "categories" */
export type Categories_Stddev_Order_By = {
   order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
   __typename?: 'categories_stddev_pop_fields';
   order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "categories" */
export type Categories_Stddev_Pop_Order_By = {
   order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
   __typename?: 'categories_stddev_samp_fields';
   order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "categories" */
export type Categories_Stddev_Samp_Order_By = {
   order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Categories_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   name?: InputMaybe<Scalars['String']>;
   order?: InputMaybe<Scalars['Int']>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
   __typename?: 'categories_sum_fields';
   order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "categories" */
export type Categories_Sum_Order_By = {
   order?: InputMaybe<Order_By>;
};

/** update columns of table "categories" */
export type Categories_Update_Column =
/** column name */
   | 'id'
   /** column name */
   | 'name'
   /** column name */
   | 'order'
   /** column name */
   | 'restaurant_id';

export type Categories_Updates = {
   /** increments the numeric columns with given value of the filtered values */
   _inc?: InputMaybe<Categories_Inc_Input>;
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Categories_Set_Input>;
   /** filter the rows which have to be updated */
   where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
   __typename?: 'categories_var_pop_fields';
   order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "categories" */
export type Categories_Var_Pop_Order_By = {
   order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
   __typename?: 'categories_var_samp_fields';
   order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "categories" */
export type Categories_Var_Samp_Order_By = {
   order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
   __typename?: 'categories_variance_fields';
   order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "categories" */
export type Categories_Variance_Order_By = {
   order?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
/** ascending ordering of the cursor */
   | 'ASC'
   /** descending ordering of the cursor */
   | 'DESC';

/** columns and relationships of "items" */
export type Items = {
   __typename?: 'items';
   allergens?: Maybe<Scalars['jsonb']>;
   available: Scalars['Boolean'];
   /** An object relationship */
   category?: Maybe<Categories>;
   category_id?: Maybe<Scalars['uuid']>;
   choices: Scalars['jsonb'];
   created_at: Scalars['timestamptz'];
   description?: Maybe<Scalars['String']>;
   id: Scalars['uuid'];
   images: Scalars['jsonb'];
   name: Scalars['String'];
   price: Scalars['Int'];
   /** An object relationship */
   restaurant: Restaurants;
   restaurant_id: Scalars['uuid'];
   variations: Scalars['jsonb'];
};


/** columns and relationships of "items" */
export type ItemsAllergensArgs = {
   path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "items" */
export type ItemsChoicesArgs = {
   path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "items" */
export type ItemsImagesArgs = {
   path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "items" */
export type ItemsVariationsArgs = {
   path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
   __typename?: 'items_aggregate';
   aggregate?: Maybe<Items_Aggregate_Fields>;
   nodes: Array<Items>;
};

export type Items_Aggregate_Bool_Exp = {
   bool_and?: InputMaybe<Items_Aggregate_Bool_Exp_Bool_And>;
   bool_or?: InputMaybe<Items_Aggregate_Bool_Exp_Bool_Or>;
   count?: InputMaybe<Items_Aggregate_Bool_Exp_Count>;
};

export type Items_Aggregate_Bool_Exp_Bool_And = {
   arguments: Items_Select_Column_Items_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Items_Bool_Exp>;
   predicate: Boolean_Comparison_Exp;
};

export type Items_Aggregate_Bool_Exp_Bool_Or = {
   arguments: Items_Select_Column_Items_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Items_Bool_Exp>;
   predicate: Boolean_Comparison_Exp;
};

export type Items_Aggregate_Bool_Exp_Count = {
   arguments?: InputMaybe<Array<Items_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Items_Bool_Exp>;
   predicate: Int_Comparison_Exp;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
   __typename?: 'items_aggregate_fields';
   avg?: Maybe<Items_Avg_Fields>;
   count: Scalars['Int'];
   max?: Maybe<Items_Max_Fields>;
   min?: Maybe<Items_Min_Fields>;
   stddev?: Maybe<Items_Stddev_Fields>;
   stddev_pop?: Maybe<Items_Stddev_Pop_Fields>;
   stddev_samp?: Maybe<Items_Stddev_Samp_Fields>;
   sum?: Maybe<Items_Sum_Fields>;
   var_pop?: Maybe<Items_Var_Pop_Fields>;
   var_samp?: Maybe<Items_Var_Samp_Fields>;
   variance?: Maybe<Items_Variance_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Items_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "items" */
export type Items_Aggregate_Order_By = {
   avg?: InputMaybe<Items_Avg_Order_By>;
   count?: InputMaybe<Order_By>;
   max?: InputMaybe<Items_Max_Order_By>;
   min?: InputMaybe<Items_Min_Order_By>;
   stddev?: InputMaybe<Items_Stddev_Order_By>;
   stddev_pop?: InputMaybe<Items_Stddev_Pop_Order_By>;
   stddev_samp?: InputMaybe<Items_Stddev_Samp_Order_By>;
   sum?: InputMaybe<Items_Sum_Order_By>;
   var_pop?: InputMaybe<Items_Var_Pop_Order_By>;
   var_samp?: InputMaybe<Items_Var_Samp_Order_By>;
   variance?: InputMaybe<Items_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Items_Append_Input = {
   allergens?: InputMaybe<Scalars['jsonb']>;
   choices?: InputMaybe<Scalars['jsonb']>;
   images?: InputMaybe<Scalars['jsonb']>;
   variations?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "items" */
export type Items_Arr_Rel_Insert_Input = {
   data: Array<Items_Insert_Input>;
   /** upsert condition */
   on_conflict?: InputMaybe<Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Items_Avg_Fields = {
   __typename?: 'items_avg_fields';
   price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "items" */
export type Items_Avg_Order_By = {
   price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
   _and?: InputMaybe<Array<Items_Bool_Exp>>;
   _not?: InputMaybe<Items_Bool_Exp>;
   _or?: InputMaybe<Array<Items_Bool_Exp>>;
   allergens?: InputMaybe<Jsonb_Comparison_Exp>;
   available?: InputMaybe<Boolean_Comparison_Exp>;
   category?: InputMaybe<Categories_Bool_Exp>;
   category_id?: InputMaybe<Uuid_Comparison_Exp>;
   choices?: InputMaybe<Jsonb_Comparison_Exp>;
   created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
   description?: InputMaybe<String_Comparison_Exp>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   images?: InputMaybe<Jsonb_Comparison_Exp>;
   name?: InputMaybe<String_Comparison_Exp>;
   price?: InputMaybe<Int_Comparison_Exp>;
   restaurant?: InputMaybe<Restaurants_Bool_Exp>;
   restaurant_id?: InputMaybe<Uuid_Comparison_Exp>;
   variations?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export type Items_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'items_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Items_Delete_At_Path_Input = {
   allergens?: InputMaybe<Array<Scalars['String']>>;
   choices?: InputMaybe<Array<Scalars['String']>>;
   images?: InputMaybe<Array<Scalars['String']>>;
   variations?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Items_Delete_Elem_Input = {
   allergens?: InputMaybe<Scalars['Int']>;
   choices?: InputMaybe<Scalars['Int']>;
   images?: InputMaybe<Scalars['Int']>;
   variations?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Items_Delete_Key_Input = {
   allergens?: InputMaybe<Scalars['String']>;
   choices?: InputMaybe<Scalars['String']>;
   images?: InputMaybe<Scalars['String']>;
   variations?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "items" */
export type Items_Inc_Input = {
   price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
   allergens?: InputMaybe<Scalars['jsonb']>;
   available?: InputMaybe<Scalars['Boolean']>;
   category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
   category_id?: InputMaybe<Scalars['uuid']>;
   choices?: InputMaybe<Scalars['jsonb']>;
   created_at?: InputMaybe<Scalars['timestamptz']>;
   description?: InputMaybe<Scalars['String']>;
   id?: InputMaybe<Scalars['uuid']>;
   images?: InputMaybe<Scalars['jsonb']>;
   name?: InputMaybe<Scalars['String']>;
   price?: InputMaybe<Scalars['Int']>;
   restaurant?: InputMaybe<Restaurants_Obj_Rel_Insert_Input>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
   variations?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
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
export type Items_Max_Order_By = {
   category_id?: InputMaybe<Order_By>;
   created_at?: InputMaybe<Order_By>;
   description?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   price?: InputMaybe<Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
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
export type Items_Min_Order_By = {
   category_id?: InputMaybe<Order_By>;
   created_at?: InputMaybe<Order_By>;
   description?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   price?: InputMaybe<Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
   __typename?: 'items_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Items>;
};

/** on_conflict condition type for table "items" */
export type Items_On_Conflict = {
   constraint: Items_Constraint;
   update_columns?: Array<Items_Update_Column>;
   where?: InputMaybe<Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type Items_Order_By = {
   allergens?: InputMaybe<Order_By>;
   available?: InputMaybe<Order_By>;
   category?: InputMaybe<Categories_Order_By>;
   category_id?: InputMaybe<Order_By>;
   choices?: InputMaybe<Order_By>;
   created_at?: InputMaybe<Order_By>;
   description?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   images?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   price?: InputMaybe<Order_By>;
   restaurant?: InputMaybe<Restaurants_Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
   variations?: InputMaybe<Order_By>;
};

/** primary key columns input for table: items */
export type Items_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Items_Prepend_Input = {
   allergens?: InputMaybe<Scalars['jsonb']>;
   choices?: InputMaybe<Scalars['jsonb']>;
   images?: InputMaybe<Scalars['jsonb']>;
   variations?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "items" */
export type Items_Select_Column =
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
export type Items_Select_Column_Items_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
/** column name */
   | 'available';

/** select "items_aggregate_bool_exp_bool_or_arguments_columns" columns of table "items" */
export type Items_Select_Column_Items_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
/** column name */
   | 'available';

/** input type for updating data in table "items" */
export type Items_Set_Input = {
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
export type Items_Stddev_Fields = {
   __typename?: 'items_stddev_fields';
   price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "items" */
export type Items_Stddev_Order_By = {
   price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Items_Stddev_Pop_Fields = {
   __typename?: 'items_stddev_pop_fields';
   price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "items" */
export type Items_Stddev_Pop_Order_By = {
   price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Items_Stddev_Samp_Fields = {
   __typename?: 'items_stddev_samp_fields';
   price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "items" */
export type Items_Stddev_Samp_Order_By = {
   price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "items" */
export type Items_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Items_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Items_Stream_Cursor_Value_Input = {
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
export type Items_Sum_Fields = {
   __typename?: 'items_sum_fields';
   price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "items" */
export type Items_Sum_Order_By = {
   price?: InputMaybe<Order_By>;
};

/** update columns of table "items" */
export type Items_Update_Column =
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

export type Items_Updates = {
   /** append existing jsonb value of filtered columns with new jsonb value */
   _append?: InputMaybe<Items_Append_Input>;
   /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
   _delete_at_path?: InputMaybe<Items_Delete_At_Path_Input>;
   /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
   _delete_elem?: InputMaybe<Items_Delete_Elem_Input>;
   /** delete key/value pair or string element. key/value pairs are matched based on their key value */
   _delete_key?: InputMaybe<Items_Delete_Key_Input>;
   /** increments the numeric columns with given value of the filtered values */
   _inc?: InputMaybe<Items_Inc_Input>;
   /** prepend existing jsonb value of filtered columns with new jsonb value */
   _prepend?: InputMaybe<Items_Prepend_Input>;
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Items_Set_Input>;
   /** filter the rows which have to be updated */
   where: Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Items_Var_Pop_Fields = {
   __typename?: 'items_var_pop_fields';
   price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "items" */
export type Items_Var_Pop_Order_By = {
   price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Items_Var_Samp_Fields = {
   __typename?: 'items_var_samp_fields';
   price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "items" */
export type Items_Var_Samp_Order_By = {
   price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Items_Variance_Fields = {
   __typename?: 'items_variance_fields';
   price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "items" */
export type Items_Variance_Order_By = {
   price?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
   String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
   _cast?: InputMaybe<Jsonb_Cast_Exp>;
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
export type Mutation_Root = {
   __typename?: 'mutation_root';
   /** delete data from the table: "accounts" */
   delete_accounts?: Maybe<Accounts_Mutation_Response>;
   /** delete single row from the table: "accounts" */
   delete_accounts_by_pk?: Maybe<Accounts>;
   /** delete data from the table: "categories" */
   delete_categories?: Maybe<Categories_Mutation_Response>;
   /** delete single row from the table: "categories" */
   delete_categories_by_pk?: Maybe<Categories>;
   /** delete data from the table: "items" */
   delete_items?: Maybe<Items_Mutation_Response>;
   /** delete single row from the table: "items" */
   delete_items_by_pk?: Maybe<Items>;
   /** delete data from the table: "orders" */
   delete_orders?: Maybe<Orders_Mutation_Response>;
   /** delete single row from the table: "orders" */
   delete_orders_by_pk?: Maybe<Orders>;
   /** delete data from the table: "restaurant_administrators" */
   delete_restaurant_administrators?: Maybe<Restaurant_Administrators_Mutation_Response>;
   /** delete single row from the table: "restaurant_administrators" */
   delete_restaurant_administrators_by_pk?: Maybe<Restaurant_Administrators>;
   /** delete data from the table: "restaurants" */
   delete_restaurants?: Maybe<Restaurants_Mutation_Response>;
   /** delete single row from the table: "restaurants" */
   delete_restaurants_by_pk?: Maybe<Restaurants>;
   /** delete data from the table: "sessions" */
   delete_sessions?: Maybe<Sessions_Mutation_Response>;
   /** delete single row from the table: "sessions" */
   delete_sessions_by_pk?: Maybe<Sessions>;
   /** delete data from the table: "supermarket_items" */
   delete_supermarket_items?: Maybe<Supermarket_Items_Mutation_Response>;
   /** delete single row from the table: "supermarket_items" */
   delete_supermarket_items_by_pk?: Maybe<Supermarket_Items>;
   /** delete data from the table: "table_orders" */
   delete_table_orders?: Maybe<Table_Orders_Mutation_Response>;
   /** delete single row from the table: "table_orders" */
   delete_table_orders_by_pk?: Maybe<Table_Orders>;
   /** delete data from the table: "tables" */
   delete_tables?: Maybe<Tables_Mutation_Response>;
   /** delete single row from the table: "tables" */
   delete_tables_by_pk?: Maybe<Tables>;
   /** delete data from the table: "users" */
   delete_users?: Maybe<Users_Mutation_Response>;
   /** delete single row from the table: "users" */
   delete_users_by_pk?: Maybe<Users>;
   /** delete data from the table: "verification_tokens" */
   delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
   /** delete single row from the table: "verification_tokens" */
   delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
   /** insert data into the table: "accounts" */
   insert_accounts?: Maybe<Accounts_Mutation_Response>;
   /** insert a single row into the table: "accounts" */
   insert_accounts_one?: Maybe<Accounts>;
   /** insert data into the table: "categories" */
   insert_categories?: Maybe<Categories_Mutation_Response>;
   /** insert a single row into the table: "categories" */
   insert_categories_one?: Maybe<Categories>;
   /** insert data into the table: "items" */
   insert_items?: Maybe<Items_Mutation_Response>;
   /** insert a single row into the table: "items" */
   insert_items_one?: Maybe<Items>;
   /** insert data into the table: "orders" */
   insert_orders?: Maybe<Orders_Mutation_Response>;
   /** insert a single row into the table: "orders" */
   insert_orders_one?: Maybe<Orders>;
   /** insert data into the table: "restaurant_administrators" */
   insert_restaurant_administrators?: Maybe<Restaurant_Administrators_Mutation_Response>;
   /** insert a single row into the table: "restaurant_administrators" */
   insert_restaurant_administrators_one?: Maybe<Restaurant_Administrators>;
   /** insert data into the table: "restaurants" */
   insert_restaurants?: Maybe<Restaurants_Mutation_Response>;
   /** insert a single row into the table: "restaurants" */
   insert_restaurants_one?: Maybe<Restaurants>;
   /** insert data into the table: "sessions" */
   insert_sessions?: Maybe<Sessions_Mutation_Response>;
   /** insert a single row into the table: "sessions" */
   insert_sessions_one?: Maybe<Sessions>;
   /** insert data into the table: "supermarket_items" */
   insert_supermarket_items?: Maybe<Supermarket_Items_Mutation_Response>;
   /** insert a single row into the table: "supermarket_items" */
   insert_supermarket_items_one?: Maybe<Supermarket_Items>;
   /** insert data into the table: "table_orders" */
   insert_table_orders?: Maybe<Table_Orders_Mutation_Response>;
   /** insert a single row into the table: "table_orders" */
   insert_table_orders_one?: Maybe<Table_Orders>;
   /** insert data into the table: "tables" */
   insert_tables?: Maybe<Tables_Mutation_Response>;
   /** insert a single row into the table: "tables" */
   insert_tables_one?: Maybe<Tables>;
   /** insert data into the table: "users" */
   insert_users?: Maybe<Users_Mutation_Response>;
   /** insert a single row into the table: "users" */
   insert_users_one?: Maybe<Users>;
   /** insert data into the table: "verification_tokens" */
   insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
   /** insert a single row into the table: "verification_tokens" */
   insert_verification_tokens_one?: Maybe<Verification_Tokens>;
   /** update data of the table: "accounts" */
   update_accounts?: Maybe<Accounts_Mutation_Response>;
   /** update single row of the table: "accounts" */
   update_accounts_by_pk?: Maybe<Accounts>;
   /** update multiples rows of table: "accounts" */
   update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
   /** update data of the table: "categories" */
   update_categories?: Maybe<Categories_Mutation_Response>;
   /** update single row of the table: "categories" */
   update_categories_by_pk?: Maybe<Categories>;
   /** update multiples rows of table: "categories" */
   update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
   /** update data of the table: "items" */
   update_items?: Maybe<Items_Mutation_Response>;
   /** update single row of the table: "items" */
   update_items_by_pk?: Maybe<Items>;
   /** update multiples rows of table: "items" */
   update_items_many?: Maybe<Array<Maybe<Items_Mutation_Response>>>;
   /** update data of the table: "orders" */
   update_orders?: Maybe<Orders_Mutation_Response>;
   /** update single row of the table: "orders" */
   update_orders_by_pk?: Maybe<Orders>;
   /** update multiples rows of table: "orders" */
   update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
   /** update data of the table: "restaurant_administrators" */
   update_restaurant_administrators?: Maybe<Restaurant_Administrators_Mutation_Response>;
   /** update single row of the table: "restaurant_administrators" */
   update_restaurant_administrators_by_pk?: Maybe<Restaurant_Administrators>;
   /** update multiples rows of table: "restaurant_administrators" */
   update_restaurant_administrators_many?: Maybe<Array<Maybe<Restaurant_Administrators_Mutation_Response>>>;
   /** update data of the table: "restaurants" */
   update_restaurants?: Maybe<Restaurants_Mutation_Response>;
   /** update single row of the table: "restaurants" */
   update_restaurants_by_pk?: Maybe<Restaurants>;
   /** update multiples rows of table: "restaurants" */
   update_restaurants_many?: Maybe<Array<Maybe<Restaurants_Mutation_Response>>>;
   /** update data of the table: "sessions" */
   update_sessions?: Maybe<Sessions_Mutation_Response>;
   /** update single row of the table: "sessions" */
   update_sessions_by_pk?: Maybe<Sessions>;
   /** update multiples rows of table: "sessions" */
   update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
   /** update data of the table: "supermarket_items" */
   update_supermarket_items?: Maybe<Supermarket_Items_Mutation_Response>;
   /** update single row of the table: "supermarket_items" */
   update_supermarket_items_by_pk?: Maybe<Supermarket_Items>;
   /** update multiples rows of table: "supermarket_items" */
   update_supermarket_items_many?: Maybe<Array<Maybe<Supermarket_Items_Mutation_Response>>>;
   /** update data of the table: "table_orders" */
   update_table_orders?: Maybe<Table_Orders_Mutation_Response>;
   /** update single row of the table: "table_orders" */
   update_table_orders_by_pk?: Maybe<Table_Orders>;
   /** update multiples rows of table: "table_orders" */
   update_table_orders_many?: Maybe<Array<Maybe<Table_Orders_Mutation_Response>>>;
   /** update data of the table: "tables" */
   update_tables?: Maybe<Tables_Mutation_Response>;
   /** update single row of the table: "tables" */
   update_tables_by_pk?: Maybe<Tables>;
   /** update multiples rows of table: "tables" */
   update_tables_many?: Maybe<Array<Maybe<Tables_Mutation_Response>>>;
   /** update data of the table: "users" */
   update_users?: Maybe<Users_Mutation_Response>;
   /** update single row of the table: "users" */
   update_users_by_pk?: Maybe<Users>;
   /** update multiples rows of table: "users" */
   update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
   /** update data of the table: "verification_tokens" */
   update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
   /** update single row of the table: "verification_tokens" */
   update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
   /** update multiples rows of table: "verification_tokens" */
   update_verification_tokens_many?: Maybe<Array<Maybe<Verification_Tokens_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
   where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
   where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
   where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
   where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_AdministratorsArgs = {
   where: Restaurant_Administrators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restaurant_Administrators_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RestaurantsArgs = {
   where: Restaurants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restaurants_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
   where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Supermarket_ItemsArgs = {
   where: Supermarket_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Supermarket_Items_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Table_OrdersArgs = {
   where: Table_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Table_Orders_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TablesArgs = {
   where: Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tables_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
   where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
   id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
   where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
   token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
   objects: Array<Accounts_Insert_Input>;
   on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
   object: Accounts_Insert_Input;
   on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
   objects: Array<Categories_Insert_Input>;
   on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
   object: Categories_Insert_Input;
   on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
   objects: Array<Items_Insert_Input>;
   on_conflict?: InputMaybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
   object: Items_Insert_Input;
   on_conflict?: InputMaybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
   objects: Array<Orders_Insert_Input>;
   on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
   object: Orders_Insert_Input;
   on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_AdministratorsArgs = {
   objects: Array<Restaurant_Administrators_Insert_Input>;
   on_conflict?: InputMaybe<Restaurant_Administrators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurant_Administrators_OneArgs = {
   object: Restaurant_Administrators_Insert_Input;
   on_conflict?: InputMaybe<Restaurant_Administrators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RestaurantsArgs = {
   objects: Array<Restaurants_Insert_Input>;
   on_conflict?: InputMaybe<Restaurants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restaurants_OneArgs = {
   object: Restaurants_Insert_Input;
   on_conflict?: InputMaybe<Restaurants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
   objects: Array<Sessions_Insert_Input>;
   on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
   object: Sessions_Insert_Input;
   on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supermarket_ItemsArgs = {
   objects: Array<Supermarket_Items_Insert_Input>;
   on_conflict?: InputMaybe<Supermarket_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supermarket_Items_OneArgs = {
   object: Supermarket_Items_Insert_Input;
   on_conflict?: InputMaybe<Supermarket_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Table_OrdersArgs = {
   objects: Array<Table_Orders_Insert_Input>;
   on_conflict?: InputMaybe<Table_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Table_Orders_OneArgs = {
   object: Table_Orders_Insert_Input;
   on_conflict?: InputMaybe<Table_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TablesArgs = {
   objects: Array<Tables_Insert_Input>;
   on_conflict?: InputMaybe<Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tables_OneArgs = {
   object: Tables_Insert_Input;
   on_conflict?: InputMaybe<Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
   objects: Array<Users_Insert_Input>;
   on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
   object: Users_Insert_Input;
   on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
   objects: Array<Verification_Tokens_Insert_Input>;
   on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
   object: Verification_Tokens_Insert_Input;
   on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
   _inc?: InputMaybe<Accounts_Inc_Input>;
   _set?: InputMaybe<Accounts_Set_Input>;
   where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
   _inc?: InputMaybe<Accounts_Inc_Input>;
   _set?: InputMaybe<Accounts_Set_Input>;
   pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
   updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
   _inc?: InputMaybe<Categories_Inc_Input>;
   _set?: InputMaybe<Categories_Set_Input>;
   where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
   _inc?: InputMaybe<Categories_Inc_Input>;
   _set?: InputMaybe<Categories_Set_Input>;
   pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
   updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
   _append?: InputMaybe<Items_Append_Input>;
   _delete_at_path?: InputMaybe<Items_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Items_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Items_Delete_Key_Input>;
   _inc?: InputMaybe<Items_Inc_Input>;
   _prepend?: InputMaybe<Items_Prepend_Input>;
   _set?: InputMaybe<Items_Set_Input>;
   where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
   _append?: InputMaybe<Items_Append_Input>;
   _delete_at_path?: InputMaybe<Items_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Items_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Items_Delete_Key_Input>;
   _inc?: InputMaybe<Items_Inc_Input>;
   _prepend?: InputMaybe<Items_Prepend_Input>;
   _set?: InputMaybe<Items_Set_Input>;
   pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Items_ManyArgs = {
   updates: Array<Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
   _append?: InputMaybe<Orders_Append_Input>;
   _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
   _inc?: InputMaybe<Orders_Inc_Input>;
   _prepend?: InputMaybe<Orders_Prepend_Input>;
   _set?: InputMaybe<Orders_Set_Input>;
   where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
   _append?: InputMaybe<Orders_Append_Input>;
   _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
   _inc?: InputMaybe<Orders_Inc_Input>;
   _prepend?: InputMaybe<Orders_Prepend_Input>;
   _set?: InputMaybe<Orders_Set_Input>;
   pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
   updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_AdministratorsArgs = {
   _set?: InputMaybe<Restaurant_Administrators_Set_Input>;
   where: Restaurant_Administrators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_Administrators_By_PkArgs = {
   _set?: InputMaybe<Restaurant_Administrators_Set_Input>;
   pk_columns: Restaurant_Administrators_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurant_Administrators_ManyArgs = {
   updates: Array<Restaurant_Administrators_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RestaurantsArgs = {
   _append?: InputMaybe<Restaurants_Append_Input>;
   _delete_at_path?: InputMaybe<Restaurants_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Restaurants_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Restaurants_Delete_Key_Input>;
   _prepend?: InputMaybe<Restaurants_Prepend_Input>;
   _set?: InputMaybe<Restaurants_Set_Input>;
   where: Restaurants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurants_By_PkArgs = {
   _append?: InputMaybe<Restaurants_Append_Input>;
   _delete_at_path?: InputMaybe<Restaurants_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Restaurants_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Restaurants_Delete_Key_Input>;
   _prepend?: InputMaybe<Restaurants_Prepend_Input>;
   _set?: InputMaybe<Restaurants_Set_Input>;
   pk_columns: Restaurants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Restaurants_ManyArgs = {
   updates: Array<Restaurants_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
   _set?: InputMaybe<Sessions_Set_Input>;
   where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
   _set?: InputMaybe<Sessions_Set_Input>;
   pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
   updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Supermarket_ItemsArgs = {
   _inc?: InputMaybe<Supermarket_Items_Inc_Input>;
   _set?: InputMaybe<Supermarket_Items_Set_Input>;
   where: Supermarket_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supermarket_Items_By_PkArgs = {
   _inc?: InputMaybe<Supermarket_Items_Inc_Input>;
   _set?: InputMaybe<Supermarket_Items_Set_Input>;
   pk_columns: Supermarket_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Supermarket_Items_ManyArgs = {
   updates: Array<Supermarket_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Table_OrdersArgs = {
   _append?: InputMaybe<Table_Orders_Append_Input>;
   _delete_at_path?: InputMaybe<Table_Orders_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Table_Orders_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Table_Orders_Delete_Key_Input>;
   _prepend?: InputMaybe<Table_Orders_Prepend_Input>;
   _set?: InputMaybe<Table_Orders_Set_Input>;
   where: Table_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Table_Orders_By_PkArgs = {
   _append?: InputMaybe<Table_Orders_Append_Input>;
   _delete_at_path?: InputMaybe<Table_Orders_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Table_Orders_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Table_Orders_Delete_Key_Input>;
   _prepend?: InputMaybe<Table_Orders_Prepend_Input>;
   _set?: InputMaybe<Table_Orders_Set_Input>;
   pk_columns: Table_Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Table_Orders_ManyArgs = {
   updates: Array<Table_Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TablesArgs = {
   _append?: InputMaybe<Tables_Append_Input>;
   _delete_at_path?: InputMaybe<Tables_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Tables_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Tables_Delete_Key_Input>;
   _inc?: InputMaybe<Tables_Inc_Input>;
   _prepend?: InputMaybe<Tables_Prepend_Input>;
   _set?: InputMaybe<Tables_Set_Input>;
   where: Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tables_By_PkArgs = {
   _append?: InputMaybe<Tables_Append_Input>;
   _delete_at_path?: InputMaybe<Tables_Delete_At_Path_Input>;
   _delete_elem?: InputMaybe<Tables_Delete_Elem_Input>;
   _delete_key?: InputMaybe<Tables_Delete_Key_Input>;
   _inc?: InputMaybe<Tables_Inc_Input>;
   _prepend?: InputMaybe<Tables_Prepend_Input>;
   _set?: InputMaybe<Tables_Set_Input>;
   pk_columns: Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tables_ManyArgs = {
   updates: Array<Tables_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
   _set?: InputMaybe<Users_Set_Input>;
   where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
   _set?: InputMaybe<Users_Set_Input>;
   pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
   updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
   _set?: InputMaybe<Verification_Tokens_Set_Input>;
   where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
   _set?: InputMaybe<Verification_Tokens_Set_Input>;
   pk_columns: Verification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
   updates: Array<Verification_Tokens_Updates>;
};

/** column ordering options */
export type Order_By =
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
export type Orders = {
   __typename?: 'orders';
   chair_number: Scalars['Int'];
   created_at: Scalars['timestamptz'];
   id: Scalars['uuid'];
   items?: Maybe<Scalars['jsonb']>;
   subtotal: Scalars['Int'];
   /** An object relationship */
   table_order: Table_Orders;
   table_order_id: Scalars['uuid'];
   total: Scalars['Int'];
   total_tax: Scalars['Int'];
};


/** columns and relationships of "orders" */
export type OrdersItemsArgs = {
   path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
   __typename?: 'orders_aggregate';
   aggregate?: Maybe<Orders_Aggregate_Fields>;
   nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
   count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
   arguments?: InputMaybe<Array<Orders_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Orders_Bool_Exp>;
   predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
   __typename?: 'orders_aggregate_fields';
   avg?: Maybe<Orders_Avg_Fields>;
   count: Scalars['Int'];
   max?: Maybe<Orders_Max_Fields>;
   min?: Maybe<Orders_Min_Fields>;
   stddev?: Maybe<Orders_Stddev_Fields>;
   stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
   stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
   sum?: Maybe<Orders_Sum_Fields>;
   var_pop?: Maybe<Orders_Var_Pop_Fields>;
   var_samp?: Maybe<Orders_Var_Samp_Fields>;
   variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Orders_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
   avg?: InputMaybe<Orders_Avg_Order_By>;
   count?: InputMaybe<Order_By>;
   max?: InputMaybe<Orders_Max_Order_By>;
   min?: InputMaybe<Orders_Min_Order_By>;
   stddev?: InputMaybe<Orders_Stddev_Order_By>;
   stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
   stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
   sum?: InputMaybe<Orders_Sum_Order_By>;
   var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
   var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
   variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Orders_Append_Input = {
   items?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
   data: Array<Orders_Insert_Input>;
   /** upsert condition */
   on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
   __typename?: 'orders_avg_fields';
   chair_number?: Maybe<Scalars['Float']>;
   subtotal?: Maybe<Scalars['Float']>;
   total?: Maybe<Scalars['Float']>;
   total_tax?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
   _and?: InputMaybe<Array<Orders_Bool_Exp>>;
   _not?: InputMaybe<Orders_Bool_Exp>;
   _or?: InputMaybe<Array<Orders_Bool_Exp>>;
   chair_number?: InputMaybe<Int_Comparison_Exp>;
   created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   items?: InputMaybe<Jsonb_Comparison_Exp>;
   subtotal?: InputMaybe<Int_Comparison_Exp>;
   table_order?: InputMaybe<Table_Orders_Bool_Exp>;
   table_order_id?: InputMaybe<Uuid_Comparison_Exp>;
   total?: InputMaybe<Int_Comparison_Exp>;
   total_tax?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export type Orders_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'orders_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Orders_Delete_At_Path_Input = {
   items?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Orders_Delete_Elem_Input = {
   items?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Orders_Delete_Key_Input = {
   items?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
   chair_number?: InputMaybe<Scalars['Int']>;
   subtotal?: InputMaybe<Scalars['Int']>;
   total?: InputMaybe<Scalars['Int']>;
   total_tax?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
   chair_number?: InputMaybe<Scalars['Int']>;
   created_at?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   items?: InputMaybe<Scalars['jsonb']>;
   subtotal?: InputMaybe<Scalars['Int']>;
   table_order?: InputMaybe<Table_Orders_Obj_Rel_Insert_Input>;
   table_order_id?: InputMaybe<Scalars['uuid']>;
   total?: InputMaybe<Scalars['Int']>;
   total_tax?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
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
export type Orders_Max_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   created_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   table_order_id?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
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
export type Orders_Min_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   created_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   table_order_id?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
   __typename?: 'orders_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Orders>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
   constraint: Orders_Constraint;
   update_columns?: Array<Orders_Update_Column>;
   where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   created_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   items?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   table_order?: InputMaybe<Table_Orders_Order_By>;
   table_order_id?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Orders_Prepend_Input = {
   items?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "orders" */
export type Orders_Select_Column =
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
export type Orders_Set_Input = {
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
export type Orders_Stddev_Fields = {
   __typename?: 'orders_stddev_fields';
   chair_number?: Maybe<Scalars['Float']>;
   subtotal?: Maybe<Scalars['Float']>;
   total?: Maybe<Scalars['Float']>;
   total_tax?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
   __typename?: 'orders_stddev_pop_fields';
   chair_number?: Maybe<Scalars['Float']>;
   subtotal?: Maybe<Scalars['Float']>;
   total?: Maybe<Scalars['Float']>;
   total_tax?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
   __typename?: 'orders_stddev_samp_fields';
   chair_number?: Maybe<Scalars['Float']>;
   subtotal?: Maybe<Scalars['Float']>;
   total?: Maybe<Scalars['Float']>;
   total_tax?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Orders_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
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
export type Orders_Sum_Fields = {
   __typename?: 'orders_sum_fields';
   chair_number?: Maybe<Scalars['Int']>;
   subtotal?: Maybe<Scalars['Int']>;
   total?: Maybe<Scalars['Int']>;
   total_tax?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export type Orders_Update_Column =
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

export type Orders_Updates = {
   /** append existing jsonb value of filtered columns with new jsonb value */
   _append?: InputMaybe<Orders_Append_Input>;
   /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
   _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
   /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
   _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
   /** delete key/value pair or string element. key/value pairs are matched based on their key value */
   _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
   /** increments the numeric columns with given value of the filtered values */
   _inc?: InputMaybe<Orders_Inc_Input>;
   /** prepend existing jsonb value of filtered columns with new jsonb value */
   _prepend?: InputMaybe<Orders_Prepend_Input>;
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Orders_Set_Input>;
   /** filter the rows which have to be updated */
   where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
   __typename?: 'orders_var_pop_fields';
   chair_number?: Maybe<Scalars['Float']>;
   subtotal?: Maybe<Scalars['Float']>;
   total?: Maybe<Scalars['Float']>;
   total_tax?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
   __typename?: 'orders_var_samp_fields';
   chair_number?: Maybe<Scalars['Float']>;
   subtotal?: Maybe<Scalars['Float']>;
   total?: Maybe<Scalars['Float']>;
   total_tax?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
   __typename?: 'orders_variance_fields';
   chair_number?: Maybe<Scalars['Float']>;
   subtotal?: Maybe<Scalars['Float']>;
   total?: Maybe<Scalars['Float']>;
   total_tax?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
   chair_number?: InputMaybe<Order_By>;
   subtotal?: InputMaybe<Order_By>;
   total?: InputMaybe<Order_By>;
   total_tax?: InputMaybe<Order_By>;
};

export type Query_Root = {
   __typename?: 'query_root';
   /** An array relationship */
   accounts: Array<Accounts>;
   /** An aggregate relationship */
   accounts_aggregate: Accounts_Aggregate;
   /** fetch data from the table: "accounts" using primary key columns */
   accounts_by_pk?: Maybe<Accounts>;
   /** An array relationship */
   categories: Array<Categories>;
   /** An aggregate relationship */
   categories_aggregate: Categories_Aggregate;
   /** fetch data from the table: "categories" using primary key columns */
   categories_by_pk?: Maybe<Categories>;
   /** An array relationship */
   items: Array<Items>;
   /** An aggregate relationship */
   items_aggregate: Items_Aggregate;
   /** fetch data from the table: "items" using primary key columns */
   items_by_pk?: Maybe<Items>;
   /** An array relationship */
   orders: Array<Orders>;
   /** An aggregate relationship */
   orders_aggregate: Orders_Aggregate;
   /** fetch data from the table: "orders" using primary key columns */
   orders_by_pk?: Maybe<Orders>;
   /** fetch data from the table: "restaurant_administrators" */
   restaurant_administrators: Array<Restaurant_Administrators>;
   /** fetch aggregated fields from the table: "restaurant_administrators" */
   restaurant_administrators_aggregate: Restaurant_Administrators_Aggregate;
   /** fetch data from the table: "restaurant_administrators" using primary key columns */
   restaurant_administrators_by_pk?: Maybe<Restaurant_Administrators>;
   /** fetch data from the table: "restaurants" */
   restaurants: Array<Restaurants>;
   /** fetch aggregated fields from the table: "restaurants" */
   restaurants_aggregate: Restaurants_Aggregate;
   /** fetch data from the table: "restaurants" using primary key columns */
   restaurants_by_pk?: Maybe<Restaurants>;
   /** An array relationship */
   sessions: Array<Sessions>;
   /** An aggregate relationship */
   sessions_aggregate: Sessions_Aggregate;
   /** fetch data from the table: "sessions" using primary key columns */
   sessions_by_pk?: Maybe<Sessions>;
   /** fetch data from the table: "supermarket_items" */
   supermarket_items: Array<Supermarket_Items>;
   /** fetch aggregated fields from the table: "supermarket_items" */
   supermarket_items_aggregate: Supermarket_Items_Aggregate;
   /** fetch data from the table: "supermarket_items" using primary key columns */
   supermarket_items_by_pk?: Maybe<Supermarket_Items>;
   /** An array relationship */
   table_orders: Array<Table_Orders>;
   /** An aggregate relationship */
   table_orders_aggregate: Table_Orders_Aggregate;
   /** fetch data from the table: "table_orders" using primary key columns */
   table_orders_by_pk?: Maybe<Table_Orders>;
   /** An array relationship */
   tables: Array<Tables>;
   /** An aggregate relationship */
   tables_aggregate: Tables_Aggregate;
   /** fetch data from the table: "tables" using primary key columns */
   tables_by_pk?: Maybe<Tables>;
   /** fetch data from the table: "users" */
   users: Array<Users>;
   /** fetch aggregated fields from the table: "users" */
   users_aggregate: Users_Aggregate;
   /** fetch data from the table: "users" using primary key columns */
   users_by_pk?: Maybe<Users>;
   /** fetch data from the table: "verification_tokens" */
   verification_tokens: Array<Verification_Tokens>;
   /** fetch aggregated fields from the table: "verification_tokens" */
   verification_tokens_aggregate: Verification_Tokens_Aggregate;
   /** fetch data from the table: "verification_tokens" using primary key columns */
   verification_tokens_by_pk?: Maybe<Verification_Tokens>;
};


export type Query_RootAccountsArgs = {
   distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Accounts_Order_By>>;
   where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Accounts_Order_By>>;
   where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootCategoriesArgs = {
   distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Categories_Order_By>>;
   where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Categories_Order_By>>;
   where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootItemsArgs = {
   distinct_on?: InputMaybe<Array<Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Items_Order_By>>;
   where?: InputMaybe<Items_Bool_Exp>;
};


export type Query_RootItems_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Items_Order_By>>;
   where?: InputMaybe<Items_Bool_Exp>;
};


export type Query_RootItems_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootOrdersArgs = {
   distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Orders_Order_By>>;
   where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Orders_Order_By>>;
   where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootRestaurant_AdministratorsArgs = {
   distinct_on?: InputMaybe<Array<Restaurant_Administrators_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurant_Administrators_Order_By>>;
   where?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
};


export type Query_RootRestaurant_Administrators_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Restaurant_Administrators_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurant_Administrators_Order_By>>;
   where?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
};


export type Query_RootRestaurant_Administrators_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootRestaurantsArgs = {
   distinct_on?: InputMaybe<Array<Restaurants_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurants_Order_By>>;
   where?: InputMaybe<Restaurants_Bool_Exp>;
};


export type Query_RootRestaurants_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Restaurants_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurants_Order_By>>;
   where?: InputMaybe<Restaurants_Bool_Exp>;
};


export type Query_RootRestaurants_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootSessionsArgs = {
   distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Sessions_Order_By>>;
   where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Sessions_Order_By>>;
   where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootSupermarket_ItemsArgs = {
   distinct_on?: InputMaybe<Array<Supermarket_Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Supermarket_Items_Order_By>>;
   where?: InputMaybe<Supermarket_Items_Bool_Exp>;
};


export type Query_RootSupermarket_Items_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Supermarket_Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Supermarket_Items_Order_By>>;
   where?: InputMaybe<Supermarket_Items_Bool_Exp>;
};


export type Query_RootSupermarket_Items_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootTable_OrdersArgs = {
   distinct_on?: InputMaybe<Array<Table_Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Table_Orders_Order_By>>;
   where?: InputMaybe<Table_Orders_Bool_Exp>;
};


export type Query_RootTable_Orders_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Table_Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Table_Orders_Order_By>>;
   where?: InputMaybe<Table_Orders_Bool_Exp>;
};


export type Query_RootTable_Orders_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootTablesArgs = {
   distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Tables_Order_By>>;
   where?: InputMaybe<Tables_Bool_Exp>;
};


export type Query_RootTables_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Tables_Order_By>>;
   where?: InputMaybe<Tables_Bool_Exp>;
};


export type Query_RootTables_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
   distinct_on?: InputMaybe<Array<Users_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Users_Order_By>>;
   where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Users_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Users_Order_By>>;
   where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Query_RootVerification_TokensArgs = {
   distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
   where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
   where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_By_PkArgs = {
   token: Scalars['String'];
};

/** columns and relationships of "restaurant_administrators" */
export type Restaurant_Administrators = {
   __typename?: 'restaurant_administrators';
   id: Scalars['uuid'];
   /** An object relationship */
   restaurant: Restaurants;
   restaurant_id: Scalars['uuid'];
   user_id: Scalars['uuid'];
};

/** aggregated selection of "restaurant_administrators" */
export type Restaurant_Administrators_Aggregate = {
   __typename?: 'restaurant_administrators_aggregate';
   aggregate?: Maybe<Restaurant_Administrators_Aggregate_Fields>;
   nodes: Array<Restaurant_Administrators>;
};

export type Restaurant_Administrators_Aggregate_Bool_Exp = {
   count?: InputMaybe<Restaurant_Administrators_Aggregate_Bool_Exp_Count>;
};

export type Restaurant_Administrators_Aggregate_Bool_Exp_Count = {
   arguments?: InputMaybe<Array<Restaurant_Administrators_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
   predicate: Int_Comparison_Exp;
};

/** aggregate fields of "restaurant_administrators" */
export type Restaurant_Administrators_Aggregate_Fields = {
   __typename?: 'restaurant_administrators_aggregate_fields';
   count: Scalars['Int'];
   max?: Maybe<Restaurant_Administrators_Max_Fields>;
   min?: Maybe<Restaurant_Administrators_Min_Fields>;
};


/** aggregate fields of "restaurant_administrators" */
export type Restaurant_Administrators_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Restaurant_Administrators_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restaurant_administrators" */
export type Restaurant_Administrators_Aggregate_Order_By = {
   count?: InputMaybe<Order_By>;
   max?: InputMaybe<Restaurant_Administrators_Max_Order_By>;
   min?: InputMaybe<Restaurant_Administrators_Min_Order_By>;
};

/** input type for inserting array relation for remote table "restaurant_administrators" */
export type Restaurant_Administrators_Arr_Rel_Insert_Input = {
   data: Array<Restaurant_Administrators_Insert_Input>;
   /** upsert condition */
   on_conflict?: InputMaybe<Restaurant_Administrators_On_Conflict>;
};

/** Boolean expression to filter rows from the table "restaurant_administrators". All fields are combined with a logical 'AND'. */
export type Restaurant_Administrators_Bool_Exp = {
   _and?: InputMaybe<Array<Restaurant_Administrators_Bool_Exp>>;
   _not?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
   _or?: InputMaybe<Array<Restaurant_Administrators_Bool_Exp>>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   restaurant?: InputMaybe<Restaurants_Bool_Exp>;
   restaurant_id?: InputMaybe<Uuid_Comparison_Exp>;
   user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "restaurant_administrators" */
export type Restaurant_Administrators_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'restaurant_administrators_pkey'
   /** unique or primary key constraint on columns "user_id" */
   | 'restaurant_administrators_user_id_key';

/** input type for inserting data into table "restaurant_administrators" */
export type Restaurant_Administrators_Insert_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   restaurant?: InputMaybe<Restaurants_Obj_Rel_Insert_Input>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
   user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Restaurant_Administrators_Max_Fields = {
   __typename?: 'restaurant_administrators_max_fields';
   id?: Maybe<Scalars['uuid']>;
   restaurant_id?: Maybe<Scalars['uuid']>;
   user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "restaurant_administrators" */
export type Restaurant_Administrators_Max_Order_By = {
   id?: InputMaybe<Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
   user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Restaurant_Administrators_Min_Fields = {
   __typename?: 'restaurant_administrators_min_fields';
   id?: Maybe<Scalars['uuid']>;
   restaurant_id?: Maybe<Scalars['uuid']>;
   user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "restaurant_administrators" */
export type Restaurant_Administrators_Min_Order_By = {
   id?: InputMaybe<Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
   user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "restaurant_administrators" */
export type Restaurant_Administrators_Mutation_Response = {
   __typename?: 'restaurant_administrators_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Restaurant_Administrators>;
};

/** on_conflict condition type for table "restaurant_administrators" */
export type Restaurant_Administrators_On_Conflict = {
   constraint: Restaurant_Administrators_Constraint;
   update_columns?: Array<Restaurant_Administrators_Update_Column>;
   where?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
};

/** Ordering options when selecting data from "restaurant_administrators". */
export type Restaurant_Administrators_Order_By = {
   id?: InputMaybe<Order_By>;
   restaurant?: InputMaybe<Restaurants_Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
   user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: restaurant_administrators */
export type Restaurant_Administrators_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** select columns of table "restaurant_administrators" */
export type Restaurant_Administrators_Select_Column =
/** column name */
   | 'id'
   /** column name */
   | 'restaurant_id'
   /** column name */
   | 'user_id';

/** input type for updating data in table "restaurant_administrators" */
export type Restaurant_Administrators_Set_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
   user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "restaurant_administrators" */
export type Restaurant_Administrators_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Restaurant_Administrators_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Restaurant_Administrators_Stream_Cursor_Value_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
   user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "restaurant_administrators" */
export type Restaurant_Administrators_Update_Column =
/** column name */
   | 'id'
   /** column name */
   | 'restaurant_id'
   /** column name */
   | 'user_id';

export type Restaurant_Administrators_Updates = {
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Restaurant_Administrators_Set_Input>;
   /** filter the rows which have to be updated */
   where: Restaurant_Administrators_Bool_Exp;
};

/** columns and relationships of "restaurants" */
export type Restaurants = {
   __typename?: 'restaurants';
   /** An array relationship */
   administrators: Array<Restaurant_Administrators>;
   /** An aggregate relationship */
   administrators_aggregate: Restaurant_Administrators_Aggregate;
   /** An array relationship */
   categories: Array<Categories>;
   /** An aggregate relationship */
   categories_aggregate: Categories_Aggregate;
   customization: Scalars['jsonb'];
   description?: Maybe<Scalars['String']>;
   id: Scalars['uuid'];
   /** An array relationship */
   items: Array<Items>;
   /** An aggregate relationship */
   items_aggregate: Items_Aggregate;
   name: Scalars['String'];
   /** An object relationship */
   owner?: Maybe<Users>;
   owner_id: Scalars['uuid'];
   slug: Scalars['String'];
   /** An array relationship */
   tables: Array<Tables>;
   /** An aggregate relationship */
   tables_aggregate: Tables_Aggregate;
};


/** columns and relationships of "restaurants" */
export type RestaurantsAdministratorsArgs = {
   distinct_on?: InputMaybe<Array<Restaurant_Administrators_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurant_Administrators_Order_By>>;
   where?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsAdministrators_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Restaurant_Administrators_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurant_Administrators_Order_By>>;
   where?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsCategoriesArgs = {
   distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Categories_Order_By>>;
   where?: InputMaybe<Categories_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsCategories_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Categories_Order_By>>;
   where?: InputMaybe<Categories_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsCustomizationArgs = {
   path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsItemsArgs = {
   distinct_on?: InputMaybe<Array<Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Items_Order_By>>;
   where?: InputMaybe<Items_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsItems_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Items_Order_By>>;
   where?: InputMaybe<Items_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsTablesArgs = {
   distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Tables_Order_By>>;
   where?: InputMaybe<Tables_Bool_Exp>;
};


/** columns and relationships of "restaurants" */
export type RestaurantsTables_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Tables_Order_By>>;
   where?: InputMaybe<Tables_Bool_Exp>;
};

/** aggregated selection of "restaurants" */
export type Restaurants_Aggregate = {
   __typename?: 'restaurants_aggregate';
   aggregate?: Maybe<Restaurants_Aggregate_Fields>;
   nodes: Array<Restaurants>;
};

/** aggregate fields of "restaurants" */
export type Restaurants_Aggregate_Fields = {
   __typename?: 'restaurants_aggregate_fields';
   count: Scalars['Int'];
   max?: Maybe<Restaurants_Max_Fields>;
   min?: Maybe<Restaurants_Min_Fields>;
};


/** aggregate fields of "restaurants" */
export type Restaurants_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Restaurants_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Restaurants_Append_Input = {
   customization?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "restaurants". All fields are combined with a logical 'AND'. */
export type Restaurants_Bool_Exp = {
   _and?: InputMaybe<Array<Restaurants_Bool_Exp>>;
   _not?: InputMaybe<Restaurants_Bool_Exp>;
   _or?: InputMaybe<Array<Restaurants_Bool_Exp>>;
   administrators?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
   administrators_aggregate?: InputMaybe<Restaurant_Administrators_Aggregate_Bool_Exp>;
   categories?: InputMaybe<Categories_Bool_Exp>;
   categories_aggregate?: InputMaybe<Categories_Aggregate_Bool_Exp>;
   customization?: InputMaybe<Jsonb_Comparison_Exp>;
   description?: InputMaybe<String_Comparison_Exp>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   items?: InputMaybe<Items_Bool_Exp>;
   items_aggregate?: InputMaybe<Items_Aggregate_Bool_Exp>;
   name?: InputMaybe<String_Comparison_Exp>;
   owner?: InputMaybe<Users_Bool_Exp>;
   owner_id?: InputMaybe<Uuid_Comparison_Exp>;
   slug?: InputMaybe<String_Comparison_Exp>;
   tables?: InputMaybe<Tables_Bool_Exp>;
   tables_aggregate?: InputMaybe<Tables_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "restaurants" */
export type Restaurants_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'restaurants_id_key'
   /** unique or primary key constraint on columns "id" */
   | 'restaurants_pkey'
   /** unique or primary key constraint on columns "slug" */
   | 'restaurants_slug_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Restaurants_Delete_At_Path_Input = {
   customization?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Restaurants_Delete_Elem_Input = {
   customization?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Restaurants_Delete_Key_Input = {
   customization?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "restaurants" */
export type Restaurants_Insert_Input = {
   administrators?: InputMaybe<Restaurant_Administrators_Arr_Rel_Insert_Input>;
   categories?: InputMaybe<Categories_Arr_Rel_Insert_Input>;
   customization?: InputMaybe<Scalars['jsonb']>;
   description?: InputMaybe<Scalars['String']>;
   id?: InputMaybe<Scalars['uuid']>;
   items?: InputMaybe<Items_Arr_Rel_Insert_Input>;
   name?: InputMaybe<Scalars['String']>;
   owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
   owner_id?: InputMaybe<Scalars['uuid']>;
   slug?: InputMaybe<Scalars['String']>;
   tables?: InputMaybe<Tables_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Restaurants_Max_Fields = {
   __typename?: 'restaurants_max_fields';
   description?: Maybe<Scalars['String']>;
   id?: Maybe<Scalars['uuid']>;
   name?: Maybe<Scalars['String']>;
   owner_id?: Maybe<Scalars['uuid']>;
   slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Restaurants_Min_Fields = {
   __typename?: 'restaurants_min_fields';
   description?: Maybe<Scalars['String']>;
   id?: Maybe<Scalars['uuid']>;
   name?: Maybe<Scalars['String']>;
   owner_id?: Maybe<Scalars['uuid']>;
   slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "restaurants" */
export type Restaurants_Mutation_Response = {
   __typename?: 'restaurants_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Restaurants>;
};

/** input type for inserting object relation for remote table "restaurants" */
export type Restaurants_Obj_Rel_Insert_Input = {
   data: Restaurants_Insert_Input;
   /** upsert condition */
   on_conflict?: InputMaybe<Restaurants_On_Conflict>;
};

/** on_conflict condition type for table "restaurants" */
export type Restaurants_On_Conflict = {
   constraint: Restaurants_Constraint;
   update_columns?: Array<Restaurants_Update_Column>;
   where?: InputMaybe<Restaurants_Bool_Exp>;
};

/** Ordering options when selecting data from "restaurants". */
export type Restaurants_Order_By = {
   administrators_aggregate?: InputMaybe<Restaurant_Administrators_Aggregate_Order_By>;
   categories_aggregate?: InputMaybe<Categories_Aggregate_Order_By>;
   customization?: InputMaybe<Order_By>;
   description?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   items_aggregate?: InputMaybe<Items_Aggregate_Order_By>;
   name?: InputMaybe<Order_By>;
   owner?: InputMaybe<Users_Order_By>;
   owner_id?: InputMaybe<Order_By>;
   slug?: InputMaybe<Order_By>;
   tables_aggregate?: InputMaybe<Tables_Aggregate_Order_By>;
};

/** primary key columns input for table: restaurants */
export type Restaurants_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Restaurants_Prepend_Input = {
   customization?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "restaurants" */
export type Restaurants_Select_Column =
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
export type Restaurants_Set_Input = {
   customization?: InputMaybe<Scalars['jsonb']>;
   description?: InputMaybe<Scalars['String']>;
   id?: InputMaybe<Scalars['uuid']>;
   name?: InputMaybe<Scalars['String']>;
   owner_id?: InputMaybe<Scalars['uuid']>;
   slug?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "restaurants" */
export type Restaurants_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Restaurants_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Restaurants_Stream_Cursor_Value_Input = {
   customization?: InputMaybe<Scalars['jsonb']>;
   description?: InputMaybe<Scalars['String']>;
   id?: InputMaybe<Scalars['uuid']>;
   name?: InputMaybe<Scalars['String']>;
   owner_id?: InputMaybe<Scalars['uuid']>;
   slug?: InputMaybe<Scalars['String']>;
};

/** update columns of table "restaurants" */
export type Restaurants_Update_Column =
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

export type Restaurants_Updates = {
   /** append existing jsonb value of filtered columns with new jsonb value */
   _append?: InputMaybe<Restaurants_Append_Input>;
   /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
   _delete_at_path?: InputMaybe<Restaurants_Delete_At_Path_Input>;
   /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
   _delete_elem?: InputMaybe<Restaurants_Delete_Elem_Input>;
   /** delete key/value pair or string element. key/value pairs are matched based on their key value */
   _delete_key?: InputMaybe<Restaurants_Delete_Key_Input>;
   /** prepend existing jsonb value of filtered columns with new jsonb value */
   _prepend?: InputMaybe<Restaurants_Prepend_Input>;
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Restaurants_Set_Input>;
   /** filter the rows which have to be updated */
   where: Restaurants_Bool_Exp;
};

/** columns and relationships of "sessions" */
export type Sessions = {
   __typename?: 'sessions';
   expires?: Maybe<Scalars['timestamptz']>;
   id: Scalars['uuid'];
   sessionToken: Scalars['String'];
   /** An object relationship */
   user: Users;
   userId: Scalars['uuid'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
   __typename?: 'sessions_aggregate';
   aggregate?: Maybe<Sessions_Aggregate_Fields>;
   nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
   count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
   arguments?: InputMaybe<Array<Sessions_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Sessions_Bool_Exp>;
   predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
   __typename?: 'sessions_aggregate_fields';
   count: Scalars['Int'];
   max?: Maybe<Sessions_Max_Fields>;
   min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Sessions_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
   count?: InputMaybe<Order_By>;
   max?: InputMaybe<Sessions_Max_Order_By>;
   min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
   data: Array<Sessions_Insert_Input>;
   /** upsert condition */
   on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
   _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
   _not?: InputMaybe<Sessions_Bool_Exp>;
   _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
   expires?: InputMaybe<Timestamptz_Comparison_Exp>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   sessionToken?: InputMaybe<String_Comparison_Exp>;
   user?: InputMaybe<Users_Bool_Exp>;
   userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export type Sessions_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'sessions_pkey';

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
   expires?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   sessionToken?: InputMaybe<Scalars['String']>;
   user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
   userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
   __typename?: 'sessions_max_fields';
   expires?: Maybe<Scalars['timestamptz']>;
   id?: Maybe<Scalars['uuid']>;
   sessionToken?: Maybe<Scalars['String']>;
   userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
   expires?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   sessionToken?: InputMaybe<Order_By>;
   userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
   __typename?: 'sessions_min_fields';
   expires?: Maybe<Scalars['timestamptz']>;
   id?: Maybe<Scalars['uuid']>;
   sessionToken?: Maybe<Scalars['String']>;
   userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
   expires?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   sessionToken?: InputMaybe<Order_By>;
   userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
   __typename?: 'sessions_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
   constraint: Sessions_Constraint;
   update_columns?: Array<Sessions_Update_Column>;
   where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
   expires?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   sessionToken?: InputMaybe<Order_By>;
   user?: InputMaybe<Users_Order_By>;
   userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** select columns of table "sessions" */
export type Sessions_Select_Column =
/** column name */
   | 'expires'
   /** column name */
   | 'id'
   /** column name */
   | 'sessionToken'
   /** column name */
   | 'userId';

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
   expires?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   sessionToken?: InputMaybe<Scalars['String']>;
   userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Sessions_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
   expires?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   sessionToken?: InputMaybe<Scalars['String']>;
   userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "sessions" */
export type Sessions_Update_Column =
/** column name */
   | 'expires'
   /** column name */
   | 'id'
   /** column name */
   | 'sessionToken'
   /** column name */
   | 'userId';

export type Sessions_Updates = {
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Sessions_Set_Input>;
   /** filter the rows which have to be updated */
   where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
   /** An array relationship */
   accounts: Array<Accounts>;
   /** An aggregate relationship */
   accounts_aggregate: Accounts_Aggregate;
   /** fetch data from the table: "accounts" using primary key columns */
   accounts_by_pk?: Maybe<Accounts>;
   /** fetch data from the table in a streaming manner: "accounts" */
   accounts_stream: Array<Accounts>;
   /** An array relationship */
   categories: Array<Categories>;
   /** An aggregate relationship */
   categories_aggregate: Categories_Aggregate;
   /** fetch data from the table: "categories" using primary key columns */
   categories_by_pk?: Maybe<Categories>;
   /** fetch data from the table in a streaming manner: "categories" */
   categories_stream: Array<Categories>;
   /** An array relationship */
   items: Array<Items>;
   /** An aggregate relationship */
   items_aggregate: Items_Aggregate;
   /** fetch data from the table: "items" using primary key columns */
   items_by_pk?: Maybe<Items>;
   /** fetch data from the table in a streaming manner: "items" */
   items_stream: Array<Items>;
   /** An array relationship */
   orders: Array<Orders>;
   /** An aggregate relationship */
   orders_aggregate: Orders_Aggregate;
   /** fetch data from the table: "orders" using primary key columns */
   orders_by_pk?: Maybe<Orders>;
   /** fetch data from the table in a streaming manner: "orders" */
   orders_stream: Array<Orders>;
   /** fetch data from the table: "restaurant_administrators" */
   restaurant_administrators: Array<Restaurant_Administrators>;
   /** fetch aggregated fields from the table: "restaurant_administrators" */
   restaurant_administrators_aggregate: Restaurant_Administrators_Aggregate;
   /** fetch data from the table: "restaurant_administrators" using primary key columns */
   restaurant_administrators_by_pk?: Maybe<Restaurant_Administrators>;
   /** fetch data from the table in a streaming manner: "restaurant_administrators" */
   restaurant_administrators_stream: Array<Restaurant_Administrators>;
   /** fetch data from the table: "restaurants" */
   restaurants: Array<Restaurants>;
   /** fetch aggregated fields from the table: "restaurants" */
   restaurants_aggregate: Restaurants_Aggregate;
   /** fetch data from the table: "restaurants" using primary key columns */
   restaurants_by_pk?: Maybe<Restaurants>;
   /** fetch data from the table in a streaming manner: "restaurants" */
   restaurants_stream: Array<Restaurants>;
   /** An array relationship */
   sessions: Array<Sessions>;
   /** An aggregate relationship */
   sessions_aggregate: Sessions_Aggregate;
   /** fetch data from the table: "sessions" using primary key columns */
   sessions_by_pk?: Maybe<Sessions>;
   /** fetch data from the table in a streaming manner: "sessions" */
   sessions_stream: Array<Sessions>;
   /** fetch data from the table: "supermarket_items" */
   supermarket_items: Array<Supermarket_Items>;
   /** fetch aggregated fields from the table: "supermarket_items" */
   supermarket_items_aggregate: Supermarket_Items_Aggregate;
   /** fetch data from the table: "supermarket_items" using primary key columns */
   supermarket_items_by_pk?: Maybe<Supermarket_Items>;
   /** fetch data from the table in a streaming manner: "supermarket_items" */
   supermarket_items_stream: Array<Supermarket_Items>;
   /** An array relationship */
   table_orders: Array<Table_Orders>;
   /** An aggregate relationship */
   table_orders_aggregate: Table_Orders_Aggregate;
   /** fetch data from the table: "table_orders" using primary key columns */
   table_orders_by_pk?: Maybe<Table_Orders>;
   /** fetch data from the table in a streaming manner: "table_orders" */
   table_orders_stream: Array<Table_Orders>;
   /** An array relationship */
   tables: Array<Tables>;
   /** An aggregate relationship */
   tables_aggregate: Tables_Aggregate;
   /** fetch data from the table: "tables" using primary key columns */
   tables_by_pk?: Maybe<Tables>;
   /** fetch data from the table in a streaming manner: "tables" */
   tables_stream: Array<Tables>;
   /** fetch data from the table: "users" */
   users: Array<Users>;
   /** fetch aggregated fields from the table: "users" */
   users_aggregate: Users_Aggregate;
   /** fetch data from the table: "users" using primary key columns */
   users_by_pk?: Maybe<Users>;
   /** fetch data from the table in a streaming manner: "users" */
   users_stream: Array<Users>;
   /** fetch data from the table: "verification_tokens" */
   verification_tokens: Array<Verification_Tokens>;
   /** fetch aggregated fields from the table: "verification_tokens" */
   verification_tokens_aggregate: Verification_Tokens_Aggregate;
   /** fetch data from the table: "verification_tokens" using primary key columns */
   verification_tokens_by_pk?: Maybe<Verification_Tokens>;
   /** fetch data from the table in a streaming manner: "verification_tokens" */
   verification_tokens_stream: Array<Verification_Tokens>;
};


export type Subscription_RootAccountsArgs = {
   distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Accounts_Order_By>>;
   where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Accounts_Order_By>>;
   where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootAccounts_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
   where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
   distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Categories_Order_By>>;
   where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Categories_Order_By>>;
   where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootCategories_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
   where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootItemsArgs = {
   distinct_on?: InputMaybe<Array<Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Items_Order_By>>;
   where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Items_Order_By>>;
   where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootItems_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Items_Stream_Cursor_Input>>;
   where?: InputMaybe<Items_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
   distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Orders_Order_By>>;
   where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Orders_Order_By>>;
   where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootOrders_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
   where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootRestaurant_AdministratorsArgs = {
   distinct_on?: InputMaybe<Array<Restaurant_Administrators_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurant_Administrators_Order_By>>;
   where?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
};


export type Subscription_RootRestaurant_Administrators_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Restaurant_Administrators_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurant_Administrators_Order_By>>;
   where?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
};


export type Subscription_RootRestaurant_Administrators_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootRestaurant_Administrators_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Restaurant_Administrators_Stream_Cursor_Input>>;
   where?: InputMaybe<Restaurant_Administrators_Bool_Exp>;
};


export type Subscription_RootRestaurantsArgs = {
   distinct_on?: InputMaybe<Array<Restaurants_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurants_Order_By>>;
   where?: InputMaybe<Restaurants_Bool_Exp>;
};


export type Subscription_RootRestaurants_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Restaurants_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Restaurants_Order_By>>;
   where?: InputMaybe<Restaurants_Bool_Exp>;
};


export type Subscription_RootRestaurants_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootRestaurants_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Restaurants_Stream_Cursor_Input>>;
   where?: InputMaybe<Restaurants_Bool_Exp>;
};


export type Subscription_RootSessionsArgs = {
   distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Sessions_Order_By>>;
   where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Sessions_Order_By>>;
   where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootSessions_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
   where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSupermarket_ItemsArgs = {
   distinct_on?: InputMaybe<Array<Supermarket_Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Supermarket_Items_Order_By>>;
   where?: InputMaybe<Supermarket_Items_Bool_Exp>;
};


export type Subscription_RootSupermarket_Items_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Supermarket_Items_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Supermarket_Items_Order_By>>;
   where?: InputMaybe<Supermarket_Items_Bool_Exp>;
};


export type Subscription_RootSupermarket_Items_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootSupermarket_Items_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Supermarket_Items_Stream_Cursor_Input>>;
   where?: InputMaybe<Supermarket_Items_Bool_Exp>;
};


export type Subscription_RootTable_OrdersArgs = {
   distinct_on?: InputMaybe<Array<Table_Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Table_Orders_Order_By>>;
   where?: InputMaybe<Table_Orders_Bool_Exp>;
};


export type Subscription_RootTable_Orders_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Table_Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Table_Orders_Order_By>>;
   where?: InputMaybe<Table_Orders_Bool_Exp>;
};


export type Subscription_RootTable_Orders_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootTable_Orders_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Table_Orders_Stream_Cursor_Input>>;
   where?: InputMaybe<Table_Orders_Bool_Exp>;
};


export type Subscription_RootTablesArgs = {
   distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Tables_Order_By>>;
   where?: InputMaybe<Tables_Bool_Exp>;
};


export type Subscription_RootTables_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Tables_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Tables_Order_By>>;
   where?: InputMaybe<Tables_Bool_Exp>;
};


export type Subscription_RootTables_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootTables_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Tables_Stream_Cursor_Input>>;
   where?: InputMaybe<Tables_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
   distinct_on?: InputMaybe<Array<Users_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Users_Order_By>>;
   where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Users_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Users_Order_By>>;
   where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
   id: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
   where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerification_TokensArgs = {
   distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
   where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
   where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_By_PkArgs = {
   token: Scalars['String'];
};


export type Subscription_RootVerification_Tokens_StreamArgs = {
   batch_size: Scalars['Int'];
   cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
   where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** columns and relationships of "supermarket_items" */
export type Supermarket_Items = {
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
export type Supermarket_Items_Aggregate = {
   __typename?: 'supermarket_items_aggregate';
   aggregate?: Maybe<Supermarket_Items_Aggregate_Fields>;
   nodes: Array<Supermarket_Items>;
};

/** aggregate fields of "supermarket_items" */
export type Supermarket_Items_Aggregate_Fields = {
   __typename?: 'supermarket_items_aggregate_fields';
   avg?: Maybe<Supermarket_Items_Avg_Fields>;
   count: Scalars['Int'];
   max?: Maybe<Supermarket_Items_Max_Fields>;
   min?: Maybe<Supermarket_Items_Min_Fields>;
   stddev?: Maybe<Supermarket_Items_Stddev_Fields>;
   stddev_pop?: Maybe<Supermarket_Items_Stddev_Pop_Fields>;
   stddev_samp?: Maybe<Supermarket_Items_Stddev_Samp_Fields>;
   sum?: Maybe<Supermarket_Items_Sum_Fields>;
   var_pop?: Maybe<Supermarket_Items_Var_Pop_Fields>;
   var_samp?: Maybe<Supermarket_Items_Var_Samp_Fields>;
   variance?: Maybe<Supermarket_Items_Variance_Fields>;
};


/** aggregate fields of "supermarket_items" */
export type Supermarket_Items_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Supermarket_Items_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Supermarket_Items_Avg_Fields = {
   __typename?: 'supermarket_items_avg_fields';
   price?: Maybe<Scalars['Float']>;
   quantity?: Maybe<Scalars['Float']>;
   quantity_sold?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supermarket_items". All fields are combined with a logical 'AND'. */
export type Supermarket_Items_Bool_Exp = {
   _and?: InputMaybe<Array<Supermarket_Items_Bool_Exp>>;
   _not?: InputMaybe<Supermarket_Items_Bool_Exp>;
   _or?: InputMaybe<Array<Supermarket_Items_Bool_Exp>>;
   code?: InputMaybe<String_Comparison_Exp>;
   created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
   description?: InputMaybe<String_Comparison_Exp>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   name?: InputMaybe<String_Comparison_Exp>;
   price?: InputMaybe<Int_Comparison_Exp>;
   quantity?: InputMaybe<Int_Comparison_Exp>;
   quantity_sold?: InputMaybe<Int_Comparison_Exp>;
   supplier?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "supermarket_items" */
export type Supermarket_Items_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'supermarket_items_pkey';

/** input type for incrementing numeric columns in table "supermarket_items" */
export type Supermarket_Items_Inc_Input = {
   price?: InputMaybe<Scalars['Int']>;
   quantity?: InputMaybe<Scalars['Int']>;
   quantity_sold?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "supermarket_items" */
export type Supermarket_Items_Insert_Input = {
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
export type Supermarket_Items_Max_Fields = {
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
export type Supermarket_Items_Min_Fields = {
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
export type Supermarket_Items_Mutation_Response = {
   __typename?: 'supermarket_items_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Supermarket_Items>;
};

/** on_conflict condition type for table "supermarket_items" */
export type Supermarket_Items_On_Conflict = {
   constraint: Supermarket_Items_Constraint;
   update_columns?: Array<Supermarket_Items_Update_Column>;
   where?: InputMaybe<Supermarket_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "supermarket_items". */
export type Supermarket_Items_Order_By = {
   code?: InputMaybe<Order_By>;
   created_at?: InputMaybe<Order_By>;
   description?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   price?: InputMaybe<Order_By>;
   quantity?: InputMaybe<Order_By>;
   quantity_sold?: InputMaybe<Order_By>;
   supplier?: InputMaybe<Order_By>;
};

/** primary key columns input for table: supermarket_items */
export type Supermarket_Items_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** select columns of table "supermarket_items" */
export type Supermarket_Items_Select_Column =
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
export type Supermarket_Items_Set_Input = {
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
export type Supermarket_Items_Stddev_Fields = {
   __typename?: 'supermarket_items_stddev_fields';
   price?: Maybe<Scalars['Float']>;
   quantity?: Maybe<Scalars['Float']>;
   quantity_sold?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Supermarket_Items_Stddev_Pop_Fields = {
   __typename?: 'supermarket_items_stddev_pop_fields';
   price?: Maybe<Scalars['Float']>;
   quantity?: Maybe<Scalars['Float']>;
   quantity_sold?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Supermarket_Items_Stddev_Samp_Fields = {
   __typename?: 'supermarket_items_stddev_samp_fields';
   price?: Maybe<Scalars['Float']>;
   quantity?: Maybe<Scalars['Float']>;
   quantity_sold?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "supermarket_items" */
export type Supermarket_Items_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Supermarket_Items_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supermarket_Items_Stream_Cursor_Value_Input = {
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
export type Supermarket_Items_Sum_Fields = {
   __typename?: 'supermarket_items_sum_fields';
   price?: Maybe<Scalars['Int']>;
   quantity?: Maybe<Scalars['Int']>;
   quantity_sold?: Maybe<Scalars['Int']>;
};

/** update columns of table "supermarket_items" */
export type Supermarket_Items_Update_Column =
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

export type Supermarket_Items_Updates = {
   /** increments the numeric columns with given value of the filtered values */
   _inc?: InputMaybe<Supermarket_Items_Inc_Input>;
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Supermarket_Items_Set_Input>;
   /** filter the rows which have to be updated */
   where: Supermarket_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Supermarket_Items_Var_Pop_Fields = {
   __typename?: 'supermarket_items_var_pop_fields';
   price?: Maybe<Scalars['Float']>;
   quantity?: Maybe<Scalars['Float']>;
   quantity_sold?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Supermarket_Items_Var_Samp_Fields = {
   __typename?: 'supermarket_items_var_samp_fields';
   price?: Maybe<Scalars['Float']>;
   quantity?: Maybe<Scalars['Float']>;
   quantity_sold?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Supermarket_Items_Variance_Fields = {
   __typename?: 'supermarket_items_variance_fields';
   price?: Maybe<Scalars['Float']>;
   quantity?: Maybe<Scalars['Float']>;
   quantity_sold?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "table_orders" */
export type Table_Orders = {
   __typename?: 'table_orders';
   created_at: Scalars['timestamptz'];
   id: Scalars['uuid'];
   order_number?: Maybe<Scalars['String']>;
   /** An array relationship */
   orders: Array<Orders>;
   /** An aggregate relationship */
   orders_aggregate: Orders_Aggregate;
   status: Scalars['String'];
   /** An object relationship */
   table?: Maybe<Tables>;
   table_id?: Maybe<Scalars['uuid']>;
   tokens: Scalars['jsonb'];
};


/** columns and relationships of "table_orders" */
export type Table_OrdersOrdersArgs = {
   distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Orders_Order_By>>;
   where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "table_orders" */
export type Table_OrdersOrders_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Orders_Order_By>>;
   where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "table_orders" */
export type Table_OrdersTokensArgs = {
   path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "table_orders" */
export type Table_Orders_Aggregate = {
   __typename?: 'table_orders_aggregate';
   aggregate?: Maybe<Table_Orders_Aggregate_Fields>;
   nodes: Array<Table_Orders>;
};

export type Table_Orders_Aggregate_Bool_Exp = {
   count?: InputMaybe<Table_Orders_Aggregate_Bool_Exp_Count>;
};

export type Table_Orders_Aggregate_Bool_Exp_Count = {
   arguments?: InputMaybe<Array<Table_Orders_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Table_Orders_Bool_Exp>;
   predicate: Int_Comparison_Exp;
};

/** aggregate fields of "table_orders" */
export type Table_Orders_Aggregate_Fields = {
   __typename?: 'table_orders_aggregate_fields';
   count: Scalars['Int'];
   max?: Maybe<Table_Orders_Max_Fields>;
   min?: Maybe<Table_Orders_Min_Fields>;
};


/** aggregate fields of "table_orders" */
export type Table_Orders_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Table_Orders_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "table_orders" */
export type Table_Orders_Aggregate_Order_By = {
   count?: InputMaybe<Order_By>;
   max?: InputMaybe<Table_Orders_Max_Order_By>;
   min?: InputMaybe<Table_Orders_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Table_Orders_Append_Input = {
   tokens?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "table_orders" */
export type Table_Orders_Arr_Rel_Insert_Input = {
   data: Array<Table_Orders_Insert_Input>;
   /** upsert condition */
   on_conflict?: InputMaybe<Table_Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "table_orders". All fields are combined with a logical 'AND'. */
export type Table_Orders_Bool_Exp = {
   _and?: InputMaybe<Array<Table_Orders_Bool_Exp>>;
   _not?: InputMaybe<Table_Orders_Bool_Exp>;
   _or?: InputMaybe<Array<Table_Orders_Bool_Exp>>;
   created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   order_number?: InputMaybe<String_Comparison_Exp>;
   orders?: InputMaybe<Orders_Bool_Exp>;
   orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
   status?: InputMaybe<String_Comparison_Exp>;
   table?: InputMaybe<Tables_Bool_Exp>;
   table_id?: InputMaybe<Uuid_Comparison_Exp>;
   tokens?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "table_orders" */
export type Table_Orders_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'table_orders_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Table_Orders_Delete_At_Path_Input = {
   tokens?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Table_Orders_Delete_Elem_Input = {
   tokens?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Table_Orders_Delete_Key_Input = {
   tokens?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "table_orders" */
export type Table_Orders_Insert_Input = {
   created_at?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   order_number?: InputMaybe<Scalars['String']>;
   orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
   status?: InputMaybe<Scalars['String']>;
   table?: InputMaybe<Tables_Obj_Rel_Insert_Input>;
   table_id?: InputMaybe<Scalars['uuid']>;
   tokens?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Table_Orders_Max_Fields = {
   __typename?: 'table_orders_max_fields';
   created_at?: Maybe<Scalars['timestamptz']>;
   id?: Maybe<Scalars['uuid']>;
   order_number?: Maybe<Scalars['String']>;
   status?: Maybe<Scalars['String']>;
   table_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "table_orders" */
export type Table_Orders_Max_Order_By = {
   created_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   order_number?: InputMaybe<Order_By>;
   status?: InputMaybe<Order_By>;
   table_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Table_Orders_Min_Fields = {
   __typename?: 'table_orders_min_fields';
   created_at?: Maybe<Scalars['timestamptz']>;
   id?: Maybe<Scalars['uuid']>;
   order_number?: Maybe<Scalars['String']>;
   status?: Maybe<Scalars['String']>;
   table_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "table_orders" */
export type Table_Orders_Min_Order_By = {
   created_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   order_number?: InputMaybe<Order_By>;
   status?: InputMaybe<Order_By>;
   table_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "table_orders" */
export type Table_Orders_Mutation_Response = {
   __typename?: 'table_orders_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Table_Orders>;
};

/** input type for inserting object relation for remote table "table_orders" */
export type Table_Orders_Obj_Rel_Insert_Input = {
   data: Table_Orders_Insert_Input;
   /** upsert condition */
   on_conflict?: InputMaybe<Table_Orders_On_Conflict>;
};

/** on_conflict condition type for table "table_orders" */
export type Table_Orders_On_Conflict = {
   constraint: Table_Orders_Constraint;
   update_columns?: Array<Table_Orders_Update_Column>;
   where?: InputMaybe<Table_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "table_orders". */
export type Table_Orders_Order_By = {
   created_at?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   order_number?: InputMaybe<Order_By>;
   orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
   status?: InputMaybe<Order_By>;
   table?: InputMaybe<Tables_Order_By>;
   table_id?: InputMaybe<Order_By>;
   tokens?: InputMaybe<Order_By>;
};

/** primary key columns input for table: table_orders */
export type Table_Orders_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Table_Orders_Prepend_Input = {
   tokens?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "table_orders" */
export type Table_Orders_Select_Column =
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
export type Table_Orders_Set_Input = {
   created_at?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   order_number?: InputMaybe<Scalars['String']>;
   status?: InputMaybe<Scalars['String']>;
   table_id?: InputMaybe<Scalars['uuid']>;
   tokens?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "table_orders" */
export type Table_Orders_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Table_Orders_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Table_Orders_Stream_Cursor_Value_Input = {
   created_at?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   order_number?: InputMaybe<Scalars['String']>;
   status?: InputMaybe<Scalars['String']>;
   table_id?: InputMaybe<Scalars['uuid']>;
   tokens?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "table_orders" */
export type Table_Orders_Update_Column =
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

export type Table_Orders_Updates = {
   /** append existing jsonb value of filtered columns with new jsonb value */
   _append?: InputMaybe<Table_Orders_Append_Input>;
   /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
   _delete_at_path?: InputMaybe<Table_Orders_Delete_At_Path_Input>;
   /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
   _delete_elem?: InputMaybe<Table_Orders_Delete_Elem_Input>;
   /** delete key/value pair or string element. key/value pairs are matched based on their key value */
   _delete_key?: InputMaybe<Table_Orders_Delete_Key_Input>;
   /** prepend existing jsonb value of filtered columns with new jsonb value */
   _prepend?: InputMaybe<Table_Orders_Prepend_Input>;
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Table_Orders_Set_Input>;
   /** filter the rows which have to be updated */
   where: Table_Orders_Bool_Exp;
};

/** columns and relationships of "tables" */
export type Tables = {
   __typename?: 'tables';
   id: Scalars['uuid'];
   name: Scalars['String'];
   no_of_chairs: Scalars['Int'];
   order: Scalars['Int'];
   qr_codes?: Maybe<Scalars['jsonb']>;
   /** An object relationship */
   restaurant: Restaurants;
   restaurant_id: Scalars['uuid'];
   /** An array relationship */
   table_orders: Array<Table_Orders>;
   /** An aggregate relationship */
   table_orders_aggregate: Table_Orders_Aggregate;
};


/** columns and relationships of "tables" */
export type TablesQr_CodesArgs = {
   path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "tables" */
export type TablesTable_OrdersArgs = {
   distinct_on?: InputMaybe<Array<Table_Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Table_Orders_Order_By>>;
   where?: InputMaybe<Table_Orders_Bool_Exp>;
};


/** columns and relationships of "tables" */
export type TablesTable_Orders_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Table_Orders_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Table_Orders_Order_By>>;
   where?: InputMaybe<Table_Orders_Bool_Exp>;
};

/** aggregated selection of "tables" */
export type Tables_Aggregate = {
   __typename?: 'tables_aggregate';
   aggregate?: Maybe<Tables_Aggregate_Fields>;
   nodes: Array<Tables>;
};

export type Tables_Aggregate_Bool_Exp = {
   count?: InputMaybe<Tables_Aggregate_Bool_Exp_Count>;
};

export type Tables_Aggregate_Bool_Exp_Count = {
   arguments?: InputMaybe<Array<Tables_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
   filter?: InputMaybe<Tables_Bool_Exp>;
   predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tables" */
export type Tables_Aggregate_Fields = {
   __typename?: 'tables_aggregate_fields';
   avg?: Maybe<Tables_Avg_Fields>;
   count: Scalars['Int'];
   max?: Maybe<Tables_Max_Fields>;
   min?: Maybe<Tables_Min_Fields>;
   stddev?: Maybe<Tables_Stddev_Fields>;
   stddev_pop?: Maybe<Tables_Stddev_Pop_Fields>;
   stddev_samp?: Maybe<Tables_Stddev_Samp_Fields>;
   sum?: Maybe<Tables_Sum_Fields>;
   var_pop?: Maybe<Tables_Var_Pop_Fields>;
   var_samp?: Maybe<Tables_Var_Samp_Fields>;
   variance?: Maybe<Tables_Variance_Fields>;
};


/** aggregate fields of "tables" */
export type Tables_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Tables_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tables" */
export type Tables_Aggregate_Order_By = {
   avg?: InputMaybe<Tables_Avg_Order_By>;
   count?: InputMaybe<Order_By>;
   max?: InputMaybe<Tables_Max_Order_By>;
   min?: InputMaybe<Tables_Min_Order_By>;
   stddev?: InputMaybe<Tables_Stddev_Order_By>;
   stddev_pop?: InputMaybe<Tables_Stddev_Pop_Order_By>;
   stddev_samp?: InputMaybe<Tables_Stddev_Samp_Order_By>;
   sum?: InputMaybe<Tables_Sum_Order_By>;
   var_pop?: InputMaybe<Tables_Var_Pop_Order_By>;
   var_samp?: InputMaybe<Tables_Var_Samp_Order_By>;
   variance?: InputMaybe<Tables_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tables_Append_Input = {
   qr_codes?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "tables" */
export type Tables_Arr_Rel_Insert_Input = {
   data: Array<Tables_Insert_Input>;
   /** upsert condition */
   on_conflict?: InputMaybe<Tables_On_Conflict>;
};

/** aggregate avg on columns */
export type Tables_Avg_Fields = {
   __typename?: 'tables_avg_fields';
   no_of_chairs?: Maybe<Scalars['Float']>;
   order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tables" */
export type Tables_Avg_Order_By = {
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tables". All fields are combined with a logical 'AND'. */
export type Tables_Bool_Exp = {
   _and?: InputMaybe<Array<Tables_Bool_Exp>>;
   _not?: InputMaybe<Tables_Bool_Exp>;
   _or?: InputMaybe<Array<Tables_Bool_Exp>>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   name?: InputMaybe<String_Comparison_Exp>;
   no_of_chairs?: InputMaybe<Int_Comparison_Exp>;
   order?: InputMaybe<Int_Comparison_Exp>;
   qr_codes?: InputMaybe<Jsonb_Comparison_Exp>;
   restaurant?: InputMaybe<Restaurants_Bool_Exp>;
   restaurant_id?: InputMaybe<Uuid_Comparison_Exp>;
   table_orders?: InputMaybe<Table_Orders_Bool_Exp>;
   table_orders_aggregate?: InputMaybe<Table_Orders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tables" */
export type Tables_Constraint =
/** unique or primary key constraint on columns "id" */
   | 'tables_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tables_Delete_At_Path_Input = {
   qr_codes?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tables_Delete_Elem_Input = {
   qr_codes?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tables_Delete_Key_Input = {
   qr_codes?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "tables" */
export type Tables_Inc_Input = {
   no_of_chairs?: InputMaybe<Scalars['Int']>;
   order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tables" */
export type Tables_Insert_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   name?: InputMaybe<Scalars['String']>;
   no_of_chairs?: InputMaybe<Scalars['Int']>;
   order?: InputMaybe<Scalars['Int']>;
   qr_codes?: InputMaybe<Scalars['jsonb']>;
   restaurant?: InputMaybe<Restaurants_Obj_Rel_Insert_Input>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
   table_orders?: InputMaybe<Table_Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tables_Max_Fields = {
   __typename?: 'tables_max_fields';
   id?: Maybe<Scalars['uuid']>;
   name?: Maybe<Scalars['String']>;
   no_of_chairs?: Maybe<Scalars['Int']>;
   order?: Maybe<Scalars['Int']>;
   restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tables" */
export type Tables_Max_Order_By = {
   id?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tables_Min_Fields = {
   __typename?: 'tables_min_fields';
   id?: Maybe<Scalars['uuid']>;
   name?: Maybe<Scalars['String']>;
   no_of_chairs?: Maybe<Scalars['Int']>;
   order?: Maybe<Scalars['Int']>;
   restaurant_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tables" */
export type Tables_Min_Order_By = {
   id?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tables" */
export type Tables_Mutation_Response = {
   __typename?: 'tables_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Tables>;
};

/** input type for inserting object relation for remote table "tables" */
export type Tables_Obj_Rel_Insert_Input = {
   data: Tables_Insert_Input;
   /** upsert condition */
   on_conflict?: InputMaybe<Tables_On_Conflict>;
};

/** on_conflict condition type for table "tables" */
export type Tables_On_Conflict = {
   constraint: Tables_Constraint;
   update_columns?: Array<Tables_Update_Column>;
   where?: InputMaybe<Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "tables". */
export type Tables_Order_By = {
   id?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
   qr_codes?: InputMaybe<Order_By>;
   restaurant?: InputMaybe<Restaurants_Order_By>;
   restaurant_id?: InputMaybe<Order_By>;
   table_orders_aggregate?: InputMaybe<Table_Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: tables */
export type Tables_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tables_Prepend_Input = {
   qr_codes?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "tables" */
export type Tables_Select_Column =
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
export type Tables_Set_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   name?: InputMaybe<Scalars['String']>;
   no_of_chairs?: InputMaybe<Scalars['Int']>;
   order?: InputMaybe<Scalars['Int']>;
   qr_codes?: InputMaybe<Scalars['jsonb']>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Tables_Stddev_Fields = {
   __typename?: 'tables_stddev_fields';
   no_of_chairs?: Maybe<Scalars['Float']>;
   order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tables" */
export type Tables_Stddev_Order_By = {
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tables_Stddev_Pop_Fields = {
   __typename?: 'tables_stddev_pop_fields';
   no_of_chairs?: Maybe<Scalars['Float']>;
   order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tables" */
export type Tables_Stddev_Pop_Order_By = {
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tables_Stddev_Samp_Fields = {
   __typename?: 'tables_stddev_samp_fields';
   no_of_chairs?: Maybe<Scalars['Float']>;
   order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tables" */
export type Tables_Stddev_Samp_Order_By = {
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "tables" */
export type Tables_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Tables_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tables_Stream_Cursor_Value_Input = {
   id?: InputMaybe<Scalars['uuid']>;
   name?: InputMaybe<Scalars['String']>;
   no_of_chairs?: InputMaybe<Scalars['Int']>;
   order?: InputMaybe<Scalars['Int']>;
   qr_codes?: InputMaybe<Scalars['jsonb']>;
   restaurant_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Tables_Sum_Fields = {
   __typename?: 'tables_sum_fields';
   no_of_chairs?: Maybe<Scalars['Int']>;
   order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tables" */
export type Tables_Sum_Order_By = {
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
};

/** update columns of table "tables" */
export type Tables_Update_Column =
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

export type Tables_Updates = {
   /** append existing jsonb value of filtered columns with new jsonb value */
   _append?: InputMaybe<Tables_Append_Input>;
   /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
   _delete_at_path?: InputMaybe<Tables_Delete_At_Path_Input>;
   /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
   _delete_elem?: InputMaybe<Tables_Delete_Elem_Input>;
   /** delete key/value pair or string element. key/value pairs are matched based on their key value */
   _delete_key?: InputMaybe<Tables_Delete_Key_Input>;
   /** increments the numeric columns with given value of the filtered values */
   _inc?: InputMaybe<Tables_Inc_Input>;
   /** prepend existing jsonb value of filtered columns with new jsonb value */
   _prepend?: InputMaybe<Tables_Prepend_Input>;
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Tables_Set_Input>;
   /** filter the rows which have to be updated */
   where: Tables_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Tables_Var_Pop_Fields = {
   __typename?: 'tables_var_pop_fields';
   no_of_chairs?: Maybe<Scalars['Float']>;
   order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tables" */
export type Tables_Var_Pop_Order_By = {
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tables_Var_Samp_Fields = {
   __typename?: 'tables_var_samp_fields';
   no_of_chairs?: Maybe<Scalars['Float']>;
   order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tables" */
export type Tables_Var_Samp_Order_By = {
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tables_Variance_Fields = {
   __typename?: 'tables_variance_fields';
   no_of_chairs?: Maybe<Scalars['Float']>;
   order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tables" */
export type Tables_Variance_Order_By = {
   no_of_chairs?: InputMaybe<Order_By>;
   order?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
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
export type Users = {
   __typename?: 'users';
   /** An array relationship */
   accounts: Array<Accounts>;
   /** An aggregate relationship */
   accounts_aggregate: Accounts_Aggregate;
   created_at?: Maybe<Scalars['timestamptz']>;
   email?: Maybe<Scalars['String']>;
   emailVerified?: Maybe<Scalars['timestamptz']>;
   id: Scalars['uuid'];
   image?: Maybe<Scalars['String']>;
   name?: Maybe<Scalars['String']>;
   role?: Maybe<Scalars['String']>;
   /** An array relationship */
   sessions: Array<Sessions>;
   /** An aggregate relationship */
   sessions_aggregate: Sessions_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
   distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Accounts_Order_By>>;
   where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Accounts_Order_By>>;
   where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
   distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Sessions_Order_By>>;
   where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
   distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
   limit?: InputMaybe<Scalars['Int']>;
   offset?: InputMaybe<Scalars['Int']>;
   order_by?: InputMaybe<Array<Sessions_Order_By>>;
   where?: InputMaybe<Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate';
   aggregate?: Maybe<Users_Aggregate_Fields>;
   nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields';
   count: Scalars['Int'];
   max?: Maybe<Users_Max_Fields>;
   min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Users_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
   _and?: InputMaybe<Array<Users_Bool_Exp>>;
   _not?: InputMaybe<Users_Bool_Exp>;
   _or?: InputMaybe<Array<Users_Bool_Exp>>;
   accounts?: InputMaybe<Accounts_Bool_Exp>;
   accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
   created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
   email?: InputMaybe<String_Comparison_Exp>;
   emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
   id?: InputMaybe<Uuid_Comparison_Exp>;
   image?: InputMaybe<String_Comparison_Exp>;
   name?: InputMaybe<String_Comparison_Exp>;
   role?: InputMaybe<String_Comparison_Exp>;
   sessions?: InputMaybe<Sessions_Bool_Exp>;
   sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
/** unique or primary key constraint on columns "email" */
   | 'users_email_key'
   /** unique or primary key constraint on columns "id" */
   | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
   accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
   created_at?: InputMaybe<Scalars['timestamptz']>;
   email?: InputMaybe<Scalars['String']>;
   emailVerified?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   image?: InputMaybe<Scalars['String']>;
   name?: InputMaybe<Scalars['String']>;
   role?: InputMaybe<Scalars['String']>;
   sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
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
export type Users_Min_Fields = {
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
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
   data: Users_Insert_Input;
   /** upsert condition */
   on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
   constraint: Users_Constraint;
   update_columns?: Array<Users_Update_Column>;
   where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
   accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
   created_at?: InputMaybe<Order_By>;
   email?: InputMaybe<Order_By>;
   emailVerified?: InputMaybe<Order_By>;
   id?: InputMaybe<Order_By>;
   image?: InputMaybe<Order_By>;
   name?: InputMaybe<Order_By>;
   role?: InputMaybe<Order_By>;
   sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
   id: Scalars['uuid'];
};

/** select columns of table "users" */
export type Users_Select_Column =
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
export type Users_Set_Input = {
   created_at?: InputMaybe<Scalars['timestamptz']>;
   email?: InputMaybe<Scalars['String']>;
   emailVerified?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   image?: InputMaybe<Scalars['String']>;
   name?: InputMaybe<Scalars['String']>;
   role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Users_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
   created_at?: InputMaybe<Scalars['timestamptz']>;
   email?: InputMaybe<Scalars['String']>;
   emailVerified?: InputMaybe<Scalars['timestamptz']>;
   id?: InputMaybe<Scalars['uuid']>;
   image?: InputMaybe<Scalars['String']>;
   name?: InputMaybe<Scalars['String']>;
   role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
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

export type Users_Updates = {
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Users_Set_Input>;
   /** filter the rows which have to be updated */
   where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
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
export type Verification_Tokens = {
   __typename?: 'verification_tokens';
   expires?: Maybe<Scalars['timestamptz']>;
   identifier: Scalars['String'];
   token: Scalars['String'];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
   __typename?: 'verification_tokens_aggregate';
   aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
   nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
   __typename?: 'verification_tokens_aggregate_fields';
   count: Scalars['Int'];
   max?: Maybe<Verification_Tokens_Max_Fields>;
   min?: Maybe<Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
   columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
   distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
   _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
   _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
   _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
   expires?: InputMaybe<Timestamptz_Comparison_Exp>;
   identifier?: InputMaybe<String_Comparison_Exp>;
   token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export type Verification_Tokens_Constraint =
/** unique or primary key constraint on columns "token" */
   | 'verification_tokens_pkey';

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
   expires?: InputMaybe<Scalars['timestamptz']>;
   identifier?: InputMaybe<Scalars['String']>;
   token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
   __typename?: 'verification_tokens_max_fields';
   expires?: Maybe<Scalars['timestamptz']>;
   identifier?: Maybe<Scalars['String']>;
   token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
   __typename?: 'verification_tokens_min_fields';
   expires?: Maybe<Scalars['timestamptz']>;
   identifier?: Maybe<Scalars['String']>;
   token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
   __typename?: 'verification_tokens_mutation_response';
   /** number of rows affected by the mutation */
   affected_rows: Scalars['Int'];
   /** data from the rows affected by the mutation */
   returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
   constraint: Verification_Tokens_Constraint;
   update_columns?: Array<Verification_Tokens_Update_Column>;
   where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
   expires?: InputMaybe<Order_By>;
   identifier?: InputMaybe<Order_By>;
   token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
   token: Scalars['String'];
};

/** select columns of table "verification_tokens" */
export type Verification_Tokens_Select_Column =
/** column name */
   | 'expires'
   /** column name */
   | 'identifier'
   /** column name */
   | 'token';

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
   expires?: InputMaybe<Scalars['timestamptz']>;
   identifier?: InputMaybe<Scalars['String']>;
   token?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
   /** Stream column input with initial value */
   initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
   /** cursor ordering */
   ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
   expires?: InputMaybe<Scalars['timestamptz']>;
   identifier?: InputMaybe<Scalars['String']>;
   token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "verification_tokens" */
export type Verification_Tokens_Update_Column =
/** column name */
   | 'expires'
   /** column name */
   | 'identifier'
   /** column name */
   | 'token';

export type Verification_Tokens_Updates = {
   /** sets the columns of the filtered rows to the given values */
   _set?: InputMaybe<Verification_Tokens_Set_Input>;
   /** filter the rows which have to be updated */
   where: Verification_Tokens_Bool_Exp;
};

export type CreateAccountMutationVariables = Exact<{
   data: Accounts_Insert_Input;
}>;


export type CreateAccountMutation = { __typename?: 'mutation_root', insert_accounts_one?: { __typename: 'accounts', id: any, type: string, scope?: string | null, userId: any, id_token?: string | null, provider: string, expires_at?: any | null, token_type?: string | null, oauth_token?: string | null, access_token?: string | null, refresh_token?: string | null, session_state?: string | null, providerAccountId: string, oauth_token_secret?: string | null } | null };

export type DeleteAccountMutationVariables = Exact<{
   provider: Scalars['String'];
   providerAccountId: Scalars['String'];
}>;


export type DeleteAccountMutation = { __typename?: 'mutation_root', delete_accounts?: { __typename?: 'accounts_mutation_response', returning: Array<{ __typename: 'accounts', id: any, type: string, scope?: string | null, userId: any, id_token?: string | null, provider: string, expires_at?: any | null, token_type?: string | null, oauth_token?: string | null, access_token?: string | null, refresh_token?: string | null, session_state?: string | null, providerAccountId: string, oauth_token_secret?: string | null }> } | null };

export type UserFragment = { __typename: 'users', id: any, name?: string | null, email?: string | null, image?: string | null, emailVerified?: any | null, role?: string | null, created_at?: any | null };

export type SessionFragment = { __typename: 'sessions', id: any, userId: any, expires?: any | null, sessionToken: string };

export type AccountFragment = { __typename: 'accounts', id: any, type: string, scope?: string | null, userId: any, id_token?: string | null, provider: string, expires_at?: any | null, token_type?: string | null, oauth_token?: string | null, access_token?: string | null, refresh_token?: string | null, session_state?: string | null, providerAccountId: string, oauth_token_secret?: string | null };

export type VerificationTokenFragment = { __typename: 'verification_tokens', token: string, expires?: any | null, identifier: string };

export type GetSessionQueryVariables = Exact<{
   sessionToken?: InputMaybe<Scalars['String']>;
}>;


export type GetSessionQuery = { __typename?: 'query_root', sessions: Array<{ __typename: 'sessions', id: any, userId: any, expires?: any | null, sessionToken: string, user: { __typename: 'users', id: any, name?: string | null, email?: string | null, image?: string | null, emailVerified?: any | null, role?: string | null, created_at?: any | null } }> };

export type CreateSessionMutationVariables = Exact<{
   data: Sessions_Insert_Input;
}>;


export type CreateSessionMutation = { __typename?: 'mutation_root', insert_sessions_one?: { __typename: 'sessions', id: any, userId: any, expires?: any | null, sessionToken: string } | null };

export type UpdateSessionMutationVariables = Exact<{
   sessionToken?: InputMaybe<Scalars['String']>;
   data: Sessions_Set_Input;
}>;


export type UpdateSessionMutation = { __typename?: 'mutation_root', update_sessions?: { __typename?: 'sessions_mutation_response', returning: Array<{ __typename: 'sessions', id: any, userId: any, expires?: any | null, sessionToken: string }> } | null };

export type DeleteSessionMutationVariables = Exact<{
   sessionToken?: InputMaybe<Scalars['String']>;
}>;


export type DeleteSessionMutation = { __typename?: 'mutation_root', delete_sessions?: { __typename?: 'sessions_mutation_response', returning: Array<{ __typename: 'sessions', id: any, userId: any, expires?: any | null, sessionToken: string }> } | null };

export type GetUserQueryVariables = Exact<{
   id: Scalars['uuid'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename: 'users', id: any, name?: string | null, email?: string | null, image?: string | null, emailVerified?: any | null, role?: string | null, created_at?: any | null } | null };

export type GetUsersQueryVariables = Exact<{
   where: Users_Bool_Exp;
}>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename: 'users', id: any, name?: string | null, email?: string | null, image?: string | null, emailVerified?: any | null, role?: string | null, created_at?: any | null }> };

export type CreateUserMutationVariables = Exact<{
   data: Users_Insert_Input;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename: 'users', id: any, name?: string | null, email?: string | null, image?: string | null, emailVerified?: any | null, role?: string | null, created_at?: any | null } | null };

export type UpdateUserMutationVariables = Exact<{
   id: Scalars['uuid'];
   data: Users_Set_Input;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename: 'users', id: any, name?: string | null, email?: string | null, image?: string | null, emailVerified?: any | null, role?: string | null, created_at?: any | null } | null };

export type DeleteUserMutationVariables = Exact<{
   id: Scalars['uuid'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', delete_users_by_pk?: { __typename: 'users', id: any, name?: string | null, email?: string | null, image?: string | null, emailVerified?: any | null, role?: string | null, created_at?: any | null } | null };

export type CreateVerificationTokenMutationVariables = Exact<{
   data: Verification_Tokens_Insert_Input;
}>;


export type CreateVerificationTokenMutation = { __typename?: 'mutation_root', insert_verification_tokens_one?: { __typename: 'verification_tokens', token: string, expires?: any | null, identifier: string } | null };

export type DeleteVerificationTokenMutationVariables = Exact<{
   identifier: Scalars['String'];
   token: Scalars['String'];
}>;


export type DeleteVerificationTokenMutation = { __typename?: 'mutation_root', delete_verification_tokens?: { __typename?: 'verification_tokens_mutation_response', returning: Array<{ __typename: 'verification_tokens', token: string, expires?: any | null, identifier: string }> } | null };

export const UserFragmentDoc = gql`
  fragment User on users {
    __typename
    id
    name
    email
    image
    emailVerified
    role
    created_at
  }
`
export const SessionFragmentDoc = gql`
  fragment Session on sessions {
    __typename
    id
    userId
    expires
    sessionToken
  }
`
export const AccountFragmentDoc = gql`
  fragment Account on accounts {
    __typename
    id
    type
    scope
    userId
    id_token
    provider
    expires_at
    token_type
    oauth_token
    access_token
    refresh_token
    session_state
    providerAccountId
    oauth_token_secret
  }
`
export const VerificationTokenFragmentDoc = gql`
  fragment VerificationToken on verification_tokens {
    __typename
    token
    expires
    identifier
  }
`
export const CreateAccountDocument = gql`
  mutation CreateAccount($data: accounts_insert_input!) {
    insert_accounts_one(object: $data) {
      ...Account
    }
  }
${AccountFragmentDoc}`
export const DeleteAccountDocument = gql`
  mutation DeleteAccount($provider: String!, $providerAccountId: String!) {
    delete_accounts(
      where: {provider: {_eq: $provider}, providerAccountId: {_eq: $providerAccountId}}
    ) {
      returning {
        ...Account
      }
    }
  }
${AccountFragmentDoc}`
export const GetSessionDocument = gql`
  query GetSession($sessionToken: String) {
    sessions(where: {sessionToken: {_eq: $sessionToken}}) {
      ...Session
      user {
        ...User
      }
    }
  }
  ${SessionFragmentDoc}
${UserFragmentDoc}`
export const CreateSessionDocument = gql`
  mutation CreateSession($data: sessions_insert_input!) {
    insert_sessions_one(object: $data) {
      ...Session
    }
  }
${SessionFragmentDoc}`
export const UpdateSessionDocument = gql`
  mutation UpdateSession($sessionToken: String, $data: sessions_set_input!) {
    update_sessions(where: {sessionToken: {_eq: $sessionToken}}, _set: $data) {
      returning {
        ...Session
      }
    }
  }
${SessionFragmentDoc}`
export const DeleteSessionDocument = gql`
  mutation DeleteSession($sessionToken: String) {
    delete_sessions(where: {sessionToken: {_eq: $sessionToken}}) {
      returning {
        ...Session
      }
    }
  }
${SessionFragmentDoc}`
export const GetUserDocument = gql`
  query GetUser($id: uuid!) {
    users_by_pk(id: $id) {
      ...User
    }
  }
${UserFragmentDoc}`
export const GetUsersDocument = gql`
  query GetUsers($where: users_bool_exp!) {
    users(where: $where) {
      ...User
    }
  }
${UserFragmentDoc}`
export const CreateUserDocument = gql`
  mutation CreateUser($data: users_insert_input!) {
    insert_users_one(object: $data) {
      ...User
    }
  }
${UserFragmentDoc}`
export const UpdateUserDocument = gql`
  mutation UpdateUser($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: {id: $id}, _set: $data) {
      ...User
    }
  }
${UserFragmentDoc}`
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      ...User
    }
  }
${UserFragmentDoc}`
export const CreateVerificationTokenDocument = gql`
  mutation CreateVerificationToken($data: verification_tokens_insert_input!) {
    insert_verification_tokens_one(object: $data) {
      ...VerificationToken
    }
  }
${VerificationTokenFragmentDoc}`
export const DeleteVerificationTokenDocument = gql`
  mutation DeleteVerificationToken($identifier: String!, $token: String!) {
    delete_verification_tokens(
      where: {token: {_eq: $token}, identifier: {_eq: $identifier}}
    ) {
      returning {
        ...VerificationToken
      }
    }
  }
${VerificationTokenFragmentDoc}`

export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
   return {
      CreateAccount(variables: CreateAccountMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateAccountMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<CreateAccountMutation>(CreateAccountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateAccount', 'mutation')
      },
      DeleteAccount(variables: DeleteAccountMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteAccountMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<DeleteAccountMutation>(DeleteAccountDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'DeleteAccount', 'mutation')
      },
      GetSession(variables?: GetSessionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSessionQuery> {
         return withWrapper((wrappedRequestHeaders) => client.request<GetSessionQuery>(GetSessionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetSession', 'query')
      },
      CreateSession(variables: CreateSessionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSessionMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<CreateSessionMutation>(CreateSessionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateSession', 'mutation')
      },
      UpdateSession(variables: UpdateSessionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateSessionMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<UpdateSessionMutation>(UpdateSessionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'UpdateSession', 'mutation')
      },
      DeleteSession(variables?: DeleteSessionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteSessionMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<DeleteSessionMutation>(DeleteSessionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'DeleteSession', 'mutation')
      },
      GetUser(variables: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserQuery> {
         return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetUser', 'query')
      },
      GetUsers(variables: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery> {
         return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'GetUsers', 'query')
      },
      CreateUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateUser', 'mutation')
      },
      UpdateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'UpdateUser', 'mutation')
      },
      DeleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'DeleteUser', 'mutation')
      },
      CreateVerificationToken(variables: CreateVerificationTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateVerificationTokenMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<CreateVerificationTokenMutation>(CreateVerificationTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CreateVerificationToken', 'mutation')
      },
      DeleteVerificationToken(variables: DeleteVerificationTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteVerificationTokenMutation> {
         return withWrapper((wrappedRequestHeaders) => client.request<DeleteVerificationTokenMutation>(DeleteVerificationTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'DeleteVerificationToken', 'mutation')
      },
   }
}
export type Sdk = ReturnType<typeof getSdk>;
