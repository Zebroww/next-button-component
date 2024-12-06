import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button"; 

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

export const Flavours: StoryFn<typeof Button> = () => (
  <div>
    <h3>Flavours</h3>
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button flavour="primary" size="medium" roundness="base">Primary</Button>
      <Button flavour="success" size="medium" roundness="base">Success</Button>
      <Button flavour="warning" size="medium" roundness="base">Warning</Button>
      <Button flavour="danger" size="medium" roundness="base">Danger</Button>
      <Button flavour="inverse" size="medium" roundness="base">Inverse</Button>
      <Button flavour="purple" size="medium" roundness="base">Purple</Button>
    </div>
  </div>
);
export const Sizes: StoryFn<typeof Button> = () => (
  <div>
    <h3>Sizes</h3>
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button flavour="primary" size="small" roundness="base">Small</Button>
      <Button flavour="primary" size="medium" roundness="base">Medium</Button>
      <Button flavour="primary" size="large" roundness="base">Large</Button>
      <Button flavour="primary" size="extraLarge" roundness="base">Extra Large</Button>
    </div>
  </div>
);
export const Roundness: StoryFn<typeof Button> = () => (
  <div>
    <h3>Roundness</h3>
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button flavour="primary" size="medium" roundness="square">Square</Button>
      <Button flavour="primary" size="medium" roundness="small">Small</Button>
      <Button flavour="primary" size="medium" roundness="base">Base</Button>
      <Button flavour="primary" size="medium" roundness="medium">Medium</Button>
      <Button flavour="primary" size="medium" roundness="large">Large</Button>
      <Button flavour="primary" size="medium" roundness="xl">XL</Button>
      <Button flavour="primary" size="medium" roundness="2xl">2XL</Button>
      <Button flavour="primary" size="medium" roundness="circular">Circular</Button>
    </div>
  </div>
);

