// frontend/src/api/client.ts

import { hc } from "hono/client";

import type { AppType } from '../../../backend/src/index';
// これはダサい。
// backendという名前の独立したnpm packageを作った上で
// from '@backend";
// と書くべきだ。それはわかっているがあとでやる。

import type {
    GetUsersQuery,
    GetUsersResponse,
    CreateUserRequest,
    CreateUserResponse,
    ErrorResponse,
} from "../../../shared/src/schema";
// from `@shared/schema` と書きたいところだが、あとでやる

// Hono RPCクライアントを作成
const client = hc<AppType>("http://localhost:3000/api");

// ユーザー一覧を取得する関数
export const getUsers = async (query?: GetUsersQuery): Promise<GetUsersResponse> => {
    const response = await client.users.$get({
        query: {
            page: query?.page || "1",
            limit: query?.limit || "20",
        },
    });
    if (!response.ok) {
        throw new Error("ユーザー一覧の取得に失敗しました");
    }
    return await response.json();
};

// ユーザーを作成する関数
export const createUser = async (data: CreateUserRequest): Promise<CreateUserResponse> => {
    const response = await client.users.$post({
        json: data,
    });
    if (!response.ok) {
        const eRes: ErrorResponse = await response.json();
        throw new Error(eRes.error.message || "ユーザーの作成に失敗しました");
    }
    return await response.json();
};

// 新規にユーザを一つ作成し、そのあとで一覧を取得し、consoleに表示する
const res1 = await createUser({
    name: "kazurayam",
    email: "kazurayam@example.com"
})
console.log(res1)

const res2 = await getUsers()
console.log(res2)
