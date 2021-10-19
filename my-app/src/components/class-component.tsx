import { Component } from "react";

interface ClassComponentProps {
  name: string;
}

class ClassComponent extends Component<ClassComponentProps> {
  constructor(public props: ClassComponentProps) {
    super(props);
  }

  render() {
    return <div>Functional component: {this.props.name}</div>;
  }
}

export default ClassComponent;
export type { ClassComponentProps };
