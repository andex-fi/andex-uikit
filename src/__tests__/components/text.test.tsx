import React from "react";
import { renderWithProvider } from "../../testHelpers";
import Text from "../../components/Text/Text";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Text>pancake</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      color: #280D5F;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }

    <div
        class="c0"
        color="text"
      >
        pancake
      </div>
    </DocumentFragment>
  `);
});
