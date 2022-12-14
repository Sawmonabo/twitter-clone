// Code generated by wunderctl. DO NOT EDIT.

export interface AddTweetInput {
	data: tweets_tweetsCreateInput;
}

export interface tweets_tweetsCreateInput {
	id?: string;
	avatar: string;
	date: string;
	displayName: string;
	image?: string;
	text: string;
	username: string;
	verified: boolean;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}

export interface InternalAddTweetInput {
	data: tweets_tweetsCreateInput;
}

export interface InjectedAddTweetInput {
	data: tweets_tweetsCreateInput;
}

export interface AddTweetResponse {
	data?: AddTweetResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface GetTweetsResponse {
	data?: GetTweetsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface AddTweetResponseData {
	tweets_createOnetweets?: {
		id: string;
		displayName: string;
		username: string;
		verified: boolean;
		text: string;
		avatar: string;
		image?: string;
		date: string;
	};
}

export interface GetTweetsResponseData {
	tweets_findManytweets: {
		id: string;
		displayName: string;
		username: string;
		verified: boolean;
		text: string;
		avatar: string;
		image?: string;
		date: string;
	}[];
}
