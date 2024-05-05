
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserQuestCompletion
 * 
 */
export type UserQuestCompletion = $Result.DefaultSelection<Prisma.$UserQuestCompletionPayload>
/**
 * Model QuestType
 * 
 */
export type QuestType = $Result.DefaultSelection<Prisma.$QuestTypePayload>
/**
 * Model Quests
 * 
 */
export type Quests = $Result.DefaultSelection<Prisma.$QuestsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userQuestCompletion`: Exposes CRUD operations for the **UserQuestCompletion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuestCompletions
    * const userQuestCompletions = await prisma.userQuestCompletion.findMany()
    * ```
    */
  get userQuestCompletion(): Prisma.UserQuestCompletionDelegate<ExtArgs>;

  /**
   * `prisma.questType`: Exposes CRUD operations for the **QuestType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestTypes
    * const questTypes = await prisma.questType.findMany()
    * ```
    */
  get questType(): Prisma.QuestTypeDelegate<ExtArgs>;

  /**
   * `prisma.quests`: Exposes CRUD operations for the **Quests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quests.findMany()
    * ```
    */
  get quests(): Prisma.QuestsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    User: 'User',
    UserQuestCompletion: 'UserQuestCompletion',
    QuestType: 'QuestType',
    Quests: 'Quests'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'organization' | 'user' | 'userQuestCompletion' | 'questType' | 'quests'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>,
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserQuestCompletion: {
        payload: Prisma.$UserQuestCompletionPayload<ExtArgs>
        fields: Prisma.UserQuestCompletionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuestCompletionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuestCompletionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload>
          }
          findFirst: {
            args: Prisma.UserQuestCompletionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuestCompletionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload>
          }
          findMany: {
            args: Prisma.UserQuestCompletionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload>[]
          }
          create: {
            args: Prisma.UserQuestCompletionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload>
          }
          createMany: {
            args: Prisma.UserQuestCompletionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserQuestCompletionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload>
          }
          update: {
            args: Prisma.UserQuestCompletionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload>
          }
          deleteMany: {
            args: Prisma.UserQuestCompletionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuestCompletionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserQuestCompletionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestCompletionPayload>
          }
          aggregate: {
            args: Prisma.UserQuestCompletionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserQuestCompletion>
          }
          groupBy: {
            args: Prisma.UserQuestCompletionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserQuestCompletionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuestCompletionCountArgs<ExtArgs>,
            result: $Utils.Optional<UserQuestCompletionCountAggregateOutputType> | number
          }
        }
      }
      QuestType: {
        payload: Prisma.$QuestTypePayload<ExtArgs>
        fields: Prisma.QuestTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload>
          }
          findFirst: {
            args: Prisma.QuestTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload>
          }
          findMany: {
            args: Prisma.QuestTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload>[]
          }
          create: {
            args: Prisma.QuestTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload>
          }
          createMany: {
            args: Prisma.QuestTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload>
          }
          update: {
            args: Prisma.QuestTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload>
          }
          deleteMany: {
            args: Prisma.QuestTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestTypePayload>
          }
          aggregate: {
            args: Prisma.QuestTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuestType>
          }
          groupBy: {
            args: Prisma.QuestTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestTypeCountAggregateOutputType> | number
          }
        }
      }
      Quests: {
        payload: Prisma.$QuestsPayload<ExtArgs>
        fields: Prisma.QuestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload>
          }
          findFirst: {
            args: Prisma.QuestsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload>
          }
          findMany: {
            args: Prisma.QuestsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload>[]
          }
          create: {
            args: Prisma.QuestsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload>
          }
          createMany: {
            args: Prisma.QuestsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload>
          }
          update: {
            args: Prisma.QuestsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload>
          }
          deleteMany: {
            args: Prisma.QuestsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestsPayload>
          }
          aggregate: {
            args: Prisma.QuestsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuests>
          }
          groupBy: {
            args: Prisma.QuestsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestsCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    Quests: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    Quests?: boolean | OrganizationCountOutputTypeCountQuestsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | UserCountOutputTypeCountQuestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestCompletionWhereInput
  }


  /**
   * Count Type QuestTypeCountOutputType
   */

  export type QuestTypeCountOutputType = {
    Quests: number
  }

  export type QuestTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quests?: boolean | QuestTypeCountOutputTypeCountQuestsArgs
  }

  // Custom InputTypes
  /**
   * QuestTypeCountOutputType without action
   */
  export type QuestTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestTypeCountOutputType
     */
    select?: QuestTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestTypeCountOutputType without action
   */
  export type QuestTypeCountOutputTypeCountQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestsWhereInput
  }


  /**
   * Count Type QuestsCountOutputType
   */

  export type QuestsCountOutputType = {
    userCompletions: number
  }

  export type QuestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCompletions?: boolean | QuestsCountOutputTypeCountUserCompletionsArgs
  }

  // Custom InputTypes
  /**
   * QuestsCountOutputType without action
   */
  export type QuestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestsCountOutputType
     */
    select?: QuestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestsCountOutputType without action
   */
  export type QuestsCountOutputTypeCountUserCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestCompletionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    authRedirectUrl: string | null
    callbackUrl: string | null
    apiKeyPrefix: string | null
    apikey: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    authRedirectUrl: string | null
    callbackUrl: string | null
    apiKeyPrefix: string | null
    apikey: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    authRedirectUrl: number
    callbackUrl: number
    apiKeyPrefix: number
    apikey: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    authRedirectUrl?: true
    callbackUrl?: true
    apiKeyPrefix?: true
    apikey?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    authRedirectUrl?: true
    callbackUrl?: true
    apiKeyPrefix?: true
    apikey?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    authRedirectUrl?: true
    callbackUrl?: true
    apiKeyPrefix?: true
    apikey?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    authRedirectUrl: string
    callbackUrl: string
    apiKeyPrefix: string
    apikey: string
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    authRedirectUrl?: boolean
    callbackUrl?: boolean
    apiKeyPrefix?: boolean
    apikey?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    Quests?: boolean | Organization$QuestsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    authRedirectUrl?: boolean
    callbackUrl?: boolean
    apiKeyPrefix?: boolean
    apikey?: boolean
  }


  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    Quests?: boolean | Organization$QuestsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      Quests: Prisma.$QuestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      authRedirectUrl: string
      callbackUrl: string
      apiKeyPrefix: string
      apikey: string
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }


  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
    **/
    create<T extends OrganizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Organizations.
     *     @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrganizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
    **/
    delete<T extends OrganizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
    **/
    upsert<T extends OrganizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>
    ): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    Quests<T extends Organization$QuestsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$QuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly authRedirectUrl: FieldRef<"Organization", 'String'>
    readonly callbackUrl: FieldRef<"Organization", 'String'>
    readonly apiKeyPrefix: FieldRef<"Organization", 'String'>
    readonly apikey: FieldRef<"Organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.Quests
   */
  export type Organization$QuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    where?: QuestsWhereInput
    orderBy?: QuestsOrderByWithRelationInput | QuestsOrderByWithRelationInput[]
    cursor?: QuestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    fid: number | null
  }

  export type UserSumAggregateOutputType = {
    fid: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fid: number | null
    correlationId: string | null
    organizationId: string | null
    ethAddress: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fid: number | null
    correlationId: string | null
    organizationId: string | null
    ethAddress: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fid: number
    correlationId: number
    organizationId: number
    ethAddress: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    fid?: true
  }

  export type UserSumAggregateInputType = {
    fid?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fid?: true
    correlationId?: true
    organizationId?: true
    ethAddress?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fid?: true
    correlationId?: true
    organizationId?: true
    ethAddress?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fid?: true
    correlationId?: true
    organizationId?: true
    ethAddress?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fid: number
    correlationId: string
    organizationId: string
    ethAddress: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fid?: boolean
    correlationId?: boolean
    organizationId?: boolean
    ethAddress?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    quests?: boolean | User$questsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fid?: boolean
    correlationId?: boolean
    organizationId?: boolean
    ethAddress?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    quests?: boolean | User$questsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      quests: Prisma.$UserQuestCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fid: number
      correlationId: string
      organizationId: string
      ethAddress: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    quests<T extends User$questsArgs<ExtArgs> = {}>(args?: Subset<T, User$questsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fid: FieldRef<"User", 'Int'>
    readonly correlationId: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly ethAddress: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.quests
   */
  export type User$questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    where?: UserQuestCompletionWhereInput
    orderBy?: UserQuestCompletionOrderByWithRelationInput | UserQuestCompletionOrderByWithRelationInput[]
    cursor?: UserQuestCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestCompletionScalarFieldEnum | UserQuestCompletionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserQuestCompletion
   */

  export type AggregateUserQuestCompletion = {
    _count: UserQuestCompletionCountAggregateOutputType | null
    _min: UserQuestCompletionMinAggregateOutputType | null
    _max: UserQuestCompletionMaxAggregateOutputType | null
  }

  export type UserQuestCompletionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questId: string | null
    completedAt: Date | null
  }

  export type UserQuestCompletionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questId: string | null
    completedAt: Date | null
  }

  export type UserQuestCompletionCountAggregateOutputType = {
    id: number
    userId: number
    questId: number
    completedAt: number
    _all: number
  }


  export type UserQuestCompletionMinAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    completedAt?: true
  }

  export type UserQuestCompletionMaxAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    completedAt?: true
  }

  export type UserQuestCompletionCountAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    completedAt?: true
    _all?: true
  }

  export type UserQuestCompletionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestCompletion to aggregate.
     */
    where?: UserQuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestCompletions to fetch.
     */
    orderBy?: UserQuestCompletionOrderByWithRelationInput | UserQuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuestCompletions
    **/
    _count?: true | UserQuestCompletionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuestCompletionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuestCompletionMaxAggregateInputType
  }

  export type GetUserQuestCompletionAggregateType<T extends UserQuestCompletionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuestCompletion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuestCompletion[P]>
      : GetScalarType<T[P], AggregateUserQuestCompletion[P]>
  }




  export type UserQuestCompletionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestCompletionWhereInput
    orderBy?: UserQuestCompletionOrderByWithAggregationInput | UserQuestCompletionOrderByWithAggregationInput[]
    by: UserQuestCompletionScalarFieldEnum[] | UserQuestCompletionScalarFieldEnum
    having?: UserQuestCompletionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuestCompletionCountAggregateInputType | true
    _min?: UserQuestCompletionMinAggregateInputType
    _max?: UserQuestCompletionMaxAggregateInputType
  }

  export type UserQuestCompletionGroupByOutputType = {
    id: string
    userId: string
    questId: string
    completedAt: Date
    _count: UserQuestCompletionCountAggregateOutputType | null
    _min: UserQuestCompletionMinAggregateOutputType | null
    _max: UserQuestCompletionMaxAggregateOutputType | null
  }

  type GetUserQuestCompletionGroupByPayload<T extends UserQuestCompletionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuestCompletionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuestCompletionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuestCompletionGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuestCompletionGroupByOutputType[P]>
        }
      >
    >


  export type UserQuestCompletionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questId?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestCompletion"]>

  export type UserQuestCompletionSelectScalar = {
    id?: boolean
    userId?: boolean
    questId?: boolean
    completedAt?: boolean
  }


  export type UserQuestCompletionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestsDefaultArgs<ExtArgs>
  }


  export type $UserQuestCompletionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuestCompletion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quest: Prisma.$QuestsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questId: string
      completedAt: Date
    }, ExtArgs["result"]["userQuestCompletion"]>
    composites: {}
  }


  type UserQuestCompletionGetPayload<S extends boolean | null | undefined | UserQuestCompletionDefaultArgs> = $Result.GetResult<Prisma.$UserQuestCompletionPayload, S>

  type UserQuestCompletionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserQuestCompletionFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: UserQuestCompletionCountAggregateInputType | true
    }

  export interface UserQuestCompletionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuestCompletion'], meta: { name: 'UserQuestCompletion' } }
    /**
     * Find zero or one UserQuestCompletion that matches the filter.
     * @param {UserQuestCompletionFindUniqueArgs} args - Arguments to find a UserQuestCompletion
     * @example
     * // Get one UserQuestCompletion
     * const userQuestCompletion = await prisma.userQuestCompletion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserQuestCompletionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestCompletionFindUniqueArgs<ExtArgs>>
    ): Prisma__UserQuestCompletionClient<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserQuestCompletion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserQuestCompletionFindUniqueOrThrowArgs} args - Arguments to find a UserQuestCompletion
     * @example
     * // Get one UserQuestCompletion
     * const userQuestCompletion = await prisma.userQuestCompletion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserQuestCompletionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestCompletionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserQuestCompletionClient<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserQuestCompletion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCompletionFindFirstArgs} args - Arguments to find a UserQuestCompletion
     * @example
     * // Get one UserQuestCompletion
     * const userQuestCompletion = await prisma.userQuestCompletion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserQuestCompletionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestCompletionFindFirstArgs<ExtArgs>>
    ): Prisma__UserQuestCompletionClient<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserQuestCompletion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCompletionFindFirstOrThrowArgs} args - Arguments to find a UserQuestCompletion
     * @example
     * // Get one UserQuestCompletion
     * const userQuestCompletion = await prisma.userQuestCompletion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserQuestCompletionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestCompletionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserQuestCompletionClient<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserQuestCompletions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCompletionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuestCompletions
     * const userQuestCompletions = await prisma.userQuestCompletion.findMany()
     * 
     * // Get first 10 UserQuestCompletions
     * const userQuestCompletions = await prisma.userQuestCompletion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuestCompletionWithIdOnly = await prisma.userQuestCompletion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserQuestCompletionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestCompletionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserQuestCompletion.
     * @param {UserQuestCompletionCreateArgs} args - Arguments to create a UserQuestCompletion.
     * @example
     * // Create one UserQuestCompletion
     * const UserQuestCompletion = await prisma.userQuestCompletion.create({
     *   data: {
     *     // ... data to create a UserQuestCompletion
     *   }
     * })
     * 
    **/
    create<T extends UserQuestCompletionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestCompletionCreateArgs<ExtArgs>>
    ): Prisma__UserQuestCompletionClient<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserQuestCompletions.
     *     @param {UserQuestCompletionCreateManyArgs} args - Arguments to create many UserQuestCompletions.
     *     @example
     *     // Create many UserQuestCompletions
     *     const userQuestCompletion = await prisma.userQuestCompletion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserQuestCompletionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestCompletionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserQuestCompletion.
     * @param {UserQuestCompletionDeleteArgs} args - Arguments to delete one UserQuestCompletion.
     * @example
     * // Delete one UserQuestCompletion
     * const UserQuestCompletion = await prisma.userQuestCompletion.delete({
     *   where: {
     *     // ... filter to delete one UserQuestCompletion
     *   }
     * })
     * 
    **/
    delete<T extends UserQuestCompletionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestCompletionDeleteArgs<ExtArgs>>
    ): Prisma__UserQuestCompletionClient<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserQuestCompletion.
     * @param {UserQuestCompletionUpdateArgs} args - Arguments to update one UserQuestCompletion.
     * @example
     * // Update one UserQuestCompletion
     * const userQuestCompletion = await prisma.userQuestCompletion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserQuestCompletionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestCompletionUpdateArgs<ExtArgs>>
    ): Prisma__UserQuestCompletionClient<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserQuestCompletions.
     * @param {UserQuestCompletionDeleteManyArgs} args - Arguments to filter UserQuestCompletions to delete.
     * @example
     * // Delete a few UserQuestCompletions
     * const { count } = await prisma.userQuestCompletion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserQuestCompletionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestCompletionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCompletionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuestCompletions
     * const userQuestCompletion = await prisma.userQuestCompletion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserQuestCompletionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestCompletionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserQuestCompletion.
     * @param {UserQuestCompletionUpsertArgs} args - Arguments to update or create a UserQuestCompletion.
     * @example
     * // Update or create a UserQuestCompletion
     * const userQuestCompletion = await prisma.userQuestCompletion.upsert({
     *   create: {
     *     // ... data to create a UserQuestCompletion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuestCompletion we want to update
     *   }
     * })
    **/
    upsert<T extends UserQuestCompletionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestCompletionUpsertArgs<ExtArgs>>
    ): Prisma__UserQuestCompletionClient<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserQuestCompletions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCompletionCountArgs} args - Arguments to filter UserQuestCompletions to count.
     * @example
     * // Count the number of UserQuestCompletions
     * const count = await prisma.userQuestCompletion.count({
     *   where: {
     *     // ... the filter for the UserQuestCompletions we want to count
     *   }
     * })
    **/
    count<T extends UserQuestCompletionCountArgs>(
      args?: Subset<T, UserQuestCompletionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuestCompletionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuestCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCompletionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserQuestCompletionAggregateArgs>(args: Subset<T, UserQuestCompletionAggregateArgs>): Prisma.PrismaPromise<GetUserQuestCompletionAggregateType<T>>

    /**
     * Group by UserQuestCompletion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCompletionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserQuestCompletionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuestCompletionGroupByArgs['orderBy'] }
        : { orderBy?: UserQuestCompletionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserQuestCompletionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuestCompletionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuestCompletion model
   */
  readonly fields: UserQuestCompletionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuestCompletion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuestCompletionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    quest<T extends QuestsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestsDefaultArgs<ExtArgs>>): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserQuestCompletion model
   */ 
  interface UserQuestCompletionFieldRefs {
    readonly id: FieldRef<"UserQuestCompletion", 'String'>
    readonly userId: FieldRef<"UserQuestCompletion", 'String'>
    readonly questId: FieldRef<"UserQuestCompletion", 'String'>
    readonly completedAt: FieldRef<"UserQuestCompletion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuestCompletion findUnique
   */
  export type UserQuestCompletionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestCompletion to fetch.
     */
    where: UserQuestCompletionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion findUniqueOrThrow
   */
  export type UserQuestCompletionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestCompletion to fetch.
     */
    where: UserQuestCompletionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion findFirst
   */
  export type UserQuestCompletionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestCompletion to fetch.
     */
    where?: UserQuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestCompletions to fetch.
     */
    orderBy?: UserQuestCompletionOrderByWithRelationInput | UserQuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestCompletions.
     */
    cursor?: UserQuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestCompletions.
     */
    distinct?: UserQuestCompletionScalarFieldEnum | UserQuestCompletionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion findFirstOrThrow
   */
  export type UserQuestCompletionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestCompletion to fetch.
     */
    where?: UserQuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestCompletions to fetch.
     */
    orderBy?: UserQuestCompletionOrderByWithRelationInput | UserQuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestCompletions.
     */
    cursor?: UserQuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestCompletions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestCompletions.
     */
    distinct?: UserQuestCompletionScalarFieldEnum | UserQuestCompletionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion findMany
   */
  export type UserQuestCompletionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestCompletions to fetch.
     */
    where?: UserQuestCompletionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestCompletions to fetch.
     */
    orderBy?: UserQuestCompletionOrderByWithRelationInput | UserQuestCompletionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuestCompletions.
     */
    cursor?: UserQuestCompletionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestCompletions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestCompletions.
     */
    skip?: number
    distinct?: UserQuestCompletionScalarFieldEnum | UserQuestCompletionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion create
   */
  export type UserQuestCompletionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuestCompletion.
     */
    data: XOR<UserQuestCompletionCreateInput, UserQuestCompletionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion createMany
   */
  export type UserQuestCompletionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuestCompletions.
     */
    data: UserQuestCompletionCreateManyInput | UserQuestCompletionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuestCompletion update
   */
  export type UserQuestCompletionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuestCompletion.
     */
    data: XOR<UserQuestCompletionUpdateInput, UserQuestCompletionUncheckedUpdateInput>
    /**
     * Choose, which UserQuestCompletion to update.
     */
    where: UserQuestCompletionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion updateMany
   */
  export type UserQuestCompletionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuestCompletions.
     */
    data: XOR<UserQuestCompletionUpdateManyMutationInput, UserQuestCompletionUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestCompletions to update
     */
    where?: UserQuestCompletionWhereInput
  }

  /**
   * UserQuestCompletion upsert
   */
  export type UserQuestCompletionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuestCompletion to update in case it exists.
     */
    where: UserQuestCompletionWhereUniqueInput
    /**
     * In case the UserQuestCompletion found by the `where` argument doesn't exist, create a new UserQuestCompletion with this data.
     */
    create: XOR<UserQuestCompletionCreateInput, UserQuestCompletionUncheckedCreateInput>
    /**
     * In case the UserQuestCompletion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuestCompletionUpdateInput, UserQuestCompletionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion delete
   */
  export type UserQuestCompletionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    /**
     * Filter which UserQuestCompletion to delete.
     */
    where: UserQuestCompletionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuestCompletion deleteMany
   */
  export type UserQuestCompletionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestCompletions to delete
     */
    where?: UserQuestCompletionWhereInput
  }

  /**
   * UserQuestCompletion without action
   */
  export type UserQuestCompletionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
  }


  /**
   * Model QuestType
   */

  export type AggregateQuestType = {
    _count: QuestTypeCountAggregateOutputType | null
    _min: QuestTypeMinAggregateOutputType | null
    _max: QuestTypeMaxAggregateOutputType | null
  }

  export type QuestTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
  }

  export type QuestTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
  }

  export type QuestTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    _all: number
  }


  export type QuestTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
  }

  export type QuestTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
  }

  export type QuestTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    _all?: true
  }

  export type QuestTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestType to aggregate.
     */
    where?: QuestTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestTypes to fetch.
     */
    orderBy?: QuestTypeOrderByWithRelationInput | QuestTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestTypes
    **/
    _count?: true | QuestTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestTypeMaxAggregateInputType
  }

  export type GetQuestTypeAggregateType<T extends QuestTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestType[P]>
      : GetScalarType<T[P], AggregateQuestType[P]>
  }




  export type QuestTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestTypeWhereInput
    orderBy?: QuestTypeOrderByWithAggregationInput | QuestTypeOrderByWithAggregationInput[]
    by: QuestTypeScalarFieldEnum[] | QuestTypeScalarFieldEnum
    having?: QuestTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestTypeCountAggregateInputType | true
    _min?: QuestTypeMinAggregateInputType
    _max?: QuestTypeMaxAggregateInputType
  }

  export type QuestTypeGroupByOutputType = {
    id: string
    name: string
    description: string
    type: string
    _count: QuestTypeCountAggregateOutputType | null
    _min: QuestTypeMinAggregateOutputType | null
    _max: QuestTypeMaxAggregateOutputType | null
  }

  type GetQuestTypeGroupByPayload<T extends QuestTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestTypeGroupByOutputType[P]>
            : GetScalarType<T[P], QuestTypeGroupByOutputType[P]>
        }
      >
    >


  export type QuestTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    Quests?: boolean | QuestType$QuestsArgs<ExtArgs>
    _count?: boolean | QuestTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questType"]>

  export type QuestTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
  }


  export type QuestTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Quests?: boolean | QuestType$QuestsArgs<ExtArgs>
    _count?: boolean | QuestTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuestTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestType"
    objects: {
      Quests: Prisma.$QuestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      type: string
    }, ExtArgs["result"]["questType"]>
    composites: {}
  }


  type QuestTypeGetPayload<S extends boolean | null | undefined | QuestTypeDefaultArgs> = $Result.GetResult<Prisma.$QuestTypePayload, S>

  type QuestTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: QuestTypeCountAggregateInputType | true
    }

  export interface QuestTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestType'], meta: { name: 'QuestType' } }
    /**
     * Find zero or one QuestType that matches the filter.
     * @param {QuestTypeFindUniqueArgs} args - Arguments to find a QuestType
     * @example
     * // Get one QuestType
     * const questType = await prisma.questType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuestTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one QuestType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestTypeFindUniqueOrThrowArgs} args - Arguments to find a QuestType
     * @example
     * // Get one QuestType
     * const questType = await prisma.questType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first QuestType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestTypeFindFirstArgs} args - Arguments to find a QuestType
     * @example
     * // Get one QuestType
     * const questType = await prisma.questType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestTypeFindFirstArgs<ExtArgs>>
    ): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first QuestType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestTypeFindFirstOrThrowArgs} args - Arguments to find a QuestType
     * @example
     * // Get one QuestType
     * const questType = await prisma.questType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more QuestTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestTypes
     * const questTypes = await prisma.questType.findMany()
     * 
     * // Get first 10 QuestTypes
     * const questTypes = await prisma.questType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questTypeWithIdOnly = await prisma.questType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a QuestType.
     * @param {QuestTypeCreateArgs} args - Arguments to create a QuestType.
     * @example
     * // Create one QuestType
     * const QuestType = await prisma.questType.create({
     *   data: {
     *     // ... data to create a QuestType
     *   }
     * })
     * 
    **/
    create<T extends QuestTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestTypeCreateArgs<ExtArgs>>
    ): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many QuestTypes.
     *     @param {QuestTypeCreateManyArgs} args - Arguments to create many QuestTypes.
     *     @example
     *     // Create many QuestTypes
     *     const questType = await prisma.questType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuestType.
     * @param {QuestTypeDeleteArgs} args - Arguments to delete one QuestType.
     * @example
     * // Delete one QuestType
     * const QuestType = await prisma.questType.delete({
     *   where: {
     *     // ... filter to delete one QuestType
     *   }
     * })
     * 
    **/
    delete<T extends QuestTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestTypeDeleteArgs<ExtArgs>>
    ): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one QuestType.
     * @param {QuestTypeUpdateArgs} args - Arguments to update one QuestType.
     * @example
     * // Update one QuestType
     * const questType = await prisma.questType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestTypeUpdateArgs<ExtArgs>>
    ): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more QuestTypes.
     * @param {QuestTypeDeleteManyArgs} args - Arguments to filter QuestTypes to delete.
     * @example
     * // Delete a few QuestTypes
     * const { count } = await prisma.questType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestTypes
     * const questType = await prisma.questType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestType.
     * @param {QuestTypeUpsertArgs} args - Arguments to update or create a QuestType.
     * @example
     * // Update or create a QuestType
     * const questType = await prisma.questType.upsert({
     *   create: {
     *     // ... data to create a QuestType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestType we want to update
     *   }
     * })
    **/
    upsert<T extends QuestTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestTypeUpsertArgs<ExtArgs>>
    ): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of QuestTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestTypeCountArgs} args - Arguments to filter QuestTypes to count.
     * @example
     * // Count the number of QuestTypes
     * const count = await prisma.questType.count({
     *   where: {
     *     // ... the filter for the QuestTypes we want to count
     *   }
     * })
    **/
    count<T extends QuestTypeCountArgs>(
      args?: Subset<T, QuestTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestTypeAggregateArgs>(args: Subset<T, QuestTypeAggregateArgs>): Prisma.PrismaPromise<GetQuestTypeAggregateType<T>>

    /**
     * Group by QuestType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestTypeGroupByArgs['orderBy'] }
        : { orderBy?: QuestTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestType model
   */
  readonly fields: QuestTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Quests<T extends QuestType$QuestsArgs<ExtArgs> = {}>(args?: Subset<T, QuestType$QuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the QuestType model
   */ 
  interface QuestTypeFieldRefs {
    readonly id: FieldRef<"QuestType", 'String'>
    readonly name: FieldRef<"QuestType", 'String'>
    readonly description: FieldRef<"QuestType", 'String'>
    readonly type: FieldRef<"QuestType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestType findUnique
   */
  export type QuestTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestType to fetch.
     */
    where: QuestTypeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType findUniqueOrThrow
   */
  export type QuestTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestType to fetch.
     */
    where: QuestTypeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType findFirst
   */
  export type QuestTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestType to fetch.
     */
    where?: QuestTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestTypes to fetch.
     */
    orderBy?: QuestTypeOrderByWithRelationInput | QuestTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestTypes.
     */
    cursor?: QuestTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestTypes.
     */
    distinct?: QuestTypeScalarFieldEnum | QuestTypeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType findFirstOrThrow
   */
  export type QuestTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestType to fetch.
     */
    where?: QuestTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestTypes to fetch.
     */
    orderBy?: QuestTypeOrderByWithRelationInput | QuestTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestTypes.
     */
    cursor?: QuestTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestTypes.
     */
    distinct?: QuestTypeScalarFieldEnum | QuestTypeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType findMany
   */
  export type QuestTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * Filter, which QuestTypes to fetch.
     */
    where?: QuestTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestTypes to fetch.
     */
    orderBy?: QuestTypeOrderByWithRelationInput | QuestTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestTypes.
     */
    cursor?: QuestTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestTypes.
     */
    skip?: number
    distinct?: QuestTypeScalarFieldEnum | QuestTypeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType create
   */
  export type QuestTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestType.
     */
    data: XOR<QuestTypeCreateInput, QuestTypeUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType createMany
   */
  export type QuestTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestTypes.
     */
    data: QuestTypeCreateManyInput | QuestTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestType update
   */
  export type QuestTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestType.
     */
    data: XOR<QuestTypeUpdateInput, QuestTypeUncheckedUpdateInput>
    /**
     * Choose, which QuestType to update.
     */
    where: QuestTypeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType updateMany
   */
  export type QuestTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestTypes.
     */
    data: XOR<QuestTypeUpdateManyMutationInput, QuestTypeUncheckedUpdateManyInput>
    /**
     * Filter which QuestTypes to update
     */
    where?: QuestTypeWhereInput
  }

  /**
   * QuestType upsert
   */
  export type QuestTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestType to update in case it exists.
     */
    where: QuestTypeWhereUniqueInput
    /**
     * In case the QuestType found by the `where` argument doesn't exist, create a new QuestType with this data.
     */
    create: XOR<QuestTypeCreateInput, QuestTypeUncheckedCreateInput>
    /**
     * In case the QuestType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestTypeUpdateInput, QuestTypeUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType delete
   */
  export type QuestTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
    /**
     * Filter which QuestType to delete.
     */
    where: QuestTypeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * QuestType deleteMany
   */
  export type QuestTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestTypes to delete
     */
    where?: QuestTypeWhereInput
  }

  /**
   * QuestType.Quests
   */
  export type QuestType$QuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    where?: QuestsWhereInput
    orderBy?: QuestsOrderByWithRelationInput | QuestsOrderByWithRelationInput[]
    cursor?: QuestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * QuestType without action
   */
  export type QuestTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestType
     */
    select?: QuestTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestTypeInclude<ExtArgs> | null
  }


  /**
   * Model Quests
   */

  export type AggregateQuests = {
    _count: QuestsCountAggregateOutputType | null
    _min: QuestsMinAggregateOutputType | null
    _max: QuestsMaxAggregateOutputType | null
  }

  export type QuestsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    organizationId: string | null
    questTypeId: string | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    organizationId: string | null
    questTypeId: string | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    customMetadata: number
    customCallbackMetadata: number
    validationCriteria: number
    organizationId: number
    questTypeId: number
    startsAt: number
    endsAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    organizationId?: true
    questTypeId?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    organizationId?: true
    questTypeId?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    customMetadata?: true
    customCallbackMetadata?: true
    validationCriteria?: true
    organizationId?: true
    questTypeId?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to aggregate.
     */
    where?: QuestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestsOrderByWithRelationInput | QuestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quests
    **/
    _count?: true | QuestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestsMaxAggregateInputType
  }

  export type GetQuestsAggregateType<T extends QuestsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuests[P]>
      : GetScalarType<T[P], AggregateQuests[P]>
  }




  export type QuestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestsWhereInput
    orderBy?: QuestsOrderByWithAggregationInput | QuestsOrderByWithAggregationInput[]
    by: QuestsScalarFieldEnum[] | QuestsScalarFieldEnum
    having?: QuestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestsCountAggregateInputType | true
    _min?: QuestsMinAggregateInputType
    _max?: QuestsMaxAggregateInputType
  }

  export type QuestsGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string
    customMetadata: JsonValue
    customCallbackMetadata: JsonValue
    validationCriteria: JsonValue
    organizationId: string
    questTypeId: string
    startsAt: Date
    endsAt: Date
    createdAt: Date
    updatedAt: Date
    _count: QuestsCountAggregateOutputType | null
    _min: QuestsMinAggregateOutputType | null
    _max: QuestsMaxAggregateOutputType | null
  }

  type GetQuestsGroupByPayload<T extends QuestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestsGroupByOutputType[P]>
        }
      >
    >


  export type QuestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    customMetadata?: boolean
    customCallbackMetadata?: boolean
    validationCriteria?: boolean
    organizationId?: boolean
    questTypeId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    questType?: boolean | QuestTypeDefaultArgs<ExtArgs>
    userCompletions?: boolean | Quests$userCompletionsArgs<ExtArgs>
    _count?: boolean | QuestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quests"]>

  export type QuestsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    customMetadata?: boolean
    customCallbackMetadata?: boolean
    validationCriteria?: boolean
    organizationId?: boolean
    questTypeId?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type QuestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    questType?: boolean | QuestTypeDefaultArgs<ExtArgs>
    userCompletions?: boolean | Quests$userCompletionsArgs<ExtArgs>
    _count?: boolean | QuestsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quests"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      questType: Prisma.$QuestTypePayload<ExtArgs>
      userCompletions: Prisma.$UserQuestCompletionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string
      customMetadata: Prisma.JsonValue
      customCallbackMetadata: Prisma.JsonValue
      validationCriteria: Prisma.JsonValue
      organizationId: string
      questTypeId: string
      startsAt: Date
      endsAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quests"]>
    composites: {}
  }


  type QuestsGetPayload<S extends boolean | null | undefined | QuestsDefaultArgs> = $Result.GetResult<Prisma.$QuestsPayload, S>

  type QuestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestsFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: QuestsCountAggregateInputType | true
    }

  export interface QuestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quests'], meta: { name: 'Quests' } }
    /**
     * Find zero or one Quests that matches the filter.
     * @param {QuestsFindUniqueArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuestsFindUniqueArgs<ExtArgs>>
    ): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quests that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestsFindUniqueOrThrowArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsFindFirstArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestsFindFirstArgs<ExtArgs>>
    ): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsFindFirstOrThrowArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quests.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questsWithIdOnly = await prisma.quests.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quests.
     * @param {QuestsCreateArgs} args - Arguments to create a Quests.
     * @example
     * // Create one Quests
     * const Quests = await prisma.quests.create({
     *   data: {
     *     // ... data to create a Quests
     *   }
     * })
     * 
    **/
    create<T extends QuestsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestsCreateArgs<ExtArgs>>
    ): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quests.
     *     @param {QuestsCreateManyArgs} args - Arguments to create many Quests.
     *     @example
     *     // Create many Quests
     *     const quests = await prisma.quests.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quests.
     * @param {QuestsDeleteArgs} args - Arguments to delete one Quests.
     * @example
     * // Delete one Quests
     * const Quests = await prisma.quests.delete({
     *   where: {
     *     // ... filter to delete one Quests
     *   }
     * })
     * 
    **/
    delete<T extends QuestsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestsDeleteArgs<ExtArgs>>
    ): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quests.
     * @param {QuestsUpdateArgs} args - Arguments to update one Quests.
     * @example
     * // Update one Quests
     * const quests = await prisma.quests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestsUpdateArgs<ExtArgs>>
    ): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quests.
     * @param {QuestsDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quests = await prisma.quests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quests.
     * @param {QuestsUpsertArgs} args - Arguments to update or create a Quests.
     * @example
     * // Update or create a Quests
     * const quests = await prisma.quests.upsert({
     *   create: {
     *     // ... data to create a Quests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quests we want to update
     *   }
     * })
    **/
    upsert<T extends QuestsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestsUpsertArgs<ExtArgs>>
    ): Prisma__QuestsClient<$Result.GetResult<Prisma.$QuestsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quests.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestsCountArgs>(
      args?: Subset<T, QuestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestsAggregateArgs>(args: Subset<T, QuestsAggregateArgs>): Prisma.PrismaPromise<GetQuestsAggregateType<T>>

    /**
     * Group by Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestsGroupByArgs['orderBy'] }
        : { orderBy?: QuestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quests model
   */
  readonly fields: QuestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    questType<T extends QuestTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestTypeDefaultArgs<ExtArgs>>): Prisma__QuestTypeClient<$Result.GetResult<Prisma.$QuestTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userCompletions<T extends Quests$userCompletionsArgs<ExtArgs> = {}>(args?: Subset<T, Quests$userCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestCompletionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Quests model
   */ 
  interface QuestsFieldRefs {
    readonly id: FieldRef<"Quests", 'String'>
    readonly name: FieldRef<"Quests", 'String'>
    readonly description: FieldRef<"Quests", 'String'>
    readonly image: FieldRef<"Quests", 'String'>
    readonly customMetadata: FieldRef<"Quests", 'Json'>
    readonly customCallbackMetadata: FieldRef<"Quests", 'Json'>
    readonly validationCriteria: FieldRef<"Quests", 'Json'>
    readonly organizationId: FieldRef<"Quests", 'String'>
    readonly questTypeId: FieldRef<"Quests", 'String'>
    readonly startsAt: FieldRef<"Quests", 'DateTime'>
    readonly endsAt: FieldRef<"Quests", 'DateTime'>
    readonly createdAt: FieldRef<"Quests", 'DateTime'>
    readonly updatedAt: FieldRef<"Quests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quests findUnique
   */
  export type QuestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where: QuestsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests findUniqueOrThrow
   */
  export type QuestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where: QuestsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests findFirst
   */
  export type QuestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestsOrderByWithRelationInput | QuestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests findFirstOrThrow
   */
  export type QuestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestsOrderByWithRelationInput | QuestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quests.
     */
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests findMany
   */
  export type QuestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestsOrderByWithRelationInput | QuestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quests.
     */
    skip?: number
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests create
   */
  export type QuestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * The data needed to create a Quests.
     */
    data: XOR<QuestsCreateInput, QuestsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests createMany
   */
  export type QuestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestsCreateManyInput | QuestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quests update
   */
  export type QuestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * The data needed to update a Quests.
     */
    data: XOR<QuestsUpdateInput, QuestsUncheckedUpdateInput>
    /**
     * Choose, which Quests to update.
     */
    where: QuestsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests updateMany
   */
  export type QuestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestsUpdateManyMutationInput, QuestsUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestsWhereInput
  }

  /**
   * Quests upsert
   */
  export type QuestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * The filter to search for the Quests to update in case it exists.
     */
    where: QuestsWhereUniqueInput
    /**
     * In case the Quests found by the `where` argument doesn't exist, create a new Quests with this data.
     */
    create: XOR<QuestsCreateInput, QuestsUncheckedCreateInput>
    /**
     * In case the Quests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestsUpdateInput, QuestsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests delete
   */
  export type QuestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
    /**
     * Filter which Quests to delete.
     */
    where: QuestsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quests deleteMany
   */
  export type QuestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestsWhereInput
  }

  /**
   * Quests.userCompletions
   */
  export type Quests$userCompletionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestCompletion
     */
    select?: UserQuestCompletionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestCompletionInclude<ExtArgs> | null
    where?: UserQuestCompletionWhereInput
    orderBy?: UserQuestCompletionOrderByWithRelationInput | UserQuestCompletionOrderByWithRelationInput[]
    cursor?: UserQuestCompletionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestCompletionScalarFieldEnum | UserQuestCompletionScalarFieldEnum[]
  }

  /**
   * Quests without action
   */
  export type QuestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quests
     */
    select?: QuestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    authRedirectUrl: 'authRedirectUrl',
    callbackUrl: 'callbackUrl',
    apiKeyPrefix: 'apiKeyPrefix',
    apikey: 'apikey'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const UserScalarFieldEnum: {
    id: 'id',
    fid: 'fid',
    correlationId: 'correlationId',
    organizationId: 'organizationId',
    ethAddress: 'ethAddress'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserQuestCompletionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questId: 'questId',
    completedAt: 'completedAt'
  };

  export type UserQuestCompletionScalarFieldEnum = (typeof UserQuestCompletionScalarFieldEnum)[keyof typeof UserQuestCompletionScalarFieldEnum]


  export const QuestTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type'
  };

  export type QuestTypeScalarFieldEnum = (typeof QuestTypeScalarFieldEnum)[keyof typeof QuestTypeScalarFieldEnum]


  export const QuestsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    customMetadata: 'customMetadata',
    customCallbackMetadata: 'customCallbackMetadata',
    validationCriteria: 'validationCriteria',
    organizationId: 'organizationId',
    questTypeId: 'questTypeId',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestsScalarFieldEnum = (typeof QuestsScalarFieldEnum)[keyof typeof QuestsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    authRedirectUrl?: StringFilter<"Organization"> | string
    callbackUrl?: StringFilter<"Organization"> | string
    apiKeyPrefix?: StringFilter<"Organization"> | string
    apikey?: StringFilter<"Organization"> | string
    users?: UserListRelationFilter
    Quests?: QuestsListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    authRedirectUrl?: SortOrder
    callbackUrl?: SortOrder
    apiKeyPrefix?: SortOrder
    apikey?: SortOrder
    users?: UserOrderByRelationAggregateInput
    Quests?: QuestsOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiKeyPrefix?: string
    apikey?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    authRedirectUrl?: StringFilter<"Organization"> | string
    callbackUrl?: StringFilter<"Organization"> | string
    users?: UserListRelationFilter
    Quests?: QuestsListRelationFilter
  }, "id" | "apiKeyPrefix" | "apikey">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    authRedirectUrl?: SortOrder
    callbackUrl?: SortOrder
    apiKeyPrefix?: SortOrder
    apikey?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    authRedirectUrl?: StringWithAggregatesFilter<"Organization"> | string
    callbackUrl?: StringWithAggregatesFilter<"Organization"> | string
    apiKeyPrefix?: StringWithAggregatesFilter<"Organization"> | string
    apikey?: StringWithAggregatesFilter<"Organization"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fid?: IntFilter<"User"> | number
    correlationId?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    ethAddress?: StringFilter<"User"> | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    quests?: UserQuestCompletionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fid?: SortOrder
    correlationId?: SortOrder
    organizationId?: SortOrder
    ethAddress?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    quests?: UserQuestCompletionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fid_organizationId?: UserFidOrganizationIdCompoundUniqueInput
    correlationId_organizationId?: UserCorrelationIdOrganizationIdCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fid?: IntFilter<"User"> | number
    correlationId?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    ethAddress?: StringFilter<"User"> | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    quests?: UserQuestCompletionListRelationFilter
  }, "id" | "fid_organizationId" | "correlationId_organizationId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fid?: SortOrder
    correlationId?: SortOrder
    organizationId?: SortOrder
    ethAddress?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fid?: IntWithAggregatesFilter<"User"> | number
    correlationId?: StringWithAggregatesFilter<"User"> | string
    organizationId?: StringWithAggregatesFilter<"User"> | string
    ethAddress?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserQuestCompletionWhereInput = {
    AND?: UserQuestCompletionWhereInput | UserQuestCompletionWhereInput[]
    OR?: UserQuestCompletionWhereInput[]
    NOT?: UserQuestCompletionWhereInput | UserQuestCompletionWhereInput[]
    id?: StringFilter<"UserQuestCompletion"> | string
    userId?: StringFilter<"UserQuestCompletion"> | string
    questId?: StringFilter<"UserQuestCompletion"> | string
    completedAt?: DateTimeFilter<"UserQuestCompletion"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    quest?: XOR<QuestsRelationFilter, QuestsWhereInput>
  }

  export type UserQuestCompletionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    completedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    quest?: QuestsOrderByWithRelationInput
  }

  export type UserQuestCompletionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_questId?: UserQuestCompletionUserIdQuestIdCompoundUniqueInput
    AND?: UserQuestCompletionWhereInput | UserQuestCompletionWhereInput[]
    OR?: UserQuestCompletionWhereInput[]
    NOT?: UserQuestCompletionWhereInput | UserQuestCompletionWhereInput[]
    userId?: StringFilter<"UserQuestCompletion"> | string
    questId?: StringFilter<"UserQuestCompletion"> | string
    completedAt?: DateTimeFilter<"UserQuestCompletion"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    quest?: XOR<QuestsRelationFilter, QuestsWhereInput>
  }, "id" | "userId_questId">

  export type UserQuestCompletionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    completedAt?: SortOrder
    _count?: UserQuestCompletionCountOrderByAggregateInput
    _max?: UserQuestCompletionMaxOrderByAggregateInput
    _min?: UserQuestCompletionMinOrderByAggregateInput
  }

  export type UserQuestCompletionScalarWhereWithAggregatesInput = {
    AND?: UserQuestCompletionScalarWhereWithAggregatesInput | UserQuestCompletionScalarWhereWithAggregatesInput[]
    OR?: UserQuestCompletionScalarWhereWithAggregatesInput[]
    NOT?: UserQuestCompletionScalarWhereWithAggregatesInput | UserQuestCompletionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserQuestCompletion"> | string
    userId?: StringWithAggregatesFilter<"UserQuestCompletion"> | string
    questId?: StringWithAggregatesFilter<"UserQuestCompletion"> | string
    completedAt?: DateTimeWithAggregatesFilter<"UserQuestCompletion"> | Date | string
  }

  export type QuestTypeWhereInput = {
    AND?: QuestTypeWhereInput | QuestTypeWhereInput[]
    OR?: QuestTypeWhereInput[]
    NOT?: QuestTypeWhereInput | QuestTypeWhereInput[]
    id?: StringFilter<"QuestType"> | string
    name?: StringFilter<"QuestType"> | string
    description?: StringFilter<"QuestType"> | string
    type?: StringFilter<"QuestType"> | string
    Quests?: QuestsListRelationFilter
  }

  export type QuestTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    Quests?: QuestsOrderByRelationAggregateInput
  }

  export type QuestTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestTypeWhereInput | QuestTypeWhereInput[]
    OR?: QuestTypeWhereInput[]
    NOT?: QuestTypeWhereInput | QuestTypeWhereInput[]
    name?: StringFilter<"QuestType"> | string
    description?: StringFilter<"QuestType"> | string
    type?: StringFilter<"QuestType"> | string
    Quests?: QuestsListRelationFilter
  }, "id">

  export type QuestTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    _count?: QuestTypeCountOrderByAggregateInput
    _max?: QuestTypeMaxOrderByAggregateInput
    _min?: QuestTypeMinOrderByAggregateInput
  }

  export type QuestTypeScalarWhereWithAggregatesInput = {
    AND?: QuestTypeScalarWhereWithAggregatesInput | QuestTypeScalarWhereWithAggregatesInput[]
    OR?: QuestTypeScalarWhereWithAggregatesInput[]
    NOT?: QuestTypeScalarWhereWithAggregatesInput | QuestTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestType"> | string
    name?: StringWithAggregatesFilter<"QuestType"> | string
    description?: StringWithAggregatesFilter<"QuestType"> | string
    type?: StringWithAggregatesFilter<"QuestType"> | string
  }

  export type QuestsWhereInput = {
    AND?: QuestsWhereInput | QuestsWhereInput[]
    OR?: QuestsWhereInput[]
    NOT?: QuestsWhereInput | QuestsWhereInput[]
    id?: StringFilter<"Quests"> | string
    name?: StringFilter<"Quests"> | string
    description?: StringFilter<"Quests"> | string
    image?: StringFilter<"Quests"> | string
    customMetadata?: JsonFilter<"Quests">
    customCallbackMetadata?: JsonFilter<"Quests">
    validationCriteria?: JsonFilter<"Quests">
    organizationId?: StringFilter<"Quests"> | string
    questTypeId?: StringFilter<"Quests"> | string
    startsAt?: DateTimeFilter<"Quests"> | Date | string
    endsAt?: DateTimeFilter<"Quests"> | Date | string
    createdAt?: DateTimeFilter<"Quests"> | Date | string
    updatedAt?: DateTimeFilter<"Quests"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    questType?: XOR<QuestTypeRelationFilter, QuestTypeWhereInput>
    userCompletions?: UserQuestCompletionListRelationFilter
  }

  export type QuestsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    customMetadata?: SortOrder
    customCallbackMetadata?: SortOrder
    validationCriteria?: SortOrder
    organizationId?: SortOrder
    questTypeId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    questType?: QuestTypeOrderByWithRelationInput
    userCompletions?: UserQuestCompletionOrderByRelationAggregateInput
  }

  export type QuestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestsWhereInput | QuestsWhereInput[]
    OR?: QuestsWhereInput[]
    NOT?: QuestsWhereInput | QuestsWhereInput[]
    name?: StringFilter<"Quests"> | string
    description?: StringFilter<"Quests"> | string
    image?: StringFilter<"Quests"> | string
    customMetadata?: JsonFilter<"Quests">
    customCallbackMetadata?: JsonFilter<"Quests">
    validationCriteria?: JsonFilter<"Quests">
    organizationId?: StringFilter<"Quests"> | string
    questTypeId?: StringFilter<"Quests"> | string
    startsAt?: DateTimeFilter<"Quests"> | Date | string
    endsAt?: DateTimeFilter<"Quests"> | Date | string
    createdAt?: DateTimeFilter<"Quests"> | Date | string
    updatedAt?: DateTimeFilter<"Quests"> | Date | string
    organization?: XOR<OrganizationRelationFilter, OrganizationWhereInput>
    questType?: XOR<QuestTypeRelationFilter, QuestTypeWhereInput>
    userCompletions?: UserQuestCompletionListRelationFilter
  }, "id">

  export type QuestsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    customMetadata?: SortOrder
    customCallbackMetadata?: SortOrder
    validationCriteria?: SortOrder
    organizationId?: SortOrder
    questTypeId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestsCountOrderByAggregateInput
    _max?: QuestsMaxOrderByAggregateInput
    _min?: QuestsMinOrderByAggregateInput
  }

  export type QuestsScalarWhereWithAggregatesInput = {
    AND?: QuestsScalarWhereWithAggregatesInput | QuestsScalarWhereWithAggregatesInput[]
    OR?: QuestsScalarWhereWithAggregatesInput[]
    NOT?: QuestsScalarWhereWithAggregatesInput | QuestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quests"> | string
    name?: StringWithAggregatesFilter<"Quests"> | string
    description?: StringWithAggregatesFilter<"Quests"> | string
    image?: StringWithAggregatesFilter<"Quests"> | string
    customMetadata?: JsonWithAggregatesFilter<"Quests">
    customCallbackMetadata?: JsonWithAggregatesFilter<"Quests">
    validationCriteria?: JsonWithAggregatesFilter<"Quests">
    organizationId?: StringWithAggregatesFilter<"Quests"> | string
    questTypeId?: StringWithAggregatesFilter<"Quests"> | string
    startsAt?: DateTimeWithAggregatesFilter<"Quests"> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<"Quests"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Quests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quests"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    authRedirectUrl: string
    callbackUrl: string
    apiKeyPrefix: string
    apikey: string
    users?: UserCreateNestedManyWithoutOrganizationInput
    Quests?: QuestsCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    authRedirectUrl: string
    callbackUrl: string
    apiKeyPrefix: string
    apikey: string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    Quests?: QuestsUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    authRedirectUrl?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    apiKeyPrefix?: StringFieldUpdateOperationsInput | string
    apikey?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    Quests?: QuestsUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    authRedirectUrl?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    apiKeyPrefix?: StringFieldUpdateOperationsInput | string
    apikey?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    Quests?: QuestsUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    authRedirectUrl: string
    callbackUrl: string
    apiKeyPrefix: string
    apikey: string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    authRedirectUrl?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    apiKeyPrefix?: StringFieldUpdateOperationsInput | string
    apikey?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    authRedirectUrl?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    apiKeyPrefix?: StringFieldUpdateOperationsInput | string
    apikey?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    fid: number
    correlationId: string
    ethAddress: string
    organization: OrganizationCreateNestedOneWithoutUsersInput
    quests?: UserQuestCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fid: number
    correlationId: string
    organizationId: string
    ethAddress: string
    quests?: UserQuestCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
    quests?: UserQuestCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
    quests?: UserQuestCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fid: number
    correlationId: string
    organizationId: string
    ethAddress: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
  }

  export type UserQuestCompletionCreateInput = {
    id?: string
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutQuestsInput
    quest: QuestsCreateNestedOneWithoutUserCompletionsInput
  }

  export type UserQuestCompletionUncheckedCreateInput = {
    id?: string
    userId: string
    questId: string
    completedAt?: Date | string
  }

  export type UserQuestCompletionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestsNestedInput
    quest?: QuestsUpdateOneRequiredWithoutUserCompletionsNestedInput
  }

  export type UserQuestCompletionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCompletionCreateManyInput = {
    id?: string
    userId: string
    questId: string
    completedAt?: Date | string
  }

  export type UserQuestCompletionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCompletionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestTypeCreateInput = {
    id?: string
    name: string
    description: string
    type: string
    Quests?: QuestsCreateNestedManyWithoutQuestTypeInput
  }

  export type QuestTypeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    type: string
    Quests?: QuestsUncheckedCreateNestedManyWithoutQuestTypeInput
  }

  export type QuestTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Quests?: QuestsUpdateManyWithoutQuestTypeNestedInput
  }

  export type QuestTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Quests?: QuestsUncheckedUpdateManyWithoutQuestTypeNestedInput
  }

  export type QuestTypeCreateManyInput = {
    id?: string
    name: string
    description: string
    type: string
  }

  export type QuestTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type QuestTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type QuestsCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutQuestsInput
    questType: QuestTypeCreateNestedOneWithoutQuestsInput
    userCompletions?: UserQuestCompletionCreateNestedManyWithoutQuestInput
  }

  export type QuestsUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    organizationId: string
    questTypeId: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userCompletions?: UserQuestCompletionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutQuestsNestedInput
    questType?: QuestTypeUpdateOneRequiredWithoutQuestsNestedInput
    userCompletions?: UserQuestCompletionUpdateManyWithoutQuestNestedInput
  }

  export type QuestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    questTypeId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCompletions?: UserQuestCompletionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestsCreateManyInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    organizationId: string
    questTypeId: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    questTypeId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type QuestsListRelationFilter = {
    every?: QuestsWhereInput
    some?: QuestsWhereInput
    none?: QuestsWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    authRedirectUrl?: SortOrder
    callbackUrl?: SortOrder
    apiKeyPrefix?: SortOrder
    apikey?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    authRedirectUrl?: SortOrder
    callbackUrl?: SortOrder
    apiKeyPrefix?: SortOrder
    apikey?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    authRedirectUrl?: SortOrder
    callbackUrl?: SortOrder
    apiKeyPrefix?: SortOrder
    apikey?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OrganizationRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserQuestCompletionListRelationFilter = {
    every?: UserQuestCompletionWhereInput
    some?: UserQuestCompletionWhereInput
    none?: UserQuestCompletionWhereInput
  }

  export type UserQuestCompletionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFidOrganizationIdCompoundUniqueInput = {
    fid: number
    organizationId: string
  }

  export type UserCorrelationIdOrganizationIdCompoundUniqueInput = {
    correlationId: string
    organizationId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    correlationId?: SortOrder
    organizationId?: SortOrder
    ethAddress?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    fid?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    correlationId?: SortOrder
    organizationId?: SortOrder
    ethAddress?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    correlationId?: SortOrder
    organizationId?: SortOrder
    ethAddress?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    fid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestsRelationFilter = {
    is?: QuestsWhereInput
    isNot?: QuestsWhereInput
  }

  export type UserQuestCompletionUserIdQuestIdCompoundUniqueInput = {
    userId: string
    questId: string
  }

  export type UserQuestCompletionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    completedAt?: SortOrder
  }

  export type UserQuestCompletionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    completedAt?: SortOrder
  }

  export type UserQuestCompletionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    completedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type QuestTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type QuestTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type QuestTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuestTypeRelationFilter = {
    is?: QuestTypeWhereInput
    isNot?: QuestTypeWhereInput
  }

  export type QuestsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    customMetadata?: SortOrder
    customCallbackMetadata?: SortOrder
    validationCriteria?: SortOrder
    organizationId?: SortOrder
    questTypeId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    organizationId?: SortOrder
    questTypeId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    organizationId?: SortOrder
    questTypeId?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QuestsCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<QuestsCreateWithoutOrganizationInput, QuestsUncheckedCreateWithoutOrganizationInput> | QuestsCreateWithoutOrganizationInput[] | QuestsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: QuestsCreateOrConnectWithoutOrganizationInput | QuestsCreateOrConnectWithoutOrganizationInput[]
    createMany?: QuestsCreateManyOrganizationInputEnvelope
    connect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type QuestsUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<QuestsCreateWithoutOrganizationInput, QuestsUncheckedCreateWithoutOrganizationInput> | QuestsCreateWithoutOrganizationInput[] | QuestsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: QuestsCreateOrConnectWithoutOrganizationInput | QuestsCreateOrConnectWithoutOrganizationInput[]
    createMany?: QuestsCreateManyOrganizationInputEnvelope
    connect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QuestsUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<QuestsCreateWithoutOrganizationInput, QuestsUncheckedCreateWithoutOrganizationInput> | QuestsCreateWithoutOrganizationInput[] | QuestsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: QuestsCreateOrConnectWithoutOrganizationInput | QuestsCreateOrConnectWithoutOrganizationInput[]
    upsert?: QuestsUpsertWithWhereUniqueWithoutOrganizationInput | QuestsUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: QuestsCreateManyOrganizationInputEnvelope
    set?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    disconnect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    delete?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    connect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    update?: QuestsUpdateWithWhereUniqueWithoutOrganizationInput | QuestsUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: QuestsUpdateManyWithWhereWithoutOrganizationInput | QuestsUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: QuestsScalarWhereInput | QuestsScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type QuestsUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<QuestsCreateWithoutOrganizationInput, QuestsUncheckedCreateWithoutOrganizationInput> | QuestsCreateWithoutOrganizationInput[] | QuestsUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: QuestsCreateOrConnectWithoutOrganizationInput | QuestsCreateOrConnectWithoutOrganizationInput[]
    upsert?: QuestsUpsertWithWhereUniqueWithoutOrganizationInput | QuestsUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: QuestsCreateManyOrganizationInputEnvelope
    set?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    disconnect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    delete?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    connect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    update?: QuestsUpdateWithWhereUniqueWithoutOrganizationInput | QuestsUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: QuestsUpdateManyWithWhereWithoutOrganizationInput | QuestsUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: QuestsScalarWhereInput | QuestsScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserQuestCompletionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestCompletionCreateWithoutUserInput, UserQuestCompletionUncheckedCreateWithoutUserInput> | UserQuestCompletionCreateWithoutUserInput[] | UserQuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestCompletionCreateOrConnectWithoutUserInput | UserQuestCompletionCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestCompletionCreateManyUserInputEnvelope
    connect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
  }

  export type UserQuestCompletionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestCompletionCreateWithoutUserInput, UserQuestCompletionUncheckedCreateWithoutUserInput> | UserQuestCompletionCreateWithoutUserInput[] | UserQuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestCompletionCreateOrConnectWithoutUserInput | UserQuestCompletionCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestCompletionCreateManyUserInputEnvelope
    connect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type UserQuestCompletionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestCompletionCreateWithoutUserInput, UserQuestCompletionUncheckedCreateWithoutUserInput> | UserQuestCompletionCreateWithoutUserInput[] | UserQuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestCompletionCreateOrConnectWithoutUserInput | UserQuestCompletionCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestCompletionUpsertWithWhereUniqueWithoutUserInput | UserQuestCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestCompletionCreateManyUserInputEnvelope
    set?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    disconnect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    delete?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    connect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    update?: UserQuestCompletionUpdateWithWhereUniqueWithoutUserInput | UserQuestCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestCompletionUpdateManyWithWhereWithoutUserInput | UserQuestCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestCompletionScalarWhereInput | UserQuestCompletionScalarWhereInput[]
  }

  export type UserQuestCompletionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestCompletionCreateWithoutUserInput, UserQuestCompletionUncheckedCreateWithoutUserInput> | UserQuestCompletionCreateWithoutUserInput[] | UserQuestCompletionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestCompletionCreateOrConnectWithoutUserInput | UserQuestCompletionCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestCompletionUpsertWithWhereUniqueWithoutUserInput | UserQuestCompletionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestCompletionCreateManyUserInputEnvelope
    set?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    disconnect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    delete?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    connect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    update?: UserQuestCompletionUpdateWithWhereUniqueWithoutUserInput | UserQuestCompletionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestCompletionUpdateManyWithWhereWithoutUserInput | UserQuestCompletionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestCompletionScalarWhereInput | UserQuestCompletionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuestsInput = {
    create?: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestsCreateNestedOneWithoutUserCompletionsInput = {
    create?: XOR<QuestsCreateWithoutUserCompletionsInput, QuestsUncheckedCreateWithoutUserCompletionsInput>
    connectOrCreate?: QuestsCreateOrConnectWithoutUserCompletionsInput
    connect?: QuestsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutQuestsNestedInput = {
    create?: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestsInput
    upsert?: UserUpsertWithoutQuestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestsInput, UserUpdateWithoutQuestsInput>, UserUncheckedUpdateWithoutQuestsInput>
  }

  export type QuestsUpdateOneRequiredWithoutUserCompletionsNestedInput = {
    create?: XOR<QuestsCreateWithoutUserCompletionsInput, QuestsUncheckedCreateWithoutUserCompletionsInput>
    connectOrCreate?: QuestsCreateOrConnectWithoutUserCompletionsInput
    upsert?: QuestsUpsertWithoutUserCompletionsInput
    connect?: QuestsWhereUniqueInput
    update?: XOR<XOR<QuestsUpdateToOneWithWhereWithoutUserCompletionsInput, QuestsUpdateWithoutUserCompletionsInput>, QuestsUncheckedUpdateWithoutUserCompletionsInput>
  }

  export type QuestsCreateNestedManyWithoutQuestTypeInput = {
    create?: XOR<QuestsCreateWithoutQuestTypeInput, QuestsUncheckedCreateWithoutQuestTypeInput> | QuestsCreateWithoutQuestTypeInput[] | QuestsUncheckedCreateWithoutQuestTypeInput[]
    connectOrCreate?: QuestsCreateOrConnectWithoutQuestTypeInput | QuestsCreateOrConnectWithoutQuestTypeInput[]
    createMany?: QuestsCreateManyQuestTypeInputEnvelope
    connect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
  }

  export type QuestsUncheckedCreateNestedManyWithoutQuestTypeInput = {
    create?: XOR<QuestsCreateWithoutQuestTypeInput, QuestsUncheckedCreateWithoutQuestTypeInput> | QuestsCreateWithoutQuestTypeInput[] | QuestsUncheckedCreateWithoutQuestTypeInput[]
    connectOrCreate?: QuestsCreateOrConnectWithoutQuestTypeInput | QuestsCreateOrConnectWithoutQuestTypeInput[]
    createMany?: QuestsCreateManyQuestTypeInputEnvelope
    connect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
  }

  export type QuestsUpdateManyWithoutQuestTypeNestedInput = {
    create?: XOR<QuestsCreateWithoutQuestTypeInput, QuestsUncheckedCreateWithoutQuestTypeInput> | QuestsCreateWithoutQuestTypeInput[] | QuestsUncheckedCreateWithoutQuestTypeInput[]
    connectOrCreate?: QuestsCreateOrConnectWithoutQuestTypeInput | QuestsCreateOrConnectWithoutQuestTypeInput[]
    upsert?: QuestsUpsertWithWhereUniqueWithoutQuestTypeInput | QuestsUpsertWithWhereUniqueWithoutQuestTypeInput[]
    createMany?: QuestsCreateManyQuestTypeInputEnvelope
    set?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    disconnect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    delete?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    connect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    update?: QuestsUpdateWithWhereUniqueWithoutQuestTypeInput | QuestsUpdateWithWhereUniqueWithoutQuestTypeInput[]
    updateMany?: QuestsUpdateManyWithWhereWithoutQuestTypeInput | QuestsUpdateManyWithWhereWithoutQuestTypeInput[]
    deleteMany?: QuestsScalarWhereInput | QuestsScalarWhereInput[]
  }

  export type QuestsUncheckedUpdateManyWithoutQuestTypeNestedInput = {
    create?: XOR<QuestsCreateWithoutQuestTypeInput, QuestsUncheckedCreateWithoutQuestTypeInput> | QuestsCreateWithoutQuestTypeInput[] | QuestsUncheckedCreateWithoutQuestTypeInput[]
    connectOrCreate?: QuestsCreateOrConnectWithoutQuestTypeInput | QuestsCreateOrConnectWithoutQuestTypeInput[]
    upsert?: QuestsUpsertWithWhereUniqueWithoutQuestTypeInput | QuestsUpsertWithWhereUniqueWithoutQuestTypeInput[]
    createMany?: QuestsCreateManyQuestTypeInputEnvelope
    set?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    disconnect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    delete?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    connect?: QuestsWhereUniqueInput | QuestsWhereUniqueInput[]
    update?: QuestsUpdateWithWhereUniqueWithoutQuestTypeInput | QuestsUpdateWithWhereUniqueWithoutQuestTypeInput[]
    updateMany?: QuestsUpdateManyWithWhereWithoutQuestTypeInput | QuestsUpdateManyWithWhereWithoutQuestTypeInput[]
    deleteMany?: QuestsScalarWhereInput | QuestsScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutQuestsInput = {
    create?: XOR<OrganizationCreateWithoutQuestsInput, OrganizationUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutQuestsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type QuestTypeCreateNestedOneWithoutQuestsInput = {
    create?: XOR<QuestTypeCreateWithoutQuestsInput, QuestTypeUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: QuestTypeCreateOrConnectWithoutQuestsInput
    connect?: QuestTypeWhereUniqueInput
  }

  export type UserQuestCompletionCreateNestedManyWithoutQuestInput = {
    create?: XOR<UserQuestCompletionCreateWithoutQuestInput, UserQuestCompletionUncheckedCreateWithoutQuestInput> | UserQuestCompletionCreateWithoutQuestInput[] | UserQuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCompletionCreateOrConnectWithoutQuestInput | UserQuestCompletionCreateOrConnectWithoutQuestInput[]
    createMany?: UserQuestCompletionCreateManyQuestInputEnvelope
    connect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
  }

  export type UserQuestCompletionUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<UserQuestCompletionCreateWithoutQuestInput, UserQuestCompletionUncheckedCreateWithoutQuestInput> | UserQuestCompletionCreateWithoutQuestInput[] | UserQuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCompletionCreateOrConnectWithoutQuestInput | UserQuestCompletionCreateOrConnectWithoutQuestInput[]
    createMany?: UserQuestCompletionCreateManyQuestInputEnvelope
    connect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutQuestsNestedInput = {
    create?: XOR<OrganizationCreateWithoutQuestsInput, OrganizationUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutQuestsInput
    upsert?: OrganizationUpsertWithoutQuestsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutQuestsInput, OrganizationUpdateWithoutQuestsInput>, OrganizationUncheckedUpdateWithoutQuestsInput>
  }

  export type QuestTypeUpdateOneRequiredWithoutQuestsNestedInput = {
    create?: XOR<QuestTypeCreateWithoutQuestsInput, QuestTypeUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: QuestTypeCreateOrConnectWithoutQuestsInput
    upsert?: QuestTypeUpsertWithoutQuestsInput
    connect?: QuestTypeWhereUniqueInput
    update?: XOR<XOR<QuestTypeUpdateToOneWithWhereWithoutQuestsInput, QuestTypeUpdateWithoutQuestsInput>, QuestTypeUncheckedUpdateWithoutQuestsInput>
  }

  export type UserQuestCompletionUpdateManyWithoutQuestNestedInput = {
    create?: XOR<UserQuestCompletionCreateWithoutQuestInput, UserQuestCompletionUncheckedCreateWithoutQuestInput> | UserQuestCompletionCreateWithoutQuestInput[] | UserQuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCompletionCreateOrConnectWithoutQuestInput | UserQuestCompletionCreateOrConnectWithoutQuestInput[]
    upsert?: UserQuestCompletionUpsertWithWhereUniqueWithoutQuestInput | UserQuestCompletionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: UserQuestCompletionCreateManyQuestInputEnvelope
    set?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    disconnect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    delete?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    connect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    update?: UserQuestCompletionUpdateWithWhereUniqueWithoutQuestInput | UserQuestCompletionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: UserQuestCompletionUpdateManyWithWhereWithoutQuestInput | UserQuestCompletionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: UserQuestCompletionScalarWhereInput | UserQuestCompletionScalarWhereInput[]
  }

  export type UserQuestCompletionUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<UserQuestCompletionCreateWithoutQuestInput, UserQuestCompletionUncheckedCreateWithoutQuestInput> | UserQuestCompletionCreateWithoutQuestInput[] | UserQuestCompletionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCompletionCreateOrConnectWithoutQuestInput | UserQuestCompletionCreateOrConnectWithoutQuestInput[]
    upsert?: UserQuestCompletionUpsertWithWhereUniqueWithoutQuestInput | UserQuestCompletionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: UserQuestCompletionCreateManyQuestInputEnvelope
    set?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    disconnect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    delete?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    connect?: UserQuestCompletionWhereUniqueInput | UserQuestCompletionWhereUniqueInput[]
    update?: UserQuestCompletionUpdateWithWhereUniqueWithoutQuestInput | UserQuestCompletionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: UserQuestCompletionUpdateManyWithWhereWithoutQuestInput | UserQuestCompletionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: UserQuestCompletionScalarWhereInput | UserQuestCompletionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    fid: number
    correlationId: string
    ethAddress: string
    quests?: UserQuestCompletionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    fid: number
    correlationId: string
    ethAddress: string
    quests?: UserQuestCompletionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type QuestsCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    questType: QuestTypeCreateNestedOneWithoutQuestsInput
    userCompletions?: UserQuestCompletionCreateNestedManyWithoutQuestInput
  }

  export type QuestsUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    questTypeId: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userCompletions?: UserQuestCompletionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestsCreateOrConnectWithoutOrganizationInput = {
    where: QuestsWhereUniqueInput
    create: XOR<QuestsCreateWithoutOrganizationInput, QuestsUncheckedCreateWithoutOrganizationInput>
  }

  export type QuestsCreateManyOrganizationInputEnvelope = {
    data: QuestsCreateManyOrganizationInput | QuestsCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    fid?: IntFilter<"User"> | number
    correlationId?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    ethAddress?: StringFilter<"User"> | string
  }

  export type QuestsUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: QuestsWhereUniqueInput
    update: XOR<QuestsUpdateWithoutOrganizationInput, QuestsUncheckedUpdateWithoutOrganizationInput>
    create: XOR<QuestsCreateWithoutOrganizationInput, QuestsUncheckedCreateWithoutOrganizationInput>
  }

  export type QuestsUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: QuestsWhereUniqueInput
    data: XOR<QuestsUpdateWithoutOrganizationInput, QuestsUncheckedUpdateWithoutOrganizationInput>
  }

  export type QuestsUpdateManyWithWhereWithoutOrganizationInput = {
    where: QuestsScalarWhereInput
    data: XOR<QuestsUpdateManyMutationInput, QuestsUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type QuestsScalarWhereInput = {
    AND?: QuestsScalarWhereInput | QuestsScalarWhereInput[]
    OR?: QuestsScalarWhereInput[]
    NOT?: QuestsScalarWhereInput | QuestsScalarWhereInput[]
    id?: StringFilter<"Quests"> | string
    name?: StringFilter<"Quests"> | string
    description?: StringFilter<"Quests"> | string
    image?: StringFilter<"Quests"> | string
    customMetadata?: JsonFilter<"Quests">
    customCallbackMetadata?: JsonFilter<"Quests">
    validationCriteria?: JsonFilter<"Quests">
    organizationId?: StringFilter<"Quests"> | string
    questTypeId?: StringFilter<"Quests"> | string
    startsAt?: DateTimeFilter<"Quests"> | Date | string
    endsAt?: DateTimeFilter<"Quests"> | Date | string
    createdAt?: DateTimeFilter<"Quests"> | Date | string
    updatedAt?: DateTimeFilter<"Quests"> | Date | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    authRedirectUrl: string
    callbackUrl: string
    apiKeyPrefix: string
    apikey: string
    Quests?: QuestsCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    authRedirectUrl: string
    callbackUrl: string
    apiKeyPrefix: string
    apikey: string
    Quests?: QuestsUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type UserQuestCompletionCreateWithoutUserInput = {
    id?: string
    completedAt?: Date | string
    quest: QuestsCreateNestedOneWithoutUserCompletionsInput
  }

  export type UserQuestCompletionUncheckedCreateWithoutUserInput = {
    id?: string
    questId: string
    completedAt?: Date | string
  }

  export type UserQuestCompletionCreateOrConnectWithoutUserInput = {
    where: UserQuestCompletionWhereUniqueInput
    create: XOR<UserQuestCompletionCreateWithoutUserInput, UserQuestCompletionUncheckedCreateWithoutUserInput>
  }

  export type UserQuestCompletionCreateManyUserInputEnvelope = {
    data: UserQuestCompletionCreateManyUserInput | UserQuestCompletionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    authRedirectUrl?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    apiKeyPrefix?: StringFieldUpdateOperationsInput | string
    apikey?: StringFieldUpdateOperationsInput | string
    Quests?: QuestsUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    authRedirectUrl?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    apiKeyPrefix?: StringFieldUpdateOperationsInput | string
    apikey?: StringFieldUpdateOperationsInput | string
    Quests?: QuestsUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserQuestCompletionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQuestCompletionWhereUniqueInput
    update: XOR<UserQuestCompletionUpdateWithoutUserInput, UserQuestCompletionUncheckedUpdateWithoutUserInput>
    create: XOR<UserQuestCompletionCreateWithoutUserInput, UserQuestCompletionUncheckedCreateWithoutUserInput>
  }

  export type UserQuestCompletionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQuestCompletionWhereUniqueInput
    data: XOR<UserQuestCompletionUpdateWithoutUserInput, UserQuestCompletionUncheckedUpdateWithoutUserInput>
  }

  export type UserQuestCompletionUpdateManyWithWhereWithoutUserInput = {
    where: UserQuestCompletionScalarWhereInput
    data: XOR<UserQuestCompletionUpdateManyMutationInput, UserQuestCompletionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserQuestCompletionScalarWhereInput = {
    AND?: UserQuestCompletionScalarWhereInput | UserQuestCompletionScalarWhereInput[]
    OR?: UserQuestCompletionScalarWhereInput[]
    NOT?: UserQuestCompletionScalarWhereInput | UserQuestCompletionScalarWhereInput[]
    id?: StringFilter<"UserQuestCompletion"> | string
    userId?: StringFilter<"UserQuestCompletion"> | string
    questId?: StringFilter<"UserQuestCompletion"> | string
    completedAt?: DateTimeFilter<"UserQuestCompletion"> | Date | string
  }

  export type UserCreateWithoutQuestsInput = {
    id?: string
    fid: number
    correlationId: string
    ethAddress: string
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutQuestsInput = {
    id?: string
    fid: number
    correlationId: string
    organizationId: string
    ethAddress: string
  }

  export type UserCreateOrConnectWithoutQuestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
  }

  export type QuestsCreateWithoutUserCompletionsInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutQuestsInput
    questType: QuestTypeCreateNestedOneWithoutQuestsInput
  }

  export type QuestsUncheckedCreateWithoutUserCompletionsInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    organizationId: string
    questTypeId: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestsCreateOrConnectWithoutUserCompletionsInput = {
    where: QuestsWhereUniqueInput
    create: XOR<QuestsCreateWithoutUserCompletionsInput, QuestsUncheckedCreateWithoutUserCompletionsInput>
  }

  export type UserUpsertWithoutQuestsInput = {
    update: XOR<UserUpdateWithoutQuestsInput, UserUncheckedUpdateWithoutQuestsInput>
    create: XOR<UserCreateWithoutQuestsInput, UserUncheckedCreateWithoutQuestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestsInput, UserUncheckedUpdateWithoutQuestsInput>
  }

  export type UserUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
  }

  export type QuestsUpsertWithoutUserCompletionsInput = {
    update: XOR<QuestsUpdateWithoutUserCompletionsInput, QuestsUncheckedUpdateWithoutUserCompletionsInput>
    create: XOR<QuestsCreateWithoutUserCompletionsInput, QuestsUncheckedCreateWithoutUserCompletionsInput>
    where?: QuestsWhereInput
  }

  export type QuestsUpdateToOneWithWhereWithoutUserCompletionsInput = {
    where?: QuestsWhereInput
    data: XOR<QuestsUpdateWithoutUserCompletionsInput, QuestsUncheckedUpdateWithoutUserCompletionsInput>
  }

  export type QuestsUpdateWithoutUserCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutQuestsNestedInput
    questType?: QuestTypeUpdateOneRequiredWithoutQuestsNestedInput
  }

  export type QuestsUncheckedUpdateWithoutUserCompletionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    questTypeId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestsCreateWithoutQuestTypeInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutQuestsInput
    userCompletions?: UserQuestCompletionCreateNestedManyWithoutQuestInput
  }

  export type QuestsUncheckedCreateWithoutQuestTypeInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    organizationId: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userCompletions?: UserQuestCompletionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestsCreateOrConnectWithoutQuestTypeInput = {
    where: QuestsWhereUniqueInput
    create: XOR<QuestsCreateWithoutQuestTypeInput, QuestsUncheckedCreateWithoutQuestTypeInput>
  }

  export type QuestsCreateManyQuestTypeInputEnvelope = {
    data: QuestsCreateManyQuestTypeInput | QuestsCreateManyQuestTypeInput[]
    skipDuplicates?: boolean
  }

  export type QuestsUpsertWithWhereUniqueWithoutQuestTypeInput = {
    where: QuestsWhereUniqueInput
    update: XOR<QuestsUpdateWithoutQuestTypeInput, QuestsUncheckedUpdateWithoutQuestTypeInput>
    create: XOR<QuestsCreateWithoutQuestTypeInput, QuestsUncheckedCreateWithoutQuestTypeInput>
  }

  export type QuestsUpdateWithWhereUniqueWithoutQuestTypeInput = {
    where: QuestsWhereUniqueInput
    data: XOR<QuestsUpdateWithoutQuestTypeInput, QuestsUncheckedUpdateWithoutQuestTypeInput>
  }

  export type QuestsUpdateManyWithWhereWithoutQuestTypeInput = {
    where: QuestsScalarWhereInput
    data: XOR<QuestsUpdateManyMutationInput, QuestsUncheckedUpdateManyWithoutQuestTypeInput>
  }

  export type OrganizationCreateWithoutQuestsInput = {
    id?: string
    name: string
    authRedirectUrl: string
    callbackUrl: string
    apiKeyPrefix: string
    apikey: string
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutQuestsInput = {
    id?: string
    name: string
    authRedirectUrl: string
    callbackUrl: string
    apiKeyPrefix: string
    apikey: string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutQuestsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutQuestsInput, OrganizationUncheckedCreateWithoutQuestsInput>
  }

  export type QuestTypeCreateWithoutQuestsInput = {
    id?: string
    name: string
    description: string
    type: string
  }

  export type QuestTypeUncheckedCreateWithoutQuestsInput = {
    id?: string
    name: string
    description: string
    type: string
  }

  export type QuestTypeCreateOrConnectWithoutQuestsInput = {
    where: QuestTypeWhereUniqueInput
    create: XOR<QuestTypeCreateWithoutQuestsInput, QuestTypeUncheckedCreateWithoutQuestsInput>
  }

  export type UserQuestCompletionCreateWithoutQuestInput = {
    id?: string
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutQuestsInput
  }

  export type UserQuestCompletionUncheckedCreateWithoutQuestInput = {
    id?: string
    userId: string
    completedAt?: Date | string
  }

  export type UserQuestCompletionCreateOrConnectWithoutQuestInput = {
    where: UserQuestCompletionWhereUniqueInput
    create: XOR<UserQuestCompletionCreateWithoutQuestInput, UserQuestCompletionUncheckedCreateWithoutQuestInput>
  }

  export type UserQuestCompletionCreateManyQuestInputEnvelope = {
    data: UserQuestCompletionCreateManyQuestInput | UserQuestCompletionCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutQuestsInput = {
    update: XOR<OrganizationUpdateWithoutQuestsInput, OrganizationUncheckedUpdateWithoutQuestsInput>
    create: XOR<OrganizationCreateWithoutQuestsInput, OrganizationUncheckedCreateWithoutQuestsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutQuestsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutQuestsInput, OrganizationUncheckedUpdateWithoutQuestsInput>
  }

  export type OrganizationUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    authRedirectUrl?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    apiKeyPrefix?: StringFieldUpdateOperationsInput | string
    apikey?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    authRedirectUrl?: StringFieldUpdateOperationsInput | string
    callbackUrl?: StringFieldUpdateOperationsInput | string
    apiKeyPrefix?: StringFieldUpdateOperationsInput | string
    apikey?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type QuestTypeUpsertWithoutQuestsInput = {
    update: XOR<QuestTypeUpdateWithoutQuestsInput, QuestTypeUncheckedUpdateWithoutQuestsInput>
    create: XOR<QuestTypeCreateWithoutQuestsInput, QuestTypeUncheckedCreateWithoutQuestsInput>
    where?: QuestTypeWhereInput
  }

  export type QuestTypeUpdateToOneWithWhereWithoutQuestsInput = {
    where?: QuestTypeWhereInput
    data: XOR<QuestTypeUpdateWithoutQuestsInput, QuestTypeUncheckedUpdateWithoutQuestsInput>
  }

  export type QuestTypeUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type QuestTypeUncheckedUpdateWithoutQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UserQuestCompletionUpsertWithWhereUniqueWithoutQuestInput = {
    where: UserQuestCompletionWhereUniqueInput
    update: XOR<UserQuestCompletionUpdateWithoutQuestInput, UserQuestCompletionUncheckedUpdateWithoutQuestInput>
    create: XOR<UserQuestCompletionCreateWithoutQuestInput, UserQuestCompletionUncheckedCreateWithoutQuestInput>
  }

  export type UserQuestCompletionUpdateWithWhereUniqueWithoutQuestInput = {
    where: UserQuestCompletionWhereUniqueInput
    data: XOR<UserQuestCompletionUpdateWithoutQuestInput, UserQuestCompletionUncheckedUpdateWithoutQuestInput>
  }

  export type UserQuestCompletionUpdateManyWithWhereWithoutQuestInput = {
    where: UserQuestCompletionScalarWhereInput
    data: XOR<UserQuestCompletionUpdateManyMutationInput, UserQuestCompletionUncheckedUpdateManyWithoutQuestInput>
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    fid: number
    correlationId: string
    ethAddress: string
  }

  export type QuestsCreateManyOrganizationInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    questTypeId: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
    quests?: UserQuestCompletionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
    quests?: UserQuestCompletionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fid?: IntFieldUpdateOperationsInput | number
    correlationId?: StringFieldUpdateOperationsInput | string
    ethAddress?: StringFieldUpdateOperationsInput | string
  }

  export type QuestsUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questType?: QuestTypeUpdateOneRequiredWithoutQuestsNestedInput
    userCompletions?: UserQuestCompletionUpdateManyWithoutQuestNestedInput
  }

  export type QuestsUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    questTypeId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCompletions?: UserQuestCompletionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestsUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    questTypeId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCompletionCreateManyUserInput = {
    id?: string
    questId: string
    completedAt?: Date | string
  }

  export type UserQuestCompletionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quest?: QuestsUpdateOneRequiredWithoutUserCompletionsNestedInput
  }

  export type UserQuestCompletionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCompletionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestsCreateManyQuestTypeInput = {
    id?: string
    name: string
    description: string
    image: string
    customMetadata: JsonNullValueInput | InputJsonValue
    customCallbackMetadata: JsonNullValueInput | InputJsonValue
    validationCriteria: JsonNullValueInput | InputJsonValue
    organizationId: string
    startsAt: Date | string
    endsAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestsUpdateWithoutQuestTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutQuestsNestedInput
    userCompletions?: UserQuestCompletionUpdateManyWithoutQuestNestedInput
  }

  export type QuestsUncheckedUpdateWithoutQuestTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userCompletions?: UserQuestCompletionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestsUncheckedUpdateManyWithoutQuestTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    customMetadata?: JsonNullValueInput | InputJsonValue
    customCallbackMetadata?: JsonNullValueInput | InputJsonValue
    validationCriteria?: JsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCompletionCreateManyQuestInput = {
    id?: string
    userId: string
    completedAt?: Date | string
  }

  export type UserQuestCompletionUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestsNestedInput
  }

  export type UserQuestCompletionUncheckedUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestCompletionUncheckedUpdateManyWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
     */
    export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestTypeCountOutputTypeDefaultArgs instead
     */
    export type QuestTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestsCountOutputTypeDefaultArgs instead
     */
    export type QuestsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganizationDefaultArgs instead
     */
    export type OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganizationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserQuestCompletionDefaultArgs instead
     */
    export type UserQuestCompletionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserQuestCompletionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestTypeDefaultArgs instead
     */
    export type QuestTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestsDefaultArgs instead
     */
    export type QuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}