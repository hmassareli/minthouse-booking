import { atom } from "jotai";
import { PrimitiveAtom } from "jotai/vanilla";

export const createPropertyAtom = (
  baseAtom: PrimitiveAtom<any>,
  propertyName: string
): PrimitiveAtom<any> =>
  atom(
    (get) => get(baseAtom)[propertyName],
    (get, set, newValue) => {
      const baseValue = get(baseAtom);
      set(baseAtom, { ...baseValue, [propertyName]: newValue });
    }
  );
