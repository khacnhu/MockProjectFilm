import { configureStore } from '@reduxjs/toolkit'
// ...
import rdcCount from './Reducer/rdcCount'
import rdcUser from './Reducer/rdcUser'

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    user: rdcUser,
    counter: rdcCount,
    // product: rdcProdcut
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch