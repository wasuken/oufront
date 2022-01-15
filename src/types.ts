export type DateTimeRange = {
	begin: Date;
	end: Date;
};

export type OufEvent = {
	title: string;
	description: string;
	// 開催日範囲
	event_date: DateTimeRange;
	// 参加可能日範囲
	participate_date: DateTimeRange;
};

// Profile情報
export type User = {
	email: string;
	display_name: string;
	login: boolean;
};

// 認証時に必要なデータを格納
// JWT保存
export type AuthInfo = {
	token: string;
};

export type Group = {
	// グループ名
	name: string;
	// 主催者名
	orgnizer: string;
	// グループ説明
	description: string;
}

export type EventListProps = {
	list: OufEvent[];
	title: string;
};
export type GroupListProps = {
	list: Group[];
	title: string;
};

export const initialOufEventState: OufEvent = {
	title: "",
	description: "",
	event_date: {
		begin: new Date(),
		end: new Date(),
	},
	participate_date: {
		begin: new Date(),
		end: new Date(),
	},
};

export const initialAuthInfoState: AuthInfo = {
	token: ""
};

// export const initialAuthInfoState: AuthInfo = {
//   email: "",
//   display_name: "",
//   login: false,
// };

export type EventChat = {
  user_id: string;
	user_name: string;
	contents: string;
	created_at: Date;
}

export type EventChatListProps = {
	list: EventChat[];
	title: string;
}
export type EventChatInputProps = {
	user: User;
	title: string;
}
