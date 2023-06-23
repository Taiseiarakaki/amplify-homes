import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerHome = {
  readonly id: string;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly untitledfield?: string | null;
  readonly password?: string | null;
  readonly number?: number | null;
  readonly part_number?: string | null;
  readonly inventory?: number | null;
  readonly stock_input?: string | null;
  readonly stock_number_input?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly id: string;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly untitledfield?: string | null;
  readonly password?: string | null;
  readonly number?: number | null;
  readonly part_number?: string | null;
  readonly inventory?: number | null;
  readonly stock_input?: string | null;
  readonly stock_number_input?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home, HomeMetaData>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}