import { Button } from "../components/Button";

export default {
  component: Button,
};

export const main = {
  args: {
    text: "Button Text Example",
    onClick: () => alert("Test Click"),
  },
};
