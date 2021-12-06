import React, { ElementType, ReactElement, ReactNode } from "react";
import { GoogleLogoComponent } from "./components";

//TODO: Создайте компонент ComponentWithChild
// который будет принимать потомков и отображать внутри div
class ComponentWithChild extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

//TODO: Создайте компонент ComponentWithRenders
// который будет принимать renderFunc и RenderComponent

interface IComponentWithRenders {
  elem: ReactElement;
  func: JSX.Element;
}
class TestComponent extends React.Component {
  render() {
    return "123";
  }
}
const RenderComponent: React.FC = (props) => {
  return (
    <div>
      <TestComponent />
    </div>
  );
};
const ComponentWithRenders: React.FC<IComponentWithRenders> = (props) => {
  return (
    <div>
      {props.elem}
      {props.func}
    </div>
  );
};

const renderFunc = () => <div>renderFunc</div>;

//TODO: Добавьте component RenderAll
interface RendAll {
  timer: number;
}

export const RenderAll: React.FC<RendAll> = (props) => {
  return (
    <div>
      <ComponentWithChild children="Children" />
      <ComponentWithRenders func={renderFunc()} elem={<RenderComponent />} />
      <div>{props.timer}</div>
    </div>
  );
};

// Добавьте prop timer и выведите его
