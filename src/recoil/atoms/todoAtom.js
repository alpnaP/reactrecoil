import { atom } from "recoil";

// To create an atom. An atom in Recoil is simply an isolated piece of memory that holds data.

export const todoListAtom = atom({
  key: "todoListState",
  default: [],
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((e) => {
        console.debug("Current Tasks", e);
      });
    },
  ],
});
