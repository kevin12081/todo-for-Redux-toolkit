import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TODOData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Define a service using a base URL and expected endpoints
export const todoApiService = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
    getTodoList: builder.query<TODOData, string>({
      query: (id) => `todos/${id}`,
    }),
  }),
});

export const { useGetTodoListQuery } = todoApiService;
