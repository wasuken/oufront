import { atom, selector } from "recoil";
import {
  initialAuthInfoState,
  initialOufEventState,
  DateTimeRange,
  OufEvent,
  User,
  AuthInfo,
} from "../types";

export const eventListState = atom({
  key: "atom/eventList",
  default: [],
});

export const eventDetailState = atom({
  key: "atom/eventDetail",
  default: initialOufEventState,
});

export const authInfoState = atom({
  key: "atom/authInfo",
  default: initialAuthInfoState,
});

export const actionState = atom({
  key: "atom/actionState",
  default: "",
});
