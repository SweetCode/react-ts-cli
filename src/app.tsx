import * as React from "react";

interface HelloProps { compiler: string; framework: string; }

export default (props: HelloProps) => <h1>Hello world!</h1>;