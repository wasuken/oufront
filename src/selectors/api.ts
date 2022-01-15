import { selector } from "recoil";
import { OufEvent, User, AuthInfo, initialAuthInfoState } from "../types";
import {
  actionState,
  authInfoState,
  eventListState,
  eventDetailState,
} from "../atoms/api";
import axios from "axios";

// ログイン
export const fetchChallangeLoginAuthInfoState = selector<AutuInfo>({
  key: "selector/fetchChallengeLoginState",
  set: ({ set }, email: string, password: string) => {
    const formData = {
      email,
      password,
    };
    axios
    .post(`/api/login`, formData)
    .then((res) => set(authInfoState, { ...res.data, login: true }));
  },
});

// TODO: ユーザ登録

// イベント一覧
export const fetchEventListState = selector<OufEvent[]>({
  key: "selector/fetchEventListState",
  set: ({ set }, token: string | undefined) => {
    let config = {
      headers: {},
    };
    if (token) config.headers.Authorization = token;
    axios
    .get(`/api/events`, config)
    .then((res) => set(eventListState, res.data));
  },
});

// イベント情報取得
export const fetchEventDetailState = selector<OufEvent>({
  key: "selector/fetchEventListState",
  set: ({ set }, token: string | undefined, event_id: string) => {
    let config = {
      headers: {},
    };
    if (token) config.headers.Authorization = token;
    axios
    .get(`/api/event/${event_id}`, config)
    .then((res) => set(eventListState, res.data));
  },
});

const BaseActions = {
  Create: "登録",
  Read: "取得",
  Update: "更新",
  Delete: "削除",
},

// TODO: 既存ライブラリで管理すべき
const ActionMessageMap = {
  Event: {
    Name: "イベント",
    Failed: "失敗",
    Success: "成功",
    Actions: BaseActions,
    Participate: {
      Name: "参加",
      Actions: BaseActions,
    },
    List: {
      Name: "一覧",
      Actions: BaseActions,
    },
    Detail: {
      Name: "詳細",
      Actions: BaseActions,
    },
  },
  User: {
    Name: "ユーザ",
    Failed: "失敗",
    Success: "成功",
    Profile: {
      Name: "プロフィール"
    },
    Actions: {
      Login: "ログイン",
      Logout: "ログアウト",
      Register: "登録",
    }
  },
}

type FetchParticipateEventResponse = {
  status: number;
  msg: string;
  event: OufEvent;
}

// イベント参加
export const fetchParticipateEventState = selector<OufEvent>({
  key: "selector/fetchParticipateEventState",
  set: ({ set }, token: string, event_id: string) => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const data = {
      event_id
    }
    axios
    .post<FetchParticipateEventResponse>(`/api/event/`, data,  config)
    .then((res) => {
	  console.log(res);
	  set(actionState, `${res.event.title} に参加しました。`)
	});
  },
});

// イベントチャット送信

// イベントチャット取得
