import { nanoid } from "nanoid";
// import { v4 as uuid } from "uuid";
interface IInputObj {
  followers: number;
  views: number;
  likes: number;
}
interface IOutput {
  label: string;
  number: number;
  id: string;
}

export default function objectDisturction(object: IInputObj): IOutput[] {
  const arrOfkeys = Object.keys(object);
  const arrOfValues = Object.values(object);
  const arrOfObj = arrOfkeys.map((key, idx) => {
    const obj: IOutput = { label: "", number: 0, id: "" };
    obj.label = key;
    obj.number = arrOfValues[idx];
    obj.id = nanoid();

    return obj;
  });

  return arrOfObj;
}
