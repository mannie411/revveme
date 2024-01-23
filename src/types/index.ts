import { NextPage } from "next";
import {
  ComponentType,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

export interface ComponentProps extends PropsWithChildren {
  className?: string;
}

export type LinkProps = { path: string; label: string };
