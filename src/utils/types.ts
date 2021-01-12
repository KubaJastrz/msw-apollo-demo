export type Nullable<T> = T | null
export type Optional<T> = T | undefined | null

export type CacheObject<Value, Typename extends string = string> = Value & {__typename: Typename}
