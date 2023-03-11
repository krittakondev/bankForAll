function sum(a, b) {
  return a - b;
}

test("testing bro", () => {
  expect(sum(2, 4)).toBe(6);
});
