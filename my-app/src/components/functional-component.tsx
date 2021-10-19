interface FunctionalComponentProps {
  name: string;
}
function FunctionalComponent(props: FunctionalComponentProps) {
  return <div>Functional component: {props.name}</div>;
}

export default FunctionalComponent;
export type { FunctionalComponentProps };
