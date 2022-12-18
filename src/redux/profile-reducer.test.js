import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer"

let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "a,sflaskf", likesCount: 11 },
        { id: 4, message: "qwrqwl", likesCount: 11 }
    ]
}

it('Length of posts should be incremented', () => {
    let action = addPostActionCreator("Margulan is text")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})

it('Message of new post should be correct', () => {
    let action = addPostActionCreator("Margulan is text")

    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe("Margulan is text")    
})

it('After deleting, length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)    
})

it('After deleting, length of messages should not change if id is incorrect', () => {
    let action = deletePost(10000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)    
})