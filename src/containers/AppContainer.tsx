import React from "react";
import { LayoutProps } from "../interfaces";

export default function AppContainer(props: LayoutProps) {
  return (
    <div className="page-wrapper w-full flex flex-row justify-center bg-slate-500">
      <div className="app-wrapper max-w-3xl bg-gray-200">{props.children}</div>
    </div>
  );
}
