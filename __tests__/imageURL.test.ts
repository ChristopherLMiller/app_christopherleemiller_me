import { imageURL } from "utils/functions";

test("Returns image URL string with all defaults", () => {
  expect(imageURL()).toBe(
    `https://res.cloudinary.com/christopherleemiller/image/upload/clm_me/assets/default`
  );
});

test("Returns image URL with defaults except image", () => {
  expect(imageURL("clm_me/img_test")).toBe(
    `https://res.cloudinary.com/christopherleemiller/image/upload/clm_me/img_test`
  );
});

test("Returns default image URL with width and height specified as options", () => {
  expect(imageURL("default", { w: 300, h: 500 })).toBe(
    `https://res.cloudinary.com/christopherleemiller/image/upload/w_300,h_500/clm_me/assets/default`
  );
});

test("Returns image URL with width and height specified as options", () => {
  expect(imageURL("clm_me/img_test", { w: 300, h: 500 })).toBe(
    `https://res.cloudinary.com/christopherleemiller/image/upload/w_300,h_500/clm_me/img_test`
  );
});
