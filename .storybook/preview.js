import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { Box } from "@chakra-ui/react";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
// import "@storybook/addon-console";
import { withConsole } from "@storybook/addon-console";

// addDecorator((story) => <Center>{story()}</Center>); // 전역적으로 decorator

// addDecorator((story) => (
//   <ThemeProvider theme={theme}>
//     <CSSReset />
//     {story()}
//   </ThemeProvider>
// ));
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    // hierarchy sort
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m="4">
        <Story />
      </Box>
    </ThemeProvider>
  ),
];
