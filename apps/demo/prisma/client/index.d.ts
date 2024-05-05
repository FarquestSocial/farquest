
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserQuest
 * 
 */
export type UserQuest = $Result.DefaultSelection<Prisma.$UserQuestPayload>
/**
 * Model Quest
 * 
 */
export type Quest = $Result.DefaultSelection<Prisma.$QuestPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userQuest`: Exposes CRUD operations for the **UserQuest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuests
    * const userQuests = await prisma.userQuest.findMany()
    * ```
    */
  get userQuest(): Prisma.UserQuestDelegate<ExtArgs>;

  /**
   * `prisma.quest`: Exposes CRUD operations for the **Quest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quest.findMany()
    * ```
    */
  get quest(): Prisma.QuestDelegate<ExtArgs>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs>;
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
    User: 'User',
    UserQuest: 'UserQuest',
    Quest: 'Quest',
    Option: 'Option'
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
      modelProps: 'user' | 'userQuest' | 'quest' | 'option'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
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
      UserQuest: {
        payload: Prisma.$UserQuestPayload<ExtArgs>
        fields: Prisma.UserQuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          findFirst: {
            args: Prisma.UserQuestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          findMany: {
            args: Prisma.UserQuestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>[]
          }
          create: {
            args: Prisma.UserQuestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          createMany: {
            args: Prisma.UserQuestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserQuestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          update: {
            args: Prisma.UserQuestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          deleteMany: {
            args: Prisma.UserQuestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserQuestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserQuestPayload>
          }
          aggregate: {
            args: Prisma.UserQuestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserQuest>
          }
          groupBy: {
            args: Prisma.UserQuestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserQuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuestCountArgs<ExtArgs>,
            result: $Utils.Optional<UserQuestCountAggregateOutputType> | number
          }
        }
      }
      Quest: {
        payload: Prisma.$QuestPayload<ExtArgs>
        fields: Prisma.QuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findFirst: {
            args: Prisma.QuestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          findMany: {
            args: Prisma.QuestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>[]
          }
          create: {
            args: Prisma.QuestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          createMany: {
            args: Prisma.QuestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          update: {
            args: Prisma.QuestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          deleteMany: {
            args: Prisma.QuestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestPayload>
          }
          aggregate: {
            args: Prisma.QuestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuest>
          }
          groupBy: {
            args: Prisma.QuestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>,
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userQuests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userQuests?: boolean | UserCountOutputTypeCountUserQuestsArgs
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
  export type UserCountOutputTypeCountUserQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestWhereInput
  }


  /**
   * Count Type QuestCountOutputType
   */

  export type QuestCountOutputType = {
    options: number
    userQuests: number
  }

  export type QuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuestCountOutputTypeCountOptionsArgs
    userQuests?: boolean | QuestCountOutputTypeCountUserQuestsArgs
  }

  // Custom InputTypes
  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestCountOutputType
     */
    select?: QuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }

  /**
   * QuestCountOutputType without action
   */
  export type QuestCountOutputTypeCountUserQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    ethWalletAddress: string | null
    isFarQuestLinked: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    ethWalletAddress: string | null
    isFarQuestLinked: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    ethWalletAddress: number
    isFarQuestLinked: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    ethWalletAddress?: true
    isFarQuestLinked?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    ethWalletAddress?: true
    isFarQuestLinked?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    ethWalletAddress?: true
    isFarQuestLinked?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    ethWalletAddress: string
    isFarQuestLinked: boolean
    _count: UserCountAggregateOutputType | null
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
    ethWalletAddress?: boolean
    isFarQuestLinked?: boolean
    userQuests?: boolean | User$userQuestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    ethWalletAddress?: boolean
    isFarQuestLinked?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userQuests?: boolean | User$userQuestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userQuests: Prisma.$UserQuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ethWalletAddress: string
      isFarQuestLinked: boolean
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

    userQuests<T extends User$userQuestsArgs<ExtArgs> = {}>(args?: Subset<T, User$userQuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly ethWalletAddress: FieldRef<"User", 'String'>
    readonly isFarQuestLinked: FieldRef<"User", 'Boolean'>
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
   * User.userQuests
   */
  export type User$userQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    where?: UserQuestWhereInput
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    cursor?: UserQuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
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
   * Model UserQuest
   */

  export type AggregateUserQuest = {
    _count: UserQuestCountAggregateOutputType | null
    _min: UserQuestMinAggregateOutputType | null
    _max: UserQuestMaxAggregateOutputType | null
  }

  export type UserQuestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questId: string | null
    isDone: boolean | null
    isCorrect: boolean | null
  }

  export type UserQuestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questId: string | null
    isDone: boolean | null
    isCorrect: boolean | null
  }

  export type UserQuestCountAggregateOutputType = {
    id: number
    userId: number
    questId: number
    isDone: number
    isCorrect: number
    _all: number
  }


  export type UserQuestMinAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    isDone?: true
    isCorrect?: true
  }

  export type UserQuestMaxAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    isDone?: true
    isCorrect?: true
  }

  export type UserQuestCountAggregateInputType = {
    id?: true
    userId?: true
    questId?: true
    isDone?: true
    isCorrect?: true
    _all?: true
  }

  export type UserQuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuest to aggregate.
     */
    where?: UserQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuests to fetch.
     */
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuests
    **/
    _count?: true | UserQuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuestMaxAggregateInputType
  }

  export type GetUserQuestAggregateType<T extends UserQuestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuest[P]>
      : GetScalarType<T[P], AggregateUserQuest[P]>
  }




  export type UserQuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestWhereInput
    orderBy?: UserQuestOrderByWithAggregationInput | UserQuestOrderByWithAggregationInput[]
    by: UserQuestScalarFieldEnum[] | UserQuestScalarFieldEnum
    having?: UserQuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuestCountAggregateInputType | true
    _min?: UserQuestMinAggregateInputType
    _max?: UserQuestMaxAggregateInputType
  }

  export type UserQuestGroupByOutputType = {
    id: string
    userId: string
    questId: string
    isDone: boolean
    isCorrect: boolean
    _count: UserQuestCountAggregateOutputType | null
    _min: UserQuestMinAggregateOutputType | null
    _max: UserQuestMaxAggregateOutputType | null
  }

  type GetUserQuestGroupByPayload<T extends UserQuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuestGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuestGroupByOutputType[P]>
        }
      >
    >


  export type UserQuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questId?: boolean
    isDone?: boolean
    isCorrect?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuest"]>

  export type UserQuestSelectScalar = {
    id?: boolean
    userId?: boolean
    questId?: boolean
    isDone?: boolean
    isCorrect?: boolean
  }


  export type UserQuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }


  export type $UserQuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quest: Prisma.$QuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questId: string
      isDone: boolean
      isCorrect: boolean
    }, ExtArgs["result"]["userQuest"]>
    composites: {}
  }


  type UserQuestGetPayload<S extends boolean | null | undefined | UserQuestDefaultArgs> = $Result.GetResult<Prisma.$UserQuestPayload, S>

  type UserQuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserQuestFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: UserQuestCountAggregateInputType | true
    }

  export interface UserQuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuest'], meta: { name: 'UserQuest' } }
    /**
     * Find zero or one UserQuest that matches the filter.
     * @param {UserQuestFindUniqueArgs} args - Arguments to find a UserQuest
     * @example
     * // Get one UserQuest
     * const userQuest = await prisma.userQuest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserQuestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestFindUniqueArgs<ExtArgs>>
    ): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserQuest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserQuestFindUniqueOrThrowArgs} args - Arguments to find a UserQuest
     * @example
     * // Get one UserQuest
     * const userQuest = await prisma.userQuest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserQuestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserQuest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestFindFirstArgs} args - Arguments to find a UserQuest
     * @example
     * // Get one UserQuest
     * const userQuest = await prisma.userQuest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserQuestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestFindFirstArgs<ExtArgs>>
    ): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserQuest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestFindFirstOrThrowArgs} args - Arguments to find a UserQuest
     * @example
     * // Get one UserQuest
     * const userQuest = await prisma.userQuest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserQuestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserQuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuests
     * const userQuests = await prisma.userQuest.findMany()
     * 
     * // Get first 10 UserQuests
     * const userQuests = await prisma.userQuest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuestWithIdOnly = await prisma.userQuest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserQuestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserQuest.
     * @param {UserQuestCreateArgs} args - Arguments to create a UserQuest.
     * @example
     * // Create one UserQuest
     * const UserQuest = await prisma.userQuest.create({
     *   data: {
     *     // ... data to create a UserQuest
     *   }
     * })
     * 
    **/
    create<T extends UserQuestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestCreateArgs<ExtArgs>>
    ): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserQuests.
     *     @param {UserQuestCreateManyArgs} args - Arguments to create many UserQuests.
     *     @example
     *     // Create many UserQuests
     *     const userQuest = await prisma.userQuest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserQuestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserQuest.
     * @param {UserQuestDeleteArgs} args - Arguments to delete one UserQuest.
     * @example
     * // Delete one UserQuest
     * const UserQuest = await prisma.userQuest.delete({
     *   where: {
     *     // ... filter to delete one UserQuest
     *   }
     * })
     * 
    **/
    delete<T extends UserQuestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestDeleteArgs<ExtArgs>>
    ): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserQuest.
     * @param {UserQuestUpdateArgs} args - Arguments to update one UserQuest.
     * @example
     * // Update one UserQuest
     * const userQuest = await prisma.userQuest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserQuestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestUpdateArgs<ExtArgs>>
    ): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserQuests.
     * @param {UserQuestDeleteManyArgs} args - Arguments to filter UserQuests to delete.
     * @example
     * // Delete a few UserQuests
     * const { count } = await prisma.userQuest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserQuestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserQuestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuests
     * const userQuest = await prisma.userQuest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserQuestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserQuest.
     * @param {UserQuestUpsertArgs} args - Arguments to update or create a UserQuest.
     * @example
     * // Update or create a UserQuest
     * const userQuest = await prisma.userQuest.upsert({
     *   create: {
     *     // ... data to create a UserQuest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuest we want to update
     *   }
     * })
    **/
    upsert<T extends UserQuestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserQuestUpsertArgs<ExtArgs>>
    ): Prisma__UserQuestClient<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserQuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestCountArgs} args - Arguments to filter UserQuests to count.
     * @example
     * // Count the number of UserQuests
     * const count = await prisma.userQuest.count({
     *   where: {
     *     // ... the filter for the UserQuests we want to count
     *   }
     * })
    **/
    count<T extends UserQuestCountArgs>(
      args?: Subset<T, UserQuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserQuestAggregateArgs>(args: Subset<T, UserQuestAggregateArgs>): Prisma.PrismaPromise<GetUserQuestAggregateType<T>>

    /**
     * Group by UserQuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestGroupByArgs} args - Group by arguments.
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
      T extends UserQuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuestGroupByArgs['orderBy'] }
        : { orderBy?: UserQuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserQuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuest model
   */
  readonly fields: UserQuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    quest<T extends QuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefaultArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the UserQuest model
   */ 
  interface UserQuestFieldRefs {
    readonly id: FieldRef<"UserQuest", 'String'>
    readonly userId: FieldRef<"UserQuest", 'String'>
    readonly questId: FieldRef<"UserQuest", 'String'>
    readonly isDone: FieldRef<"UserQuest", 'Boolean'>
    readonly isCorrect: FieldRef<"UserQuest", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserQuest findUnique
   */
  export type UserQuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuest to fetch.
     */
    where: UserQuestWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest findUniqueOrThrow
   */
  export type UserQuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuest to fetch.
     */
    where: UserQuestWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest findFirst
   */
  export type UserQuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuest to fetch.
     */
    where?: UserQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuests to fetch.
     */
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuests.
     */
    cursor?: UserQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuests.
     */
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest findFirstOrThrow
   */
  export type UserQuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuest to fetch.
     */
    where?: UserQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuests to fetch.
     */
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuests.
     */
    cursor?: UserQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuests.
     */
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest findMany
   */
  export type UserQuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter, which UserQuests to fetch.
     */
    where?: UserQuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuests to fetch.
     */
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuests.
     */
    cursor?: UserQuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuests.
     */
    skip?: number
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest create
   */
  export type UserQuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuest.
     */
    data: XOR<UserQuestCreateInput, UserQuestUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest createMany
   */
  export type UserQuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuests.
     */
    data: UserQuestCreateManyInput | UserQuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuest update
   */
  export type UserQuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuest.
     */
    data: XOR<UserQuestUpdateInput, UserQuestUncheckedUpdateInput>
    /**
     * Choose, which UserQuest to update.
     */
    where: UserQuestWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest updateMany
   */
  export type UserQuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuests.
     */
    data: XOR<UserQuestUpdateManyMutationInput, UserQuestUncheckedUpdateManyInput>
    /**
     * Filter which UserQuests to update
     */
    where?: UserQuestWhereInput
  }

  /**
   * UserQuest upsert
   */
  export type UserQuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuest to update in case it exists.
     */
    where: UserQuestWhereUniqueInput
    /**
     * In case the UserQuest found by the `where` argument doesn't exist, create a new UserQuest with this data.
     */
    create: XOR<UserQuestCreateInput, UserQuestUncheckedCreateInput>
    /**
     * In case the UserQuest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuestUpdateInput, UserQuestUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest delete
   */
  export type UserQuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    /**
     * Filter which UserQuest to delete.
     */
    where: UserQuestWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserQuest deleteMany
   */
  export type UserQuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuests to delete
     */
    where?: UserQuestWhereInput
  }

  /**
   * UserQuest without action
   */
  export type UserQuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
  }


  /**
   * Model Quest
   */

  export type AggregateQuest = {
    _count: QuestCountAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  export type QuestMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
  }

  export type QuestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
  }

  export type QuestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    _all: number
  }


  export type QuestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
  }

  export type QuestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
  }

  export type QuestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    _all?: true
  }

  export type QuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quest to aggregate.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestWhereUniqueInput
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
    _count?: true | QuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestMaxAggregateInputType
  }

  export type GetQuestAggregateType<T extends QuestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest[P]>
      : GetScalarType<T[P], AggregateQuest[P]>
  }




  export type QuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestWhereInput
    orderBy?: QuestOrderByWithAggregationInput | QuestOrderByWithAggregationInput[]
    by: QuestScalarFieldEnum[] | QuestScalarFieldEnum
    having?: QuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestCountAggregateInputType | true
    _min?: QuestMinAggregateInputType
    _max?: QuestMaxAggregateInputType
  }

  export type QuestGroupByOutputType = {
    id: string
    title: string
    description: string
    image: string
    _count: QuestCountAggregateOutputType | null
    _min: QuestMinAggregateOutputType | null
    _max: QuestMaxAggregateOutputType | null
  }

  type GetQuestGroupByPayload<T extends QuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestGroupByOutputType[P]>
            : GetScalarType<T[P], QuestGroupByOutputType[P]>
        }
      >
    >


  export type QuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    options?: boolean | Quest$optionsArgs<ExtArgs>
    userQuests?: boolean | Quest$userQuestsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest"]>

  export type QuestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
  }


  export type QuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | Quest$optionsArgs<ExtArgs>
    userQuests?: boolean | Quest$userQuestsArgs<ExtArgs>
    _count?: boolean | QuestCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quest"
    objects: {
      options: Prisma.$OptionPayload<ExtArgs>[]
      userQuests: Prisma.$UserQuestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      image: string
    }, ExtArgs["result"]["quest"]>
    composites: {}
  }


  type QuestGetPayload<S extends boolean | null | undefined | QuestDefaultArgs> = $Result.GetResult<Prisma.$QuestPayload, S>

  type QuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: QuestCountAggregateInputType | true
    }

  export interface QuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quest'], meta: { name: 'Quest' } }
    /**
     * Find zero or one Quest that matches the filter.
     * @param {QuestFindUniqueArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuestFindUniqueArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestFindUniqueOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestFindFirstArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindFirstOrThrowArgs} args - Arguments to find a Quest
     * @example
     * // Get one Quest
     * const quest = await prisma.quest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quest.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questWithIdOnly = await prisma.quest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quest.
     * @param {QuestCreateArgs} args - Arguments to create a Quest.
     * @example
     * // Create one Quest
     * const Quest = await prisma.quest.create({
     *   data: {
     *     // ... data to create a Quest
     *   }
     * })
     * 
    **/
    create<T extends QuestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestCreateArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quests.
     *     @param {QuestCreateManyArgs} args - Arguments to create many Quests.
     *     @example
     *     // Create many Quests
     *     const quest = await prisma.quest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quest.
     * @param {QuestDeleteArgs} args - Arguments to delete one Quest.
     * @example
     * // Delete one Quest
     * const Quest = await prisma.quest.delete({
     *   where: {
     *     // ... filter to delete one Quest
     *   }
     * })
     * 
    **/
    delete<T extends QuestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestDeleteArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quest.
     * @param {QuestUpdateArgs} args - Arguments to update one Quest.
     * @example
     * // Update one Quest
     * const quest = await prisma.quest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestUpdateArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quests.
     * @param {QuestDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quest = await prisma.quest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quest.
     * @param {QuestUpsertArgs} args - Arguments to update or create a Quest.
     * @example
     * // Update or create a Quest
     * const quest = await prisma.quest.upsert({
     *   create: {
     *     // ... data to create a Quest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest we want to update
     *   }
     * })
    **/
    upsert<T extends QuestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestUpsertArgs<ExtArgs>>
    ): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quest.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends QuestCountArgs>(
      args?: Subset<T, QuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestAggregateArgs>(args: Subset<T, QuestAggregateArgs>): Prisma.PrismaPromise<GetQuestAggregateType<T>>

    /**
     * Group by Quest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestGroupByArgs} args - Group by arguments.
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
      T extends QuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestGroupByArgs['orderBy'] }
        : { orderBy?: QuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quest model
   */
  readonly fields: QuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    options<T extends Quest$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Quest$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    userQuests<T extends Quest$userQuestsArgs<ExtArgs> = {}>(args?: Subset<T, Quest$userQuestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Quest model
   */ 
  interface QuestFieldRefs {
    readonly id: FieldRef<"Quest", 'String'>
    readonly title: FieldRef<"Quest", 'String'>
    readonly description: FieldRef<"Quest", 'String'>
    readonly image: FieldRef<"Quest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quest findUnique
   */
  export type QuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest findUniqueOrThrow
   */
  export type QuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where: QuestWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest findFirst
   */
  export type QuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
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
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest findFirstOrThrow
   */
  export type QuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quest to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quests.
     */
    cursor?: QuestWhereUniqueInput
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
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest findMany
   */
  export type QuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter, which Quests to fetch.
     */
    where?: QuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quests to fetch.
     */
    orderBy?: QuestOrderByWithRelationInput | QuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quests.
     */
    cursor?: QuestWhereUniqueInput
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
    distinct?: QuestScalarFieldEnum | QuestScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest create
   */
  export type QuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Quest.
     */
    data: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest createMany
   */
  export type QuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quests.
     */
    data: QuestCreateManyInput | QuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quest update
   */
  export type QuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Quest.
     */
    data: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    /**
     * Choose, which Quest to update.
     */
    where: QuestWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest updateMany
   */
  export type QuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quests.
     */
    data: XOR<QuestUpdateManyMutationInput, QuestUncheckedUpdateManyInput>
    /**
     * Filter which Quests to update
     */
    where?: QuestWhereInput
  }

  /**
   * Quest upsert
   */
  export type QuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Quest to update in case it exists.
     */
    where: QuestWhereUniqueInput
    /**
     * In case the Quest found by the `where` argument doesn't exist, create a new Quest with this data.
     */
    create: XOR<QuestCreateInput, QuestUncheckedCreateInput>
    /**
     * In case the Quest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestUpdateInput, QuestUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest delete
   */
  export type QuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
    /**
     * Filter which Quest to delete.
     */
    where: QuestWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Quest deleteMany
   */
  export type QuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quests to delete
     */
    where?: QuestWhereInput
  }

  /**
   * Quest.options
   */
  export type Quest$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Quest.userQuests
   */
  export type Quest$userQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuest
     */
    select?: UserQuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestInclude<ExtArgs> | null
    where?: UserQuestWhereInput
    orderBy?: UserQuestOrderByWithRelationInput | UserQuestOrderByWithRelationInput[]
    cursor?: UserQuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestScalarFieldEnum | UserQuestScalarFieldEnum[]
  }

  /**
   * Quest without action
   */
  export type QuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest
     */
    select?: QuestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionMinAggregateOutputType = {
    id: string | null
    text: string | null
    isCorrect: boolean | null
    questId: string | null
  }

  export type OptionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    isCorrect: boolean | null
    questId: string | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    text: number
    isCorrect: number
    questId: number
    _all: number
  }


  export type OptionMinAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    questId?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    questId?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    text?: true
    isCorrect?: true
    questId?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: string
    text: string
    isCorrect: boolean
    questId: string
    _count: OptionCountAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    questId?: boolean
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    text?: boolean
    isCorrect?: boolean
    questId?: boolean
  }


  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest?: boolean | QuestDefaultArgs<ExtArgs>
  }


  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      quest: Prisma.$QuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      isCorrect: boolean
      questId: string
    }, ExtArgs["result"]["option"]>
    composites: {}
  }


  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Option that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
    **/
    create<T extends OptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OptionCreateArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Options.
     *     @param {OptionCreateManyArgs} args - Arguments to create many Options.
     *     @example
     *     // Create many Options
     *     const option = await prisma.option.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
    **/
    delete<T extends OptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
    **/
    upsert<T extends OptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>
    ): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    quest<T extends QuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestDefaultArgs<ExtArgs>>): Prisma__QuestClient<$Result.GetResult<Prisma.$QuestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Option model
   */ 
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'String'>
    readonly text: FieldRef<"Option", 'String'>
    readonly isCorrect: FieldRef<"Option", 'Boolean'>
    readonly questId: FieldRef<"Option", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    ethWalletAddress: 'ethWalletAddress',
    isFarQuestLinked: 'isFarQuestLinked'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const UserQuestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questId: 'questId',
    isDone: 'isDone',
    isCorrect: 'isCorrect'
  };

  export type UserQuestScalarFieldEnum = (typeof UserQuestScalarFieldEnum)[keyof typeof UserQuestScalarFieldEnum]


  export const QuestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image'
  };

  export type QuestScalarFieldEnum = (typeof QuestScalarFieldEnum)[keyof typeof QuestScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    isCorrect: 'isCorrect',
    questId: 'questId'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    ethWalletAddress?: StringFilter<"User"> | string
    isFarQuestLinked?: BoolFilter<"User"> | boolean
    userQuests?: UserQuestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    ethWalletAddress?: SortOrder
    isFarQuestLinked?: SortOrder
    userQuests?: UserQuestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ethWalletAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    isFarQuestLinked?: BoolFilter<"User"> | boolean
    userQuests?: UserQuestListRelationFilter
  }, "id" | "ethWalletAddress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    ethWalletAddress?: SortOrder
    isFarQuestLinked?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    ethWalletAddress?: StringWithAggregatesFilter<"User"> | string
    isFarQuestLinked?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type UserQuestWhereInput = {
    AND?: UserQuestWhereInput | UserQuestWhereInput[]
    OR?: UserQuestWhereInput[]
    NOT?: UserQuestWhereInput | UserQuestWhereInput[]
    id?: StringFilter<"UserQuest"> | string
    userId?: StringFilter<"UserQuest"> | string
    questId?: StringFilter<"UserQuest"> | string
    isDone?: BoolFilter<"UserQuest"> | boolean
    isCorrect?: BoolFilter<"UserQuest"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    quest?: XOR<QuestRelationFilter, QuestWhereInput>
  }

  export type UserQuestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isDone?: SortOrder
    isCorrect?: SortOrder
    user?: UserOrderByWithRelationInput
    quest?: QuestOrderByWithRelationInput
  }

  export type UserQuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_questId?: UserQuestUserIdQuestIdCompoundUniqueInput
    AND?: UserQuestWhereInput | UserQuestWhereInput[]
    OR?: UserQuestWhereInput[]
    NOT?: UserQuestWhereInput | UserQuestWhereInput[]
    userId?: StringFilter<"UserQuest"> | string
    questId?: StringFilter<"UserQuest"> | string
    isDone?: BoolFilter<"UserQuest"> | boolean
    isCorrect?: BoolFilter<"UserQuest"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    quest?: XOR<QuestRelationFilter, QuestWhereInput>
  }, "id" | "userId_questId">

  export type UserQuestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isDone?: SortOrder
    isCorrect?: SortOrder
    _count?: UserQuestCountOrderByAggregateInput
    _max?: UserQuestMaxOrderByAggregateInput
    _min?: UserQuestMinOrderByAggregateInput
  }

  export type UserQuestScalarWhereWithAggregatesInput = {
    AND?: UserQuestScalarWhereWithAggregatesInput | UserQuestScalarWhereWithAggregatesInput[]
    OR?: UserQuestScalarWhereWithAggregatesInput[]
    NOT?: UserQuestScalarWhereWithAggregatesInput | UserQuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserQuest"> | string
    userId?: StringWithAggregatesFilter<"UserQuest"> | string
    questId?: StringWithAggregatesFilter<"UserQuest"> | string
    isDone?: BoolWithAggregatesFilter<"UserQuest"> | boolean
    isCorrect?: BoolWithAggregatesFilter<"UserQuest"> | boolean
  }

  export type QuestWhereInput = {
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    id?: StringFilter<"Quest"> | string
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    image?: StringFilter<"Quest"> | string
    options?: OptionListRelationFilter
    userQuests?: UserQuestListRelationFilter
  }

  export type QuestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    options?: OptionOrderByRelationAggregateInput
    userQuests?: UserQuestOrderByRelationAggregateInput
  }

  export type QuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestWhereInput | QuestWhereInput[]
    OR?: QuestWhereInput[]
    NOT?: QuestWhereInput | QuestWhereInput[]
    title?: StringFilter<"Quest"> | string
    description?: StringFilter<"Quest"> | string
    image?: StringFilter<"Quest"> | string
    options?: OptionListRelationFilter
    userQuests?: UserQuestListRelationFilter
  }, "id">

  export type QuestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    _count?: QuestCountOrderByAggregateInput
    _max?: QuestMaxOrderByAggregateInput
    _min?: QuestMinOrderByAggregateInput
  }

  export type QuestScalarWhereWithAggregatesInput = {
    AND?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    OR?: QuestScalarWhereWithAggregatesInput[]
    NOT?: QuestScalarWhereWithAggregatesInput | QuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quest"> | string
    title?: StringWithAggregatesFilter<"Quest"> | string
    description?: StringWithAggregatesFilter<"Quest"> | string
    image?: StringWithAggregatesFilter<"Quest"> | string
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: StringFilter<"Option"> | string
    text?: StringFilter<"Option"> | string
    isCorrect?: BoolFilter<"Option"> | boolean
    questId?: StringFilter<"Option"> | string
    quest?: XOR<QuestRelationFilter, QuestWhereInput>
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questId?: SortOrder
    quest?: QuestOrderByWithRelationInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    isCorrect_questId?: OptionIsCorrectQuestIdCompoundUniqueInput
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    text?: StringFilter<"Option"> | string
    isCorrect?: BoolFilter<"Option"> | boolean
    questId?: StringFilter<"Option"> | string
    quest?: XOR<QuestRelationFilter, QuestWhereInput>
  }, "id" | "isCorrect_questId">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questId?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Option"> | string
    text?: StringWithAggregatesFilter<"Option"> | string
    isCorrect?: BoolWithAggregatesFilter<"Option"> | boolean
    questId?: StringWithAggregatesFilter<"Option"> | string
  }

  export type UserCreateInput = {
    id?: string
    ethWalletAddress: string
    isFarQuestLinked?: boolean
    userQuests?: UserQuestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    ethWalletAddress: string
    isFarQuestLinked?: boolean
    userQuests?: UserQuestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ethWalletAddress?: StringFieldUpdateOperationsInput | string
    isFarQuestLinked?: BoolFieldUpdateOperationsInput | boolean
    userQuests?: UserQuestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ethWalletAddress?: StringFieldUpdateOperationsInput | string
    isFarQuestLinked?: BoolFieldUpdateOperationsInput | boolean
    userQuests?: UserQuestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    ethWalletAddress: string
    isFarQuestLinked?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ethWalletAddress?: StringFieldUpdateOperationsInput | string
    isFarQuestLinked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ethWalletAddress?: StringFieldUpdateOperationsInput | string
    isFarQuestLinked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestCreateInput = {
    id?: string
    isDone?: boolean
    isCorrect?: boolean
    user: UserCreateNestedOneWithoutUserQuestsInput
    quest: QuestCreateNestedOneWithoutUserQuestsInput
  }

  export type UserQuestUncheckedCreateInput = {
    id?: string
    userId: string
    questId: string
    isDone?: boolean
    isCorrect?: boolean
  }

  export type UserQuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserQuestsNestedInput
    quest?: QuestUpdateOneRequiredWithoutUserQuestsNestedInput
  }

  export type UserQuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestCreateManyInput = {
    id?: string
    userId: string
    questId: string
    isDone?: boolean
    isCorrect?: boolean
  }

  export type UserQuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    options?: OptionCreateNestedManyWithoutQuestInput
    userQuests?: UserQuestCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    image: string
    options?: OptionUncheckedCreateNestedManyWithoutQuestInput
    userQuests?: UserQuestUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    options?: OptionUpdateManyWithoutQuestNestedInput
    userQuests?: UserQuestUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutQuestNestedInput
    userQuests?: UserQuestUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type QuestCreateManyInput = {
    id?: string
    title: string
    description: string
    image: string
  }

  export type QuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type QuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCreateInput = {
    id?: string
    text: string
    isCorrect: boolean
    quest: QuestCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateInput = {
    id?: string
    text: string
    isCorrect: boolean
    questId: string
  }

  export type OptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    quest?: QuestUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    questId?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCreateManyInput = {
    id?: string
    text: string
    isCorrect: boolean
    questId: string
  }

  export type OptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    questId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserQuestListRelationFilter = {
    every?: UserQuestWhereInput
    some?: UserQuestWhereInput
    none?: UserQuestWhereInput
  }

  export type UserQuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    ethWalletAddress?: SortOrder
    isFarQuestLinked?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    ethWalletAddress?: SortOrder
    isFarQuestLinked?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    ethWalletAddress?: SortOrder
    isFarQuestLinked?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestRelationFilter = {
    is?: QuestWhereInput
    isNot?: QuestWhereInput
  }

  export type UserQuestUserIdQuestIdCompoundUniqueInput = {
    userId: string
    questId: string
  }

  export type UserQuestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isDone?: SortOrder
    isCorrect?: SortOrder
  }

  export type UserQuestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isDone?: SortOrder
    isCorrect?: SortOrder
  }

  export type UserQuestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questId?: SortOrder
    isDone?: SortOrder
    isCorrect?: SortOrder
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type QuestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type QuestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type OptionIsCorrectQuestIdCompoundUniqueInput = {
    isCorrect: boolean
    questId: string
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questId?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questId?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    questId?: SortOrder
  }

  export type UserQuestCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestCreateWithoutUserInput, UserQuestUncheckedCreateWithoutUserInput> | UserQuestCreateWithoutUserInput[] | UserQuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutUserInput | UserQuestCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestCreateManyUserInputEnvelope
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
  }

  export type UserQuestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestCreateWithoutUserInput, UserQuestUncheckedCreateWithoutUserInput> | UserQuestCreateWithoutUserInput[] | UserQuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutUserInput | UserQuestCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestCreateManyUserInputEnvelope
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserQuestUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestCreateWithoutUserInput, UserQuestUncheckedCreateWithoutUserInput> | UserQuestCreateWithoutUserInput[] | UserQuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutUserInput | UserQuestCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestUpsertWithWhereUniqueWithoutUserInput | UserQuestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestCreateManyUserInputEnvelope
    set?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    disconnect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    delete?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    update?: UserQuestUpdateWithWhereUniqueWithoutUserInput | UserQuestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestUpdateManyWithWhereWithoutUserInput | UserQuestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
  }

  export type UserQuestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestCreateWithoutUserInput, UserQuestUncheckedCreateWithoutUserInput> | UserQuestCreateWithoutUserInput[] | UserQuestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutUserInput | UserQuestCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestUpsertWithWhereUniqueWithoutUserInput | UserQuestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestCreateManyUserInputEnvelope
    set?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    disconnect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    delete?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    update?: UserQuestUpdateWithWhereUniqueWithoutUserInput | UserQuestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestUpdateManyWithWhereWithoutUserInput | UserQuestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserQuestsInput = {
    create?: XOR<UserCreateWithoutUserQuestsInput, UserUncheckedCreateWithoutUserQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserQuestsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestCreateNestedOneWithoutUserQuestsInput = {
    create?: XOR<QuestCreateWithoutUserQuestsInput, QuestUncheckedCreateWithoutUserQuestsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutUserQuestsInput
    connect?: QuestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserQuestsNestedInput = {
    create?: XOR<UserCreateWithoutUserQuestsInput, UserUncheckedCreateWithoutUserQuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserQuestsInput
    upsert?: UserUpsertWithoutUserQuestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserQuestsInput, UserUpdateWithoutUserQuestsInput>, UserUncheckedUpdateWithoutUserQuestsInput>
  }

  export type QuestUpdateOneRequiredWithoutUserQuestsNestedInput = {
    create?: XOR<QuestCreateWithoutUserQuestsInput, QuestUncheckedCreateWithoutUserQuestsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutUserQuestsInput
    upsert?: QuestUpsertWithoutUserQuestsInput
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutUserQuestsInput, QuestUpdateWithoutUserQuestsInput>, QuestUncheckedUpdateWithoutUserQuestsInput>
  }

  export type OptionCreateNestedManyWithoutQuestInput = {
    create?: XOR<OptionCreateWithoutQuestInput, OptionUncheckedCreateWithoutQuestInput> | OptionCreateWithoutQuestInput[] | OptionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestInput | OptionCreateOrConnectWithoutQuestInput[]
    createMany?: OptionCreateManyQuestInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type UserQuestCreateNestedManyWithoutQuestInput = {
    create?: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput> | UserQuestCreateWithoutQuestInput[] | UserQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutQuestInput | UserQuestCreateOrConnectWithoutQuestInput[]
    createMany?: UserQuestCreateManyQuestInputEnvelope
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<OptionCreateWithoutQuestInput, OptionUncheckedCreateWithoutQuestInput> | OptionCreateWithoutQuestInput[] | OptionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestInput | OptionCreateOrConnectWithoutQuestInput[]
    createMany?: OptionCreateManyQuestInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type UserQuestUncheckedCreateNestedManyWithoutQuestInput = {
    create?: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput> | UserQuestCreateWithoutQuestInput[] | UserQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutQuestInput | UserQuestCreateOrConnectWithoutQuestInput[]
    createMany?: UserQuestCreateManyQuestInputEnvelope
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
  }

  export type OptionUpdateManyWithoutQuestNestedInput = {
    create?: XOR<OptionCreateWithoutQuestInput, OptionUncheckedCreateWithoutQuestInput> | OptionCreateWithoutQuestInput[] | OptionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestInput | OptionCreateOrConnectWithoutQuestInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestInput | OptionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: OptionCreateManyQuestInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestInput | OptionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestInput | OptionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type UserQuestUpdateManyWithoutQuestNestedInput = {
    create?: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput> | UserQuestCreateWithoutQuestInput[] | UserQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutQuestInput | UserQuestCreateOrConnectWithoutQuestInput[]
    upsert?: UserQuestUpsertWithWhereUniqueWithoutQuestInput | UserQuestUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: UserQuestCreateManyQuestInputEnvelope
    set?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    disconnect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    delete?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    update?: UserQuestUpdateWithWhereUniqueWithoutQuestInput | UserQuestUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: UserQuestUpdateManyWithWhereWithoutQuestInput | UserQuestUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<OptionCreateWithoutQuestInput, OptionUncheckedCreateWithoutQuestInput> | OptionCreateWithoutQuestInput[] | OptionUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestInput | OptionCreateOrConnectWithoutQuestInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestInput | OptionUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: OptionCreateManyQuestInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestInput | OptionUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestInput | OptionUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type UserQuestUncheckedUpdateManyWithoutQuestNestedInput = {
    create?: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput> | UserQuestCreateWithoutQuestInput[] | UserQuestUncheckedCreateWithoutQuestInput[]
    connectOrCreate?: UserQuestCreateOrConnectWithoutQuestInput | UserQuestCreateOrConnectWithoutQuestInput[]
    upsert?: UserQuestUpsertWithWhereUniqueWithoutQuestInput | UserQuestUpsertWithWhereUniqueWithoutQuestInput[]
    createMany?: UserQuestCreateManyQuestInputEnvelope
    set?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    disconnect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    delete?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    connect?: UserQuestWhereUniqueInput | UserQuestWhereUniqueInput[]
    update?: UserQuestUpdateWithWhereUniqueWithoutQuestInput | UserQuestUpdateWithWhereUniqueWithoutQuestInput[]
    updateMany?: UserQuestUpdateManyWithWhereWithoutQuestInput | UserQuestUpdateManyWithWhereWithoutQuestInput[]
    deleteMany?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
  }

  export type QuestCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuestCreateWithoutOptionsInput, QuestUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutOptionsInput
    connect?: QuestWhereUniqueInput
  }

  export type QuestUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuestCreateWithoutOptionsInput, QuestUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestCreateOrConnectWithoutOptionsInput
    upsert?: QuestUpsertWithoutOptionsInput
    connect?: QuestWhereUniqueInput
    update?: XOR<XOR<QuestUpdateToOneWithWhereWithoutOptionsInput, QuestUpdateWithoutOptionsInput>, QuestUncheckedUpdateWithoutOptionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserQuestCreateWithoutUserInput = {
    id?: string
    isDone?: boolean
    isCorrect?: boolean
    quest: QuestCreateNestedOneWithoutUserQuestsInput
  }

  export type UserQuestUncheckedCreateWithoutUserInput = {
    id?: string
    questId: string
    isDone?: boolean
    isCorrect?: boolean
  }

  export type UserQuestCreateOrConnectWithoutUserInput = {
    where: UserQuestWhereUniqueInput
    create: XOR<UserQuestCreateWithoutUserInput, UserQuestUncheckedCreateWithoutUserInput>
  }

  export type UserQuestCreateManyUserInputEnvelope = {
    data: UserQuestCreateManyUserInput | UserQuestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQuestWhereUniqueInput
    update: XOR<UserQuestUpdateWithoutUserInput, UserQuestUncheckedUpdateWithoutUserInput>
    create: XOR<UserQuestCreateWithoutUserInput, UserQuestUncheckedCreateWithoutUserInput>
  }

  export type UserQuestUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQuestWhereUniqueInput
    data: XOR<UserQuestUpdateWithoutUserInput, UserQuestUncheckedUpdateWithoutUserInput>
  }

  export type UserQuestUpdateManyWithWhereWithoutUserInput = {
    where: UserQuestScalarWhereInput
    data: XOR<UserQuestUpdateManyMutationInput, UserQuestUncheckedUpdateManyWithoutUserInput>
  }

  export type UserQuestScalarWhereInput = {
    AND?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
    OR?: UserQuestScalarWhereInput[]
    NOT?: UserQuestScalarWhereInput | UserQuestScalarWhereInput[]
    id?: StringFilter<"UserQuest"> | string
    userId?: StringFilter<"UserQuest"> | string
    questId?: StringFilter<"UserQuest"> | string
    isDone?: BoolFilter<"UserQuest"> | boolean
    isCorrect?: BoolFilter<"UserQuest"> | boolean
  }

  export type UserCreateWithoutUserQuestsInput = {
    id?: string
    ethWalletAddress: string
    isFarQuestLinked?: boolean
  }

  export type UserUncheckedCreateWithoutUserQuestsInput = {
    id?: string
    ethWalletAddress: string
    isFarQuestLinked?: boolean
  }

  export type UserCreateOrConnectWithoutUserQuestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserQuestsInput, UserUncheckedCreateWithoutUserQuestsInput>
  }

  export type QuestCreateWithoutUserQuestsInput = {
    id?: string
    title: string
    description: string
    image: string
    options?: OptionCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateWithoutUserQuestsInput = {
    id?: string
    title: string
    description: string
    image: string
    options?: OptionUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestCreateOrConnectWithoutUserQuestsInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutUserQuestsInput, QuestUncheckedCreateWithoutUserQuestsInput>
  }

  export type UserUpsertWithoutUserQuestsInput = {
    update: XOR<UserUpdateWithoutUserQuestsInput, UserUncheckedUpdateWithoutUserQuestsInput>
    create: XOR<UserCreateWithoutUserQuestsInput, UserUncheckedCreateWithoutUserQuestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserQuestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserQuestsInput, UserUncheckedUpdateWithoutUserQuestsInput>
  }

  export type UserUpdateWithoutUserQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ethWalletAddress?: StringFieldUpdateOperationsInput | string
    isFarQuestLinked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutUserQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ethWalletAddress?: StringFieldUpdateOperationsInput | string
    isFarQuestLinked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestUpsertWithoutUserQuestsInput = {
    update: XOR<QuestUpdateWithoutUserQuestsInput, QuestUncheckedUpdateWithoutUserQuestsInput>
    create: XOR<QuestCreateWithoutUserQuestsInput, QuestUncheckedCreateWithoutUserQuestsInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutUserQuestsInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutUserQuestsInput, QuestUncheckedUpdateWithoutUserQuestsInput>
  }

  export type QuestUpdateWithoutUserQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    options?: OptionUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateWithoutUserQuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type OptionCreateWithoutQuestInput = {
    id?: string
    text: string
    isCorrect: boolean
  }

  export type OptionUncheckedCreateWithoutQuestInput = {
    id?: string
    text: string
    isCorrect: boolean
  }

  export type OptionCreateOrConnectWithoutQuestInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutQuestInput, OptionUncheckedCreateWithoutQuestInput>
  }

  export type OptionCreateManyQuestInputEnvelope = {
    data: OptionCreateManyQuestInput | OptionCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestCreateWithoutQuestInput = {
    id?: string
    isDone?: boolean
    isCorrect?: boolean
    user: UserCreateNestedOneWithoutUserQuestsInput
  }

  export type UserQuestUncheckedCreateWithoutQuestInput = {
    id?: string
    userId: string
    isDone?: boolean
    isCorrect?: boolean
  }

  export type UserQuestCreateOrConnectWithoutQuestInput = {
    where: UserQuestWhereUniqueInput
    create: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput>
  }

  export type UserQuestCreateManyQuestInputEnvelope = {
    data: UserQuestCreateManyQuestInput | UserQuestCreateManyQuestInput[]
    skipDuplicates?: boolean
  }

  export type OptionUpsertWithWhereUniqueWithoutQuestInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutQuestInput, OptionUncheckedUpdateWithoutQuestInput>
    create: XOR<OptionCreateWithoutQuestInput, OptionUncheckedCreateWithoutQuestInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutQuestInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutQuestInput, OptionUncheckedUpdateWithoutQuestInput>
  }

  export type OptionUpdateManyWithWhereWithoutQuestInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutQuestInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: StringFilter<"Option"> | string
    text?: StringFilter<"Option"> | string
    isCorrect?: BoolFilter<"Option"> | boolean
    questId?: StringFilter<"Option"> | string
  }

  export type UserQuestUpsertWithWhereUniqueWithoutQuestInput = {
    where: UserQuestWhereUniqueInput
    update: XOR<UserQuestUpdateWithoutQuestInput, UserQuestUncheckedUpdateWithoutQuestInput>
    create: XOR<UserQuestCreateWithoutQuestInput, UserQuestUncheckedCreateWithoutQuestInput>
  }

  export type UserQuestUpdateWithWhereUniqueWithoutQuestInput = {
    where: UserQuestWhereUniqueInput
    data: XOR<UserQuestUpdateWithoutQuestInput, UserQuestUncheckedUpdateWithoutQuestInput>
  }

  export type UserQuestUpdateManyWithWhereWithoutQuestInput = {
    where: UserQuestScalarWhereInput
    data: XOR<UserQuestUpdateManyMutationInput, UserQuestUncheckedUpdateManyWithoutQuestInput>
  }

  export type QuestCreateWithoutOptionsInput = {
    id?: string
    title: string
    description: string
    image: string
    userQuests?: UserQuestCreateNestedManyWithoutQuestInput
  }

  export type QuestUncheckedCreateWithoutOptionsInput = {
    id?: string
    title: string
    description: string
    image: string
    userQuests?: UserQuestUncheckedCreateNestedManyWithoutQuestInput
  }

  export type QuestCreateOrConnectWithoutOptionsInput = {
    where: QuestWhereUniqueInput
    create: XOR<QuestCreateWithoutOptionsInput, QuestUncheckedCreateWithoutOptionsInput>
  }

  export type QuestUpsertWithoutOptionsInput = {
    update: XOR<QuestUpdateWithoutOptionsInput, QuestUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuestCreateWithoutOptionsInput, QuestUncheckedCreateWithoutOptionsInput>
    where?: QuestWhereInput
  }

  export type QuestUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuestWhereInput
    data: XOR<QuestUpdateWithoutOptionsInput, QuestUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userQuests?: UserQuestUpdateManyWithoutQuestNestedInput
  }

  export type QuestUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userQuests?: UserQuestUncheckedUpdateManyWithoutQuestNestedInput
  }

  export type UserQuestCreateManyUserInput = {
    id?: string
    questId: string
    isDone?: boolean
    isCorrect?: boolean
  }

  export type UserQuestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    quest?: QuestUpdateOneRequiredWithoutUserQuestsNestedInput
  }

  export type UserQuestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questId?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionCreateManyQuestInput = {
    id?: string
    text: string
    isCorrect: boolean
  }

  export type UserQuestCreateManyQuestInput = {
    id?: string
    userId: string
    isDone?: boolean
    isCorrect?: boolean
  }

  export type OptionUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateManyWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserQuestsNestedInput
  }

  export type UserQuestUncheckedUpdateWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestUncheckedUpdateManyWithoutQuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestCountOutputTypeDefaultArgs instead
     */
    export type QuestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserQuestDefaultArgs instead
     */
    export type UserQuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserQuestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestDefaultArgs instead
     */
    export type QuestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionDefaultArgs instead
     */
    export type OptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OptionDefaultArgs<ExtArgs>

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