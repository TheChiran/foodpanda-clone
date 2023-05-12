import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import City from "./Index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "App Components/City Card",
  component: City,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "This prop identifies city"
    },
    imgUrl: {
      description: "Url for dynamic image"
    },
    urlPathName: {
      description:
        "Pathname for city, if null / empty it will take lower cased name of city"
    }
  },
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    }
  ]
} satisfies Meta<typeof City>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithoutOptionalProps: Story = {
  args: {
    name: "Dhaka"
  }
};

export const WithImgUrlProp: Story = {
  args: {
    name: "Sylhet",
    imgUrl:
      "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
};

export const WithUrlPathNameProp: Story = {
  args: {
    name: "Jessor",
    urlPathName: "test-pathname"
  }
};

export const WithAllProp: Story = {
  args: {
    name: "Khulna",
    urlPathName: "test-pathname",
    imgUrl:
      "https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
};
