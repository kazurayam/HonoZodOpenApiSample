## clientを起動する

```
$ bun run client
```

すると

```
$ bun run --hot src/api/client.ts
{
  success: true,
  data: {
    id: "user_1767441467266",
    name: "kazurayam",
    email: "kazurayam@example.com",
    createdAt: "2026-01-03T11:57:47.266Z",
  },
}
{
  success: true,
  data: [
    {
      id: "user_123",
      name: "山田太郎",
      email: "yamada@example.com",
      createdAt: "2025-01-01T00:00:00Z",
    }, {
      id: "user_456",
      name: "佐藤花子",
      email: "sato@example.com",
      createdAt: "2025-01-02T00:00:00Z",
    }
  ],
  pagination: {
    page: 1,
    limit: 20,
    total: 100,
  },
}
```

Ctrl+Cで終了する


